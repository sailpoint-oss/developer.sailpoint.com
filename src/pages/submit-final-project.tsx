import confetti from 'canvas-confetti';
import React, { useEffect, useRef, useState } from 'react';

export default function SubmitFinalProject() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [celebrating, setCelebrating] = useState(false);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const handleCelebrate = () => {
    setCelebrating(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    const duration = 10000; // 10 seconds
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
      colors: ['#ffffff', '#0033a1', '#d60eb5', '#54c0e8'],
      disableForReducedMotion: true,
      useWorker: true,
      resize: true,
    };

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        setCelebrating(false);
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        return;
      }
      const particleCount = 100 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a174e 0%, #1b274f 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {dimensions && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
          }}
          width={dimensions.width}
          height={dimensions.height}
        />
      )}
      <audio ref={audioRef} src="/files/crowd-cheers.mp3" preload="auto" />
      {celebrating ? (
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff', textShadow: '0 2px 16px #0033a1' }}>
          Congratulations!
        </h1>
      ) : (
        <>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1a202c' }}>
            Submit Your Final Project!
          </h1>
          <button
            onClick={handleCelebrate}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.5rem',
              borderRadius: '2rem',
              border: 'none',
              background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 4px 24px rgba(99,102,241,0.15)',
              transition: 'background 0.2s',
            }}
          >
            🎉 Submit & Celebrate!
          </button>
        </>
      )}
    </div>
  );
}