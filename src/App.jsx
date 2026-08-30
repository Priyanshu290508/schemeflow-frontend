import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ProfileProvider } from './context/ProfileContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { RightSidebar } from './components/RightSidebar';

// Pages
import { Dashboard } from './pages/Dashboard';
import { ProfileWizard } from './pages/ProfileWizard';
import { SchemeDetail } from './pages/SchemeDetail';
import { AssistantPage } from './pages/AssistantPage';
import { SavedSchemes } from './pages/SavedSchemes';
import { ApplicationTracker } from './pages/ApplicationTracker';

export function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [selectedSchemeId, setSelectedSchemeId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        return <ApplicationTracker />;
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
      <LanguageProvider>
        <ProfileProvider>
          {/* Full-width responsive container (no outer curved boundary) */}
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
                {/* Accessibility Toolbar */}
                <AccessibilityToolbar />

                {/* Top Capsule Header Navigation Bar */}
                <Navbar
                  activePage={activePage}
                  setActivePage={setActivePage}
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  setMobileMenuOpen={setMobileMenuOpen}
                />

                {/* Dynamic Active View wrapped in ErrorBoundary */}
                <div style={{ flex: 1 }}>
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

          </div>
        </ProfileProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
