import DailySlot from '../components/DailySlot';
import ProgressBar from '../components/ProgressBar';
import useLocalStorage from '../hooks/useLocalStorage';
import dailySlots from '../data/dailySlots';
import './DailyPlanner.css';

function DailyPlanner() {
  const today = new Date().toISOString().split('T')[0];
  const [allDailyData, setAllDailyData] = useLocalStorage('upsc_daily_slots', {});

  const todayData = allDailyData[today] || {};
  const studySlots = dailySlots.filter(s => s.isStudySlot);
  const completedCount = studySlots.filter(s => todayData[s.id]).length;

  const handleToggle = (slotId) => {
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
        {completedCount === studySlots.length && (
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
          />
        ))}
      </div>
    </div>
  );
}

export default DailyPlanner;
