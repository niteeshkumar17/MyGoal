import './StatCard.css';

function StatCard({ icon, value, total, label, color }) {
  return (
    <div className="stat-card" style={{ '--accent': color }}>
      <div className="stat-card-icon">{icon}</div>
      <div className="stat-card-content">
        <div className="stat-card-value">
          <span className="stat-card-current">{value}</span>
          <span className="stat-card-total">/{total}</span>
        </div>
        <div className="stat-card-label">{label}</div>
      </div>
      <div className="stat-card-bar">
        <div
          className="stat-card-bar-fill"
          style={{ width: `${total > 0 ? (value / total) * 100 : 0}%` }}
        />
      </div>
    </div>
  );
}

export default StatCard;
