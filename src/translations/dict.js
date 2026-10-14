// SchemeFlow Multilingual Localization Dictionary
// Modular architecture supporting all 12 major scheduled Indian regional languages
import { en } from './locales/en.js';
import { hi } from './locales/hi.js';
import { bn } from './locales/bn.js';
import { mr } from './locales/mr.js';
import { te } from './locales/te.js';
import { ta } from './locales/ta.js';
import { gu } from './locales/gu.js';
import { kn } from './locales/kn.js';
import { ml } from './locales/ml.js';
import { or } from './locales/or.js';
import { pa } from './locales/pa.js';
import { as } from './locales/as.js';
import { SUPPORTED_LANGUAGES, getLanguageConfig, getSpeechVoice } from './languages.js';

export const translations = {
  en,
  hi,
  bn,
  mr,
  te,
  ta,
  gu,
  kn,
  ml,
  or,
  pa,
  as
};

export { SUPPORTED_LANGUAGES, getLanguageConfig, getSpeechVoice };
export default translations;
