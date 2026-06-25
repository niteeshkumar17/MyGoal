import { useState, useMemo } from 'react';
import WeekCard from '../components/WeekCard';
import useLocalStorage from '../hooks/useLocalStorage';
import { weeks, PHASES } from '../data/weeks';
import phaseMaterials from '../data/phaseMaterials';
import './WeeklyCalendar.css';

function WeeklyCalendar() {
  const [weekStatus, setWeekStatus] = useLocalStorage('upsc_week_status', {});
  const [activePhase, setActivePhase] = useState(0); // 0 = all
  const [expandedMaterials, setExpandedMaterials] = useState({});

  const toggleMaterials = (phase) => {
    setExpandedMaterials(prev => ({ ...prev, [phase]: !prev[phase] }));
  };

  const handleStatusChange = (weekId, newStatus) => {
    setWeekStatus(prev => ({ ...prev, [weekId]: newStatus }));
  };

  const phaseGroups = useMemo(() => {
    return [1, 2, 3, 4].map(phase => ({
      phase,
      ...PHASES[phase],
      weeks: weeks.filter(w => w.phase === phase),
    }));
  }, []);

  const filteredGroups = activePhase === 0
    ? phaseGroups
    : phaseGroups.filter(g => g.phase === activePhase);

  // Stats
  const totalDone = Object.values(weekStatus).filter(s => s === 'done').length;
  const totalInProgress = Object.values(weekStatus).filter(s => s === 'in-progress').length;

  return (
    <div className="weekly-calendar">
      <div className="weekly-header">
        <div>
          <h1 className="page-title">Weekly Calendar</h1>
          <span className="page-subtitle">48 weeks · 4 phases · Your complete roadmap</span>
        </div>
        <div className="weekly-stats-mini">
          <span className="weekly-stat-chip weekly-stat-chip--done">✓ {totalDone} done</span>
          <span className="weekly-stat-chip weekly-stat-chip--progress">◐ {totalInProgress} in progress</span>
        </div>
      </div>

      <div className="weekly-filters">
        <button
          className={`weekly-filter-btn ${activePhase === 0 ? 'weekly-filter-btn--active' : ''}`}
          onClick={() => setActivePhase(0)}
        >
          All Phases
        </button>
        {[1, 2, 3, 4].map(p => (
          <button
            key={p}
            className={`weekly-filter-btn ${activePhase === p ? 'weekly-filter-btn--active' : ''}`}
            style={{ '--filter-color': PHASES[p].color }}
            onClick={() => setActivePhase(p)}
          >
            <span className="weekly-filter-dot" style={{ backgroundColor: PHASES[p].color }} />
            {PHASES[p].name}
          </button>
        ))}
      </div>

      {filteredGroups.map(group => {
        const materials = phaseMaterials[group.phase];
        const isExpanded = !!expandedMaterials[group.phase];

        return (
          <div key={group.phase} className="weekly-phase-group">
            <div
              className={`weekly-phase-header ${isExpanded ? 'weekly-phase-header--expanded' : ''}`}
              style={{ '--phase-color': group.color }}
              onClick={() => toggleMaterials(group.phase)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && toggleMaterials(group.phase)}
            >
              <div className="weekly-phase-bar" />
              <div className="weekly-phase-info">
                <h2 className="weekly-phase-title">{group.label}</h2>
                <span className="weekly-phase-range">
                  Weeks {group.weeks[0].weekNum}–{group.weeks[group.weeks.length - 1].weekNum} ·{' '}
                  {new Date(group.weeks[0].startDate + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} —{' '}
                  {new Date(group.weeks[group.weeks.length - 1].endDate + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <button
                className={`weekly-materials-btn ${isExpanded ? 'weekly-materials-btn--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleMaterials(group.phase); }}
                title="View required materials"
              >
                📚 Materials {isExpanded ? '▲' : '▼'}
              </button>
              <div className="weekly-phase-progress">
                {group.weeks.filter(w => weekStatus[w.id] === 'done').length}/{group.weeks.length}
              </div>
            </div>

            {isExpanded && materials && (
              <div className="phase-materials-panel" style={{ '--phase-color': group.color }}>
                <div className="phase-materials-header">
                  <h3 className="phase-materials-title">{materials.title}</h3>
                  <p className="phase-materials-desc">{materials.description}</p>
                </div>
                <div className="phase-materials-grid">
                  {materials.materials.map((mat, idx) => (
                    <div key={idx} className="phase-material-card" style={{ '--mat-color': mat.color }}>
                      <div className="phase-material-subject">
                        <span className="phase-material-dot" style={{ backgroundColor: mat.color }} />
                        {mat.subject}
                      </div>
                      <ul className="phase-material-books">
                        {mat.books.map((book, bi) => (
                          <li key={bi} className={`phase-material-book ${book.startsWith('★') ? 'phase-material-book--critical' : ''}`}>
                            {book}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="weekly-grid">
              {group.weeks.map(week => (
                <WeekCard
                  key={week.id}
                  week={week}
                  status={weekStatus[week.id]}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WeeklyCalendar;
