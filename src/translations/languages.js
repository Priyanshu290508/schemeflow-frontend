// SchemeFlow Supported Indian Languages Configuration
// 12 Major Scheduled Languages with Native Scripts and Web Speech API Voice Codes

export const SUPPORTED_LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    speechCode: 'en-IN',
    voiceKeywords: ['en-in', 'en_in', 'english', 'india', 'en-gb', 'en-us']
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    speechCode: 'hi-IN',
    voiceKeywords: ['hi-in', 'hi_in', 'hindi', 'kalpana', 'hemant']
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇮🇳',
    speechCode: 'bn-IN',
    voiceKeywords: ['bn-in', 'bn_in', 'bengali', 'bangla', 'tapan', 'bashkar']
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    flag: '🇮🇳',
    speechCode: 'mr-IN',
    voiceKeywords: ['mr-in', 'mr_in', 'marathi', 'aarohi']
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    speechCode: 'te-IN',
    voiceKeywords: ['te-in', 'te_in', 'telugu', 'chitra', 'mohan']
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    speechCode: 'ta-IN',
    voiceKeywords: ['ta-in', 'ta_in', 'tamil', 'valluvar', 'vani']
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    flag: '🇮🇳',
    speechCode: 'gu-IN',
    voiceKeywords: ['gu-in', 'gu_in', 'gujarati', 'dhwani', 'niranjan']
  },
  {
    code: 'kn',
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
    flag: '🇮🇳',
    speechCode: 'kn-IN',
    voiceKeywords: ['kn-in', 'kn_in', 'kannada', 'sapna', 'gagan']
  },
  {
    code: 'ml',
    name: 'Malayalam',
    nativeName: 'മലയാളം',
    flag: '🇮🇳',
    speechCode: 'ml-IN',
    voiceKeywords: ['ml-in', 'ml_in', 'malayalam', 'sobha', 'midhun']
  },
  {
    code: 'or',
    name: 'Odia',
    nativeName: 'ଓଡ଼ିଆ',
    flag: '🇮🇳',
    speechCode: 'or-IN',
    voiceKeywords: ['or-in', 'or_in', 'odia', 'oriya']
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    flag: '🇮🇳',
    speechCode: 'pa-IN',
    voiceKeywords: ['pa-in', 'pa_in', 'punjabi', 'gurmukhi', 'raavi']
  },
  {
    code: 'as',
    name: 'Assamese',
    nativeName: 'অসমীয়া',
    flag: '🇮🇳',
    speechCode: 'as-IN',
    voiceKeywords: ['as-in', 'as_in', 'assamese', 'asomiya']
  }
];

export const getLanguageConfig = (code) => {
  if (!code) return SUPPORTED_LANGUAGES[0];
  const normalized = code.toLowerCase().split('-')[0];
  return SUPPORTED_LANGUAGES.find((l) => l.code === normalized) || SUPPORTED_LANGUAGES[0];
};

export const getSpeechVoice = (langCode, availableVoices = []) => {
  const config = getLanguageConfig(langCode);
  if (!availableVoices || availableVoices.length === 0) {
    return { langCode: config.speechCode, voice: null };
  }

  // 1. Direct match by speechCode (e.g., 'mr-IN')
  let match = availableVoices.find(
    (v) => v.lang && v.lang.toLowerCase() === config.speechCode.toLowerCase()
  );

  // 2. Prefix match (e.g., 'mr' in 'mr-IN')
  if (!match) {
    match = availableVoices.find(
      (v) => v.lang && v.lang.toLowerCase().startsWith(config.code + '-')
    );
  }

  // 3. Keyword match on voice name or language description
  if (!match) {
    match = availableVoices.find((v) => {
      const vName = (v.name || '').toLowerCase();
      const vLang = (v.lang || '').toLowerCase();
      return config.voiceKeywords.some((kw) => vName.includes(kw) || vLang.includes(kw));
    });
  }

  // 4. Fallback to en-IN or default available voice
  if (!match && config.code !== 'en') {
    match = availableVoices.find(
      (v) => (v.lang && (v.lang.includes('en-IN') || v.lang.includes('en-GB') || v.lang.includes('en-US'))) ||
             (v.name && v.name.toLowerCase().includes('india'))
    );
  }

  return {
    langCode: match ? match.lang : config.speechCode,
    voice: match || null
  };
};
