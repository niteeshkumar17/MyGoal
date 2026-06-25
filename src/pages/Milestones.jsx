import MilestoneItem from '../components/MilestoneItem';
import useLocalStorage from '../hooks/useLocalStorage';
import milestones from '../data/milestones';
import './Milestones.css';

function Milestones() {
  const [milestoneStatus, setMilestoneStatus] = useLocalStorage('upsc_milestones', {});

  const handleToggle = (milestoneId) => {
    setMilestoneStatus(prev => ({
      ...prev,
      [milestoneId]: prev[milestoneId] === 'achieved' ? 'pending' : 'achieved',
    }));
  };

  const achieved = Object.values(milestoneStatus).filter(s => s === 'achieved').length;

  return (
    <div className="milestones-page">
      <div className="milestones-header">
        <div>
          <h1 className="page-title">Milestones</h1>
          <span className="page-subtitle">10 key checkpoints on your journey</span>
        </div>
        <div className="milestones-count">
          <span className="milestones-count-num">{achieved}</span>
          <span className="milestones-count-label">of 10 achieved</span>
        </div>
      </div>

      <div className="milestones-timeline">
        {milestones.map((milestone, index) => (
          <MilestoneItem
            key={milestone.id}
            milestone={milestone}
            status={milestoneStatus[milestone.id] || 'pending'}
            onToggle={handleToggle}
            isLast={index === milestones.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Milestones;
