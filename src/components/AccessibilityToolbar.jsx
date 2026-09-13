import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Type,
  Sun,
  Moon,
  RotateCcw,
  Sliders,
  X
} from 'lucide-react';

export const AccessibilityToolbar = () => {
  const { lang, t } = useLanguage();
  const { theme, toggleTheme, isDark } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  
  // Text size state ('small' | 'normal' | 'large') - ONLY changes word/typography size without shrinking layout
  const [textSize, setTextSize] = useState(() => {
    const saved = localStorage.getItem('schemeflow_text_size');
    if (saved === 'small' || saved === 'large' || saved === 'normal') return saved;
    // Backwards compatibility migration
    const oldScale = localStorage.getItem('schemeflow_font_scale');
    if (oldScale) {
      localStorage.removeItem('schemeflow_font_scale');
      if (Number(oldScale) < 100) return 'small';
      if (Number(oldScale) > 100) return 'large';
    }
    return 'normal';
  });

  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  // Apply typography font scaling ONLY to text elements via data-text-size
  useEffect(() => {
    // 1. Remove any legacy zoom or inline font size that causes container shrinkage
    document.documentElement.style.removeProperty('font-size');
    document.documentElement.style.removeProperty('--app-zoom');
    const appContainer = document.querySelector('.app-canvas-container');
    if (appContainer) {
      appContainer.style.zoom = '';
      appContainer.style.removeProperty('zoom');
    }

    // 2. Set clean data-text-size attribute on root HTML element
    if (textSize === 'normal') {
      document.documentElement.removeAttribute('data-text-size');
    } else {
      document.documentElement.setAttribute('data-text-size', textSize);
    }

    localStorage.setItem('schemeflow_text_size', textSize);
  }, [textSize]);

  // Clean up any lingering high-contrast artifacts or zoom from past sessions
  useEffect(() => {
    document.body.classList.remove('high-contrast-mode');
    document.documentElement.classList.remove('high-contrast-mode');
    document.documentElement.removeAttribute('data-high-contrast');
    localStorage.removeItem('schemeflow_high_contrast');
    localStorage.removeItem('schemeflow_font_scale');
    const appContainer = document.querySelector('.app-canvas-container');
    if (appContainer) {
      appContainer.style.zoom = '';
    }
  }, []);

  // Handle click outside and Escape key to close popover
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Stop audio on page unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Text-To-Speech handler with chunking & multi-voice fallback
  const handleToggleAudio = () => {
    if (!('speechSynthesis' in window)) {
      alert(t('ttsNotSupported') || "Text-to-speech is not supported in this browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const mainContent = document.querySelector('.main-viewport') || document.querySelector('main') || document.body;
    if (!mainContent) return;

    // Extract clean readable text
    const rawText = mainContent.innerText || '';
    const cleanText = rawText
      .replace(/\s+/g, ' ')
      .replace(/[\n\r]+/g, '. ')
      .trim()
      .slice(0, 2000);

    if (!cleanText) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Pick appropriate voice
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = null;

    if (lang === 'hi') {
      utterance.lang = 'hi-IN';
      selectedVoice = voices.find((v) => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi'));
    } else if (lang === 'bn') {
      utterance.lang = 'bn-IN';
      selectedVoice = voices.find((v) => v.lang.includes('bn') || v.name.toLowerCase().includes('bengali'));
    } else {
      utterance.lang = 'en-IN';
      selectedVoice = voices.find((v) => v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en-US'));
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlayingAudio(false);
    };
    utterance.onerror = () => {
      setIsPlayingAudio(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  // Font size adjustments (pure typography without zoom or layout shrinkage)
  const handleFontSmall = () => {
    setTextSize('small');
  };

  const handleFontNormal = () => {
    setTextSize('normal');
  };

  const handleFontLarge = () => {
    setTextSize('large');
  };

  // Reset all accessibility settings
  const handleReset = () => {
    if (isPlayingAudio && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
    setTextSize('normal');
    document.documentElement.removeAttribute('data-text-size');
    document.documentElement.style.removeProperty('font-size');
    document.documentElement.style.removeProperty('--app-zoom');
    const appContainer = document.querySelector('.app-canvas-container');
    if (appContainer) {
      appContainer.style.zoom = '';
      appContainer.style.removeProperty('zoom');
    }
    localStorage.removeItem('schemeflow_text_size');
    localStorage.removeItem('schemeflow_font_scale');
  };

  const hasActiveModifiers = textSize !== 'normal' || isPlayingAudio;

  return (
    <>
      {/* 1. Live Screen Reader Status Banner (when TTS is active) */}
      <AnimatePresence>
        {isPlayingAudio && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 99999,
              background: '#070E1C',
              border: '2px solid #FFA530',
              borderRadius: '999px',
              padding: '8px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 30px rgba(255, 165, 48, 0.45)',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: 700,
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Volume2 size={16} color="#FFA530" className="animate-pulse" />
              <span>
                {lang === 'hi'
                  ? 'स्क्रीन को पढ़ा जा रहा है...'
                  : lang === 'bn'
                  ? 'স্ক্রিন পাঠ করা হচ্ছে...'
                  : 'Reading Screen Content Aloud...'}
              </span>
            </span>
            <button
              onClick={handleToggleAudio}
              style={{
                background: '#FFA530',
                color: '#070E1C',
                border: 'none',
                borderRadius: '999px',
                padding: '4px 12px',
                fontSize: '12px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <VolumeX size={13} />
              <span>{t('stopAudio') || 'Stop'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Floating Accessibility Control Button (Bottom-Right) */}
      <div
        className="accessibility-floating-wrapper"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
          zoom: 1,
        }}
      >
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={t('accessibilityTitle') || "Accessibility Options"}
          className="accessibility-floating-btn"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: isDark
              ? 'linear-gradient(135deg, #223D79 0%, #15264f 100%)'
              : 'linear-gradient(135deg, #223D79 0%, #1A2F5E 100%)',
            color: '#FFFFFF',
            border: '2px solid rgba(255, 165, 48, 0.75)',
            boxShadow: '0 8px 24px rgba(34, 61, 121, 0.35), 0 0 0 2px rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08) translateY(-2px)';
            e.currentTarget.style.borderColor = '#FFA530';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 165, 48, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.borderColor = 'rgba(255, 165, 48, 0.75)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(34, 61, 121, 0.35), 0 0 0 2px rgba(255, 255, 255, 0.2)';
          }}
          title={t('accessibilityTitle') || "Accessibility Options"}
        >
          {isOpen ? (
            <X size={22} strokeWidth={2.5} />
          ) : (
            <Sliders size={22} strokeWidth={2.4} />
          )}

          {/* Glowing indicator dot when custom settings are active */}
          {hasActiveModifiers && !isOpen && (
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '13px',
                height: '13px',
                borderRadius: '50%',
                background: '#FFA530',
                border: '2px solid #FFFFFF',
                boxShadow: '0 0 10px rgba(255, 165, 48, 0.9)',
              }}
            />
          )}
        </button>

        {/* 3. Floating Accessibility Popover Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={popoverRef}
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.94 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: '60px',
                right: 0,
                width: '280px',
                background: 'var(--bg-card)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid var(--border-card)',
                borderRadius: 'var(--radius-xl)',
                boxShadow: 'var(--shadow-float)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                color: 'var(--text-main)',
                zIndex: 9999,
              }}
            >
              {/* Header: Title & Close 'X' */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '8px',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sliders size={17} color="#FFA530" />
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t('accessibilityTitle') || "Accessibility"}
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    padding: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                  }}
                  aria-label="Close accessibility menu"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Row 1: 🔊 Listen to Screen (TTS) */}
              <button
                onClick={handleToggleAudio}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: isPlayingAudio
                    ? 'var(--primary-orange-light)'
                    : 'var(--bg-secondary)',
                  border: isPlayingAudio
                    ? '1px solid #FFA530'
                    : '1px solid var(--border-subtle)',
                  color: isPlayingAudio
                    ? '#FFA530'
                    : 'var(--text-main)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {isPlayingAudio ? (
                    <VolumeX size={16} color="#FFA530" />
                  ) : (
                    <Volume2 size={16} color="var(--primary-navy)" />
                  )}
                  <span>
                    {isPlayingAudio
                      ? (t('stopAudio') || "Stop Audio")
                      : (t('listenToScreen') || "Listen to Screen")}
                  </span>
                </div>
                {isPlayingAudio && (
                  <span
                    style={{
                      fontSize: '10px',
                      background: '#FFA530',
                      color: '#FFFFFF',
                      padding: '2px 7px',
                      borderRadius: '999px',
                      fontWeight: 800,
                    }}
                  >
                    ACTIVE
                  </span>
                )}
              </button>

              {/* Row 2: Text Size Controls (A−  A  A+) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 10px',
                  background: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Type size={15} color="var(--text-muted)" />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    {t('fontSizeLabel') || "Text Size"}
                  </span>
                  {textSize !== 'normal' && (
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#FFA530', textTransform: 'capitalize' }}>
                      ({textSize === 'small' ? 'Small' : 'Large'})
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {/* A− (Small font) */}
                  <button
                    onClick={handleFontSmall}
                    style={{
                      padding: '5px 9px',
                      fontSize: '12px',
                      fontWeight: 800,
                      borderRadius: 'var(--radius-sm)',
                      border: textSize === 'small' ? '1px solid #FFA530' : 'none',
                      background: textSize === 'small' ? 'var(--primary-navy)' : 'rgba(0,0,0,0.05)',
                      color: textSize === 'small' ? '#FFFFFF' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      minWidth: '32px',
                    }}
                    title={t('fontSizeSmaller') || "Decrease text size (Small)"}
                  >
                    A−
                  </button>

                  {/* A (Normal font) */}
                  <button
                    onClick={handleFontNormal}
                    style={{
                      padding: '5px 10px',
                      fontSize: '13px',
                      fontWeight: 800,
                      borderRadius: 'var(--radius-sm)',
                      border: textSize === 'normal' ? '1px solid #FFA530' : 'none',
                      background: textSize === 'normal' ? 'var(--primary-navy)' : 'rgba(0,0,0,0.05)',
                      color: textSize === 'normal' ? '#FFFFFF' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      minWidth: '32px',
                    }}
                    title={t('fontSizeNormal') || "Normal text size"}
                  >
                    A
                  </button>

                  {/* A+ (Large font) */}
                  <button
                    onClick={handleFontLarge}
                    style={{
                      padding: '5px 9px',
                      fontSize: '14px',
                      fontWeight: 800,
                      borderRadius: 'var(--radius-sm)',
                      border: textSize === 'large' ? '1px solid #FFA530' : 'none',
                      background: textSize === 'large' ? 'var(--primary-navy)' : 'rgba(0,0,0,0.05)',
                      color: textSize === 'large' ? '#FFFFFF' : 'var(--text-main)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease',
                      minWidth: '32px',
                    }}
                    title={t('fontSizeLarger') || "Increase text size (Large)"}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Row 3: 🌙 Dark Mode / ☀️ Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {isDark ? (
                    <Sun size={16} color="#FFA530" />
                  ) : (
                    <Moon size={16} color="var(--primary-navy)" />
                  )}
                  <span>{isDark ? (t('themeLight') || "Light Mode") : (t('themeDark') || "Dark Mode")}</span>
                </div>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    color: isDark ? '#FFA530' : 'var(--text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {isDark ? "Dark" : "Light"}
                </span>
              </button>

              {/* Row 4: ↻ Reset All Settings */}
              <button
                onClick={handleReset}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '9px 14px',
                  borderRadius: 'var(--radius-md)',
                  background: 'transparent',
                  border: '1px dashed var(--border-card)',
                  color: 'var(--text-muted)',
                  fontSize: '12px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  marginTop: '2px',
                  transition: 'all 0.18s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFA530';
                  e.currentTarget.style.borderColor = '#FFA530';
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'var(--border-card)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <RotateCcw size={13} />
                <span>{t('resetAccessibility') || "Reset Settings"}</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .accessibility-floating-wrapper {
            bottom: calc(76px + env(safe-area-inset-bottom, 0px)) !important;
            right: 16px !important;
          }
        }
      `}</style>
    </>
  );
};

export default AccessibilityToolbar;
