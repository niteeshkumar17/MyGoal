import { useState } from 'react';
import ProgressBar from './ProgressBar';
import './SubjectCard.css';

function SubjectCard({ subject, bookStatus, onBookToggle, notes, onNotesChange }) {
  const [expanded, setExpanded] = useState(false);

  const checkedCount = subject.books.filter(b => bookStatus[b.id]).length;
  const totalBooks = subject.books.length;

  return (
    <div className="subject-card" style={{ '--subject-color': subject.color }}>
      <div className="subject-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="subject-card-title-row">
          <h3 className="subject-card-name">{subject.name}</h3>
          <span className="subject-card-expand">{expanded ? '−' : '+'}</span>
        </div>
        <span className="subject-card-weightage">{subject.weightage}</span>
        <div className="subject-card-progress">
          <ProgressBar value={checkedCount} max={totalBooks} color={subject.color} height={6} />
          <span className="subject-card-progress-text">{checkedCount}/{totalBooks} books</span>
        </div>
      </div>

      {expanded && (
        <div className="subject-card-body">
          <div className="subject-card-books">
            {subject.books.map(book => (
              <label key={book.id} className="subject-card-book">
                <input
                  type="checkbox"
                  checked={!!bookStatus[book.id]}
                  onChange={() => onBookToggle(subject.id, book.id)}
                />
                <span className="subject-card-book-check">
                  {bookStatus[book.id] ? '✓' : ''}
                </span>
                <span className={`subject-card-book-title ${bookStatus[book.id] ? 'subject-card-book-title--done' : ''}`}>
                  {book.title}
                </span>
              </label>
            ))}
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
