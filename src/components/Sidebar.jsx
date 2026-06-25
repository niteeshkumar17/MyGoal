import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navItems = [
    { to: '/', label: 'Dashboard' },
    { to: '/weekly', label: 'Weekly Calendar' },
    { to: '/daily', label: 'Daily Planner' },
    { to: '/subjects', label: 'Subjects' },
    { to: '/milestones', label: 'Milestones' },
    { to: '/syllabus', label: 'Syllabus' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">🎯</span>
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-name">Road to IAS</span>
            <span className="sidebar-brand-sub">UPSC Prelims 2027</span>
          </div>
        </div>
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
            >
              <span className="sidebar-link-label">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-footer">
          <span className="sidebar-footer-text">Stay consistent 💪</span>
        </div>
      </aside>

      {/* Mobile Bottom Tabs */}
      <nav className="mobile-tabs">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `mobile-tab ${isActive ? 'mobile-tab--active' : ''}`}
          >
            <span className="mobile-tab-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Sidebar;
