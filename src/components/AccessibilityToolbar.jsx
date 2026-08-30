import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Volume2, VolumeX, Eye, Type } from 'lucide-react';

export const AccessibilityToolbar = () => {
  const { lang } = useLanguage();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSizeScale, setFontSizeScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSizeScale}%`;
  }, [fontSizeScale]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast-mode');
    } else {
      document.body.classList.remove('high-contrast-mode');
    }
  }, [highContrast]);

  const handleReadPage = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const mainContent = document.querySelector('.main-viewport') || document.querySelector('main');
    if (!mainContent) return;

    const textToRead = mainContent.innerText.slice(0, 1500);
    const utterance = new SpeechSynthesisUtterance(textToRead);

    if (lang === 'hi') utterance.lang = 'hi-IN';
    else if (lang === 'bn') utterance.lang = 'bn-IN';
    else utterance.lang = 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  return (
    <div style={{
      background: '#FFFFFF',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '6px 20px',
      fontSize: '11px',
      color: 'var(--text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '8px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span className="badge badge-navy" style={{ fontSize: '10px', padding: '2px 8px' }}>
          Voice & Accessibility Mode
        </span>
        <span style={{ color: 'var(--text-muted)' }}>
          Assisting low-literacy & rural citizens
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Read Out Loud TTS */}
        <button
          onClick={handleReadPage}
          style={{
            background: isPlayingAudio ? 'var(--primary-orange-light)' : 'var(--bg-secondary)',
            border: 'none',
            color: isPlayingAudio ? 'var(--primary-orange)' : 'var(--primary-navy)',
            borderRadius: 'var(--radius-pill)',
            padding: '3px 10px',
            fontSize: '11px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer'
          }}
        >
          {isPlayingAudio ? <VolumeX size={12} /> : <Volume2 size={12} />}
          <span>{isPlayingAudio ? 'Stop Audio' : 'Listen to Screen'}</span>
        </button>

        {/* Font Scaler */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Type size={12} color="var(--primary-navy)" />
          <button
            onClick={() => setFontSizeScale(100)}
            style={{
              background: fontSizeScale === 100 ? 'var(--primary-navy)' : 'transparent',
              color: fontSizeScale === 100 ? '#FFFFFF' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '4px',
              padding: '2px 5px',
              fontWeight: 700,
              fontSize: '10px',
              cursor: 'pointer'
            }}
          >
            A
          </button>
          <button
            onClick={() => setFontSizeScale(115)}
            style={{
              background: fontSizeScale === 115 ? 'var(--primary-navy)' : 'transparent',
              color: fontSizeScale === 115 ? '#FFFFFF' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '4px',
              padding: '2px 5px',
              fontWeight: 700,
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            A+
          </button>
        </div>

        {/* High Contrast Toggle */}
        <button
          onClick={() => setHighContrast(!highContrast)}
          style={{
            background: highContrast ? 'var(--warning-bg)' : 'transparent',
            border: '1px solid ' + (highContrast ? 'var(--warning)' : 'var(--border-card)'),
            color: highContrast ? 'var(--warning)' : 'var(--text-muted)',
            borderRadius: 'var(--radius-pill)',
            padding: '2px 8px',
            fontSize: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '3px'
          }}
        >
          <Eye size={11} />
          <span>{highContrast ? 'Contrast ON' : 'High Contrast'}</span>
        </button>
      </div>
    </div>
  );
};
