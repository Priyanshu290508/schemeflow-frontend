import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PathDrawingPortfolioHero from '@/components/ui/path-drawing-portfolio-hero';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export function OpeningSplashScreen({ onFinish, durationSec = 5 }) {
  const [progress, setProgress] = useState(0);

  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    const durationMs = durationSec * 1000;

    let frameId;
    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100));
      setProgress(pct);

      if (elapsed < durationMs) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        triggerExit();
      }
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [durationSec]);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }, 450); // Fluid fast fade-out
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="opening-splash-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}

          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 999999,
            backgroundColor: '#070e1c',
            backgroundImage: `
              radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255, 165, 48, 0.18), transparent),
              radial-gradient(ellipse 60% 50% at 80% 110%, rgba(34, 61, 121, 0.35), transparent),
              radial-gradient(circle at 20% 80%, rgba(24, 200, 255, 0.08), transparent)
            `,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            color: '#ffffff',
          }}
        >
          {/* Subtle Ambient Light Orb */}
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '600px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(255, 165, 48, 0.12) 0%, rgba(0,0,0,0) 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* Quick Skip Button in corner */}
          <button
            onClick={triggerExit}
            aria-label="Skip intro animation"
            style={{
              position: 'absolute',
              top: 'calc(16px + env(safe-area-inset-top, 0px))',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'rgba(255, 255, 255, 0.85)',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              zIndex: 100,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 165, 48, 0.25)';
              e.currentTarget.style.color = '#FFA530';
              e.currentTarget.style.borderColor = 'rgba(255, 165, 48, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <span>Skip</span>
            <ArrowRight size={13} />
          </button>

          {/* Main Animated SVG Path Hero */}
          <div style={{ width: '100%', maxWidth: '1100px', pointerEvents: 'none', padding: '0 12px' }}>
            <PathDrawingPortfolioHero
              brand="SCHEMEFLOW"
              eyebrow="NATIONAL GOVERNMENT SCHEME GATEWAY"
              tagline="Personalized, Explainable Discovery & Eligibility Assistant"
              fromColor="#FFA530"
              toColor="#FFD285"
              durationSec={durationSec - 0.5}
              loop={false}
              className="min-h-[45vh]"
            />
          </div>

          {/* Bottom Countdown Progress Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              maxWidth: '300px',
              padding: '0 20px',
              zIndex: 10,
            }}
          >

            {/* Live Progress Track */}
            <div
              style={{
                width: '100%',
                height: '3px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '999px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #FFA530 0%, #FFD285 100%)',
                  boxShadow: '0 0 12px rgba(255, 165, 48, 0.8)',
                  borderRadius: '999px',
                  transition: 'width 0.08s linear',
                }}
              />
            </div>

            {/* Status caption */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Sparkles size={12} color="#FFA530" /> Loading Gateway...
              </span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OpeningSplashScreen;
