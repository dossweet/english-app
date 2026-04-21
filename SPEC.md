# English Learning Dashboard - SPEC.md

## 1. Concept & Vision
一个简洁优雅的英语学习可视化平台，每天提供5个地道口语表达，配有音标、发音技巧、中文释义和跟读练习。界面温暖、专注、有沉浸感。

## 2. Design Language
- Primary: #6366F1, Secondary: #F59E0B
- Background: #F8FAFC, Card: #FFFFFF
- Text: #1E293B, Success: #10B981, Error: #EF4444
- Typography: Inter + system monospace for IPA
- Cards: rounded-2xl, shadow-sm, hover:shadow-md + translateY(-2px)

## 3. Pages
- `/` - Dashboard首页: Header + 5张表达卡片
- `/practice` - 跟读练习页
- `/archive` - 已学表达存档

## 4. Features
- 5 daily expressions with IPA pronunciation
- Click to expand for examples
- Favorite (heart icon, localStorage)
- Dark mode toggle
- Progress tracking (localStorage)
- Category tabs: Small Talk / Business / Slang / Travel

## 5. Data
- 30+ expressions with: id, english, ipa, chinese, category, tags, examples

## 6. Components
- ExpressionCard (expandable)
- ProgressBar
- CategoryTabs
- IPAHelper
- Sidebar

## 7. Tech: Next.js 14 App Router + Tailwind CSS + localStorage
