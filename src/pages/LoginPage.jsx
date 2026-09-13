import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
  Building2,
  Lock,
  Mail,
  Compass,
  ArrowLeft,
  GraduationCap,
  Quote
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { MovingLinesCanvas } from '../components/MovingLinesCanvas';


export function LoginPage({ setActivePage, onLoginSuccess }) {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess({ email, name: name || email.split('@')[0] });
      }
      setActivePage('dashboard');
    }, 600);
  };

  const handleGoogleLogin = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof onLoginSuccess === 'function') {
        onLoginSuccess({ email: 'user@gmail.com', name: 'Verified Citizen' });
      }
      setActivePage('dashboard');
    }, 500);
  };

  return (
    <div style={{
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 16px',
      width: '100%',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient Moving Wave Lines Canvas for entire portal */}
      <MovingLinesCanvas
        lineCount={14}
        lineColor="rgba(34, 61, 121, 0.08)"
        highlightColor="rgba(255, 165, 48, 0.15)"
        dashColor="rgba(34, 61, 121, 0.2)"
        speed={0.004}
      />
      {/* Back to Dashboard Link */}
      <div style={{ width: '100%', maxWidth: '880px', marginBottom: '16px' }}>
        <motion.button
          onClick={() => setActivePage('dashboard')}
          initial="idle"
          whileHover="hover"
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            color: 'var(--primary-navy)',
            borderRadius: 'var(--radius-pill)',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 700,
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: 'var(--shadow-card)',
            transition: 'all 0.2s ease',
          }}
        >
          <motion.span
            variants={{
              idle: { x: [0, -3, 0], transition: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } },
              hover: { x: -6, transition: { type: 'spring', stiffness: 400, damping: 12 } },
            }}
            style={{ display: 'inline-flex', alignItems: 'center' }}
          >
            <ArrowLeft size={16} />
          </motion.span>
          <span>{t('backToSchemes')}</span>
        </motion.button>
      </div>

      {/* Main Split Authentication Card */}
      <div
        className="auth-split-card"
        style={{
          width: '100%',
          maxWidth: '880px',
          background: 'var(--bg-card)',
          borderRadius: '24px',
          boxShadow: 'var(--shadow-float)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          position: 'relative',
          border: '1px solid var(--border-card)',
        }}
      >
        {/* =========================================================================
            LEFT PANEL: BRAND & REAL-TIME MOVING WAVE LINES BACKGROUND (Matching Screenshot)
            ========================================================================= */}
        <div
          style={{
            background: 'var(--bg-navy-gradient)',
            padding: '48px 36px 40px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '480px',
            color: '#FFFFFF',
          }}
        >
          {/* Animated Mathematical Moving Wave Lines Canvas */}
          <MovingLinesCanvas
            lineCount={20}
            lineColor="rgba(255, 255, 255, 0.14)"
            highlightColor="rgba(255, 165, 48, 0.45)"
            dashColor="rgba(255, 255, 255, 0.65)"
            speed={0.007}
          />

          {/* Soft Radial Ambient Vignette for Depth */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 10% 90%, rgba(255, 165, 48, 0.12) 0%, transparent 60%), radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* TOP HEADER: Brand Logo matching Reference */}
          <div style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
              }}
            >
              <GraduationCap size={19} strokeWidth={2.4} color="#FFA530" />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '18px',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}>
                SchemeFlow
              </div>
              <div style={{
                fontSize: '9px',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.6)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {t('publicWelfare') || 'Public Welfare'}
              </div>
            </div>
          </div>

          {/* BOTTOM TESTIMONIAL: Matching Reference Screenshot Exact Quote Layout */}
          <div style={{ position: 'relative', zIndex: 3, maxWidth: '340px', marginTop: 'auto' }}>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: 1.55,
                marginBottom: '14px',
                letterSpacing: '-0.01em',
                fontFamily: 'var(--font-main)',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              “This Platform has helped me to save time and serve my clients faster than ever before.”
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.95)' }}>
                ~ Ali Hassan
              </span>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#FFA530',
                background: 'rgba(255, 165, 48, 0.16)',
                padding: '2px 8px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 165, 48, 0.3)',
              }}>
                Verified Beneficiary
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT PANEL: AUTHENTICATION FORM
            ========================================================================= */}
        <div
          style={{
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'var(--bg-card)',
          }}
        >
          {/* Header Title */}
          <div style={{ marginBottom: '24px' }}>
            <h1
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.2,
                marginBottom: '6px',
                letterSpacing: '-0.02em',
              }}
            >
              {isSignUpMode ? t('createAccount') : t('welcomeBack')}
            </h1>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {isSignUpMode
                ? t('signupSub')
                : t('loginSub')}
            </p>
          </div>

          {/* 1. Login with Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-card)',
              borderRadius: '12px',
              padding: '11px 16px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-main)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '20px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--primary-orange)';
              e.currentTarget.style.boxShadow = '0 4px 12px var(--primary-orange-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-card)';
              e.currentTarget.style.boxShadow = 'var(--shadow-card)';
            }}
          >
            {/* Google Multi-Color G Icon */}
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{isSignUpMode ? t('googleSignUp') : t('googleLogin')}</span>
          </button>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
              {t('orWithEmail')}
            </span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Full Name Field (Sign Up Only) */}
            {isSignUpMode && (
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                  {t('fullName')} <span style={{ color: 'var(--primary-orange)' }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('enterFullName')}
                  style={{
                    width: '100%',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '10px',
                    padding: '11px 14px',
                    fontSize: '13px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.borderColor = 'var(--primary-orange)';
                    e.target.style.boxShadow = '0 0 0 3px var(--primary-orange-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'var(--bg-subtle)';
                    e.target.style.borderColor = 'var(--border-card)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                {t('labelEmail')} <span style={{ color: 'var(--primary-orange)' }}>*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('enterEmail')}
                style={{
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  border: '1px solid var(--border-card)',
                  borderRadius: '10px',
                  padding: '11px 14px',
                  fontSize: '13px',
                  color: 'var(--text-main)',
                  outline: 'none',
                  transition: 'all 0.2s ease',
                }}
                onFocus={(e) => {
                  e.target.style.background = 'var(--bg-card)';
                  e.target.style.borderColor = 'var(--primary-orange)';
                  e.target.style.boxShadow = '0 0 0 3px var(--primary-orange-light)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'var(--bg-subtle)';
                  e.target.style.borderColor = 'var(--border-card)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Password Field */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                {t('labelPassword')} <span style={{ color: 'var(--primary-orange)' }}>*</span>
              </label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('enterPassword')}
                  style={{
                    width: '100%',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '10px',
                    padding: '11px 40px 11px 14px',
                    fontSize: '13px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'var(--bg-card)';
                    e.target.style.borderColor = 'var(--primary-orange)';
                    e.target.style.boxShadow = '0 0 0 3px var(--primary-orange-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'var(--bg-subtle)';
                    e.target.style.borderColor = 'var(--border-card)';
                    e.target.style.boxShadow = 'none';
                  }}
                />

                {/* Password Visibility Eye Icon */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Primary Action Button with Animated Arrow */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial="idle"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              style={{
                marginTop: '6px',
                width: '100%',
                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '10px',
                padding: '12px 16px',
                fontSize: '14px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                boxShadow: '0 8px 20px rgba(37, 99, 235, 0.35)',
                transition: 'box-shadow 0.2s ease',
              }}
            >
              <span>{isSubmitting ? t('authenticating') : isSignUpMode ? t('createAccountBtn') : t('signInBtn')}</span>
              <motion.span
                variants={{
                  idle: { x: [0, 4, 0], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } },
                  hover: { x: 7, transition: { type: 'spring', stiffness: 400, damping: 12 } },
                }}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <ArrowRight size={17} strokeWidth={2.6} />
              </motion.span>
            </motion.button>

          </form>

          {/* Footer Toggle / Forgot Password */}
          <div style={{ marginTop: '18px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {!isSignUpMode && (
              <a
                href="#forgot"
                onClick={(e) => { e.preventDefault(); alert("Password reset link has been sent to your email."); }}
                style={{ fontSize: '12px', color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}
              >
                {t('forgotPassword')}
              </a>
            )}

            <div style={{ fontSize: '12px', color: '#64748B' }}>
              {isSignUpMode ? t('alreadyAccount') : t('dontHaveAccount')}
              <button
                type="button"
                onClick={() => setIsSignUpMode(!isSignUpMode)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563EB',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '12px',
                }}
              >
                {isSignUpMode ? t('signInLink') : t('signUpLink')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
