// Materials and books required for each phase

const phaseMaterials = {
  1: {
    title: 'Foundation Phase Materials',
    description: 'Build your base with NCERTs and standard textbooks across all subjects.',
    materials: [
      {
        subject: 'History',
        color: '#EC4899',
        books: [
          'NCERT History — Class 6, 7, 8 (Old)',
          'NCERT History — Class 9, 10',
          'Bipin Chandra — India\'s Struggle for Independence (Ch 1–20)',
        ],
      },
      {
        subject: 'Polity & Governance',
        color: '#6366F1',
        books: [
          'M. Laxmikanth — Indian Polity (Ch 1–50, full book)',
          'NCERT Political Science — Class 11',
          'NCERT Political Science — Class 12 (both parts)',
        ],
      },
      {
        subject: 'Geography',
        color: '#14B8A6',
        books: [
          'NCERT Geography — Class 6 to 10',
          'NCERT Geography — Class 11 (Physical Geography)',
          'NCERT Geography — Class 12 (Human + India)',
          'GC Leong — Physical & Human Geography (Ch 1–20)',
        ],
      },
      {
        subject: 'Economy',
        color: '#F59E0B',
        books: [
          'NCERT Economics — Class 11 & 12',
          'Ramesh Singh — Indian Economy (Ch 1–20)',
        ],
      },
      {
        subject: 'Environment & Ecology',
        color: '#22C55E',
        books: [
          'Shankar IAS — Environment (Ch 1–12, full book)',
        ],
      },
      {
        subject: 'Science & Technology',
        color: '#8B5CF6',
        books: [
          'NCERT Science — Class 6 to 10',
        ],
      },
    ],
  },
  2: {
    title: 'Depth + PYQ Phase Materials',
    description: 'Go deeper into subjects with advanced books and solve 5+ years of PYQs topic-wise.',
    materials: [
      {
        subject: 'Ancient & Medieval History',
        color: '#EC4899',
        books: [
          'RS Sharma — Ancient India',
          'Satish Chandra — Medieval India',
        ],
      },
      {
        subject: 'Art & Culture',
        color: '#D946EF',
        books: [
          'Nitin Singhania — Art & Culture (Ch 1–12)',
        ],
      },
      {
        subject: 'Economy (Advanced)',
        color: '#F59E0B',
        books: [
          'Ramesh Singh — Indian Economy (advanced chapters)',
          'Budget & Banking concepts notes',
          'International trade, WTO, IMF notes',
        ],
      },
      {
        subject: 'Environment (Advanced)',
        color: '#22C55E',
        books: [
          'Biodiversity & Climate Change treaty notes',
          'Down To Earth Magazine (selected articles)',
        ],
      },
      {
        subject: 'Science & Technology',
        color: '#8B5CF6',
        books: [
          'The Hindu S&T Section (daily reading)',
          'PIB — Space, Defence, Health updates',
        ],
      },
      {
        subject: 'Governance & Security',
        color: '#6366F1',
        books: [
          'RTI, RTE, Social Schemes notes',
          'Internal Security & Disaster Management notes',
        ],
      },
      {
        subject: 'CSAT — Paper 2',
        color: '#F97316',
        books: [
          'TMH CSAT Manual',
          'RS Aggarwal — Reasoning',
          'Editorial Comprehension Practice',
        ],
      },
      {
        subject: 'PYQ Papers',
        color: '#DC2626',
        books: [
          'PYQ Topic-wise: History, Polity, Geography, Economy, Env, Science, Art & Culture',
          'PYQ Full Paper 2013 (timed)',
          'PYQ Full Paper 2014 (timed)',
          'PYQ Full Paper 2015 (timed)',
          'PYQ Full Paper 2016 (timed)',
          'Current Affairs compilation — Oct to Dec',
        ],
      },
    ],
  },
  3: {
    title: 'Mock Test + CA Phase Materials',
    description: 'Test yourself with full-length mocks, solve recent PYQs, and stay on top of current affairs.',
    materials: [
      {
        subject: 'Mock Test Series',
        color: '#EF9F27',
        books: [
          'Full Mock Tests 1–10 (any reputed test series)',
          'Mock analysis sheets & error logs',
        ],
      },
      {
        subject: 'PYQ Papers (Timed)',
        color: '#DC2626',
        books: [
          'PYQ Full Paper 2017 (timed)',
          'PYQ Full Paper 2018 (timed)',
          'PYQ Full Paper 2019 (timed)',
          'PYQ Full Paper 2020 (timed)',
          'PYQ Full Paper 2021 (timed)',
          'PYQ Full Paper 2022 (timed)',
        ],
      },
      {
        subject: 'Current Affairs',
        color: '#378ADD',
        books: [
          'InSights / Vision IAS Monthly CA — Jan to Mar',
          'The Hindu / Indian Express daily editorials',
          'PIB daily summaries',
        ],
      },
      {
        subject: 'Revision Material',
        color: '#8B5CF6',
        books: [
          'Laxmikanth — Polity (full reread)',
          'Ramesh Singh — Economy (key chapters)',
          'All subjects\' short notes (self-prepared)',
        ],
      },
      {
        subject: '★ Critical Action Items',
        color: '#DC2626',
        books: [
          '★ Jan 13 — UPSC Notification: Apply on upsconline.nic.in immediately',
          '★ Feb 2 — Application Deadline: Ensure form is submitted with fee',
        ],
      },
    ],
  },
  4: {
    title: 'Final Sprint Materials',
    description: 'Only revision and final mocks. NO new material after April 30. Stay calm and trust your preparation.',
    materials: [
      {
        subject: 'Mock Test Series (Final)',
        color: '#D85A30',
        books: [
          'Full Mock Tests 11–15',
          'Complete mock analysis & weak area notes',
        ],
      },
      {
        subject: 'PYQ Papers (Most Recent)',
        color: '#DC2626',
        books: [
          'PYQ Full Paper 2023 (timed)',
          'PYQ Full Paper 2024 (timed)',
        ],
      },
      {
        subject: 'Revision Only',
        color: '#8B5CF6',
        books: [
          'Polity short notes — complete walkthrough',
          'History short notes — complete walkthrough',
          'Geography + Environment short notes',
          'Economy + S&T short notes',
          'All self-prepared flashcards',
        ],
      },
      {
        subject: 'Current Affairs',
        color: '#378ADD',
        books: [
          'CA compilation — April to May (final blitz)',
          'Last 6 months CA rapid revision',
        ],
      },
      {
        subject: '★ Exam Day Essentials',
        color: '#DC2626',
        books: [
          '★ May 23 — PRELIMS DAY: GS Paper 1 (Morning) + CSAT Paper 2 (Afternoon)',
          'Admit card + ID proof + stationery ready',
          'No revision on exam morning — stay calm, eat well, sleep 8hrs',
        ],
      },
    ],
  },
};

export default phaseMaterials;
