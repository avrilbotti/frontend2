import React, { useState, useEffect, useRef } from 'react';
import './HeroSection.css';
import { FiArrowRight, FiPlay, FiPause } from 'react-icons/fi';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={`hero-section ${scrollY > 50 ? 'scrolled' : ''}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="video-bg"
        poster="/video-poster.jpg"
        playsInline
      >
        <source src="/future-tech.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5
      </video>

      <div className="particles-overlay"></div>

      <nav className="hero-nav">
        <div className="nav-logo">WorkNow</div>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <button className="nav-button">Demo</button>
        </div>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">WorkNow</span>
          <span>Impulsamos el futuro con tecnología</span>
        </h1>
        <p className="hero-subtitle">Soluciones inteligentes para un mundo digital</p>

        <div className="hero-cta">
          <button className="cta-primary">
            Comenzar proyecto <FiArrowRight />
          </button>
          <button className="cta-secondary">
            Ver soluciones
          </button>
        </div>
      </div>

      <button
        className="video-control"
        onClick={toggleVideo}
        aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
      >
        {isPlaying ? <FiPause /> : <FiPlay />}
      </button>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;
