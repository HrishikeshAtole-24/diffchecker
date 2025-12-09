# 📁 PROJECT STRUCTURE

Complete folder structure of your DiffChecker application.

```
diffchecker/
│
├── 📄 README.md                    # Main project documentation
├── 📄 SETUP.md                     # Step-by-step setup guide
├── 📄 DEPLOYMENT.md                # Deployment instructions
│
├── 📂 backend/                     # Node.js + Express API
│   ├── 📂 src/
│   │   ├── 📂 config/
│   │   │   └── db.js              # MongoDB connection
│   │   │
│   │   ├── 📂 controllers/
│   │   │   └── diffController.js  # Compare, save, get logic
│   │   │
│   │   ├── 📂 models/
│   │   │   └── comparisonModel.js # MongoDB schema
│   │   │
│   │   ├── 📂 routes/
│   │   │   └── diffRoutes.js      # API route definitions
│   │   │
│   │   ├── app.js                 # Express app configuration
│   │   └── server.js              # Server entry point
│   │
│   ├── .env.example               # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   └── 📄 README.md               # Backend documentation
│
└── 📂 frontend/                    # Next.js Application
    ├── 📂 app/
    │   ├── 📂 saved/
    │   │   └── 📂 [id]/
    │   │       └── page.js        # Saved comparison view
    │   │
    │   ├── layout.js              # Root layout (fonts, toast)
    │   ├── page.js                # Home page (main editor)
    │   └── globals.css            # Global styles + Tailwind
    │
    ├── 📂 components/
    │   ├── Navbar.js              # Top navigation bar
    │   ├── Editor.js              # Monaco editor wrapper
    │   ├── DiffResult.js          # Diff visualization
    │   └── SaveModal.js           # Save & share modal
    │
    ├── .env.local.example         # Environment variables template
    ├── .gitignore
    ├── next.config.js             # Next.js configuration
    ├── tailwind.config.js         # Tailwind CSS config
    ├── postcss.config.js          # PostCSS config
    ├── package.json
    └── 📄 README.md               # Frontend documentation
```

---

## 🔍 File Descriptions

### Backend Files

| File | Purpose |
|------|---------|
| `db.js` | Connects to MongoDB with error handling |
| `diffController.js` | Handles compare, save, get comparison logic |
| `comparisonModel.js` | Mongoose schema with auto-expiry |
| `diffRoutes.js` | Defines API endpoints |
| `app.js` | Express middleware and route setup |
| `server.js` | Starts HTTP server and connects DB |

### Frontend Files

| File | Purpose |
|------|---------|
| `page.js` (root) | Main comparison interface |
| `page.js` (saved) | View saved comparison by ID |
| `layout.js` | App-wide layout, fonts, toast provider |
| `globals.css` | Tailwind directives + custom styles |
| `Navbar.js` | Top navigation with logo and links |
| `Editor.js` | Monaco editor with custom theme |
| `DiffResult.js` | Shows diff with stats and highlights |
| `SaveModal.js` | Modal to save and get shareable link |

---

## 🔗 Data Flow

```
User Input (Frontend)
      ↓
Monaco Editor Component
      ↓
Compare Button Click
      ↓
API Call (axios)
      ↓
Express Route Handler
      ↓
Diff Controller Logic
      ↓
jsdiff Library Processing
      ↓
Response with Diff Results
      ↓
DiffResult Component
      ↓
Visual Diff Display
```

### Save Flow

```
Save Button Click
      ↓
SaveModal Component
      ↓
API Call to /api/save
      ↓
MongoDB (via Mongoose)
      ↓
Generate Unique ID (nanoid)
      ↓
Return Shareable URL
      ↓
Display in Modal
      ↓
User Copies Link
      ↓
Share with Others!
```

---

## 🎨 Component Hierarchy

```
app/
├── layout.js (Root)
│   ├── Toaster (react-hot-toast)
│   └── {children}
│
└── page.js (Home)
    ├── Navbar
    ├── Hero Section
    ├── Mode Selector
    ├── Editor (left)
    ├── Editor (right)
    ├── Action Buttons
    ├── DiffResult (conditional)
    └── SaveModal (conditional)

app/saved/[id]/
└── page.js (Saved View)
    ├── Navbar
    ├── Header (title, date, share)
    └── Editor (read-only, left & right)
```

---

## 🛠️ Tech Stack Map

### Backend Dependencies
```json
{
  "express": "Web framework",
  "mongoose": "MongoDB ODM",
  "cors": "Enable cross-origin requests",
  "dotenv": "Environment variables",
  "diff": "Text comparison library",
  "nanoid": "Unique ID generation",
  "nodemon": "Auto-reload in dev"
}
```

### Frontend Dependencies
```json
{
  "next": "React framework",
  "react": "UI library",
  "@monaco-editor/react": "VS Code editor",
  "axios": "HTTP client",
  "framer-motion": "Animations",
  "react-hot-toast": "Notifications",
  "lucide-react": "Icon library",
  "tailwindcss": "Utility-first CSS"
}
```

---

## 🎯 API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `POST` | `/api/diff` | Compare text without saving |
| `POST` | `/api/save` | Save comparison and get link |
| `GET` | `/api/view/:id` | Get saved comparison |
| `GET` | `/api/stats` | Get statistics (optional) |
| `GET` | `/health` | Health check |

---

## 📊 Database Schema

```javascript
Comparison {
  shareId: String (unique, indexed)
  leftText: String
  rightText: String
  title: String
  language: String
  createdAt: Date (auto-expire after 30 days)
  updatedAt: Date
}
```

---

## 🎨 Design System

### Colors
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Success**: `#22c55e` (Green)
- **Error**: `#ef4444` (Red)
- **Background**: `#0f172a` → `#1e1b4b` (Gradient)

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text
- **Body**: Regular, slate colors

### Effects
- **Glass Morphism**: `rgba(15, 23, 42, 0.7)` with blur
- **Animations**: Framer Motion (scale, fade, slide)
- **Shadows**: Tailwind shadow utilities

---

This structure makes your DiffChecker modular, maintainable, and scalable! 🔥
