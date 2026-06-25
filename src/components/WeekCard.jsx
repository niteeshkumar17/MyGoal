import { PHASES } from '../data/weeks';
import './WeekCard.css';

function WeekCard({ week, status, onStatusChange }) {
  const phase = PHASES[week.phase];
  const statusOptions = ['not-started', 'in-progress', 'done'];
  const statusLabels = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'done': 'Done',
  };
  const statusIcons = {
    'not-started': '○',
    'in-progress': '◐',
    'done': '●',
  };

  const currentStatus = status || 'not-started';

  const cycleStatus = () => {
    const currentIndex = statusOptions.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statusOptions.length;
    onStatusChange(week.id, statusOptions[nextIndex]);
  };

  return (
    <div className={`week-card week-card--${currentStatus}`} style={{ '--phase-color': phase.color }}>
      {week.alerts && week.alerts.map((alert, i) => (
        <div key={i} className="week-card-alert">
          <span className="week-card-alert-icon">★</span>
          <span>{alert.text}</span>
        </div>
      ))}
      <div className="week-card-header">
        <span className="week-card-number">W{week.weekNum}</span>
        <span className="week-card-date">
          {new Date(week.startDate + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
        </span>
      </div>
      <p className="week-card-task">{week.task}</p>
      <button
        className={`week-card-status week-card-status--${currentStatus}`}
        onClick={cycleStatus}
        title="Click to change status"
      >
        <span className="week-card-status-icon">{statusIcons[currentStatus]}</span>
        <span>{statusLabels[currentStatus]}</span>
      </button>
    </div>
  );
}

export default WeekCard;
