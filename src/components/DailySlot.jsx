import './DailySlot.css';

function DailySlot({ slot, checked, onToggle }) {
  return (
    <div className={`daily-slot ${slot.isStudySlot ? 'daily-slot--study' : 'daily-slot--break'} ${checked ? 'daily-slot--done' : ''}`}>
      <div className="daily-slot-timeline">
        <div className="daily-slot-dot" style={{ backgroundColor: slot.tagColor || 'var(--text-tertiary)' }} />
        <div className="daily-slot-line" />
      </div>
      <div className="daily-slot-content">
        <div className="daily-slot-header">
          <span className="daily-slot-time">{slot.time}</span>
          {slot.tag && (
            <span className="daily-slot-tag" style={{ backgroundColor: slot.tagColor, color: '#fff' }}>
              {slot.tag}
            </span>
          )}
        </div>
        <p className={`daily-slot-label ${checked ? 'daily-slot-label--done' : ''}`}>{slot.label}</p>
      </div>
      {slot.isStudySlot && (
        <label className="daily-slot-check">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => onToggle(slot.id)}
          />
          <span className="daily-slot-checkmark">
            {checked ? '✓' : ''}
          </span>
        </label>
      )}
    </div>
  );
}

export default DailySlot;
