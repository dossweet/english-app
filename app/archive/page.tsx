'use client';

import { useState, useEffect } from 'react';
import { expressions, categories, type Expression } from '@/data/expressions';

export default function ArchivePage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [learned, setLearned] = useState<number[]>([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('english-favorites');
    if (stored) setFavorites(JSON.parse(stored));
    const learnedStored = localStorage.getItem('english-learned');
    if (learnedStored) setLearned(JSON.parse(learnedStored));
    const dark = localStorage.getItem('english-dark');
    if (dark === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('english-dark', String(newDark));
  };

  const favoriteExpressions = expressions.filter(e => favorites.includes(e.id));
  const learnedExpressions = expressions.filter(e => learned.includes(e.id));
  const remainingExpressions = expressions.filter(e => !learned.includes(e.id));

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const ExpressionRow = ({ expr }: { expr: Expression }) => {
    const cat = categories.find(c => c.id === expr.category);
    return (
      <div 
        className="flex items-center justify-between p-4 rounded-xl"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <div className="flex-1 min-w-0">
          <p className="font-medium truncate" style={{ color: 'var(--text)' }}>
            {expr.english}
          </p>
          <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>
            {expr.chinese}
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="ipa text-xs">{expr.ipa}</span>
          <button
            onClick={() => speak(expr.english)}
            className="text-xl"
            title="发音"
          >
            🔊
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>📦 学习存档</h1>
        <button onClick={toggleDark} className="text-2xl">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div 
          className="rounded-xl p-4 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-3xl font-bold" style={{ color: 'var(--primary)' }}>{learned.length}</p>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>已学习</p>
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
            ✅ 已学习的表达
          </h2>
          <div className="space-y-2">
            {learnedExpressions.map(expr => (
              <ExpressionRow key={expr.id} expr={expr} />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {learnedExpressions.length === 0 && favoriteExpressions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-5xl mb-4">📚</p>
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--text)' }}>
            还没有学习记录
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            去首页开始学习吧！点击卡片展开就算学习了。
          </p>
        </div>
      )}
    </div>
  );
}
