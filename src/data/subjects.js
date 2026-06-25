const subjects = [
  {
    id: 'polity',
    name: 'Polity & Governance',
    weightage: '18–22 Qs',
    color: '#6366F1',
    books: [
      { id: 'laxmikanth', title: 'Laxmikanth — Indian Polity' },
      { id: 'ncert11_polsci', title: 'NCERT Cl 11 Political Science' },
      { id: 'ncert12_polsci1', title: 'NCERT Cl 12 Political Science (Part 1)' },
      { id: 'ncert12_polsci2', title: 'NCERT Cl 12 Political Science (Part 2)' },
      { id: 'pyq_polity', title: 'PYQs 2013–2024' },
    ],
  },
  {
    id: 'history',
    name: 'History — Ancient + Medieval + Modern',
    weightage: '15–20 Qs',
    color: '#EC4899',
    books: [
      { id: 'ncert_hist_old', title: 'NCERT 6–12 History (Old)' },
      { id: 'bipin_chandra', title: 'Bipin Chandra — India\'s Struggle for Independence' },
      { id: 'rs_sharma', title: 'RS Sharma — Ancient India' },
      { id: 'satish_chandra', title: 'Satish Chandra — Medieval India' },
      { id: 'nitin_singhania', title: 'Nitin Singhania — Art & Culture' },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    weightage: '15–18 Qs',
    color: '#14B8A6',
    books: [
      { id: 'ncert_geo_610', title: 'NCERT 6–10 Geography' },
      { id: 'ncert11_phygeo', title: 'NCERT 11 Physical Geography' },
      { id: 'ncert12_humgeo', title: 'NCERT 12 Human Geography + India' },
      { id: 'gc_leong', title: 'GC Leong — Physical & Human Geography' },
      { id: 'obs_atlas', title: 'Orient BlackSwan Atlas' },
    ],
  },
  {
    id: 'economy',
    name: 'Economy',
    weightage: '12–15 Qs',
    color: '#F59E0B',
    books: [
      { id: 'ncert_eco', title: 'NCERT 11–12 Economics' },
      { id: 'ramesh_singh', title: 'Ramesh Singh — Indian Economy' },
      { id: 'eco_survey', title: 'Economic Survey (Current Year)' },
      { id: 'budget', title: 'Union Budget Highlights' },
      { id: 'rbi_reports', title: 'RBI / MoF Reports' },
    ],
  },
  {
    id: 'environment',
    name: 'Environment & Ecology',
    weightage: '12–15 Qs',
    color: '#22C55E',
    books: [
      { id: 'shankar_env', title: 'Shankar IAS — Environment' },
      { id: 'ncert12_bio', title: 'NCERT 12 Biology (Ecology Chapters)' },
      { id: 'dte', title: 'Down To Earth Magazine' },
      { id: 'moefcc', title: 'MoEFCC Reports' },
    ],
  },
  {
    id: 'science',
    name: 'Science & Technology',
    weightage: '8–12 Qs',
    color: '#8B5CF6',
    books: [
      { id: 'ncert_sci', title: 'NCERT 6–10 Science' },
      { id: 'hindu_st', title: 'The Hindu S&T Section' },
      { id: 'pib', title: 'PIB (Space / Defence / Health)' },
      { id: 'monthly_ca', title: 'InSights / Vision IAS Monthly CA' },
    ],
  },
  {
    id: 'csat',
    name: 'CSAT — Paper 2',
    weightage: 'Qualifying (need 33%)',
    color: '#F97316',
    books: [
      { id: 'tmh_csat', title: 'TMH CSAT Manual' },
      { id: 'rs_aggarwal', title: 'RS Aggarwal — Reasoning' },
      { id: 'editorial_comp', title: 'Editorial Comprehension Practice' },
    ],
  },
];

export default subjects;
