'use client';

import { useState, useEffect, useRef } from 'react';
import { expressions, type Expression } from '@/data/expressions';

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function PracticePage() {
  const [mode, setMode] = useState<'listen' | 'match' | null>(null);
  const [quiz, setQuiz] = useState<Expression[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  useEffect(() => {
    const dark = localStorage.getItem('english-dark');
    if (dark === 'true') setIsDark(true);
  }, []);

  const toggleDark = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('english-dark', String(newDark));
  };

  const startListenQuiz = () => {
    setMode('listen');
    setQuiz(shuffle(expressions).slice(0, 10));
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setShowAnswer(false);
    speakCurrent();
  };

  const startMatchQuiz = () => {
    setMode('match');
    const shuffled = shuffle(expressions).slice(0, 8);
    setQuiz(shuffled);
    setCurrentIndex(0);
    setScore({ correct: 0, total: 0 });
    setShowAnswer(false);
    
    // Generate options: correct + 3 wrong
    const correct = shuffled[0].chinese;
    const wrongOptions = shuffle(expressions)
      .filter(e => e.chinese !== correct)
      .slice(0, 3)
      .map(e => e.chinese);
    setOptions(shuffle([correct, ...wrongOptions]));
    setSelectedOption(null);
  };

  const speakCurrent = () => {
    if ('speechSynthesis' in window && quiz[currentIndex]) {
      const utterance = new SpeechSynthesisUtterance(quiz[currentIndex].english);
      utterance.lang = 'en-US';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const current = quiz[currentIndex];

  const handleNext = (isCorrect: boolean) => {
    const newTotal = score.total + 1;
    const newCorrect = isCorrect ? score.correct + 1 : score.correct;
    setScore({ correct: newCorrect, total: newTotal });

    if (currentIndex < quiz.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      if (mode === 'listen') speakCurrent();
      if (mode === 'match') {
        const next = quiz[currentIndex + 1];
        const correct = next.chinese;
        const wrongOptions = shuffle(expressions)
          .filter(e => e.chinese !== correct)
          .slice(0, 3)
          .map(e => e.chinese);
        setOptions(shuffle([correct, ...wrongOptions]));
        setSelectedOption(null);
      }
    } else {
      setMode(null); // Finished
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
      setIsRecording(true);
      
      setTimeout(() => {
        mediaRecorder.stop();
        setIsRecording(false);
      }, 5000);
    } catch {
      alert('请允许麦克风权限');
    }
  };

  if (!mode) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>🎤 跟读练习</h1>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          测试你的英语听力、口语和理解能力
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={startListenQuiz}
            className="p-6 rounded-2xl text-left transition card-hover"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <span className="text-4xl mb-3 block">👂</span>
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>听力测试</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              听发音，选择正确的中文翻译
            </p>
          </button>

          <button
            onClick={startMatchQuiz}
            className="p-6 rounded-2xl text-left transition card-hover"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <span className="text-4xl mb-3 block">🔗</span>
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text)' }}>配对练习</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              看中文，选出对应的英文表达
            </p>
          </button>
        </div>

        <button
          onClick={toggleDark}
          className="fixed top-4 right-4 text-2xl"
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    );
  }

  if (mode === 'listen' && current) {
    return (
      <div className="max-w-xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: 'var(--text-muted)' }}>进度</span>
            <span style={{ color: 'var(--primary)' }}>{currentIndex + 1} / {quiz.length}</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all"
              style={{ 
                width: `${((currentIndex + 1) / quiz.length) * 100}%`, 
                background: 'var(--primary)' 
              }}
            />
          </div>
        </div>

        {/* Score */}
        <div className="text-center mb-6">
          <span className="text-sm px-4 py-2 rounded-full" style={{ background: 'var(--card)', color: 'var(--text-muted)' }}>
            得分: {score.correct}/{score.total}
          </span>
        </div>

        {/* Card */}
        <div 
          className="rounded-2xl p-8 text-center"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            点击播放听发音
          </p>
          
          <button
            onClick={speakCurrent}
            className="text-6xl mb-6 hover:scale-110 transition-transform"
          >
            🔊
          </button>

          <p className="text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
            {showAnswer ? current.chinese : '??? 中文翻译'}
          </p>

          {!showAnswer ? (
            <button
              onClick={() => setShowAnswer(true)}
              className="px-8 py-3 rounded-xl font-medium transition"
              style={{ background: 'var(--primary)', color: 'white' }}
            >
              显示答案
            </button>
          ) : (
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleNext(true)}
                className="px-6 py-3 rounded-xl font-medium transition"
                style={{ background: '#10B981', color: 'white' }}
              >
                ✅ 我听懂了
              </button>
              <button
                onClick={() => handleNext(false)}
                className="px-6 py-3 rounded-xl font-medium transition"
                style={{ background: '#EF4444', color: 'white' }}
              >
                ❌ 没听懂
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setMode(null)}
            className="text-sm underline"
            style={{ color: 'var(--text-muted)' }}
          >
            退出练习
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'match' && current) {
    const isCorrect = selectedOption === current.chinese;
    const answered = selectedOption !== null;

    return (
      <div className="max-w-xl mx-auto">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span style={{ color: 'var(--text-muted)' }}>进度</span>
            <span style={{ color: 'var(--primary)' }}>{currentIndex + 1} / {quiz.length}</span>
          </div>
          <div className="h-2 rounded-full" style={{ background: 'var(--border)' }}>
            <div 
              className="h-full rounded-full transition-all"
              style={{ 
                width: `${((currentIndex + 1) / quiz.length) * 100}%`, 
                background: 'var(--primary)' 
              }}
            />
          </div>
        </div>

        {/* Card */}
        <div 
          className="rounded-2xl p-8 text-center mb-6"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            {current.english}
          </h2>
          <span className="ipa">{current.ipa}</span>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {options.map(option => (
            <button
              key={option}
              onClick={() => !answered && setSelectedOption(option)}
              disabled={answered}
              className="p-4 rounded-xl text-left transition font-medium"
              style={{
                background: answered
                  ? option === current.chinese 
                    ? '#10B98120' 
                    : option === selectedOption 
                      ? '#EF444420' 
                      : 'var(--card)'
                  : 'var(--card)',
                border: `2px solid ${
                  answered && option === current.chinese 
                    ? '#10B981' 
                    : option === selectedOption 
                      ? '#EF4444' 
                      : 'var(--border)'
                }`,
                color: 'var(--text)',
                cursor: answered ? 'default' : 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {answered && (
          <div className="text-center mt-6">
            {isCorrect ? (
              <p className="text-green-500 font-medium mb-4">🎉 正确！</p>
            ) : (
              <p className="text-red-500 font-medium mb-4">
                ❌ 正确答案是: {current.chinese}
              </p>
            )}
            <button
              onClick={() => handleNext(isCorrect)}
              className="px-8 py-3 rounded-xl font-medium"
              style={{ background: 'var(--primary)', color: 'white' }}
            >
              {currentIndex < quiz.length - 1 ? '下一题 →' : '查看结果'}
            </button>
          </div>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setMode(null)}
            className="text-sm underline"
            style={{ color: 'var(--text-muted)' }}
          >
            退出练习
          </button>
        </div>
      </div>
    );
  }

  // Finished
  const percentage = Math.round((score.correct / score.total) * 100);
  return (
    <div className="max-w-md mx-auto text-center py-12">
      <div 
        className="rounded-2xl p-8"
        style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
      >
        <p className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '👍' : '💪'}
        </p>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
          练习完成！
        </h2>
        <p className="text-4xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
          {score.correct}/{score.total}
        </p>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          {percentage >= 80 
            ? '太棒了！你的英语很棒！' 
            : percentage >= 60 
              ? '不错！继续加油！' 
              : '别灰心，多练几次！'}
        </p>
        <button
          onClick={() => setMode(null)}
          className="px-8 py-3 rounded-xl font-medium"
          style={{ background: 'var(--primary)', color: 'white' }}
        >
          再练一次
        </button>
      </div>
    </div>
  );
}
