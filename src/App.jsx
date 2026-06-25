import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import WeeklyCalendar from './pages/WeeklyCalendar';
import DailyPlanner from './pages/DailyPlanner';
import SubjectTracker from './pages/SubjectTracker';
import Milestones from './pages/Milestones';
import Syllabus from './pages/Syllabus';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />
        <main className="app-main">
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/weekly" element={<WeeklyCalendar />} />
              <Route path="/daily" element={<DailyPlanner />} />
              <Route path="/subjects" element={<SubjectTracker />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/syllabus" element={<Syllabus />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
