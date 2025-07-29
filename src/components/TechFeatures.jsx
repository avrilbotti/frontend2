import React from 'react';
import './TechFeatures.css';

const TechFeatures = () => {
  return (
    <section className="tech-features">
      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">AI</div>
          <h3>Inteligencia Artificial</h3>
          <p>Soluciones predictivas y automatización inteligente para tu negocio.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">☁</div>
          <h3>Cloud Computing</h3>
          <p>Infraestructura escalable y segura en la nube.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Ciberseguridad</h3>
          <p>Protección avanzada para tus datos y sistemas.</p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Análisis de Datos</h3>
          <p>Transforma datos en decisiones estratégicas.</p>
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;