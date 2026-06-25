// 48-week UPSC study plan data
// Phases: 1=Foundation(green), 2=Depth+PYQ(blue), 3=Mock+CA(amber), 4=Sprint(red)

const PHASES = {
  1: { name: 'Foundation', color: '#1D9E75', label: 'Phase 1 — Foundation' },
  2: { name: 'Depth + PYQs', color: '#378ADD', label: 'Phase 2 — Depth + PYQs' },
  3: { name: 'Mock Tests + CA', color: '#EF9F27', label: 'Phase 3 — Mock Tests + CA' },
  4: { name: 'Final Sprint', color: '#D85A30', label: 'Phase 4 — Final Sprint' },
};

const weeks = [
  // PHASE 1
  { id: 'W1', weekNum: 1, startDate: '2026-07-01', endDate: '2026-07-07', phase: 1, task: 'NCERT History 6–8 + Polity intro (Laxmikanth Ch 1–5)' },
  { id: 'W2', weekNum: 2, startDate: '2026-07-08', endDate: '2026-07-14', phase: 1, task: 'NCERT History 9–10 + Polity Ch 6–12' },
  { id: 'W3', weekNum: 3, startDate: '2026-07-15', endDate: '2026-07-21', phase: 1, task: 'Modern History (Bipin Chandra 1–10) + Polity Ch 13–20' },
  { id: 'W4', weekNum: 4, startDate: '2026-07-22', endDate: '2026-07-28', phase: 1, task: 'Modern History (BC 11–20) + Polity Ch 21–30' },
  { id: 'W5', weekNum: 5, startDate: '2026-07-29', endDate: '2026-08-04', phase: 1, task: 'Modern History finish + Polity Ch 31–40 + 1st revision History' },
  { id: 'W6', weekNum: 6, startDate: '2026-08-05', endDate: '2026-08-11', phase: 1, task: 'NCERT Geography 6–10 + Polity Ch 41–50' },
  { id: 'W7', weekNum: 7, startDate: '2026-08-12', endDate: '2026-08-18', phase: 1, task: 'Geography 11–12 + GC Leong Ch 1–10 + Polity finish' },
  { id: 'W8', weekNum: 8, startDate: '2026-08-19', endDate: '2026-08-25', phase: 1, task: 'GC Leong Ch 11–20 + Indian Geography NCERT 11–12' },
  { id: 'W9', weekNum: 9, startDate: '2026-08-26', endDate: '2026-09-01', phase: 1, task: 'Economy NCERT 11–12 + Revision: Polity full' },
  { id: 'W10', weekNum: 10, startDate: '2026-09-02', endDate: '2026-09-08', phase: 1, task: 'Economy (Ramesh Singh 1–10) + Revision: History full' },
  { id: 'W11', weekNum: 11, startDate: '2026-09-09', endDate: '2026-09-15', phase: 1, task: 'Economy (Ramesh Singh 11–20) + Env: Shankar Ch 1–5' },
  { id: 'W12', weekNum: 12, startDate: '2026-09-16', endDate: '2026-09-22', phase: 1, task: 'Env: Shankar Ch 6–12 + Science NCERT 6–10' },
  { id: 'W13', weekNum: 13, startDate: '2026-09-23', endDate: '2026-09-29', phase: 1, task: 'Phase 1 full revision week — make short notes for all subjects' },
  
  // PHASE 2
  { id: 'W14', weekNum: 14, startDate: '2026-09-30', endDate: '2026-10-06', phase: 2, task: 'Ancient History (RS Sharma) + PYQ History 2013–2017' },
  { id: 'W15', weekNum: 15, startDate: '2026-10-07', endDate: '2026-10-13', phase: 2, task: 'Medieval History + PYQ History 2018–2023' },
  { id: 'W16', weekNum: 16, startDate: '2026-10-14', endDate: '2026-10-20', phase: 2, task: 'Art & Culture (Nitin Singhania Ch 1–6) + PYQ Polity' },
  { id: 'W17', weekNum: 17, startDate: '2026-10-21', endDate: '2026-10-27', phase: 2, task: 'Art & Culture Ch 7–12 + PYQ Geography' },
  { id: 'W18', weekNum: 18, startDate: '2026-10-28', endDate: '2026-11-03', phase: 2, task: 'Economy deep: Budget concepts, banking, inflation + PYQ Economy' },
  { id: 'W19', weekNum: 19, startDate: '2026-11-04', endDate: '2026-11-10', phase: 2, task: 'Economy: International trade, WTO, IMF + PYQ Environment' },
  { id: 'W20', weekNum: 20, startDate: '2026-11-11', endDate: '2026-11-17', phase: 2, task: 'Env: Biodiversity, climate change treaties + PYQ Science' },
  { id: 'W21', weekNum: 21, startDate: '2026-11-18', endDate: '2026-11-24', phase: 2, task: 'Science & Tech: Space, biotech, IT policy + PYQ Art & Culture' },
  { id: 'W22', weekNum: 22, startDate: '2026-11-25', endDate: '2026-12-01', phase: 2, task: 'Governance: RTI, RTE, social schemes + CSAT intensive' },
  { id: 'W23', weekNum: 23, startDate: '2026-12-02', endDate: '2026-12-08', phase: 2, task: 'Security, internal security, disaster mgmt + CSAT mocks' },
  { id: 'W24', weekNum: 24, startDate: '2026-12-09', endDate: '2026-12-15', phase: 2, task: 'PYQ full paper 2013 + 2014 (timed) + analysis' },
  { id: 'W25', weekNum: 25, startDate: '2026-12-16', endDate: '2026-12-22', phase: 2, task: 'PYQ full paper 2015 + 2016 (timed) + analysis' },
  { id: 'W26', weekNum: 26, startDate: '2026-12-23', endDate: '2026-12-29', phase: 2, task: 'Phase 2 revision + Current affairs Oct–Dec compilation' },
  
  // PHASE 3
  { id: 'W27', weekNum: 27, startDate: '2027-01-01', endDate: '2027-01-07', phase: 3, task: 'Full mock test 1 + deep analysis + CA Jan week 1' },
  { id: 'W28', weekNum: 28, startDate: '2027-01-08', endDate: '2027-01-14', phase: 3, task: 'Weak areas from mock 1 + CA Jan week 2', alerts: [{ date: '2027-01-13', text: '⚠ UPSC Notification releases — APPLY IMMEDIATELY', critical: true }] },
  { id: 'W29', weekNum: 29, startDate: '2027-01-15', endDate: '2027-01-21', phase: 3, task: 'Full mock test 2 + PYQ 2017 + 2018 timed' },
  { id: 'W30', weekNum: 30, startDate: '2027-01-22', endDate: '2027-01-28', phase: 3, task: 'Full mock 3 + Polity revision (Laxmikanth reread)' },
  { id: 'W31', weekNum: 31, startDate: '2027-01-29', endDate: '2027-02-04', phase: 3, task: 'Full mock 4 + Economy revision', alerts: [{ date: '2027-02-02', text: '⚠ Application deadline — last day to submit form', critical: true }] },
  { id: 'W32', weekNum: 32, startDate: '2027-02-05', endDate: '2027-02-11', phase: 3, task: 'Full mock 5 + History revision' },
  { id: 'W33', weekNum: 33, startDate: '2027-02-12', endDate: '2027-02-18', phase: 3, task: 'Full mock 6 + Geography revision' },
  { id: 'W34', weekNum: 34, startDate: '2027-02-19', endDate: '2027-02-25', phase: 3, task: 'Full mock 7 + Environment + S&T revision' },
  { id: 'W35', weekNum: 35, startDate: '2027-02-26', endDate: '2027-03-04', phase: 3, task: 'PYQ 2019 + 2020 timed + CA Feb compilation' },
  { id: 'W36', weekNum: 36, startDate: '2027-03-05', endDate: '2027-03-11', phase: 3, task: 'Full mock 8 + weak topics only' },
  { id: 'W37', weekNum: 37, startDate: '2027-03-12', endDate: '2027-03-18', phase: 3, task: 'Full mock 9 + CA March + short notes review' },
  
  // PHASE 4
  { id: 'W38', weekNum: 38, startDate: '2027-03-19', endDate: '2027-03-25', phase: 4, task: 'PYQ 2021 + 2022 timed + CA current affairs blitz' },
  { id: 'W39', weekNum: 39, startDate: '2027-03-26', endDate: '2027-04-01', phase: 4, task: 'Full mock 10 + revision only — NO new material' },
  { id: 'W40', weekNum: 40, startDate: '2027-04-02', endDate: '2027-04-08', phase: 4, task: 'Full mock 11 + Polity short notes revision' },
  { id: 'W41', weekNum: 41, startDate: '2027-04-09', endDate: '2027-04-15', phase: 4, task: 'Full mock 12 + History short notes revision' },
  { id: 'W42', weekNum: 42, startDate: '2027-04-16', endDate: '2027-04-22', phase: 4, task: 'Full mock 13 + Geography + Environment revision' },
  { id: 'W43', weekNum: 43, startDate: '2027-04-23', endDate: '2027-04-29', phase: 4, task: 'Full mock 14 + Economy + S&T revision' },
  { id: 'W44', weekNum: 44, startDate: '2027-04-30', endDate: '2027-05-06', phase: 4, task: 'PYQ 2023 + 2024 timed + CA Apr-May blitz' },
  { id: 'W45', weekNum: 45, startDate: '2027-05-07', endDate: '2027-05-13', phase: 4, task: 'Full mock 15 + complete short notes walkthrough' },
  { id: 'W46', weekNum: 46, startDate: '2027-05-14', endDate: '2027-05-20', phase: 4, task: 'Light revision only — no mocks, sleep 8hrs, stay calm' },
  { id: 'EXAM', weekNum: 47, startDate: '2027-05-23', endDate: '2027-05-23', phase: 4, task: 'PRELIMS DAY — GS Paper 1 (AM) + CSAT (PM)', isExam: true },
];

export { PHASES, weeks };
