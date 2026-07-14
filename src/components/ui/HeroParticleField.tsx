import { useEffect, useRef } from "react";

interface Particle {
  baseX: number;
  baseY: number;
  radius: number;
  phase: number;
  amplitude: number;
  speed: number;
  fixed: boolean;
}

const profilePoints = [
  [0.79, 0.15],
  [0.75, 0.18],
  [0.72, 0.23],
  [0.71, 0.29],
  [0.73, 0.34],
  [0.7, 0.38],
  [0.74, 0.41],
  [0.72, 0.46],
  [0.75, 0.51],
  [0.74, 0.58],
  [0.71, 0.64],
  [0.67, 0.7],
] as const;

function createRandom(seed: number) {
  let state = seed;

  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function buildParticles(width: number, height: number) {
  const random = createRandom(20260713);
  const ambientCount = width < 640 ? 34 : 68;
  const particles: Particle[] = Array.from({ length: ambientCount }, () => ({
    baseX: random() * width,
    baseY: random() * height * 0.82,
    radius: 0.7 + random() * 1.5,
    phase: random() * Math.PI * 2,
    amplitude: 2 + random() * 5,
    speed: 0.18 + random() * 0.22,
    fixed: false,
  }));

  if (width >= 768) {
    profilePoints.forEach(([x, y], index) => {
      particles.push({
        baseX: x * width,
        baseY: y * height,
        radius: index % 3 === 0 ? 2.2 : 1.4,
        phase: index * 0.55,
        amplitude: 0,
        speed: 0.25,
        fixed: true,
      });
    });
  }

  return particles;
}

function HeroParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      particles = buildParticles(width, height);
    };

    const draw = (timestamp = 0) => {
      const time = timestamp / 1000;
      context.clearRect(0, 0, width, height);

      const positions = particles.map((particle) => {
        if (particle.fixed || reducedMotion.matches) {
          return { x: particle.baseX, y: particle.baseY };
        }

        return {
          x: particle.baseX + Math.sin(time * particle.speed + particle.phase) * particle.amplitude,
          y: particle.baseY + Math.cos(time * particle.speed * 0.8 + particle.phase) * particle.amplitude,
        };
      });

      const connectionDistance = width < 640 ? 88 : 138;
      for (let first = 0; first < positions.length; first += 1) {
        for (let second = first + 1; second < positions.length; second += 1) {
          const horizontal = positions[first].x - positions[second].x;
          const vertical = positions[first].y - positions[second].y;
          const distance = Math.hypot(horizontal, vertical);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.22;
            context.beginPath();
            context.moveTo(positions[first].x, positions[first].y);
            context.lineTo(positions[second].x, positions[second].y);
            context.strokeStyle = `rgba(245, 165, 32, ${opacity})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      positions.forEach(({ x, y }, index) => {
        const particle = particles[index];
        const pulse = reducedMotion.matches ? 1 : 0.82 + Math.sin(time * 0.7 + particle.phase) * 0.18;

        context.beginPath();
        context.arc(x, y, particle.radius * pulse, 0, Math.PI * 2);
        context.fillStyle = particle.fixed ? "rgba(255, 184, 56, 0.82)" : "rgba(245, 165, 32, 0.58)";
        context.shadowColor = "rgba(245, 165, 32, 0.52)";
        context.shadowBlur = particle.fixed ? 9 : 5;
        context.fill();
      });

      context.shadowBlur = 0;

      if (!reducedMotion.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const render = () => {
      window.cancelAnimationFrame(animationFrame);
      resize();
      draw();
    };

    render();
    window.addEventListener("resize", render);
    reducedMotion.addEventListener("change", render);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", render);
      reducedMotion.removeEventListener("change", render);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particle-field" aria-hidden="true" />;
}

export default HeroParticleField;
