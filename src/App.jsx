import { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { makeStyle } from './styles/globalStyles';

import Nav              from './components/Nav';
import MobileNav        from './components/MobileNav';
//import FloatingChatbot  from './components/FloatingChatbot';

import HomePage         from './pages/HomePage';
import WorkoutsPage     from './pages/WorkoutsPage';
import NutritionPage    from './pages/NutritionPage';
import ProgressPage     from './pages/ProgressPage';
import SchedulePage     from './pages/SchedulePage';
import ChallengesPage   from './pages/ChallengesPage';
import MetricsPage      from './pages/MetricsPage';

const PAGES = {
  Home:        HomePage,
  Workouts:    WorkoutsPage,
  Nutrition:   NutritionPage,
  Progress:    ProgressPage,
  Schedule:    SchedulePage,
  Challenges:  ChallengesPage,
  Metrics:     MetricsPage,
};

function AppInner() {
  const [page, setPage] = useState('Home');
  const { dark } = useTheme();
  const Page = PAGES[page] || HomePage;

  return (
    <>
      {/* Inject global theme-aware CSS */}
      <style>{makeStyle(dark)}</style>

      <div className="app">
        <Nav page={page} setPage={setPage} />
        <Page setPage={setPage} />
        {/* <FloatingChatbot /> */}
        <MobileNav page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
