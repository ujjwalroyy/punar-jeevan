// src/components/SmokeEffect.js

import React, { useRef, useEffect } from 'react';

const SmokeEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const maxParticles = 100;

    const createParticle = (x, y) => {
      const size = Math.random() * 5 + 1;
      const speedX = Math.random() * 2 - 1;
      const speedY = Math.random() * -2 - 1;
      const opacity = Math.random() * 0.5 + 0.5;

      particles.push({ x, y, size, speedX, speedY, opacity });
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.01;
        if (p.opacity <= 0) particles.splice(i, 1);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 200, ${p.opacity})`;
        ctx.fill();
      }
    };

    const handleMouseMove = (e) => {
      const { offsetX, offsetY } = e;
      for (let i = 0; i < 5; i++) {
        createParticle(offsetX, offsetY);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      updateParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
};

export default SmokeEffect;
