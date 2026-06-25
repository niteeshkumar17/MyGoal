import { useState } from 'react';
import ProgressBar from './ProgressBar';
import './SubjectCard.css';

function SubjectCard({ subject, bookStatus, onChapterToggle, notes, onNotesChange }) {
  const [expanded, setExpanded] = useState(false);

  const totalChapters = subject.chapters.length;
  let checkedCount = 0;
  for (let i = 0; i < totalChapters; i++) {
    if (bookStatus[`${subject.id}_${i}`]) checkedCount++;
  }

  const isComplete = checkedCount === totalChapters && totalChapters > 0;

  return (
    <div className={`subject-card ${isComplete ? 'subject-card--complete' : ''}`} style={{ '--subject-color': subject.color }}>
      <div className="subject-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="subject-card-title-row">
          <h3 className="subject-card-name">{subject.name}</h3>
          {isComplete && <span className="subject-card-badge-complete">COMPLETE ✓</span>}
          <span className="subject-card-expand">{expanded ? '−' : '+'}</span>
        </div>
        <span className="subject-card-weightage">{subject.weight}</span>
        <div className="subject-card-progress">
          <ProgressBar value={checkedCount} max={totalChapters} color={subject.color} height={6} />
          <span className="subject-card-progress-text">{checkedCount}/{totalChapters} chapters</span>
        </div>
      </div>

      {expanded && (
        <div className="subject-card-body">
          <div className="subject-card-books">
            {subject.chapters.map((chapter, i) => {
              const key = `${subject.id}_${i}`;
              const isChecked = !!bookStatus[key];
              return (
                <label key={key} className="subject-card-book">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onChapterToggle(subject.id, i)}
                  />
                  <span className="subject-card-book-check">
                    {isChecked ? '✓' : ''}
                  </span>
                  <span className={`subject-card-book-title ${isChecked ? 'subject-card-book-title--done' : ''}`}>
                    {chapter}
                  </span>
                </label>
              );
            })}
          </div>
          <div className="subject-card-notes">
            <label className="subject-card-notes-label">Personal Notes</label>
            <textarea
              className="subject-card-notes-input"
              value={notes || ''}
              onChange={(e) => onNotesChange(subject.id, e.target.value)}
              placeholder="Add your study notes, key points, mnemonics..."
              rows={4}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SubjectCard;
