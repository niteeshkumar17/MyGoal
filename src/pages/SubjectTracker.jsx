import { useMemo } from 'react';
import SubjectCard from '../components/SubjectCard';
import useLocalStorage from '../hooks/useLocalStorage';
import subjects from '../data/subjects';
import './SubjectTracker.css';

function SubjectTracker() {
  const [bookStatus, setBookStatus] = useLocalStorage('upsc_subject_books', {});
  const [subjectNotes, setSubjectNotes] = useLocalStorage('upsc_subject_notes', {});

  const handleBookToggle = (subjectId, bookId) => {
    setBookStatus(prev => ({
      ...prev,
      [subjectId]: {
        ...prev[subjectId],
        [bookId]: !prev[subjectId]?.[bookId],
      },
    }));
  };

  const handleNotesChange = (subjectId, text) => {
    setSubjectNotes(prev => ({
      ...prev,
      [subjectId]: text,
    }));
  };

  // Overall stats
  const stats = useMemo(() => {
    let totalBooks = 0;
    let checkedBooks = 0;
    subjects.forEach(sub => {
      totalBooks += sub.books.length;
      checkedBooks += sub.books.filter(b => bookStatus[sub.id]?.[b.id]).length;
    });
    return { totalBooks, checkedBooks };
  }, [bookStatus]);

  return (
    <div className="subject-tracker">
      <div className="subject-header">
        <div>
          <h1 className="page-title">Subject Tracker</h1>
          <span className="page-subtitle">7 subjects · Track your reading progress</span>
        </div>
        <div className="subject-overall">
          <span className="subject-overall-count">{stats.checkedBooks}/{stats.totalBooks}</span>
          <span className="subject-overall-label">books completed</span>
        </div>
      </div>

      <div className="subject-grid">
        {subjects.map(subject => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            bookStatus={bookStatus[subject.id] || {}}
            onBookToggle={handleBookToggle}
            notes={subjectNotes[subject.id]}
            onNotesChange={handleNotesChange}
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectTracker;
