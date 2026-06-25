import { useMemo } from 'react';
import SubjectCard from '../components/SubjectCard';
import useLocalStorage from '../hooks/useLocalStorage';
import subjects from '../data/subjects';
import './SubjectTracker.css';

function SubjectTracker() {
  const [bookStatus, setBookStatus] = useLocalStorage('upsc_subject_books', {});
  const [subjectNotes, setSubjectNotes] = useLocalStorage('upsc_subject_notes', {});

  const handleChapterToggle = (subjectId, chapterIndex) => {
    const key = `${subjectId}_${chapterIndex}`;
    setBookStatus(prev => ({
      ...prev,
      [key]: !prev[key],
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
    let totalChapters = 0;
    let checkedChapters = 0;
    subjects.forEach(sub => {
      totalChapters += sub.chapters.length;
      sub.chapters.forEach((_, i) => {
        if (bookStatus[`${sub.id}_${i}`]) checkedChapters++;
      });
    });
    return { totalChapters, checkedChapters };
  }, [bookStatus]);

  return (
    <div className="subject-tracker">
      <div className="subject-header">
        <div>
          <h1 className="page-title">Subject Tracker</h1>
          <span className="page-subtitle">7 subjects · Track your reading progress</span>
        </div>
        <div className="subject-overall">
          <span className="subject-overall-count">{stats.checkedChapters}/{stats.totalChapters}</span>
          <span className="subject-overall-label">chapters completed</span>
        </div>
      </div>

      <div className="subject-grid">
        {subjects.map(subject => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            bookStatus={bookStatus}
            onChapterToggle={handleChapterToggle}
            notes={subjectNotes[subject.id]}
            onNotesChange={handleNotesChange}
          />
        ))}
      </div>
    </div>
  );
}

export default SubjectTracker;
