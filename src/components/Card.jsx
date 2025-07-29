import './Card.css';

function Card({ member }) {
  if (!member) return null;

  return (
    <div className="holographic-card">
      <div className="holographic-content">
        <div className="member-photo-container">
          <img 
            src={member.photo || 'https://via.placeholder.com/150'} 
            alt={member.name || 'Miembro del equipo'}
            className="member-photo"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/150';
            }}
          />
          <div className="holographic-overlay"></div>
        </div>
        
        <div className="member-info">
          <h3 className="member-name">{member.name || 'Nombre no disponible'}</h3>
          <p className="member-role">{member.role || 'Rol no definido'}</p>
          <p className="member-bio">{member.bio || 'Descripción no disponible'}</p>
          
          <div className="social-links">
            {(member.socialLinks || []).map((link, index) => (
              <a 
                key={index}
                href={link.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`social-link ${link.platform?.toLowerCase() || 'default'}`}
              >
                {link.platform || 'Link'}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="holographic-effect"></div>
    </div>
  );
}

export default Card;

