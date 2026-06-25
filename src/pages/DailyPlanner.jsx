import DailySlot from '../components/DailySlot';
import ProgressBar from '../components/ProgressBar';
import useLocalStorage from '../hooks/useLocalStorage';
import dailySlots from '../data/dailySlots';
import './DailyPlanner.css';

function DailyPlanner() {
  const today = new Date().toISOString().split('T')[0];
  const isSunday = new Date().getDay() === 0;

  const [allDailyData, setAllDailyData] = useLocalStorage('upsc_daily_slots', {});
  const [mocksDone, setMocksDone] = useLocalStorage('upsc_mocks_done', 0);
  const [pyqsDone, setPyqsDone] = useLocalStorage('upsc_pyq_done', 0);

  const todayData = allDailyData[today] || {};
  const studySlots = dailySlots.filter(s => s.isStudySlot);
  const completedCount = studySlots.filter(s => todayData[s.id]).length;

  const handleToggle = (slotId) => {
    if (isSunday) return;
    setAllDailyData(prev => ({
      ...prev,
      [today]: {
        ...prev[today],
        [slotId]: !prev[today]?.[slotId],
      },
    }));
  };

  const todayFormatted = new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="daily-planner">
      <div className="daily-header">
        <div>
          <h1 className="page-title">Daily Planner</h1>
          <span className="page-subtitle">{todayFormatted}</span>
        </div>
      </div>

      <div className="daily-manual-stats">
        <div className="daily-manual-stat">
          <label>Mock Tests Done</label>
          <input
            type="number"
            min="0"
            max="15"
            value={mocksDone}
            onChange={(e) => setMocksDone(Number(e.target.value))}
          />
        </div>
        <div className="daily-manual-stat">
          <label>PYQ Papers Solved</label>
          <input
            type="number"
            min="0"
            max="10"
            value={pyqsDone}
            onChange={(e) => setPyqsDone(Number(e.target.value))}
          />
        </div>
      </div>

      {isSunday && (
        <div className="daily-sunday-banner">
          <span>Sunday — Revision + Rest Day. No new reading today.</span>
        </div>
      )}

      <div className="daily-progress-card">
        <div className="daily-progress-header">
          <span className="daily-progress-label">Today's Completion</span>
          <span className="daily-progress-count">{completedCount} of {studySlots.length} study slots</span>
        </div>
        <ProgressBar
          value={completedCount}
          max={studySlots.length}
          color="var(--phase-foundation)"
          height={10}
          showLabel
        />
        {completedCount === studySlots.length && !isSunday && (
          <div className="daily-progress-complete">🎉 All study slots completed! Great job today!</div>
        )}
      </div>

      <div className="daily-timeline">
        {dailySlots.map(slot => (
          <DailySlot
            key={slot.id}
            slot={slot}
            checked={!!todayData[slot.id]}
            onToggle={handleToggle}
            disabled={isSunday}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyPlanner;
