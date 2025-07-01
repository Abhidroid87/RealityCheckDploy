import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ThemeProvider from './contexts/ThemeContext';
import ApiKeyProvider from './contexts/ApiKeyContext';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const GlobalPulsePage = lazy(() => import('./pages/GlobalPulsePage'));
const InsightEnginePage = lazy(() => import('./pages/InsightEnginePage'));
const DiscoverPage = lazy(() => import('./pages/DiscoverPage'));
const ChatPage = lazy(() => import('./pages/ChatPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const ArticleDetailPage = lazy(() => import('./pages/ArticleDetailPage'));
const SummaryPage = lazy(() => import('./pages/SummaryPage'));
const EventTimelinePage = lazy(() => import('./pages/EventTimelinePage'));
const TrendingPage = lazy(() => import('./pages/TrendingPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center text-white">
      <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
      <p>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <ApiKeyProvider>
        <Router>
          <div className="min-h-screen transition-colors duration-300 flex flex-col relative">
            <AnimatedBackground variant="cubes" intensity="medium" />
            <Navigation />
            <main className="flex-1 relative z-10">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/global-pulse" element={<GlobalPulsePage />} />
                  <Route path="/insight-engine" element={<InsightEnginePage />} />
                  <Route path="/discover" element={<DiscoverPage />} />
                  <Route path="/chat" element={<ChatPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/trending" element={<TrendingPage />} />
                  <Route path="/live" element={<TrendingPage />} />
                  <Route path="/article/:id" element={<ArticleDetailPage />} />
                  <Route path="/summary/:id" element={<SummaryPage />} />
                  <Route path="/event/:slug" element={<EventTimelinePage />} />
                  {/* Catch all route */}
                  <Route path="*" element={<HomePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ApiKeyProvider>
    </ThemeProvider>
  );
}

export default App;