import React from 'react';
import HeroSection from '../components/HeroSection';
import TechFeatures from '../components/TechFeatures'; 
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <HeroSection />
      

      <TechFeatures />

      <section className="tech-testimonials">
        <div className="tech-testimonials-header">
          <h2 className="tech-glitch">Clientes que confían en nosotros</h2>
          <p className="tech-subtitle">Experiencias reales con nuestra tecnología</p>
        </div>
        
        <div className="testimonial-grid">
          <div className="holographic-card">
            <div className="holographic-content">
              <div className="quote-icon">“</div>
              <blockquote>
                <p>Transformamos nuestro rendimiento un 200% con sus soluciones IA</p>
              </blockquote>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div className="client-details">
                  <strong>María González</strong>
                  <span>CTO, TechCorp</span>
                </div>
              </div>
            </div>
            <div className="holographic-effect"></div>
          </div>

          <div className="holographic-card">
            <div className="holographic-content">
              <div className="quote-icon">“</div>
              <blockquote>
                <p>Implementación rápida y soporte 24/7 que marca la diferencia</p>
              </blockquote>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div className="client-details">
                  <strong>Carlos Ruiz</strong>
                  <span>CEO, DigitalMind</span>
                </div>
              </div>
            </div>
            <div className="holographic-effect"></div>
          </div>
          
          <div className="holographic-card">
            <div className="holographic-content">
              <div className="quote-icon">“</div>
              <blockquote>
                <p>Su plataforma redujo nuestros costos operativos en un 40%</p>
              </blockquote>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div className="client-details">
                  <strong>Ana López</strong>
                  <span>Directora de Operaciones</span>
                </div>
              </div>
            </div>
            <div className="holographic-effect"></div>
          </div>
        </div>

        <div className="live-stats">
          <div className="stat-item">
            <div className="stat-value" data-count="150">0</div>
            <div className="stat-label">Proyectos completados</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" data-count="98">0</div>
            <div className="stat-label">Clientes satisfechos</div>
          </div>
          <div className="stat-item">
            <div className="stat-value" data-count="24">0</div>
            <div className="stat-label">Soporte 24/7</div>
          </div>
        </div>
      </section>

      
      <section className="tech-newsletter">
        <h3>Únete a la revolución tecnológica</h3>
        <p>Recibe insights y actualizaciones directamente en tu inbox</p>
        <form className="newsletter-form">
          <input type="email" placeholder="tu@email.com" required />
          <button type="submit">Suscribirse <span className="arrow">→</span></button>
        </form>
      </section>
    </div>
  );
}

export default Home;