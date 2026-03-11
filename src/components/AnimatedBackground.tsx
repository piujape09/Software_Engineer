import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let shootingStars: ShootingStar[] = [];
    const particleCount = window.innerWidth < 768 ? 150 : 300;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      size: number;
      baseOpacity: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
      parallax: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.05;
        this.vy = (Math.random() - 0.5) * 0.05;
        this.size = Math.random() * 1.5;
        this.baseOpacity = Math.random() * 0.5 + 0.1;
        this.opacity = this.baseOpacity;
        this.twinkleSpeed = 0.005 + Math.random() * 0.02;
        this.twinklePhase = Math.random() * Math.PI * 2;
        this.parallax = 0.1 + Math.random() * 0.5;
      }

      update() {
        // Apply mouse parallax
        const dx = (mouseRef.current.x - window.innerWidth / 2) * (this.parallax * 0.05);
        const dy = (mouseRef.current.y - window.innerHeight / 2) * (this.parallax * 0.05);
        
        this.baseX += this.vx;
        this.baseY += this.vy;

        if (this.baseX < 0) this.baseX = canvas!.width;
        if (this.baseX > canvas!.width) this.baseX = 0;
        if (this.baseY < 0) this.baseY = canvas!.height;
        if (this.baseY > canvas!.height) this.baseY = 0;

        this.x = this.baseX + dx;
        this.y = this.baseY + dy;

        // Sparkling effect
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.15;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.05, this.opacity)})`;
        ctx.fill();
        
        if (this.baseOpacity > 0.4) {
          ctx.shadowBlur = 4;
          ctx.shadowColor = 'white';
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    class ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height * 0.5;
        this.length = Math.random() * 80 + 20;
        this.speed = Math.random() * 10 + 5;
        this.opacity = 0;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2;
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity += 0.05;
        
        if (this.x > canvas!.width || this.y > canvas!.height) {
          this.reset();
        }
      }

      draw() {
        if (!ctx) return;
        const grad = ctx.createLinearGradient(
          this.x, this.y, 
          this.x - Math.cos(this.angle) * this.length, 
          this.y - Math.sin(this.angle) * this.length
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${Math.min(0.8, this.opacity)})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
          this.x - Math.cos(this.angle) * this.length, 
          this.y - Math.sin(this.angle) * this.length
        );
        ctx.stroke();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      shootingStars = [new ShootingStar()];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawNebula = () => {
      if (!ctx) return;
      const time = Date.now() * 0.0005;
      
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      
      // Subtle Indigo Cloud
      const grad1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 100, 
        canvas.height * 0.3 + Math.cos(time) * 100, 
        0, 
        canvas.width * 0.3, 
        canvas.height * 0.3, 
        canvas.width * 0.6
      );
      grad1.addColorStop(0, 'rgba(99, 102, 241, 0.03)');
      grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle Violet Cloud
      const grad2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 0.8) * 100, 
        canvas.height * 0.7 + Math.sin(time * 0.8) * 100, 
        0, 
        canvas.width * 0.7, 
        canvas.height * 0.7, 
        canvas.width * 0.6
      );
      grad2.addColorStop(0, 'rgba(139, 92, 246, 0.03)');
      grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.restore();
    };

    const animate = () => {
      // Deep space gradient background
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#020408');
      grad.addColorStop(1, '#05070a');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawNebula();

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      if (Math.random() < 0.005) {
        shootingStars.push(new ShootingStar());
      }

      shootingStars = shootingStars.filter(s => {
        s.update();
        s.draw();
        return s.opacity < 2; // Simple life check
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
