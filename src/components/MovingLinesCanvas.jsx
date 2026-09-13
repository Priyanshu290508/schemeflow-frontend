import React, { useEffect, useRef } from 'react';

/**
 * MovingLinesCanvas
 * Renders smooth, silky, mathematical wave lines with moving stream particles/dashes
 * matching the user's reference image on a sleek dark canvas.
 */
export const MovingLinesCanvas = ({
  lineCount = 18,
  lineColor = 'rgba(255, 255, 255, 0.12)',
  highlightColor = 'rgba(255, 165, 48, 0.35)',
  dashColor = 'rgba(255, 255, 255, 0.45)',
  speed = 0.008,
  style = {}
}) => {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio || 600;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio || 400;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    let time = 0;

    // Pre-generate wave lines parameters
    const lines = [];
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        baseYOffset: (i / lineCount) * 160 - 80,
        frequency1: 0.0022 + i * 0.0001,
        frequency2: 0.0035 + i * 0.00008,
        amplitude1: 45 + (i % 5) * 8,
        amplitude2: 30 + (i % 3) * 10,
        phase: i * 0.14,
        dashOffsetSpeed: 1.2 + (i % 4) * 0.4,
        isHighlight: i % 4 === 0,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += speed;

      // Diagonal flowing wave lines from bottom-left to mid-right
      const startY = height * 0.65;
      const endY = height * 0.28;

      lines.forEach((line) => {
        ctx.beginPath();
        const numPoints = 80;
        const step = width / numPoints;

        for (let j = 0; j <= numPoints; j++) {
          const x = j * step;
          const progress = x / width;

          // Linear base interpolation across diagonal
          const linearY = startY + (endY - startY) * progress + line.baseYOffset * (window.devicePixelRatio || 1);

          // Harmonic waves
          const wave1 = Math.sin(x * line.frequency1 + time * 1.5 + line.phase) * line.amplitude1;
          const wave2 = Math.cos(x * line.frequency2 - time * 1.2 + line.phase) * line.amplitude2;
          const wave3 = Math.sin((x + time * 60) * 0.001) * 18;

          const y = linearY + wave1 + wave2 + wave3;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        // Draw background wave line
        ctx.strokeStyle = line.isHighlight ? highlightColor : lineColor;
        ctx.lineWidth = (line.isHighlight ? 1.6 : 1.1) * (window.devicePixelRatio || 1);
        ctx.setLineDash([]);
        ctx.stroke();

        // Draw animated flowing dashes (like the moving dashed segments in the reference image)
        ctx.beginPath();
        for (let j = 0; j <= numPoints; j++) {
          const x = j * step;
          const progress = x / width;
          const linearY = startY + (endY - startY) * progress + line.baseYOffset * (window.devicePixelRatio || 1);
          const wave1 = Math.sin(x * line.frequency1 + time * 1.5 + line.phase) * line.amplitude1;
          const wave2 = Math.cos(x * line.frequency2 - time * 1.2 + line.phase) * line.amplitude2;
          const wave3 = Math.sin((x + time * 60) * 0.001) * 18;
          const y = linearY + wave1 + wave2 + wave3;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = line.isHighlight ? 'rgba(255, 165, 48, 0.7)' : dashColor;
        ctx.lineWidth = (line.isHighlight ? 1.8 : 1.2) * (window.devicePixelRatio || 1);
        ctx.setLineDash([24 * (window.devicePixelRatio || 1), 60 * (window.devicePixelRatio || 1)]);
        ctx.lineDashOffset = -(time * 120 * line.dashOffsetSpeed);
        ctx.stroke();
      });

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [lineCount, lineColor, highlightColor, dashColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style
      }}
    />
  );
};

export default MovingLinesCanvas;
