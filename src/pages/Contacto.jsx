import { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [formData, setFormData] = useState({ 
    nombre: '', 
    email: '', 
    mensaje: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('http://localhost:3000/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Error en la respuesta del servidor');
      
      const data = await response.json();
      setSubmitStatus({ success: true, message: 'Mensaje enviado con éxito' });
      setFormData({ nombre: '', email: '', mensaje: '' }); // Reset form
    } catch (err) {
      console.error('Error:', err);
      setSubmitStatus({ 
        success: false, 
        message: 'Error al enviar el mensaje. Inténtalo de nuevo.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contacto-section">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="tech-glitch">Contáctanos</h2>
          <p className="tech-subtitle">Tu mensaje es importante para nosotros</p>
        </div>

        <form onSubmit={handleSubmit} className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              placeholder="Ingresa tu nombre"
            />
            <div className="input-underline"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tucorreo@ejemplo.com"
            />
            <div className="input-underline"></div>
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            <div className="input-underline"></div>
          </div>

          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Enviando...
              </>
            ) : (
              'Enviar Mensaje'
            )}
          </button>

          {submitStatus && (
            <div className={`status-message ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contacto;
