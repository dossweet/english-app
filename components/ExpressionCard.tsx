'use client';

import { useState, useEffect } from 'react';
import { expressions, categories, type Expression } from '@/data/expressions';
import { getTodaysIds, getTodayKey, DAILY_COUNT } from '@/lib/daily';

function CategoryBadge({ tag }: { tag: string }) {
  return (
    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700" style={{ color: 'var(--text-muted)' }}>
      {tag}
    </span>
  );
}

function HeartButton({ 
  id, 
  isFavorited, 
  onToggle 
}: { 
  id: number; 
  isFavorited: boolean; 
  onToggle: (id: number) => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle(id);
      }}
      className="text-2xl transition-transform active:scale-90"
      style={{ animation: isFavorited ? 'heartPop 0.3s ease-out' : 'none' }}
    >
      {isFavorited ? '❤️' : '🤍'}
    </button>
  );
}

function ExpressionCard({ 
  expression, 
  isExpanded, 
  onToggle,
  isFavorited,
  onToggleFavorite
}: { 
  expression: Expression;
  isExpanded: boolean;
  onToggle: () => void;
  isFavorited: boolean;
  onToggleFavorite: () => void;
}) {
  const [speakText, setSpeakText] = useState('');
  const [showTip, setShowTip] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const categoryColor: Record<string, string> = {
    smalltalk: '#6366F1',
    business: '#F59E0B',
    slang: '#10B981',
    travel: '#EF4444',
  };

  return (
    <div 
      className="card-hover rounded-2xl border cursor-pointer animate-fade-in"
      style={{ 
        background: 'var(--card)',
        borderColor: 'var(--border)',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}
      onClick={onToggle}
    >
      {/* Header */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text)' }}>
              {expression.english}
            </h3>
            <p className="text-base mb-3" style={{ color: 'var(--text-muted)' }}>
              {expression.chinese}
            </p>
            
            {/* IPA + Speak */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="ipa">{expression.ipa}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speak(expression.english);
                }}
                className="text-sm px-3 py-1 rounded-lg transition"
                style={{ 
                  background: 'var(--primary)',
                  color: 'white',
                  opacity: 0.9
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                🔊 发音
              </button>
            </div>

            {/* Tags */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {expression.tags.map(tag => (
                <CategoryBadge key={tag} tag={tag} />
              ))}
              <span 
                className="text-xs px-2 py-0.5 rounded-full text-white"
                style={{ background: categoryColor[expression.category] }}
              >
                {categories.find((c: any) => c.id === expression.category)?.label}
              </span>
            </div>
          </div>
          <HeartButton 
            id={expression.id} 
            isFavorited={isFavorited} 
            onToggle={onToggleFavorite}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t" style={{ borderColor: 'var(--border)' }}>
          {/* Pronunciation Tip */}
          <div className="mt-4 p-3 rounded-xl" style={{ background: 'rgba(99, 102, 241, 0.08)' }}>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--primary)' }}>
              🎯 发音技巧
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {expression.pronunciationTips}
            </p>
          </div>

          {/* Examples */}
          <div className="mt-4 space-y-3">
            <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
              📝 例句
            </p>
            {expression.examples.map((ex, i) => (
              <div key={i} className="p-3 rounded-xl" style={{ background: 'var(--bg)' }}>
                <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                  {ex.english}
                </p>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                  {ex.chinese}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speak(ex.english);
                  }}
                  className="text-xs mt-2 px-2 py-1 rounded transition"
                  style={{ 
                    background: 'var(--primary)',
                    color: 'white',
                    opacity: 0.8
                  }}
                >
                  🔊 听
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expand indicator */}
      <div className="px-5 pb-3 flex justify-center">
        <span style={{ color: 'var(--text-muted)' }}>
          {isExpanded ? '▲ 点击收起' : '▼ 点击展开'}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [learnedCount, setLearnedCount] = useState(0);
  const [todayLearned, setTodayLearned] = useState<number[]>([]);
  const [isDark, setIsDark] = useState(false);
  const [showRedDot, setShowRedDot] = useState(false);
  const [todaysIds, setTodaysIds] = useState<number[]>([]);
  const [dateKey, setDateKey] = useState('');

  // 计算今日词条——放在 state 里确保 hydration 一致
  const todayDate = new Date().toLocaleDateString('zh-CN', { month: 'long', day: 'numeric' });

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('english-favorites');
    if (stored) setFavorites(JSON.parse(stored));
    const dark = localStorage.getItem('english-dark');
    if (dark === 'true') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // 计算今日词条 ID（仅客户端执行）
    const ids = getTodaysIds(expressions.length);
    setTodaysIds(ids);
    const todayKey = getTodayKey();
    setDateKey(todayKey);

    // 加载今日学习记录
    const todayLearnedKey = `english-learned-${todayKey}`;
    const todayLearnedStored = localStorage.getItem(todayLearnedKey);
    if (todayLearnedStored) {
      const parsed = JSON.parse(todayLearnedStored);
      setTodayLearned(parsed);
      setLearnedCount(parsed.length);
    } else {
      setTodayLearned([]);
      setLearnedCount(0);
    }

    // 红点：今日任务未完成
    setShowRedDot(true);
    const storedCount = localStorage.getItem(todayLearnedKey);
    if (storedCount) {
      const parsed = JSON.parse(storedCount);
      if (parsed.length >= DAILY_COUNT) {
        setShowRedDot(false);
      }
    }
  }, []);

  // 今日展示的词条
  const todaysExpressions = todaysIds
    .map(id => expressions.find(e => e.id === id))
    .filter((e): e is Expression => e !== undefined);

  // 按分类过滤
  const filtered = activeCategory === 'all' 
    ? todaysExpressions 
    : todaysExpressions.filter(e => e.category === activeCategory);

  const toggleFavorite = (id: number) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem('english-favorites', JSON.stringify(newFavorites));
  };

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }

    // 标记为已学
    if (!todayLearned.includes(id)) {
      const newLearned = [...todayLearned, id];
      setTodayLearned(newLearned);
      const newCount = newLearned.length;
      setLearnedCount(newCount);
      localStorage.setItem(dateKey, JSON.stringify(newLearned));
      localStorage.setItem('english-learned-count', newCount.toString());
      setShowRedDot(newCount < DAILY_COUNT);
    }
    setExpandedId(id);
  };

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('english-dark', String(newDark));
  };

  const progress = Math.round((learnedCount / DAILY_COUNT) * 100);

  return (
    <div>
      {/* Progress Header */}
      <div className="mb-8 p-5 rounded-2xl" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{todayDate}</p>
            <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>今日推荐</h2>
          </div>
          <button
            onClick={toggleDark}
            className="text-2xl relative"
            title={isDark ? '切换日间模式' : '切换夜间模式'}
          >
            {isDark ? '☀️' : '🌙'}
            {showRedDot && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
            )}
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: 'var(--text-muted)' }}>学习进度</span>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{progress}%</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${progress}%`, 
                background: 'linear-gradient(90deg, #6366F1, #818CF8)' 
              }}
            />
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
            今日已学 {learnedCount} / {DAILY_COUNT} 个表达
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((cat: any) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
            style={{
              background: activeCategory === cat.id ? 'var(--primary)' : 'var(--card)',
              color: activeCategory === cat.id ? 'white' : 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Expression Cards */}
      <div className="space-y-4">
        {filtered.map(expression => (
          <ExpressionCard
            key={expression.id}
            expression={expression}
            isExpanded={expandedId === expression.id}
            onToggle={() => toggleExpand(expression.id)}
            isFavorited={favorites.includes(expression.id)}
            onToggleFavorite={() => toggleFavorite(expression.id)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-4xl mb-4">📭</p>
          <p style={{ color: 'var(--text-muted)' }}>该分类暂无表达</p>
        </div>
      )}
    </div>
  );
}
