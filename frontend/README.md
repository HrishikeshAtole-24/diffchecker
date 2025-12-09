# 🔥 DiffChecker Frontend

Modern, aesthetic text comparison tool built with Next.js, React, and Tailwind CSS.

## ✨ Features

- **Monaco Editor** - Professional code editor with syntax highlighting
- **Real-time Comparison** - Lines, words, or character-level diff
- **Save & Share** - Generate shareable links for comparisons
- **Smooth Animations** - Framer Motion powered transitions
- **Responsive Design** - Works on all devices
- **Dark Theme** - Eye-friendly gradient design

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment
Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
```bash
npm run build
npm start
```

## 🎨 Design Features

- **Gradient Text Effects**
- **Glass Morphism UI**
- **Smooth Page Transitions**
- **Custom Scrollbars**
- **Responsive Monaco Editor**
- **Toast Notifications**

## 📱 Pages

- `/` - Home page with comparison editor
- `/saved/[id]` - View saved comparisons

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Monaco Editor** - VS Code editor
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lucide React** - Icons

## 🎯 Key Components

- `Editor.js` - Monaco code editor wrapper
- `DiffResult.js` - Diff visualization with stats
- `SaveModal.js` - Save and share functionality
- `Navbar.js` - Navigation header

## 🌈 Color Scheme

- Primary: `#6366f1` (Indigo)
- Secondary: `#8b5cf6` (Purple)
- Accent: `#ec4899` (Pink)
- Background: Dark gradient
