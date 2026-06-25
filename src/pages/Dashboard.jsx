import { useMemo } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import StatCard from '../components/StatCard';
import useLocalStorage from '../hooks/useLocalStorage';
import { weeks, PHASES } from '../data/weeks';
import dailySlots from '../data/dailySlots';
import quotes from '../data/quotes';
import './Dashboard.css';

function Dashboard() {
  const [weekStatus] = useLocalStorage('upsc_week_status', {});
  const [dailySlotsData] = useLocalStorage('upsc_daily_slots', {});
  const [bookStatus] = useLocalStorage('upsc_subject_books', {});
  const [mocksDone] = useLocalStorage('upsc_mocks_done', 0);
  const [pyqsDone] = useLocalStorage('upsc_pyq_done', 0);

  // Calculate stats
  const weeksCompleted = Object.values(weekStatus).filter(s => s === 'done').length;

  // Count chapters completed
  const chaptersCompleted = useMemo(() => {
    return Object.values(bookStatus).filter(Boolean).length;
  }, [bookStatus]);

  // Find current week
  const currentWeek = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return weeks.find(w => {
      const start = new Date(w.startDate + 'T00:00:00');
      const end = new Date(w.endDate + 'T23:59:59');
      return today >= start && today <= end;
    });
  }, []);

  // Today's date for daily slots
  const today = new Date().toISOString().split('T')[0];
  const todaySlots = dailySlotsData[today] || {};
  const studySlots = dailySlots.filter(s => s.isStudySlot);
  const completedToday = studySlots.filter(s => todaySlots[s.id]).length;

  // Daily quote (rotate based on day of year)
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const todayQuote = quotes[dayOfYear % quotes.length];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="page-title">Dashboard</h1>
        <span className="page-subtitle">Your UPSC journey at a glance</span>
      </div>

      <CountdownTimer />

      <div className="dashboard-stats">
        <StatCard icon="📅" value={weeksCompleted} total={48} label="Weeks Completed" color="#1D9E75" />
        <StatCard icon="📚" value={chaptersCompleted} total={199} label="Chapters Completed" color="#378ADD" />
        <StatCard icon="📝" value={mocksDone} total={15} label="Mock Tests Done" color="#EF9F27" />
        <StatCard icon="📋" value={pyqsDone} total={10} label="PYQ Papers Solved" color="#D85A30" />
      </div>

      <div className="dashboard-grid">
        {/* Current Week */}
        <div className="dashboard-card dashboard-current-week">
          <h2 className="dashboard-card-title">📅 This Week's Focus</h2>
          {currentWeek ? (
            <div className="current-week-content" style={{ '--phase-color': PHASES[currentWeek.phase]?.color || '#8B5CF6' }}>
              <div className="current-week-badge">
                <span className="current-week-num">{currentWeek.isExam ? 'EXAM' : `Week ${currentWeek.weekNum}`}</span>
                <span className="current-week-phase">{PHASES[currentWeek.phase]?.name || 'Final'}</span>
              </div>
              <p className="current-week-task">{currentWeek.task}</p>
              <span className="current-week-date">
                {new Date(currentWeek.startDate + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} —{' '}
                {new Date(currentWeek.endDate + 'T00:00:00').toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
              </span>
            </div>
          ) : (
            <div className="current-week-content">
              <p className="current-week-task" style={{ color: 'var(--text-tertiary)' }}>
                The study plan starts July 1, 2026. Get ready!
              </p>
            </div>
          )}
        </div>

        {/* Today's Schedule */}
        <div className="dashboard-card dashboard-today">
          <div className="dashboard-card-header">
            <h2 className="dashboard-card-title">⏰ Today's Progress</h2>
            <span className="dashboard-today-count">{completedToday}/{studySlots.length} slots</span>
          </div>
          <div className="dashboard-today-bar">
            <div
              className="dashboard-today-bar-fill"
              style={{ width: `${studySlots.length > 0 ? (completedToday / studySlots.length) * 100 : 0}%` }}
            />
          </div>
          <div className="dashboard-today-slots">
            {studySlots.slice(0, 4).map(slot => (
              <div key={slot.id} className={`dashboard-slot ${todaySlots[slot.id] ? 'dashboard-slot--done' : ''}`}>
                <span className="dashboard-slot-dot" style={{ backgroundColor: slot.tagColor }} />
                <span className="dashboard-slot-time">{slot.time}</span>
                <span className="dashboard-slot-label">{slot.label}</span>
                {todaySlots[slot.id] && <span className="dashboard-slot-check">✓</span>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Motivational Quote */}
      <div className="dashboard-quote">
        <div className="dashboard-quote-mark">"</div>
        <blockquote className="dashboard-quote-text">{todayQuote.text}</blockquote>
        <cite className="dashboard-quote-author">— {todayQuote.author}</cite>
      </div>
    </div>
  );
}

export default Dashboard;
