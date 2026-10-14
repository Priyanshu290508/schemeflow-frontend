import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, SUPPORTED_LANGUAGES, getLanguageConfig, getSpeechVoice } from '../translations/dict';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('schemeflow_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('schemeflow_lang', lang);
    // Also update document lang attribute for accessibility screen readers
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = (key) => {
    const langDict = translations[lang] || translations.en;
    return langDict[key] || translations.en[key] || key;
  };

  const currentLanguageConfig = getLanguageConfig(lang);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        language: lang,
        setLang,
        setLanguage: setLang,
        t,
        supportedLanguages: SUPPORTED_LANGUAGES,
        currentLanguageConfig,
        getSpeechVoice: (voices) => getSpeechVoice(lang, voices)
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
