import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Equipo.css';

function Equipo() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/equipo')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          throw new Error('La respuesta no es un array');
        }
        setTeam(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching equipo:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Cargando equipo...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="team-section">
      <div className="tech-container">
        <div className="section-header">
          <h2 className="tech-glitch">Nuestro Equipo</h2>
          <p className="tech-subtitle">Los expertos detrás de la tecnología</p>
        </div>
        
        <div className="team-grid">
          {team.map(member => (
            <Card key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipo;
