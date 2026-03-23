# 💪 FitForge — Ultimate Fitness Platform

A beautiful, fully-featured React fitness web app with 9 pages, floating AI chatbot, dark/light mode, and mobile support.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start
```

The app will open at **http://localhost:3000**

## 📁 Project Structure

```
src/
├── App.jsx                    # Root component
├── index.js                   # React entry point
├── context/
│   └── ThemeContext.js         # Dark / light mode context
├── styles/
│   └── globalStyles.js        # Theme-aware CSS string
├── data/
│   ├── constants.js            # All shared data (workouts, meals, etc.)
│   └── aiReplies.js            # AI chatbot reply logic
├── components/
│   ├── Nav.jsx                 # Desktop navigation bar
│   ├── MobileNav.jsx           # Mobile bottom nav + drawer
│   ├── FloatingChatbot.jsx     # FORGE AI floating chat widget
│   ├── DumbbellSVG.jsx         # Custom SVG dumbbell illustration
│   └── Scene3D.jsx             # 3D geometric scene for showcase cards
└── pages/
    ├── HomePage.jsx            # Hero, showcase, features, about, testimonials, pricing, contact, footer
    ├── WorkoutsPage.jsx        # Filterable workout library + exercise modal
    ├── NutritionPage.jsx       # Macro tracker + meal log
    ├── ProgressPage.jsx        # Stats, bar chart, personal records
    ├── SchedulePage.jsx        # 7-day calendar + session list
    ├── ChallengesPage.jsx      # Challenge cards, leaderboard, badges
    ├── MetricsPage.jsx         # BMI gauge, water tracker, body log
    ├── CalculatorPage.jsx      # BMI / TDEE / Macro calculators
    └── MusicPage.jsx           # Music player + mood selector
```

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 Home | Hero, 3D showcase, features, about, team, testimonials, pricing, contact |
| 🏋️ Workouts | 8 workouts, category filters, exercise checklist modal |
| 🥗 Nutrition | Live macro progress bars, daily meal log |
| 📊 Progress | Stat cards, weekly bar chart, personal records grid |
| 📅 Schedule | Day selector, session timeline with status badges |
| 🏆 Challenges | Active/new/done challenges, leaderboard, badge collection |
| 📏 Metrics | Live BMI gauge, water cup tracker, body measurement log |
| 🧮 Calculator | BMI, TDEE, and personalised macro split calculators |
| 🎵 Music | Functional player (play/pause/skip/volume), playlists, 6 mood categories |
| 🤖 AI Coach | Floating chatbot with mood tabs, quick chips, timestamps, minimise |
| 🌙 Dark/Light | Full theme switching baked into every component |
| 📱 Mobile | Responsive bottom nav with drawer for extra pages |

## 🛠 Tech Stack

- **React 18** — UI framework
- **CSS-in-JS** — Theme-aware global styles via template literals
- **Google Fonts** — Bebas Neue (display) + DM Sans (body)
- No external UI libraries — 100% custom components

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to deploy on Netlify, Vercel, or any static host.
