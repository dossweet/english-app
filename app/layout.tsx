import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "English Coach - 每日英语学习",
  description: "每天5个地道英语表达，配音标和练习",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗣️</span>
              <span className="font-bold text-lg" style={{ color: 'var(--primary)' }}>
                English Coach
              </span>
            </div>
            <nav className="flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                style={{ color: 'var(--text)' }}
              >
                📚 学习
              </Link>
              <Link
                href="/practice"
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                style={{ color: 'var(--text)' }}
              >
                🎤 练习
              </Link>
              <Link
                href="/archive"
                className="px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                style={{ color: 'var(--text)' }}
              >
                📦 存档
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          每天学一点，日积月累英语自然好 💪
        </footer>
      </body>
    </html>
  );
}
