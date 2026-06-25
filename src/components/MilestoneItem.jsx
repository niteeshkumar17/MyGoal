import { PHASES } from '../data/weeks';
import './MilestoneItem.css';

const PHASE_COLORS = {
  1: '#1D9E75',
  2: '#378ADD',
  3: '#EF9F27',
  4: '#D85A30',
};

function MilestoneItem({ milestone, status, onToggle, isLast }) {
  const color = PHASE_COLORS[milestone.phase];
  const isAchieved = status === 'achieved';

  const formatDate = (dateStr) => {
    return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-IN', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className={`milestone-item ${milestone.isCritical ? 'milestone-item--critical' : ''} ${isAchieved ? 'milestone-item--achieved' : ''}`}>
      <div className="milestone-timeline">
        <div
          className={`milestone-dot ${milestone.isCritical ? 'milestone-dot--critical' : ''}`}
          style={{ backgroundColor: color, borderColor: color }}
        />
        {!isLast && <div className="milestone-line" style={{ backgroundColor: color + '30' }} />}
      </div>
      <div className="milestone-content">
        <div className="milestone-date-row">
          <span className="milestone-date">{formatDate(milestone.date)}</span>
          {milestone.isCritical && <span className="milestone-critical-badge">★ CRITICAL</span>}
        </div>
        <h3 className="milestone-title">{milestone.title}</h3>
        <p className="milestone-desc">{milestone.description}</p>
        <button
          className={`milestone-toggle ${isAchieved ? 'milestone-toggle--achieved' : ''}`}
          onClick={() => onToggle(milestone.id)}
          style={{ '--m-color': color }}
        >
          {isAchieved ? '✓ Achieved' : '○ Pending'}
        </button>
      </div>
    </div>
  );
}

export default MilestoneItem;
