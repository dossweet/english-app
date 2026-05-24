'use client';

import { useState, useEffect } from 'react';
import { expressions, categories, type Expression } from '@/data/expressions';

export default function ArchivePage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [allLearnedIds, setAllLearnedIds] = useState<number[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('english-favorites');
    if (stored) setFavorites(JSON.parse(stored));

    const dark = localStorage.getItem('english-dark');
    if (dark === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // 收集所有日期的学习记录
    const learnedIds: number[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('english-learned-') && key.length === 'english-learned-YYYY-MM-DD'.length) {
        try {
          const data = JSON.parse(localStorage.getItem(key)!);
          if (Array.isArray(data)) {
            data.forEach((id: number) => {
              if (!learnedIds.includes(id)) learnedIds.push(id);
            });
          }
        } catch {}
      }
    }
    setAllLearnedIds(learnedIds);
    setIsLoading(false);
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('english-dark', String(newDark));
  };

  const favoriteExpressions = expressions.filter(e => favorites.includes(e.id));
  const learnedExpressions = expressions.filter(e => allLearnedIds.includes(e.id));
  const remainingExpressions = expressions.filter(e => !allLearnedIds.includes(e.id));

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const ExpressionRow = ({ expr }: { expr: Expression }) => {
    const cat = categories.find((c: any) => c.id === expr.category);
    return (
      <div 
        className="flex items-center justify-between p-4 rounded-xl"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span 
              className="text-xs px-2 py-0.5 rounded-full text-white"
              style={{ 
                background: 
                  expr.category === 'smalltalk' ? '#6366F1' :
                  expr.category === 'business' ? '#F59E0B' :
                  expr.category === 'slang' ? '#10B981' : '#EF4444'
              }}
            >
              {cat?.label || expr.category}
            </span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
              #{expr.id}
            </span>
          </div>
          <p className="font-medium truncate mt-1" style={{ color: 'var(--text)' }}>
            {expr.english}
          </p>
          <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>
            {expr.chinese}
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          <span className="ipa text-xs">{expr.ipa}</span>
          <button
            onClick={() => speak(expr.english)}
            className="text-xl"
            title="发音"
          >
            🔊
          </button>
          {favorites.includes(expr.id) && <span>❤️</span>}
        </div>
      </div>
    );
  };

  if (isLoading) return null;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>📦 全部词库</h1>
        <button onClick={toggleDark} className="text-2xl">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div 
          className="rounded-xl p-4 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>{expressions.length}</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>总词条</p>
        </div>
        <div 
          className="rounded-xl p-4 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-3xl font-bold" style={{ color: '#10B981' }}>{learnedExpressions.length}</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>已掌握</p>
        </div>
        <div 
          className="rounded-xl p-4 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-3xl font-bold" style={{ color: '#EF4444' }}>{favorites.length}</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>收藏</p>
        </div>
        <div 
          className="rounded-xl p-4 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-3xl font-bold" style={{ color: '#F59E0B' }}>{remainingExpressions.length}</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>待学习</p>
        </div>
      </div>

      {/* Favorites */}
      {favoriteExpressions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
            ❤️ 收藏的表达
          </h2>
          <div className="space-y-2">
            {favoriteExpressions.map(expr => (
              <ExpressionRow key={expr.id} expr={expr} />
            ))}
          </div>
        </div>
      )}

      {/* Learned */}
      {learnedExpressions.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
            ✅ 已掌握（{learnedExpressions.length}）
          </h2>
          <div className="space-y-2">
            {learnedExpressions
              .sort((a, b) => a.id - b.id)
              .map(expr => (
                <ExpressionRow key={expr.id} expr={expr} />
              ))}
          </div>
        </div>
      )}

      {/* Remaining */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
          📖 待学习（{remainingExpressions.length}）
        </h2>
        <div className="space-y-2">
          {remainingExpressions
            .sort((a, b) => a.id - b.id)
            .map(expr => (
              <ExpressionRow key={expr.id} expr={expr} />
            ))}
        </div>
      </div>

      {/* Empty State */}
      {expressions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-5xl mb-4">📚</p>
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--text)' }}>
            还没有词条
          </p>
        </div>
      )}
    </div>
  );
}
