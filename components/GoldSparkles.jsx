'use client';

import { useEffect, useRef } from 'react';
import styles from './GoldSparkles.module.css';

export default function GoldSparkles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reduce particle load on mobile
    const isMobile = window.innerWidth <= 768;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const goldColors = [
        'rgba(212, 168, 67, ',
        'rgba(232, 199, 106, ',
        'rgba(240, 220, 160, ',
        'rgba(184, 146, 46, ',
        'rgba(255, 248, 231, ',
      ];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (isMobile ? 2 : 2.5) + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        opacitySpeed: (Math.random() - 0.5) * 0.008,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
        life: 0,
        maxLife: Math.random() * 400 + 200,
      };
    };

    const init = () => {
      resize();
      particles = [];
      // Much fewer particles on mobile to save battery and GPU
      const maxParticles = isMobile ? 25 : 80;
      const count = Math.min(Math.floor((canvas.width * canvas.height) / (isMobile ? 30000 : 15000)), maxParticles);
      for (let i = 0; i < count; i++) {
        const p = createParticle();
        p.life = Math.random() * p.maxLife;
        particles.push(p);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity <= 0.05 || p.opacity >= 0.6) {
          p.opacitySpeed *= -1;
        }

        if (p.life >= p.maxLife) {
          particles[index] = createParticle();
          return;
        }

        const fadeIn = Math.min(p.life / 60, 1);
        const fadeOut = Math.min((p.maxLife - p.life) / 60, 1);
        const alpha = p.opacity * fadeIn * fadeOut;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + alpha + ')';
        ctx.fill();

        // Star-shaped highlight on larger particles (skip on mobile for perf)
        if (!isMobile && p.size > 1.8) {
          ctx.beginPath();
          ctx.moveTo(p.x - p.size * 1.5, p.y);
          ctx.lineTo(p.x + p.size * 1.5, p.y);
          ctx.moveTo(p.x, p.y - p.size * 1.5);
          ctx.lineTo(p.x, p.y + p.size * 1.5);
          ctx.strokeStyle = p.color + (alpha * 0.4) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.sparkleCanvas} aria-hidden="true" />;
}
