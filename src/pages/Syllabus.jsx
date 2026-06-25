import './Syllabus.css';

const pdfFiles = [
  {
    id: "8th-Edition-Laxmikan",
    title: "Indian Polity (8th Edition)",
    author: "M. Laxmikanth",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "8th Edition Laxmikanth.pdf",
    size: "12.9 MB",
    classNum: 0
  },
  {
    id: "Certificate-Physical",
    title: "Certificate Physical and Human Geography",
    author: "GC Leong",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Certificate Physical and Human Geography True copy - GC Leong.pdf",
    size: "84.5 MB",
    classNum: 0
  },
  {
    id: "class-9-science-pdf",
    title: "NCERT Class 9 Science & Technology",
    author: "NCERT",
    subject: "Science & Technology",
    color: "#8B5CF6",
    filename: "class 9 science.pdf",
    size: "29.4 MB",
    classNum: 9
  },
  {
    id: "Copy-of-our-environm",
    title: "NCERT Class 7 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Copy of our environmemnt class 7 - Copy.pdf",
    size: "26.7 MB",
    classNum: 7
  },
  {
    id: "Copy-of-science-clas",
    title: "NCERT Class 7 Science & Technology",
    author: "NCERT",
    subject: "Science & Technology",
    color: "#8B5CF6",
    filename: "Copy of science class 7.pdf",
    size: "21.9 MB",
    classNum: 7
  },
  {
    id: "economics-class-9-pd",
    title: "NCERT Class 9 Economy",
    author: "NCERT",
    subject: "Economy",
    color: "#F59E0B",
    filename: "economics class 9.pdf",
    size: "4.8 MB",
    classNum: 9
  },
  {
    id: "Fundamental-of-Physi",
    title: "NCERT Class 11 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Fundamental of Physical Geography (Class XI) 2.pdf",
    size: "6.0 MB",
    classNum: 11
  },
  {
    id: "Fundamentals-of-Huma",
    title: "NCERT Class 12 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Fundamentals of Human Geography (Class XII) 1.pdf",
    size: "13.4 MB",
    classNum: 12
  },
  {
    id: "Geography-class-6-pd",
    title: "NCERT Class 6 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Geography class 6.pdf",
    size: "23.1 MB",
    classNum: 6
  },
  {
    id: "India-People-and-Eco",
    title: "NCERT Class 12 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "India People and Economy (Class XII).pdf",
    size: "6.3 MB",
    classNum: 12
  },
  {
    id: "India-Physical-Envir",
    title: "NCERT Class 11 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "India Physical Environment (Class XI) 2.pdf",
    size: "5.8 MB",
    classNum: 11
  },
  {
    id: "Indian-Economy---Ram",
    title: "Indian Economy (10th Edition)",
    author: "Ramesh Singh",
    subject: "Economy",
    color: "#F59E0B",
    filename: "Indian Economy - Ramesh Singh 10th edition Book Pdf.pdf",
    size: "19.5 MB",
    classNum: 0
  },
  {
    id: "India-s-Struggle-for",
    title: "India's Struggle for Independence",
    author: "Bipin Chandra",
    subject: "History",
    color: "#EC4899",
    filename: "India_s Struggle for Independence by Bipin Chandra.pdf",
    size: "4.0 MB",
    classNum: 0
  },
  {
    id: "NCERT-Class-10-Econo",
    title: "NCERT Class 10 Economy",
    author: "NCERT",
    subject: "Economy",
    color: "#F59E0B",
    filename: "NCERT-Class-10-Economics.pdf",
    size: "1.9 MB",
    classNum: 10
  },
  {
    id: "NCERT-Class-10-Geogr",
    title: "NCERT Class 10 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "NCERT-Class-10-Geography.pdf",
    size: "8.1 MB",
    classNum: 10
  },
  {
    id: "NCERT-Class-10-Histo",
    title: "NCERT Class 10 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-10-History.pdf",
    size: "7.0 MB",
    classNum: 10
  },
  {
    id: "NCERT-Class-10-Polit",
    title: "NCERT Class 10 Polity & Governance",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-10-Political-Science.pdf",
    size: "5.1 MB",
    classNum: 10
  },
  {
    id: "NCERT-Class-10-Scien",
    title: "NCERT Class 10 Science & Technology",
    author: "NCERT",
    subject: "Science & Technology",
    color: "#8B5CF6",
    filename: "NCERT-Class-10-Science.pdf",
    size: "15.5 MB",
    classNum: 10
  },
  {
    id: "NCERT-Class-11-Econo",
    title: "NCERT Class 11 Economy",
    author: "NCERT",
    subject: "Economy",
    color: "#F59E0B",
    filename: "NCERT-Class-11-Economics.pdf",
    size: "3.8 MB",
    classNum: 11
  },
  {
    id: "NCERT-Class-11-Histo",
    title: "NCERT Class 11 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-11-History.pdf",
    size: "3.6 MB",
    classNum: 11
  },
  {
    id: "NCERT-Class-11-Polit",
    title: "NCERT Class 11 Polity & Governance (Part 1)",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-11-Political-Science-Part-1.pdf",
    size: "3.8 MB",
    classNum: 11
  },
  {
    id: "NCERT-Class-11-Polit",
    title: "NCERT Class 11 Polity & Governance (Part 2)",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-11-Political-Science-Part-2.pdf",
    size: "6.6 MB",
    classNum: 11
  },
  {
    id: "NCERT-Class-12-Econo",
    title: "NCERT Class 12 Economy (Part 1)",
    author: "NCERT",
    subject: "Economy",
    color: "#F59E0B",
    filename: "NCERT-Class-12-Economics-Part-1.pdf",
    size: "2.4 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Econo",
    title: "NCERT Class 12 Economy (Part 2)",
    author: "NCERT",
    subject: "Economy",
    color: "#F59E0B",
    filename: "NCERT-Class-12-Economics-Part-2.pdf",
    size: "2.7 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Histo",
    title: "NCERT Class 12 History (Part 1)",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-12-History-Part-1.pdf",
    size: "6.4 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Histo",
    title: "NCERT Class 12 History (Part 2)",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-12-History-Part-2.pdf",
    size: "12.5 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Histo",
    title: "NCERT Class 12 History (Part 3)",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-12-History-Part-3.pdf",
    size: "11.7 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Polit",
    title: "NCERT Class 12 Polity & Governance (Part 1)",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-12-Political-Science-Part-1.pdf",
    size: "3.1 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-12-Polit",
    title: "NCERT Class 12 Polity & Governance (Part 2)",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-12-Political-Science-Part-2.pdf",
    size: "28.4 MB",
    classNum: 12
  },
  {
    id: "NCERT-Class-6-Histor",
    title: "NCERT Class 6 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-6-History.pdf",
    size: "8.7 MB",
    classNum: 6
  },
  {
    id: "NCERT-Class-6-Politi",
    title: "NCERT Class 6 Polity & Governance",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-6-Political-Science.pdf",
    size: "12.5 MB",
    classNum: 6
  },
  {
    id: "NCERT-Class-7-Histor",
    title: "NCERT Class 7 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-7-History.pdf",
    size: "15.7 MB",
    classNum: 7
  },
  {
    id: "NCERT-Class-7-Politi",
    title: "NCERT Class 7 Polity & Governance",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-7-Political-Science.pdf",
    size: "21.9 MB",
    classNum: 7
  },
  {
    id: "NCERT-Class-8-Histor",
    title: "NCERT Class 8 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-8-History.pdf",
    size: "12.6 MB",
    classNum: 8
  },
  {
    id: "NCERT-Class-8-Politi",
    title: "NCERT Class 8 Polity & Governance",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-8-Political-Science.pdf",
    size: "16.4 MB",
    classNum: 8
  },
  {
    id: "NCERT-Class-9-Geogra",
    title: "NCERT Class 9 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "NCERT-Class-9-Geography-1.pdf",
    size: "4.8 MB",
    classNum: 9
  },
  {
    id: "NCERT-Class-9-Histor",
    title: "NCERT Class 9 History",
    author: "NCERT",
    subject: "History",
    color: "#EC4899",
    filename: "NCERT-Class-9-History.pdf",
    size: "29.8 MB",
    classNum: 9
  },
  {
    id: "NCERT-Class-9-Politi",
    title: "NCERT Class 9 Polity & Governance",
    author: "NCERT",
    subject: "Polity & Governance",
    color: "#6366F1",
    filename: "NCERT-Class-9-Political-Science.pdf",
    size: "10.4 MB",
    classNum: 9
  },
  {
    id: "Practical-Work-in-Ge",
    title: "Practical Work in Geography Part 1",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Practical Work in Geography Part 1.pdf",
    size: "7.0 MB",
    classNum: 0
  },
  {
    id: "Practical-Work-in-Ge",
    title: "Practical Work in Geography Part 2",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "Practical Work in Geography Part 2.pdf",
    size: "4.2 MB",
    classNum: 0
  },
  {
    id: "science-class-6-pdf",
    title: "NCERT Class 6 Science & Technology",
    author: "NCERT",
    subject: "Science & Technology",
    color: "#8B5CF6",
    filename: "science class 6.pdf",
    size: "16.4 MB",
    classNum: 6
  },
  {
    id: "science-class-8-pdf",
    title: "NCERT Class 8 Science & Technology",
    author: "NCERT",
    subject: "Science & Technology",
    color: "#8B5CF6",
    filename: "science class 8.pdf",
    size: "32.0 MB",
    classNum: 8
  },
  {
    id: "shankar-ias-environm",
    title: "Environment (10th Edition)",
    author: "Shankar IAS",
    subject: "Environment & Ecology",
    color: "#22C55E",
    filename: "shankar-ias-environment-10th-edition-freeupsc.org_.pdf",
    size: "97.1 MB",
    classNum: 0
  },
  {
    id: "social-science-class",
    title: "NCERT Class 8 Geography",
    author: "NCERT",
    subject: "Geography",
    color: "#14B8A6",
    filename: "social science class 8.pdf",
    size: "14.7 MB",
    classNum: 8
  }
];




function Syllabus() {
  const handleOpenPdf = (filename) => {
    window.open(`/pdfs/${encodeURIComponent(filename)}`, '_blank');
  };

  const groupedPdfs = pdfFiles.reduce((acc, pdf) => {
    if (!acc[pdf.subject]) {
      acc[pdf.subject] = {
        name: pdf.subject,
        color: pdf.color,
        files: []
      };
    }
    acc[pdf.subject].files.push(pdf);
    return acc;
  }, {});

  const subjectGroups = Object.values(groupedPdfs);

  return (
    <div className="syllabus-page">
      <div className="syllabus-header">
        <div>
          <h1 className="page-title">Syllabus & Books</h1>
          <span className="page-subtitle">Your essential study material — click to open</span>
        </div>
        <div className="syllabus-count">
          <span className="syllabus-count-num">{pdfFiles.length}</span>
          <span className="syllabus-count-label">books PDF</span>
        </div>
      </div>

      <div className="syllabus-content">
        {subjectGroups.map(group => (
          <div key={group.name} className="syllabus-category">
            <h2 className="syllabus-category-title" style={{ '--cat-color': group.color }}>
              <span className="syllabus-category-dot" style={{ backgroundColor: group.color }} />
              {group.name} <span className="syllabus-category-count">({group.files.length})</span>
            </h2>
            <div className="syllabus-grid">
              {group.files.sort((a, b) => a.classNum - b.classNum).map(pdf => (
          <div
            key={pdf.id}
            className="syllabus-card"
            style={{ '--card-color': pdf.color }}
            onClick={() => handleOpenPdf(pdf.filename)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOpenPdf(pdf.filename)}
          >
            <div className="syllabus-card-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="2" width="26" height="36" rx="3" fill="currentColor" opacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M30 14V35a3 3 0 01-3 3H10a3 3 0 01-3-3V5a3 3 0 013-3h14l6 12z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M24 2v9a3 3 0 003 3h3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <text x="14" y="28" fontSize="8" fontWeight="700" fill="currentColor" textAnchor="middle">PDF</text>
              </svg>
            </div>
            <div className="syllabus-card-content">
              <h3 className="syllabus-card-title">{pdf.title}</h3>
              <span className="syllabus-card-author">by {pdf.author}</span>
              <div className="syllabus-card-meta">
                <span className="syllabus-card-subject" style={{ backgroundColor: pdf.color, color: '#fff' }}>
                  {pdf.subject}
                </span>
                <span className="syllabus-card-size">{pdf.size}</span>
              </div>
            </div>
            <div className="syllabus-card-action">
              <span className="syllabus-card-open">Open →</span>
            </div>
          </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="syllabus-tip">
        <span className="syllabus-tip-icon">💡</span>
        <p>
          <strong>Tip:</strong> Add more PDFs to the <code>pdf/</code> folder in your project to see them here.
          These books are your core study resources — read them alongside the weekly plan for best results.
        </p>
      </div>
    </div>
  );
}

export default Syllabus;
