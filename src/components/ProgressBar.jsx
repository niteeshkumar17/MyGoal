import './ProgressBar.css';

function ProgressBar({ value, max, color = 'var(--phase-foundation)', height = 8, showLabel = false }) {
  const percentage = max > 0 ? Math.round((value / max) * 100) : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-track" style={{ height: `${height}px` }}>
        <div
          className="progress-bar-fill"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
            height: `${height}px`,
          }}
        />
      </div>
      {showLabel && (
        <span className="progress-bar-label">{percentage}%</span>
      )}
    </div>
  );
}

export default ProgressBar;
