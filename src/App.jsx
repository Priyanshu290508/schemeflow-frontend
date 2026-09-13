import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProfileProvider } from './context/ProfileContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { RightSidebar } from './components/RightSidebar';
import { OpeningSplashScreen } from './components/OpeningSplashScreen';

// Pages
import { Dashboard } from './pages/Dashboard';
import { ProfileWizard } from './pages/ProfileWizard';
import { SchemeDetail } from './pages/SchemeDetail';
import { AssistantPage } from './pages/AssistantPage';
import { SavedSchemes } from './pages/SavedSchemes';
import { ApplicationTracker } from './pages/ApplicationTracker';
import { LoginPage } from './pages/LoginPage';

// Icons for Mobile Bottom Navigation
import {
  Home,
  Grid,
  Bookmark,
  Sparkles,
  Settings,
  FileSearch,
  User
} from 'lucide-react';

function MobileBottomNav({ activePage, setActivePage }) {
  const { t } = useLanguage();

  const mobileNavItems = [
    { id: 'dashboard', label: t('mobileNavHome'), icon: Home },
    { id: 'wizard', label: t('mobileNavDiscover'), icon: Grid },
    { id: 'saved', label: t('mobileNavSaved'), icon: Bookmark },
    { id: 'assistant', label: t('mobileNavAssistant'), icon: Sparkles },
    { id: 'profile', label: t('mobileNavProfile'), icon: Settings }
  ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile Navigation">
      {mobileNavItems.map(item => {
        const Icon = item.icon;
        const isActive = activePage === item.id || 
          (item.id === 'dashboard' && activePage === 'landing') ||
          (item.id === 'profile' && activePage === 'wizard');

        return (
          <button
            key={item.id}
            onClick={() => {
              setActivePage(item.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <div className="mobile-nav-icon-wrapper">
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedSchemeId, setSelectedSchemeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'dashboard':
      case 'landing':
        return (
          <Dashboard
            setActivePage={setActivePage}
            setSelectedSchemeId={setSelectedSchemeId}
            searchTerm={searchTerm}
          />
        );
      case 'login':
        return (
          <LoginPage
            setActivePage={setActivePage}
            onLoginSuccess={(user) => setLoggedInUser(user)}
          />
        );
      case 'wizard':
        return <ProfileWizard setActivePage={setActivePage} />;
      case 'detail':
        return (
          <SchemeDetail
            schemeId={selectedSchemeId}
            setActivePage={setActivePage}
          />
        );
      case 'assistant':
        return (
          <AssistantPage
            setActivePage={setActivePage}
            setSelectedSchemeId={setSelectedSchemeId}
          />
        );
      case 'tracker':
        return <ApplicationTracker setActivePage={setActivePage} />;
      case 'saved':
        return (
          <SavedSchemes
            setActivePage={setActivePage}
            setSelectedSchemeId={setSelectedSchemeId}
          />
        );
      case 'profile':
        return <ProfileWizard setActivePage={setActivePage} />;
      default:
        return (
          <Dashboard
            setActivePage={setActivePage}
            setSelectedSchemeId={setSelectedSchemeId}
            searchTerm={searchTerm}
          />
        );
    }
  };

  const showRightSidebar = activePage === 'dashboard' || activePage === 'landing';

  return (
    <ErrorBoundary>
      {/* Cinematic Path-Drawing Opening Screen (Visible on app launch for 5 seconds) */}
      {showSplash && (
        <OpeningSplashScreen
          durationSec={5}
          onFinish={() => setShowSplash(false)}
        />
      )}

      <ThemeProvider>
        <LanguageProvider>
          <ProfileProvider>
            {/* Full-width responsive container */}
            <div className="app-canvas-container">
              
              <div className={`dashboard-layout ${showRightSidebar ? '' : 'two-column'}`}>
                
                {/* 1. Left Navigation Sidebar / Mobile Slide Drawer */}
                <Sidebar
                  activePage={activePage}
                  setActivePage={setActivePage}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                {/* 2. Central Main Viewport */}
                <main className="main-viewport">
                  {/* Top Capsule Header Navigation Bar */}
                  <Navbar
                    activePage={activePage}
                    setActivePage={setActivePage}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    setMobileMenuOpen={setMobileMenuOpen}
                  />

                  {/* Dynamic Active View wrapped in ErrorBoundary */}
                  <div style={{ flex: 1, width: '100%', minWidth: 0 }}>
                    <ErrorBoundary>
                      {renderCurrentPage()}
                    </ErrorBoundary>
                  </div>
                </main>

                {/* 3. Right Action Sidebar (Desktop Only) */}
                {showRightSidebar && (
                  <RightSidebar
                    setActivePage={setActivePage}
                    setSelectedSchemeId={setSelectedSchemeId}
                  />
                )}

              </div>

              {/* 4. Global Floating Accessibility Popover Button & Widget */}
              <AccessibilityToolbar />

              {/* 5. Mobile Sticky Bottom Navigation Bar (Screens < 900px) */}
              <MobileBottomNav
                activePage={activePage}
                setActivePage={setActivePage}
              />

            </div>
          </ProfileProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
