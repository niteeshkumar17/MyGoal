// Daily schedule time slots
// isStudySlot: true for slots that count towards daily progress

const dailySlots = [
  { id: 'slot_wake', time: '5:30 AM', label: 'Wake up, walk (no phone)', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_static1', time: '6:00–8:00 AM', label: 'Static subject (primary reading)', tag: 'Static', tagColor: '#22C55E', isStudySlot: true },
  { id: 'slot_break1', time: '8:00–8:30 AM', label: 'Breakfast break', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_static2', time: '8:30–10:30 AM', label: 'Static subject continued', tag: 'Static', tagColor: '#22C55E', isStudySlot: true },
  { id: 'slot_break2', time: '10:30–11:00 AM', label: 'Short break', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_pyq', time: '11:00 AM–1:00 PM', label: 'PYQ solving', tag: 'PYQ', tagColor: '#EF9F27', isStudySlot: true },
  { id: 'slot_lunch', time: '1:00–2:00 PM', label: 'Lunch + rest', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_ca', time: '2:00–3:30 PM', label: 'Current affairs + notes', tag: 'Current Affairs', tagColor: '#378ADD', isStudySlot: true },
  { id: 'slot_csat', time: '3:30–5:00 PM', label: 'CSAT practice', tag: 'CSAT', tagColor: '#8B5CF6', isStudySlot: true },
  { id: 'slot_break3', time: '5:00–5:30 PM', label: 'Evening break', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_revision1', time: '5:30–7:30 PM', label: 'Revision of morning reading', tag: 'Revision', tagColor: '#F97316', isStudySlot: true },
  { id: 'slot_dinner', time: '7:30–8:30 PM', label: 'Dinner + relaxation', tag: null, tagColor: null, isStudySlot: false },
  { id: 'slot_notes', time: '8:30–10:00 PM', label: 'Short notes / flashcard making', tag: 'Revision', tagColor: '#F97316', isStudySlot: true },
  { id: 'slot_flashcards', time: '10:00–10:30 PM', label: 'Flip through 3-day old flashcards', tag: 'Revision', tagColor: '#F97316', isStudySlot: true },
  { id: 'slot_sleep', time: '10:30 PM', label: 'Sleep', tag: null, tagColor: null, isStudySlot: false },
];

export default dailySlots;
