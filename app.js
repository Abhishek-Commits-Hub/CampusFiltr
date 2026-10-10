/**
 * BIT SINDRI STUDENT ACADEMIC PORTAL
 * Unified, Clean, Brief, and Understandable Application Controller
 * 
 * Features:
 *  1. Notices & Circulars (22 verified circulars; 8 Exam, 5 Admission)
 *  2. Single Category Checkbox Selection (strictly one active at a time)
 *  3. Student Academic Attendance Check System & Simulator (75% eligibility)
 *  4. JUT Results & Grade Card Lookup
 *  5. Online Grievance Redressal Engine
 *  6. Semester Fee Estimator & Alumni Guest House Booking
 *  7. Department Profiles, Tenders, Holidays & Statutory Proformas
 *  8. B.Tech 160-Credit CBCS Syllabi & CDC Placement Brochure
 *  9. Isolated Navbar Hover & Responsive Multi-Section Routing
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. HELPERS & DOM SHORTCUTS
  // ==========================================================================
  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => document.querySelectorAll(sel);

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function openModal(modal) { if (modal) modal.hidden = false; }
  function closeModal(modal) { if (modal) modal.hidden = true; }

  function getDueBadgeText(n) {
    if (n.dueDays === null || n.dueDays === undefined) return '';
    if (n.dueText) return n.dueText;
    if (n.dueDays <= 1) return 'Due today';
    if (n.dueDays <= 2) return `Due in ${n.dueDays} days (48h)`;
    return `Due in ${n.dueDays} days`;
  }

  // ==========================================================================
  // 2. DATA REPOSITORY: NOTICES & CIRCULARS (22 Official Circulars)
  // ==========================================================================
  const NOTICES_DATA = [
    {
      id: 'not-001',
      title: 'Institute student innovation hackathon',
      type: 'Opportunity',
      postedDate: '02 Oct 2026',
      deadline: '02 Nov 2026',
      dueDays: 26,
      dueText: 'Due in 26 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/R&D/HACK/2026/104',
      department: 'Center for Innovation, Incubation & Entrepreneurship (CIIE)',
      summary: 'Register teams of 3 to 5 students for the annual hackathon with prototypes in Clean Energy, Robotics & AI by 02 Nov 2026.',
      originalNotice: `All students of B.Tech, M.Tech, and Ph.D programmes are invited to register for the Annual Innovation Hackathon 2026. Teams will receive lab prototyping support at Siemens CoE and cash awards up to ₹1,50,000.`
    },
    {
      id: 'not-002',
      title: 'Summer internship applications — open call',
      type: 'Opportunity',
      postedDate: '06 Oct 2026',
      deadline: '05 Nov 2026',
      dueDays: 30,
      dueText: 'Due in 30 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/TAP/INTERN/2026/412',
      department: 'Training & Placement Cell, BIT Sindri',
      summary: 'Undergraduate students meeting CGPA 7.0 criteria can apply for approved industrial summer internships by 05 Nov 2026.',
      originalNotice: `Applications invited for summer internship opportunities at reputed PSUs and corporate research partners. Submit updated resume with verified grade card and HOD endorsement.`
    },
    {
      id: 'not-003',
      title: 'First semester admission document verification',
      type: 'Admission',
      postedDate: '05 Oct 2026',
      deadline: '20 Oct 2026',
      dueDays: 13,
      dueText: 'Due in 13 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['1st Sem'], entryType: 'Regular' },
      cohortLabel: 'B.Tech · 1st Sem',
      refNo: 'BITS/ADM/VERIF/2026/089',
      department: 'Office of Dean (Academic Affairs)',
      summary: 'First semester newly admitted students must complete mandatory physical document verification at Deshpande Auditorium by 20 Oct 2026.',
      originalNotice: `Candidates allotted B.Tech seats through JCECEB/JEE Mains must report with original rank card, allotment letter, 10th & 12th certificates, domicile, and anti-ragging affidavits.`
    },
    {
      id: 'not-004',
      title: 'Third semester laboratory batch allocation',
      type: 'Class',
      postedDate: '01 Oct 2026',
      deadline: null,
      dueDays: null,
      dueText: null,
      dueCategory: 'none',
      status: 'Info',
      cohort: { programme: 'B.Tech', branches: ['CSE', 'IT'], semesters: ['3rd Sem'], entryType: 'Regular' },
      cohortLabel: 'B.Tech · 3rd Sem · CSE',
      refNo: 'BITS/CSE/LAB/2026/29',
      department: 'Department of Computer Science & Engineering',
      summary: '3rd Semester CSE students are allocated practical laboratory batches (A1, A2, A3) starting immediately with 75% mandatory attendance.',
      originalNotice: `Practical batches for Data Structures Lab (CS-301P) and OOP Lab (CS-302P) are notified. Batch A1 in Software Lab 1 (Mon/Wed), Batch A2 in Systems Lab 2 (Tue/Thu), Batch A3 in AI Lab (Fri).`
    },
    {
      id: 'not-005',
      title: 'Submission of 5th semester examination forms',
      type: 'Examination',
      postedDate: '06 Oct 2026',
      deadline: '14 Oct 2026',
      dueDays: 7,
      dueText: 'Due in 7 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['5th Sem'], entryType: 'Regular' },
      cohortLabel: 'B.Tech · 5th Sem',
      refNo: 'BITS/EXAM/FORM/2026/512',
      department: 'Office of Controller of Examinations',
      summary: '5th Semester students must submit online examination forms via JUT portal and pay ₹1,800 fee by 14 Oct 2026 to avoid late fines.',
      originalNotice: `Online filling of Examination Forms for B.Tech 5th Semester Examination 2026 on JUT Gyanjyoti portal is active up to 14 October 2026. Deposit ₹1,800 via SBI Collect and deposit receipt.`
    },
    {
      id: 'not-006',
      title: 'Hostel No. 22 & 23 Mess committee meeting and fee dues notice',
      type: 'Hostel',
      postedDate: '03 Oct 2026',
      deadline: '09 Oct 2026',
      dueDays: 2,
      dueText: 'Due in 2 days',
      dueCategory: '48h',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/HOSTEL/MESS/2026/44',
      department: 'Hostel Superintendent Office (Hostels 22 & 23)',
      summary: 'Boarders of Hostels 22 & 23 must clear pending mess dues by 09 Oct 2026 before the mess committee audit.',
      originalNotice: `All resident boarders of Hostel 22 and 23 are directed to clear their pending mess charges by 09 Oct 2026. Non-clearance will lead to mess membership revocation.`
    },
    {
      id: 'not-007',
      title: 'Post-matric scholarship portal renewal notice',
      type: 'Opportunity',
      postedDate: '28 Sep 2026',
      deadline: '31 Oct 2026',
      dueDays: 24,
      dueText: 'Due in 24 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/SCHOLAR/EKALYAN/2026/78',
      department: 'Scholarship Section / Dean Students Welfare',
      summary: 'Eligible SC/ST/BC students must renew applications on Jharkhand E-Kalyan portal with bonafide certificate by 31 Oct 2026.',
      originalNotice: `Jharkhand State E-Kalyan portal is active for Post-Matric Scholarship 2026-27 renewals. Obtain signed bonafide certificates from the Academic Section and submit application copies.`
    },
    {
      id: 'not-008',
      title: 'Revised academic calendar for Autumn semester 2026',
      type: 'Class',
      postedDate: '25 Sep 2026',
      deadline: null,
      dueDays: null,
      dueText: null,
      dueCategory: 'none',
      status: 'Info',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/ACAD/CAL/2026/15',
      department: 'Office of Dean (Academic Affairs)',
      summary: 'Autumn semester mid-term exams begin 27 Oct 2026; end-term exams begin 10 Dec 2026.',
      originalNotice: `Approved Academic Calendar for B.Tech Autumn 2026-27: Mid-Semester Exams: 27 Oct - 03 Nov 2026. Practical Viva: 02 - 08 Dec 2026. End-Semester Exams: 10 - 23 Dec 2026.`
    },
    {
      id: 'not-009',
      title: 'Annual alumni meet 2026 — student volunteer registration',
      type: 'Event',
      postedDate: '04 Oct 2026',
      deadline: '18 Oct 2026',
      dueDays: 11,
      dueText: 'Due in 11 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/ALUMNI/MEET/2026/02',
      department: 'Alumni Affairs Cell / BITSAA',
      summary: 'Student volunteers needed for Diamond & Golden Jubilee Alumni Reunion. Apply by 18 Oct 2026.',
      originalNotice: `BITSAA invites dynamic student volunteers for the Annual Global Alumni Reunion 2026. Selected volunteers will coordinate hospitality, registration, and industrial panel sessions.`
    },
    {
      id: 'not-010',
      title: 'Notice for B.Tech 7th semester mid-term examination routine',
      type: 'Examination',
      postedDate: '07 Oct 2026',
      deadline: '27 Oct 2026',
      dueDays: 20,
      dueText: 'Due in 20 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['7th Sem'], entryType: 'Regular' },
      cohortLabel: 'B.Tech · 7th Sem',
      refNo: 'BITS/EXAM/ROUTINE/2026/703',
      department: 'Office of Controller of Examinations',
      summary: 'Mid-term examinations for B.Tech 7th Semester commence on 27 Oct 2026 across lecture theatre complexes.',
      originalNotice: `Routine for B.Tech 7th Semester Mid-Term Examination: Exams will be conducted in two shifts (10:00 AM - 12:00 PM & 02:00 PM - 04:00 PM). Admit cards required.`
    },
    {
      id: 'not-011',
      title: 'Publication of results — B.Tech 4th semester (JUT regular examination)',
      type: 'Examination',
      postedDate: '01 Oct 2026',
      deadline: null,
      dueDays: null,
      dueText: null,
      dueCategory: 'none',
      status: 'Info',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['4th Sem'], entryType: 'All' },
      cohortLabel: 'B.Tech · 4th Sem',
      refNo: 'BITS/EXAM/JUT/2026/89',
      department: 'Examination Section (JUT Cell)',
      summary: 'B.Tech 4th Semester regular exam results published on JUT Gyanjyoti portal. Grade cards available in Student Section.',
      originalNotice: `Jharkhand University of Technology has declared results for B.Tech 4th Semester (Batch 2024-2028). Students can check SGPA/CGPA online and report discrepancies within 15 days.`
    },
    {
      id: 'not-012',
      title: 'Hostel No. 17 & 18 room change applications',
      type: 'Hostel',
      postedDate: '05 Oct 2026',
      deadline: '12 Oct 2026',
      dueDays: 5,
      dueText: 'Due in 5 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/HOSTEL/ALLOT/2026/51',
      department: 'Office of Chief Warden',
      summary: 'Senior students in Hostels 17 & 18 requesting mutual room shifts must submit joint forms by 12 Oct 2026.',
      originalNotice: `Boarders seeking mutual room transfers in Hostels 17 and 18 must submit joint applications endorsed by respective hostel wardens before 12 October 2026.`
    },
    {
      id: 'not-013',
      title: 'Inter-branch athletics championship 2026 registration',
      type: 'Event',
      postedDate: '03 Oct 2026',
      deadline: '16 Oct 2026',
      dueDays: 9,
      dueText: 'Due in 9 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/SPORTS/ATH/2026/09',
      department: 'Department of Physical Education & Sports',
      summary: 'Register for track and field events for the Annual Athletic Meet at Institute Oval Stadium by 16 Oct 2026.',
      originalNotice: `Entries invited for 100m, 200m, 400m, Long Jump, Shot Put, and 4x100m Relay. Captains must submit team lists to Sports Officer by 16 Oct 2026.`
    },
    {
      id: 'not-014',
      title: 'Eligible candidates list — B.Tech 8th semester degree convocation',
      type: 'Name List',
      postedDate: '02 Oct 2026',
      deadline: null,
      dueDays: null,
      dueText: null,
      dueCategory: 'none',
      status: 'Info',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['8th Sem'], entryType: 'All' },
      cohortLabel: 'B.Tech · 8th Sem Graduates',
      refNo: 'BITS/CONVOC/DEGREE/2026/12',
      department: 'Academic Section (Degree Verification)',
      summary: 'Provisional degree eligibility list for 2022-2026 graduating batch released for convocation clearance.',
      originalNotice: `Graduates of 2026 are advised to verify their name spelling (Hindi & English), JUT roll number, and registration number. Discrepancies must be notified to Dean Academic.`
    },
    // New Examination Notices
    {
      id: 'not-015',
      title: 'B.Tech 3rd semester mid-term examination routine & seating plan (Autumn 2026)',
      type: 'Examination',
      postedDate: '08 Oct 2026',
      deadline: '27 Oct 2026',
      dueDays: 19,
      dueText: 'Due in 19 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['3rd Sem'], entryType: 'All' },
      cohortLabel: 'B.Tech · 3rd Sem',
      refNo: 'BITS/EXAM/ROUTINE/2026/301',
      department: 'Office of Controller of Examinations',
      summary: 'Routine for B.Tech 3rd Semester Mid-Term Examinations commencing on 27 Oct 2026; 75% attendance mandatory.',
      originalNotice: `B.Tech 3rd Semester Mid-Term Examinations (Autumn 2026) will be held from 27 Oct to 02 Nov 2026. Hall tickets will be issued only to candidates with minimum 75% classroom attendance.`
    },
    {
      id: 'not-016',
      title: 'End-semester practical viva-voce & sessional submission schedule (3rd & 5th Sem)',
      type: 'Examination',
      postedDate: '07 Oct 2026',
      deadline: '10 Nov 2026',
      dueDays: 33,
      dueText: 'Due in 33 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['3rd Sem', '5th Sem'], entryType: 'All' },
      cohortLabel: 'B.Tech · 3rd & 5th Sem',
      refNo: 'BITS/EXAM/PRACT/2026/410',
      department: 'Office of Controller of Examinations',
      summary: 'Departmental laboratory practical examinations and external viva-voce schedule published.',
      originalNotice: `End-semester laboratory practical examinations and viva-voce for 3rd and 5th Semester B.Tech will be conducted between 02 Dec and 08 Dec 2026 by external university examiners.`
    },
    {
      id: 'not-017',
      title: 'Applications for scrutiny and re-evaluation of answer scripts (2nd & 4th Sem JUT Exams)',
      type: 'Examination',
      postedDate: '04 Oct 2026',
      deadline: '16 Oct 2026',
      dueDays: 5,
      dueText: 'Due in 5 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/EXAM/SCRUT/2026/419',
      department: 'Examination Section (JUT Cell)',
      summary: 'Online applications for answer script scrutiny/re-checking are open on JUT portal till 16 Oct 2026 with ₹500 fee per paper.',
      originalNotice: `Students seeking scrutiny of marks for theory answer scripts may apply online via JUT portal (jutgyanjyoti.jharkhand.gov.in) with ₹500 fee by 16 Oct 2026.`
    },
    {
      id: 'not-018',
      title: 'Special remedial & carryover examination registration for 1st through 6th semesters',
      type: 'Examination',
      postedDate: '06 Oct 2026',
      deadline: '15 Oct 2026',
      dueDays: 4,
      dueText: 'Due in 4 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'B.Tech · Backlog Candidates',
      refNo: 'BITS/EXAM/BACKLOG/2026/582',
      department: 'Office of Controller of Examinations',
      summary: 'Backlog exam registration for 1st-6th semesters closes on 15 Oct 2026; fee ₹600 per theory paper.',
      originalNotice: `Registration forms for Special Carryover / Backlog Examinations (JUT Scheme) are open till 15 October 2026. Deposit ₹600 fee per paper on SBI Collect.`
    },
    // New Admission Notices
    {
      id: 'not-019',
      title: 'B.Tech Lateral Entry (Diploma-to-Degree) document verification & admission (3rd Sem)',
      type: 'Admission',
      postedDate: '08 Oct 2026',
      deadline: '17 Oct 2026',
      dueDays: 6,
      dueText: 'Due in 6 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['3rd Sem', 'All'], entryType: 'All' },
      cohortLabel: 'B.Tech · 3rd Sem (Lateral)',
      refNo: 'BITS/ADM/LATERAL/2026/112',
      department: 'Office of Dean (Academic Affairs)',
      summary: 'Diploma-to-Degree candidates for 3rd Sem Lateral Entry must complete physical document verification by 17 Oct 2026.',
      originalNotice: `Candidates allotted B.Tech Lateral Entry 3rd Sem seats through JCECEB must report to Deshpande Auditorium between 14 and 17 Oct 2026 with original certificates and fee receipt.`
    },
    {
      id: 'not-020',
      title: 'Institutional spot round counselling against vacant B.Tech & Lateral seats',
      type: 'Admission',
      postedDate: '09 Oct 2026',
      deadline: '21 Oct 2026',
      dueDays: 10,
      dueText: 'Due in 10 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['1st Sem', '3rd Sem', 'All'], entryType: 'All' },
      cohortLabel: 'B.Tech · 1st & 3rd Sem',
      refNo: 'BITS/ADM/SPOT/2026/135',
      department: 'Central Admission Committee',
      summary: 'Offline institutional spot counselling for vacant B.Tech and lateral entry seats will take place on 21 Oct 2026.',
      originalNotice: `Institutional Offline Spot Counselling for vacant seats in B.Tech 1st Sem and 3rd Sem Lateral Entry takes place on 21 October 2026 at Deshpande Auditorium.`
    },
    {
      id: 'not-021',
      title: 'Postgraduate M.Tech & Ph.D admissions — written entrance test & interview schedule',
      type: 'Admission',
      postedDate: '05 Oct 2026',
      deadline: '18 Oct 2026',
      dueDays: 7,
      dueText: 'Due in 7 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: { programme: 'All', branches: ['All'], semesters: ['All'], entryType: 'All' },
      cohortLabel: 'M.Tech / Ph.D Candidates',
      refNo: 'BITS/ADM/PG-PHD/2026/047',
      department: 'Dean (Postgraduate Studies & Research)',
      summary: 'Departmental written test and interviews for M.Tech and Ph.D admissions will be conducted on 18 Oct 2026.',
      originalNotice: `Research Entrance Test and Interviews for M.Tech and Ph.D programmes (Autumn 2026) are scheduled on 18 October 2026 at respective engineering departments.`
    },
    {
      id: 'not-022',
      title: 'Hostel allotment & mess enrollment for newly admitted 1st semester & lateral students',
      type: 'Admission',
      postedDate: '07 Oct 2026',
      deadline: '22 Oct 2026',
      dueDays: 11,
      dueText: 'Due in 11 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['1st Sem', '3rd Sem', 'All'], entryType: 'All' },
      cohortLabel: 'B.Tech · 1st & 3rd Sem',
      refNo: 'BITS/DSW/HOSTEL-ADM/2026/89',
      department: 'Office of Dean Students Welfare (DSW)',
      summary: 'Hostel room allotments and mess enrollment for new 1st Sem & Lateral Entry students are open till 22 Oct 2026.',
      originalNotice: `Hostel room allotment for 1st Sem and 3rd Sem Lateral Entry students finalized. Complete mess advance deposit of ₹18,000 on DSW portal before 22 October 2026.`
    },
    {
      id: 'not-023',
      title: 'Special supplementary examination schedule for 7th & 8th semesters (Final Year B.Tech)',
      type: 'Examination',
      postedDate: '09 Oct 2026',
      deadline: '24 Oct 2026',
      dueDays: 13,
      dueText: 'Due in 13 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: { programme: 'B.Tech', branches: ['All'], semesters: ['7th Sem', '8th Sem', 'All'], entryType: 'All' },
      cohortLabel: 'B.Tech · 7th & 8th Sem',
      refNo: 'BITS/EXAM/SUPPLE/2026/621',
      department: 'Office of Controller of Examinations',
      summary: 'Special supplementary examinations for final year students with up to 2 pending carryover papers commence on 24 Oct 2026.',
      originalNotice: `Final year students (2022-2026 batch) having backlogs in 7th or 8th semester may register for the Special Supplementary Examination on JUT Gyanjyoti portal before 24 October 2026. Deposit exam fee of ₹1,200 on SBI Collect.`
    }
  ];

  const SEMESTER_LABELS = {
    'All': 'All Semesters',
    '1st Year': '1st Year (1st & 2nd Sem)',
    '1st Sem': '1st Semester (1st Year)',
    '2nd Sem': '2nd Semester (1st Year)',
    '2nd Year': '2nd Year (3rd & 4th Sem)',
    '3rd Sem': '3rd Semester (2nd Year)',
    '4th Sem': '4th Semester (2nd Year)',
    '3rd Year': '3rd Year (5th & 6th Sem)',
    '5th Sem': '5th Semester (3rd Year)',
    '6th Sem': '6th Semester (3rd Year)',
    '4th Year': '4th Year (7th & 8th Sem)',
    '7th Sem': '7th Semester (4th Year)',
    '8th Sem': '8th Semester (4th Year)'
  };

  // ==========================================================================
  // 3. NOTICE FILTER ENGINE (Single Checkbox Selection)
  // ==========================================================================
  const noticeState = {
    programme: 'B.Tech',
    branch: 'CSE',
    sem: '3rd Sem',
    entry: 'Regular',
    selectedType: '', // Strictly ONE category or none ('')
    due: 'any',
    showOtherCohorts: false,
    searchQuery: '',
    selectedNoticeId: 'not-015'
  };

  const nDom = {
    summaryText: $('cohortSummaryText'),
    listContainer: $('noticeListContainer'),
    emptyState: $('emptyStateContainer'),
    detailCard: $('noticeDetailContainer'),
    countFiltered: $('countFiltered'),
    countTotal: $('countTotal'),
    filterCountBadge: $('filterCountBadge'),
    mobileFilterCount: $('mobileActiveFilterCount'),
    activeTagsList: $('activeFilterTags'),
    searchInput: $('noticeSearchInput'),
    clearSearch: $('btnClearSearch'),
    chkOtherCohorts: $('chkOtherCohorts'),
    btnClearTypes: $('btnClearTypeFilters'),
    typeCheckboxes: $$('#typeCheckboxGroup input[type="checkbox"]'),
    dueRadios: $$('input[name="dueFilter"]'),
    progPills: $$('#groupProgramme .pill-opt'),
    entryPills: $$('#groupEntryType .pill-opt'),
    selectBranch: $('selectBranch'),
    selectSem: $('selectSemester'),
    modalSource: $('modalSourceBackdrop'),
    modalDocTitle: $('modalDocTitle'),
    modalDocBody: $('modalDocBody'),
    btnModalClose: $('btnModalClose'),
    btnModalDone: $('btnModalDone'),
    btnRefreshNotices: $('btnRefreshNotices'),
    btnMobileToggle: $('btnMobileFilterToggle'),
    sidebar: $('noticeSidebar'),
    btnResetFilters: $('btnResetFilters'),
    btnClearAllTags: $('btnClearAllTags')
  };

  function matchesCohort(notice, p, b, s, e) {
    const c = notice.cohort;
    if (!c) return true;
    if (c.programme !== 'All' && c.programme !== p) return false;
    if (c.branches && !c.branches.includes('All') && !c.branches.includes(b)) return false;
    if (c.entryType && c.entryType !== 'All' && c.entryType !== e) return false;

    if (c.semesters && !c.semesters.includes('All')) {
      if (s === 'All') return true;
      if (s === '1st Year') return c.semesters.includes('1st Sem') || c.semesters.includes('2nd Sem');
      if (s === '2nd Year') return c.semesters.includes('3rd Sem') || c.semesters.includes('4th Sem');
      if (s === '3rd Year') return c.semesters.includes('5th Sem') || c.semesters.includes('6th Sem');
      if (s === '4th Year') return c.semesters.includes('7th Sem') || c.semesters.includes('8th Sem');
      if (!c.semesters.includes(s)) return false;
    }
    return true;
  }

  function getFilteredNotices() {
    return NOTICES_DATA.filter(n => {
      if (!noticeState.showOtherCohorts && !matchesCohort(n, noticeState.programme, noticeState.branch, noticeState.sem, noticeState.entry)) {
        return false;
      }
      if (noticeState.selectedType && n.type !== noticeState.selectedType) {
        return false;
      }
      if (noticeState.due !== 'any') {
        if (noticeState.due === '48h' && (n.dueDays === null || n.dueDays > 2)) return false;
        if (noticeState.due === '7d' && (n.dueDays === null || n.dueDays > 7)) return false;
        if (noticeState.due === 'none' && (n.deadline !== null && n.dueDays !== null)) return false;
      }
      if (noticeState.searchQuery.trim()) {
        const q = noticeState.searchQuery.toLowerCase().trim();
        const text = `${n.title} ${n.type} ${n.department} ${n.originalNotice}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }

  function renderNoticeList(notices) {
    if (!nDom.listContainer) return;
    nDom.listContainer.innerHTML = '';

    if (nDom.countFiltered) nDom.countFiltered.textContent = notices.length;
    if (nDom.countTotal) nDom.countTotal.textContent = NOTICES_DATA.length;
    if (nDom.filterCountBadge) nDom.filterCountBadge.textContent = `${notices.length} active`;

    if (notices.length === 0) {
      if (nDom.emptyState) nDom.emptyState.style.display = 'block';
      if (nDom.detailCard) nDom.detailCard.innerHTML = `<div class="empty-state-card" style="padding: 24px; text-align: center; color: #64748B;"><p>No notices matching the selected filter criteria.</p></div>`;
      return;
    }
    if (nDom.emptyState) nDom.emptyState.style.display = 'none';

    if (!notices.some(n => n.id === noticeState.selectedNoticeId)) {
      noticeState.selectedNoticeId = notices[0].id;
    }

    notices.forEach(n => {
      const isSel = n.id === noticeState.selectedNoticeId;
      const dueLabel = getDueBadgeText(n);
      const card = document.createElement('div');
      card.className = `notice-card ${isSel ? 'selected' : ''}`;
      card.dataset.id = n.id;
      card.innerHTML = `
        <div class="notice-card-header">
          <span class="badge badge-type badge-${n.type.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(n.type)}</span>
          <span class="notice-card-date">${escapeHtml(n.postedDate)}</span>
        </div>
        <h4 class="notice-card-title">${escapeHtml(n.title)}</h4>
        <div class="notice-card-meta">
          <span class="notice-meta-dept">${escapeHtml(n.department)}</span>
          ${dueLabel ? `<span class="badge badge-due badge-${n.dueCategory}">${escapeHtml(dueLabel)}</span>` : ''}
        </div>
      `;
      card.addEventListener('click', () => {
        $$('.notice-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        noticeState.selectedNoticeId = n.id;
        renderNoticeDetail(n);
      });
      nDom.listContainer.appendChild(card);
    });

    const activeNotice = notices.find(n => n.id === noticeState.selectedNoticeId) || notices[0];
    renderNoticeDetail(activeNotice);
  }

  function renderNoticeDetail(n) {
    if (!nDom.detailCard || !n) return;
    const dueLabel = getDueBadgeText(n);
    nDom.detailCard.innerHTML = `
      <div class="detail-header">
        <div class="detail-tags">
          <span class="badge badge-type badge-${n.type.toLowerCase().replace(/\s+/g, '')}">${escapeHtml(n.type)}</span>
          ${dueLabel ? `<span class="badge badge-due badge-${n.dueCategory}">${escapeHtml(dueLabel)}</span>` : ''}
        </div>
        <h3 class="detail-title">${escapeHtml(n.title)}</h3>
        <div class="detail-meta-row">
          <span><strong>Ref:</strong> ${escapeHtml(n.refNo)}</span>
          <span><strong>Posted:</strong> ${escapeHtml(n.postedDate)}</span>
          <span><strong>Dept:</strong> ${escapeHtml(n.department)}</span>
        </div>
      </div>
      <div class="detail-summary-box">
        <strong>Executive Summary:</strong>
        <p>${escapeHtml(n.summary)}</p>
      </div>
      <div class="detail-body">
        <h4>Official Circular Content</h4>
        <div class="detail-body-text">${escapeHtml(n.originalNotice).replace(/\n/g, '<br>')}</div>
      </div>
      <div class="detail-actions">
        <button type="button" class="btn-primary-action btn-view-official-notice" data-notice-id="${n.id}">View Verified Document</button>
        <button type="button" class="btn-outline-action" onclick="window.print()">Print Circular</button>
      </div>
    `;

    const btnView = nDom.detailCard.querySelector('.btn-view-official-notice');
    if (btnView) {
      btnView.addEventListener('click', () => openSourceNoticeModal(n));
    }
  }

  function openSourceNoticeModal(n) {
    if (!nDom.modalSource) return;
    if (nDom.modalDocTitle) nDom.modalDocTitle.textContent = `${n.refNo} · ${n.title}`;
    if (nDom.modalDocBody) {
      nDom.modalDocBody.innerHTML = `
        <div style="font-family: serif; padding: 18px; border: 1px solid #CBD5E1; background: #fff; border-radius: var(--radius-sm);">
          <div style="text-align: center; border-bottom: 2px solid #0F172A; padding-bottom: 8px; margin-bottom: 12px;">
            <div style="font-size: 11px; text-transform: uppercase; font-weight: bold; color: #475569;">Government of Jharkhand</div>
            <h3 style="margin: 2px 0; font-size: 17px; color: #0F172A;">BIRSA INSTITUTE OF TECHNOLOGY, SINDRI</h3>
            <p style="font-size: 11px; margin: 0; color: #64748B;">P.O. Sindri Institute, Dhanbad - 828123</p>
            <div style="display: flex; justify-content: space-between; font-size: 11px; margin-top: 8px; font-weight: bold;">
              <span>Ref: ${escapeHtml(n.refNo)}</span>
              <span>Date: ${escapeHtml(n.postedDate)}</span>
            </div>
          </div>
          <h4 style="text-align: center; text-transform: uppercase; font-size: 13px; margin: 12px 0 8px;">${escapeHtml(n.title)}</h4>
          <p style="font-size: 12.5px; line-height: 1.7; color: #1E293B;">${escapeHtml(n.originalNotice).replace(/\n/g, '<br>')}</p>
          <div style="margin-top: 24px; text-align: right; font-size: 11px;">
            <strong>By Order of Director / Academic Council</strong><br>
            ${escapeHtml(n.department)}
          </div>
        </div>
      `;
    }
    openModal(nDom.modalSource);
  }

  function updateSidebarCounts() {
    const types = ['Examination', 'Admission', 'Hostel', 'Class', 'Opportunity', 'Event', 'Name List'];
    const counts = {};
    types.forEach(t => counts[t] = 0);

    NOTICES_DATA.forEach(n => {
      if (!noticeState.showOtherCohorts && !matchesCohort(n, noticeState.programme, noticeState.branch, noticeState.sem, noticeState.entry)) return;
      if (noticeState.due !== 'any') {
        if (noticeState.due === '48h' && (n.dueDays === null || n.dueDays > 2)) return;
        if (noticeState.due === '7d' && (n.dueDays === null || n.dueDays > 7)) return;
        if (noticeState.due === 'none' && (n.deadline !== null && n.dueDays !== null)) return;
      }
      if (counts[n.type] !== undefined) counts[n.type]++;
    });

    types.forEach(t => {
      const el = $(`count${t.replace(/\s+/g, '')}`);
      if (el) el.textContent = `(${counts[t]})`;
    });
  }

  function renderActiveTags() {
    if (!nDom.activeTagsList) return;
    nDom.activeTagsList.innerHTML = '';
    const tags = [];

    tags.push({ label: `Prog: ${noticeState.programme}`, key: 'prog' });
    tags.push({ label: `Branch: ${noticeState.branch}`, key: 'branch' });
    tags.push({ label: `Sem: ${SEMESTER_LABELS[noticeState.sem] || noticeState.sem}`, key: 'sem' });
    tags.push({ label: `Entry: ${noticeState.entry}`, key: 'entry' });

    if (noticeState.selectedType) {
      tags.push({ label: `Type: ${noticeState.selectedType}`, key: 'type' });
    }
    if (noticeState.due !== 'any') {
      tags.push({ label: noticeState.due === '48h' ? '≤ 48h' : (noticeState.due === '7d' ? '≤ 7 days' : 'No deadline'), key: 'due' });
    }
    if (noticeState.showOtherCohorts) {
      tags.push({ label: 'Include other cohorts', key: 'cohort' });
    }
    if (noticeState.searchQuery) {
      tags.push({ label: `"${noticeState.searchQuery}"`, key: 'search' });
    }

    tags.forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'filter-tag-chip';
      chip.innerHTML = `${escapeHtml(t.label)} <span class="remove-tag" aria-label="Remove">&times;</span>`;
      chip.querySelector('.remove-tag').addEventListener('click', () => {
        if (t.key === 'type') {
          noticeState.selectedType = '';
          nDom.typeCheckboxes.forEach(cb => cb.checked = false);
        } else if (t.key === 'due') {
          noticeState.due = 'any';
          const r = $('dueAny'); if (r) r.checked = true;
        } else if (t.key === 'cohort') {
          noticeState.showOtherCohorts = false;
          if (nDom.chkOtherCohorts) nDom.chkOtherCohorts.checked = false;
        } else if (t.key === 'search') {
          noticeState.searchQuery = '';
          if (nDom.searchInput) nDom.searchInput.value = '';
          if (nDom.clearSearch) nDom.clearSearch.style.display = 'none';
        }
        applyNoticeFilters();
      });
      nDom.activeTagsList.appendChild(chip);
    });

    if (nDom.mobileFilterCount) {
      nDom.mobileFilterCount.textContent = (noticeState.selectedType ? 1 : 0) + (noticeState.due !== 'any' ? 1 : 0) + (noticeState.showOtherCohorts ? 1 : 0);
    }
  }

  function applyNoticeFilters() {
    if (nDom.summaryText) {
      const semTxt = SEMESTER_LABELS[noticeState.sem] || noticeState.sem;
      nDom.summaryText.innerHTML = `Viewing notices for: <strong>${noticeState.programme}</strong> · <strong>${noticeState.branch}</strong> · <strong>${semTxt}</strong> · <strong>${noticeState.entry}</strong>`;
    }
    updateSidebarCounts();
    const filtered = getFilteredNotices();
    renderNoticeList(filtered);
    renderActiveTags();
  }

  function resetAllFilters() {
    noticeState.programme = 'B.Tech';
    noticeState.branch = 'CSE';
    noticeState.sem = '3rd Sem';
    noticeState.entry = 'Regular';
    noticeState.selectedType = '';
    noticeState.due = 'any';
    noticeState.showOtherCohorts = false;
    noticeState.searchQuery = '';

    nDom.progPills.forEach(b => {
      const active = b.dataset.val === 'B.Tech';
      b.classList.toggle('active', active);
      b.setAttribute('aria-checked', String(active));
    });
    nDom.entryPills.forEach(b => {
      const active = b.dataset.val === 'Regular';
      b.classList.toggle('active', active);
      b.setAttribute('aria-checked', String(active));
    });
    if (nDom.selectBranch) nDom.selectBranch.value = 'CSE';
    if (nDom.selectSem) nDom.selectSem.value = '3rd Sem';
    nDom.typeCheckboxes.forEach(cb => cb.checked = false);
    const r = $('dueAny'); if (r) r.checked = true;
    if (nDom.chkOtherCohorts) nDom.chkOtherCohorts.checked = false;
    if (nDom.searchInput) nDom.searchInput.value = '';
    if (nDom.clearSearch) nDom.clearSearch.style.display = 'none';

    applyNoticeFilters();
  }

  function setupNoticeFilters() {
    // Top Cohort Programme & Entry Pills
    nDom.progPills.forEach(btn => {
      btn.addEventListener('click', () => {
        noticeState.programme = btn.dataset.val;
        nDom.progPills.forEach(b => {
          const isMe = (b === btn);
          b.classList.toggle('active', isMe);
          b.setAttribute('aria-checked', String(isMe));
        });
        applyNoticeFilters();
      });
    });

    nDom.entryPills.forEach(btn => {
      btn.addEventListener('click', () => {
        noticeState.entry = btn.dataset.val;
        nDom.entryPills.forEach(b => {
          const isMe = (b === btn);
          b.classList.toggle('active', isMe);
          b.setAttribute('aria-checked', String(isMe));
        });
        applyNoticeFilters();
      });
    });

    if (nDom.selectBranch) {
      nDom.selectBranch.addEventListener('change', (e) => {
        noticeState.branch = e.target.value;
        applyNoticeFilters();
      });
    }

    if (nDom.selectSem) {
      nDom.selectSem.addEventListener('change', (e) => {
        noticeState.sem = e.target.value;
        applyNoticeFilters();
      });
    }

    // Single Checkbox Selection: only one checked at a time
    nDom.typeCheckboxes.forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          nDom.typeCheckboxes.forEach(other => {
            if (other !== e.target) other.checked = false;
          });
          noticeState.selectedType = e.target.value;
        } else {
          noticeState.selectedType = '';
        }
        applyNoticeFilters();
      });
    });

    // Clear Type button
    if (nDom.btnClearTypes) {
      nDom.btnClearTypes.textContent = 'Clear';
      nDom.btnClearTypes.addEventListener('click', () => {
        noticeState.selectedType = '';
        nDom.typeCheckboxes.forEach(cb => cb.checked = false);
        applyNoticeFilters();
      });
    }

    // Due Radios
    nDom.dueRadios.forEach(r => {
      r.addEventListener('change', (e) => {
        noticeState.due = e.target.value;
        applyNoticeFilters();
      });
    });

    // Other Cohorts toggle
    if (nDom.chkOtherCohorts) {
      nDom.chkOtherCohorts.addEventListener('change', (e) => {
        noticeState.showOtherCohorts = e.target.checked;
        applyNoticeFilters();
      });
    }

    // Search Input & Clear Search
    if (nDom.searchInput) {
      nDom.searchInput.addEventListener('input', (e) => {
        noticeState.searchQuery = e.target.value;
        if (nDom.clearSearch) nDom.clearSearch.style.display = noticeState.searchQuery ? 'block' : 'none';
        applyNoticeFilters();
      });
    }

    if (nDom.clearSearch) {
      nDom.clearSearch.addEventListener('click', () => {
        noticeState.searchQuery = '';
        if (nDom.searchInput) nDom.searchInput.value = '';
        nDom.clearSearch.style.display = 'none';
        applyNoticeFilters();
      });
    }

    // Reset Buttons
    if (nDom.btnResetFilters) nDom.btnResetFilters.addEventListener('click', resetAllFilters);
    if (nDom.btnClearAllTags) nDom.btnClearAllTags.addEventListener('click', resetAllFilters);

    // Refresh & Mobile Sidebar
    if (nDom.btnRefreshNotices) {
      nDom.btnRefreshNotices.addEventListener('click', () => {
        nDom.btnRefreshNotices.classList.add('spinning');
        applyNoticeFilters();
        setTimeout(() => nDom.btnRefreshNotices.classList.remove('spinning'), 500);
      });
    }

    if (nDom.btnMobileToggle && nDom.sidebar) {
      nDom.btnMobileToggle.addEventListener('click', () => {
        const isOpen = nDom.sidebar.classList.toggle('open');
        nDom.btnMobileToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // Source modal close
    if (nDom.btnModalClose) nDom.btnModalClose.addEventListener('click', () => closeModal(nDom.modalSource));
    if (nDom.btnModalDone) nDom.btnModalDone.addEventListener('click', () => closeModal(nDom.modalSource));
    if (nDom.modalSource) {
      nDom.modalSource.addEventListener('click', (e) => {
        if (e.target === nDom.modalSource) closeModal(nDom.modalSource);
      });
    }

    // Initial Filter Run
    applyNoticeFilters();
  }

  // ==========================================================================
  // 4. ROUTING & SECTION DISPLAY ENGINE
  // ==========================================================================
  const ROUTE_CONFIG = {
    'notices': { containerId: 'noticeSectionContainer', name: 'Student Portal', current: 'Notices & Circulars' },
    'about-us': {
      containerId: 'aboutSectionContainer', name: 'About BIT Sindri', current: 'History', defaultSubtab: 'about-history',
      subtabs: { 'history': 'about-history', 'mission': 'about-mission', 'director': 'about-director', 'vision2030': 'about-vision2030', 'visit': 'about-visit', 'logo': 'about-logo', 'activities': 'about-activities' }
    },
    'administration': {
      containerId: 'adminSectionContainer', name: 'Administration', current: 'Offices', defaultSubtab: 'admin-offices',
      subtabs: { 'offices': 'admin-offices', 'mandatory-disclose': 'admin-mandatory', 'teqip': 'admin-teqip', 'tenders': 'admin-tenders', 'rti': 'admin-rti', 'infrastructure': 'admin-infrastructure' }
    },
    'academics': {
      containerId: 'academicsSectionContainer', name: 'Academics', current: 'Departments', defaultSubtab: 'academics-departments',
      subtabs: { 'departments': 'academics-departments', 'admissions': 'academics-admissions', 'fee-structure': 'academics-fee', 'calendar': 'academics-calendar', 'coe': 'academics-coe', 'anti-ragging': 'academics-committees', 'sgrc': 'academics-committees' }
    },
    'students': {
      containerId: 'studentsSectionContainer', name: 'Student Life', current: 'Results', defaultSubtab: 'students-results',
      subtabs: { 'results': 'students-results', 'attendance': 'students-attendance', 'grievance': 'students-grievance', 'activities': 'students-activities', 'facilities': 'students-facilities', 'syllabus': 'students-syllabus', 'downloads': 'students-downloads' }
    },
    'ranking': {
      containerId: 'rankingSectionContainer', name: 'Accreditation', current: 'NIRF', defaultSubtab: 'ranking-nirf',
      subtabs: { 'nirf': 'ranking-nirf', 'naac': 'ranking-naac', 'ariia': 'ranking-ariia', 'iirf': 'ranking-iirf', 'certificates': 'ranking-certificates' }
    },
    'alumni': {
      containerId: 'alumniSectionContainer', name: 'Alumni', current: 'AlmaConnect', defaultSubtab: 'alumni-alma',
      subtabs: { 'alma-connect': 'alumni-alma', 'bitsaa': 'alumni-bitsaa', 'endowment': 'alumni-endowment', 'hall-of-fame': 'alumni-fame', 'guest-house': 'alumni-guest' }
    },
    'training-placement': {
      containerId: 'placementSectionContainer', name: 'T&P Cell', current: 'CDC Overview', defaultSubtab: 'placement-cdc',
      subtabs: { 'cdc': 'placement-cdc', 'statistics': 'placement-stats', 'recruiters': 'placement-recruiters', 'internships': 'placement-intern', 'brochure': 'placement-brochure' }
    },
    'notification': { containerId: 'notificationSectionContainer', name: 'Holidays', current: 'Common Orders' }
  };

  const portalSections = {
    'notices': $('noticeSectionContainer'),
    'about-us': $('aboutSectionContainer'),
    'administration': $('adminSectionContainer'),
    'academics': $('academicsSectionContainer'),
    'students': $('studentsSectionContainer'),
    'ranking': $('rankingSectionContainer'),
    'alumni': $('alumniSectionContainer'),
    'training-placement': $('placementSectionContainer'),
    'notification': $('notificationSectionContainer')
  };

  function navigateTo(targetPath) {
    if (!targetPath) targetPath = 'notices';
    let path = targetPath.replace(/^#/, '').trim();

    if (path === 'quick-links') { openQuickLinksModal(); return; }
    if (path === 'student-login') { openErpLoginModal(); return; }
    if (path === 'helpdesk') { openHelpdeskModal(); return; }

    const [cleanPath, query] = path.split('?');
    const segments = cleanPath.split('/').filter(Boolean);
    const mainKey = segments[0] || 'notices';
    const subKey = segments[1] || null;

    const config = ROUTE_CONFIG[mainKey] || ROUTE_CONFIG['notices'];

    Object.keys(portalSections).forEach(k => {
      if (portalSections[k]) {
        portalSections[k].hidden = (k !== mainKey);
      }
    });

    $$('#mainNavLinks > li').forEach(li => {
      li.classList.toggle('active', li.getAttribute('data-section') === mainKey);
    });

    let targetSubtab = null;
    if (subKey && config.subtabs && config.subtabs[subKey]) {
      targetSubtab = config.subtabs[subKey];
    } else if (config.defaultSubtab) {
      targetSubtab = config.defaultSubtab;
    }
    if (targetSubtab) activateSubtab(targetSubtab);

    const bcParent = $('bcParent');
    const bcCurrent = $('bcCurrent');
    if (bcParent && bcCurrent) {
      bcParent.textContent = config.name;
      bcParent.href = `#${mainKey}`;
      bcCurrent.textContent = targetSubtab ? ($(`tab-${targetSubtab}`)?.textContent?.trim() || config.current) : config.current;
    }

    if (path === 'training-placement/brochure') {
      setTimeout(openBrochureModal, 120);
    }

    if (query && query.includes('dept=')) {
      const dCode = query.split('dept=')[1]?.split('&')[0];
      if (dCode) setTimeout(() => openDepartmentProfile(dCode), 120);
    }

    const navLinks = $('mainNavLinks');
    if (navLinks) navLinks.classList.remove('open');
  }

  function activateSubtab(subtabId) {
    const targetPanel = $(subtabId);
    if (!targetPanel) return;

    const parent = targetPanel.closest('.portal-section');
    if (!parent) return;

    parent.querySelectorAll('.subtab-panel').forEach(p => p.classList.remove('active'));
    targetPanel.classList.add('active');

    parent.querySelectorAll('.subnav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subtab') === subtabId);
    });
  }

  // ==========================================================================
  // 5. NAVBAR HOVER ISOLATION (Only 1 Dropdown Open At A Time)
  // ==========================================================================
  function setupNavbarHover() {
    const navItems = $$('#mainNavLinks > li');
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (document.activeElement?.closest('#mainNavLinks') && !item.contains(document.activeElement)) {
          document.activeElement.blur();
        }
        navItems.forEach(other => {
          if (other !== item) other.classList.remove('dropdown-open');
        });
      });
      item.addEventListener('mouseleave', () => item.classList.remove('dropdown-open'));

      item.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', () => {
          document.activeElement?.blur();
          navItems.forEach(li => li.classList.remove('dropdown-open'));
        });
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mainNavLinks')) {
        navItems.forEach(li => li.classList.remove('dropdown-open'));
      }
    });

    const toggle = $('navbarMobileToggle');
    const links = $('mainNavLinks');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        const isOpen = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
      });
    }
  }

  // ==========================================================================
  // 6. INTERACTIVE ATTENDANCE CHECK SYSTEM & SIMULATOR
  // ==========================================================================
  const ATTENDANCE_RECORDS = {
    '23042': {
      name: 'RAJA KUMAR SHAW', branch: 'Computer Science & Engineering', sem: '3', advisor: 'Prof. (Dr.) D. K. Mallick',
      subjects: [
        { code: 'CS301', name: 'Data Structures & Algorithms', held: 42, attended: 38 },
        { code: 'CS302', name: 'OOP with Java', held: 40, attended: 35 },
        { code: 'CS303', name: 'Digital Logic & Computer Design', held: 36, attended: 31 },
        { code: 'MA301', name: 'Discrete Mathematics', held: 44, attended: 37 },
        { code: 'CS301P', name: 'Data Structures Lab', held: 28, attended: 25 },
        { code: 'CS302P', name: 'Java Programming Lab', held: 30, attended: 25 }
      ],
      punches: [
        { date: '10 Oct 2026', time: '09:05 AM', code: 'CS301', title: 'Data Structures', status: 'present' },
        { date: '10 Oct 2026', time: '11:10 AM', code: 'CS302', title: 'OOP Java', status: 'present' },
        { date: '09 Oct 2026', time: '02:00 PM', code: 'CS301P', title: 'Data Structures Lab', status: 'present' },
        { date: '09 Oct 2026', time: '10:00 AM', code: 'MA301', title: 'Discrete Math', status: 'absent' }
      ]
    },
    '23015': {
      name: 'PRIYA KUMARI', branch: 'Information Technology', sem: '3', advisor: 'Dr. Sanjeev Kumar',
      subjects: [
        { code: 'IT301', name: 'Data Structures', held: 40, attended: 33 },
        { code: 'IT302', name: 'OOP C++', held: 38, attended: 32 },
        { code: 'IT303', name: 'Computer Architecture', held: 36, attended: 29 },
        { code: 'MA301', name: 'Discrete Mathematics', held: 44, attended: 35 },
        { code: 'IT301P', name: 'Data Structures Lab', held: 28, attended: 23 }
      ],
      punches: [
        { date: '10 Oct 2026', time: '09:05 AM', code: 'IT301', title: 'Data Structures', status: 'present' },
        { date: '09 Oct 2026', time: '10:00 AM', code: 'MA301', title: 'Discrete Math', status: 'present' }
      ]
    },
    '23088': {
      name: 'AMIT KUMAR MAHATO', branch: 'Electrical Engineering', sem: '3', advisor: 'Prof. Nirmal Kumar',
      subjects: [
        { code: 'EE301', name: 'Circuit Analysis', held: 44, attended: 31 },
        { code: 'EE302', name: 'Electrical Machines', held: 42, attended: 30 },
        { code: 'EE303', name: 'Electromagnetics', held: 38, attended: 27 },
        { code: 'MA301', name: 'Discrete Math', held: 44, attended: 33 }
      ],
      punches: [
        { date: '10 Oct 2026', time: '09:00 AM', code: 'EE301', title: 'Circuit Analysis', status: 'present' }
      ]
    }
  };

  let currentAttStudent = ATTENDANCE_RECORDS['23042'];
  let attSimMode = 'attend';
  let attSimCount = 0;

  function getOrGenerateAttendance(roll) {
    if (ATTENDANCE_RECORDS[roll]) return ATTENDANCE_RECORDS[roll];
    return {
      name: `STUDENT (ROLL ${roll})`,
      branch: 'Computer Science & Engineering',
      sem: '3',
      advisor: 'Prof. (Dr.) D. K. Mallick',
      subjects: [
        { code: 'CS301', name: 'Data Structures', held: 40, attended: 33 },
        { code: 'CS302', name: 'OOP with Java', held: 38, attended: 31 },
        { code: 'CS303', name: 'Digital Logic', held: 36, attended: 29 },
        { code: 'MA301', name: 'Mathematics', held: 42, attended: 35 }
      ],
      punches: [
        { date: '10 Oct 2026', time: '09:00 AM', code: 'CS301', title: 'Data Structures', status: 'present' }
      ]
    };
  }

  function renderAttendanceDashboard(student) {
    currentAttStudent = student;
    const container = $('attendanceDashboardContainer');
    if (!container) return;
    container.style.display = 'block';

    let totalHeld = 0;
    let totalAttended = 0;
    student.subjects.forEach(s => {
      totalHeld += s.held;
      totalAttended += s.attended;
    });

    const percent = Math.round((totalAttended / totalHeld) * 100);
    const isEligible = percent >= 75;

    $('attStudentName').textContent = student.name;
    $('attRollNo').textContent = $('inputAttRollNo')?.value?.trim() || '23042';
    $('attBranch').textContent = student.branch;
    $('attSemText').textContent = `Semester ${student.sem}`;
    $('attAdvisor').textContent = student.advisor;
    $('attOverallPercent').textContent = `${percent}%`;

    const bar = $('attOverallProgressBar');
    if (bar) {
      bar.style.width = `${percent}%`;
      bar.style.background = isEligible ? 'var(--color-success)' : 'var(--color-error)';
    }

    $('attTotalHeld').textContent = totalHeld;
    $('attTotalAttended').textContent = totalAttended;

    const subBody = $('attendanceSubjectsBody');
    if (subBody) {
      subBody.innerHTML = student.subjects.map(s => {
        const p = Math.round((s.attended / s.held) * 100);
        const ok = p >= 75;
        return `
          <tr>
            <td><code>${s.code}</code></td>
            <td><strong>${escapeHtml(s.name)}</strong></td>
            <td>${s.held}</td>
            <td>${s.attended}</td>
            <td><strong style="color: ${ok ? '#16A34A' : '#DC2626'}">${p}%</strong></td>
            <td><span class="badge" style="background: ${ok ? '#DCFCE7' : '#FEE2E2'}; color: ${ok ? '#15803D' : '#991B1B'}">${ok ? 'Eligible' : 'Shortage'}</span></td>
          </tr>
        `;
      }).join('');
    }

    const punchList = $('recentPunchesList');
    if (punchList) {
      punchList.innerHTML = student.punches.map(p => `
        <div style="display: flex; justify-content: space-between; padding: 8px; border-bottom: 1px solid var(--color-border-light); font-size: 12px;">
          <span><strong>${p.code}</strong> - ${p.title} (${p.date} ${p.time})</span>
          <span style="font-weight: bold; color: ${p.status === 'present' ? '#16A34A' : '#DC2626'}">${p.status.toUpperCase()}</span>
        </div>
      `).join('');
    }

    updateAttendanceSimulation();
  }

  function updateAttendanceSimulation() {
    let totalHeld = 0;
    let totalAttended = 0;
    currentAttStudent.subjects.forEach(s => {
      totalHeld += s.held;
      totalAttended += s.attended;
    });

    const currPercent = Math.round((totalAttended / totalHeld) * 100);
    const n = Number(attSimCount) || 0;
    const projHeld = totalHeld + n;
    const projAtt = totalAttended + (attSimMode === 'attend' ? n : 0);
    const projPercent = Math.round((projAtt / projHeld) * 100);

    const numEl = $('simProjectedNum');
    if (numEl) numEl.textContent = `${projPercent}%`;
    const currEl = $('simCurrentNum');
    if (currEl) currEl.textContent = `${currPercent}%`;

    const sliderVal = $('simSliderValDisplay');
    if (sliderVal) sliderVal.textContent = n;

    const diff = projPercent - currPercent;
    const deltaBadge = $('simDeltaBadge');
    if (deltaBadge) {
      deltaBadge.textContent = `${diff >= 0 ? '+' : ''}${diff}%`;
      deltaBadge.style.color = diff >= 0 ? '#16A34A' : '#DC2626';
    }
  }

  function setupAttendanceCheck() {
    const form = $('attendanceSearchForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const roll = $('inputAttRollNo')?.value?.trim() || '23042';
        renderAttendanceDashboard(getOrGenerateAttendance(roll));
      });
    }

    $$('.att-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const roll = btn.dataset.roll;
        if ($('inputAttRollNo')) $('inputAttRollNo').value = roll;
        renderAttendanceDashboard(getOrGenerateAttendance(roll));
      });
    });

    $('simModeAttend')?.addEventListener('click', () => {
      attSimMode = 'attend';
      $('simModeAttend')?.classList.add('active');
      $('simModeMiss')?.classList.remove('active');
      updateAttendanceSimulation();
    });

    $('simModeMiss')?.addEventListener('click', () => {
      attSimMode = 'miss';
      $('simModeMiss')?.classList.add('active');
      $('simModeAttend')?.classList.remove('active');
      updateAttendanceSimulation();
    });

    $('simRangeInput')?.addEventListener('input', (e) => {
      attSimCount = e.target.value;
      updateAttendanceSimulation();
    });

    $('btnPrintAttendanceSlip')?.addEventListener('click', () => {
      const modal = $('modalAttendanceSlipBackdrop');
      if (modal) {
        $('slipStudentName').textContent = currentAttStudent.name;
        $('slipRollNo').textContent = $('inputAttRollNo')?.value?.trim() || '23042';
        $('slipBranch').textContent = currentAttStudent.branch;
        modal.hidden = false;
      }
    });

    $('btnModalAttSlipClose')?.addEventListener('click', () => closeModal($('modalAttendanceSlipBackdrop')));
    $('btnModalAttSlipDone')?.addEventListener('click', () => closeModal($('modalAttendanceSlipBackdrop')));
  }

  // ==========================================================================
  // 7. JUT GRADE CARD & RESULTS LOOKUP
  // ==========================================================================
  const SAMPLE_SUBJECTS_BY_SEM = {
    '1': [
      { code: 'PH101', name: 'Engineering Physics', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'MA101', name: 'Calculus & Linear Algebra', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'EE101', name: 'Basic Electrical Engg', credits: '4.0', grade: 'B+', points: '7.0' }
    ],
    '2': [
      { code: 'CH102', name: 'Engineering Chemistry', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS102', name: 'Programming in C', credits: '4.0', grade: 'O', points: '10.0' },
      { code: 'MA102', name: 'Differential Equations', credits: '4.0', grade: 'A', points: '8.0' }
    ],
    '3': [
      { code: 'CS301', name: 'Data Structures & Algorithms', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS302', name: 'Object Oriented Programming (Java)', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS303', name: 'Digital Logic & Computer Design', credits: '3.0', grade: 'A', points: '8.0' },
      { code: 'MA301', name: 'Discrete Mathematics', credits: '4.0', grade: 'A', points: '8.0' }
    ]
  };

  function setupResultSearch() {
    const form = $('resultSearchForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const roll = $('inputRollNo')?.value?.trim() || '23042';
      const sem = $('selectResultSem')?.value || '3';
      const marksheet = $('marksheetContainer');
      if (!marksheet) return;

      marksheet.style.display = 'block';
      $('resStudentName').textContent = roll === '23042' ? 'RAJA KUMAR SHAW' : `STUDENT (ROLL ${roll})`;
      $('resRollNo').textContent = roll;
      $('resBranch').textContent = 'Computer Science & Engineering';
      $('resSem').textContent = `Semester ${sem}`;

      const subjects = SAMPLE_SUBJECTS_BY_SEM[sem] || SAMPLE_SUBJECTS_BY_SEM['3'];
      const tbody = $('resultSubjectsBody');
      if (tbody) {
        tbody.innerHTML = subjects.map(s => `
          <tr>
            <td><code>${s.code}</code></td>
            <td><strong>${s.name}</strong></td>
            <td>${s.credits}</td>
            <td><strong style="color: #2563EB">${s.grade}</strong></td>
            <td>${s.points}</td>
          </tr>
        `).join('');
      }

      $('resSgpa').textContent = '8.75';
      $('resCgpa').textContent = '8.62';
    });
  }

  // ==========================================================================
  // 8. ONLINE GRIEVANCE ENGINE & TRACKER
  // ==========================================================================
  const GRIEVANCES = [
    { id: 'BITS-GRV-2026-1042', name: 'Rohan Verma', roll: '23015', category: 'Hostel & Mess', status: 'Resolved' },
    { id: 'BITS-GRV-2026-1055', name: 'Priya Kumari', roll: '22045', category: 'Scholarship (E-Kalyan)', status: 'In Progress' }
  ];

  function setupGrievanceEngine() {
    const form = $('grievanceForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const token = `BITS-GRV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        const alertBox = $('grievanceStatusDisplay');
        if (alertBox) {
          alertBox.style.display = 'block';
          alertBox.innerHTML = `✓ <strong>Grievance Logged!</strong> Token: <code>${token}</code>. Dean Student Welfare will inspect within 48 hours.`;
        }
      });
    }

    $('btnTrackGrievance')?.addEventListener('click', () => {
      const id = $('trackGrievanceId')?.value?.trim();
      const match = GRIEVANCES.find(g => g.id.toLowerCase() === id?.toLowerCase());
      const alertBox = $('grievanceStatusDisplay');
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = match
          ? `<strong>Status for ${match.id}:</strong> <span class="badge" style="background:#EFF6FF;color:#1D4ED8">${match.status}</span> · Category: ${match.category}`
          : `<strong>Token ${escapeHtml(id)}:</strong> Under active departmental evaluation. Estimated response in 2 working days.`;
      }
    });
  }

  // ==========================================================================
  // 9. FEE ESTIMATOR & GUEST HOUSE BOOKING
  // ==========================================================================
  function setupFeeEstimator() {
    const prog = $('calcProg');
    const cat = $('calcCat');
    const hostel = $('calcHostel');
    const totalEl = $('calcTotalFee');

    function calculate() {
      let base = 7500;
      if (cat?.value === 'tfw' || cat?.value === 'scst') base = 3200;
      if (prog?.value === 'mtech') base = 12000;
      if (hostel?.value === 'yes') base += 18000;
      if (totalEl) totalEl.textContent = `₹${base.toLocaleString('en-IN')}/-`;
    }

    prog?.addEventListener('change', calculate);
    cat?.addEventListener('change', calculate);
    hostel?.addEventListener('change', calculate);
    calculate();
  }

  function setupGuestHouseBooking() {
    const form = $('guestHouseForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const conf = $('ghBookingConfirm');
        if (conf) {
          conf.style.display = 'block';
          conf.innerHTML = `✓ <strong>Booking Confirmed!</strong> Reservation Token: <code>BITS-GH-2026-784</code>. Confirmation copy forwarded to Estate Officer.`;
        }
      });
    }
  }

  // ==========================================================================
  // 10. DEPARTMENT PROFILES, TENDERS & HOLIDAYS
  // ==========================================================================
  const DEPARTMENT_DATA = {
    'cse': { name: 'Computer Science & Engineering', hod: 'Prof. (Dr.) D. K. Mallick', intake: 'B.Tech: 68 | Ph.D: 10', labs: ['AI & Deep Learning Lab', 'Software Engineering Lab', 'Network Systems Lab'] },
    'it': { name: 'Information Technology', hod: 'Prof. (Dr.) Sanjeev Kumar', intake: 'B.Tech: 45 | Ph.D: 6', labs: ['Cyber Security Lab', 'Web Engineering Lab', 'IoT Prototyping Cell'] },
    'ece': { name: 'Electronics & Communication', hod: 'Prof. (Dr.) Imteyaz Ahmad', intake: 'B.Tech: 52 | M.Tech: 18', labs: ['VLSI Design Lab', 'RF & Microwave Chamber', 'DSP Lab'] },
    'ee': { name: 'Electrical Engineering', hod: 'Prof. (Dr.) Nirmal Kumar', intake: 'B.Tech: 99 | M.Tech: 25', labs: ['High Voltage Lab', 'Power Systems Simulation Lab', 'Electric Drives Lab'] },
    'mech': { name: 'Mechanical Engineering', hod: 'Prof. (Dr.) R. K. Verma', intake: 'B.Tech: 105 | M.Tech: 25', labs: ['Thermal Science Lab', 'Robotics & Mechatronics Lab', 'CAD/CAM Facility'] },
    'civil': { name: 'Civil Engineering', hod: 'Prof. (Dr.) J. P. Singh', intake: 'B.Tech: 98 | M.Tech: 20', labs: ['Concrete Technology Lab', 'Soil Mechanics Lab', 'Environmental Engg Lab'] },
    'meta': { name: 'Metallurgical Engineering', hod: 'Prof. (Dr.) B. N. Roy', intake: 'B.Tech: 54 | M.Tech: 15', labs: ['Physical Metallurgy Lab', 'Heat Treatment Yard', 'Foundry Cell'] },
    'chem': { name: 'Chemical Engineering', hod: 'Prof. (Dr.) G. K. Choudhary', intake: 'B.Tech: 91 | M.Tech: 15', labs: ['Unit Operations Lab', 'Reaction Kinetics Lab', 'Process Control Lab'] },
    'mining': { name: 'Mining Engineering', hod: 'Prof. (Dr.) U. K. Dey', intake: 'B.Tech: 49 | M.Tech: 12', labs: ['Rock Mechanics Lab', 'Mine Ventilation Lab', 'Geomatics Cell'] },
    'prod': { name: 'Production & Industrial Engineering', hod: 'Prof. (Dr.) R. S. Prasad', intake: 'B.Tech: 54 | M.Tech: 15', labs: ['CNC Machining Lab', 'Metrology Lab', 'Ergonomics Lab'] },
    'sciences': { name: 'Applied Sciences & Humanities', hod: 'Prof. (Dr.) S. K. Mahato', intake: 'Ph.D: 25', labs: ['Physics Laser Lab', 'Chemistry Instrumental Lab', 'Language Lab'] }
  };

  function openDepartmentProfile(code) {
    const dept = DEPARTMENT_DATA[code?.toLowerCase()] || DEPARTMENT_DATA['cse'];
    const modal = $('modalDeptProfileBackdrop');
    if (!modal) return;
    $('modalDeptTitle').textContent = dept.name;
    $('modalDeptBody').innerHTML = `
      <div style="font-size: 13px; line-height: 1.6;">
        <p><strong>Head of Department:</strong> ${dept.hod}</p>
        <p><strong>Student Intake:</strong> ${dept.intake}</p>
        <h4 style="margin: 12px 0 6px;">Key Research &amp; Teaching Laboratories:</h4>
        <ul>${dept.labs.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
    `;
    openModal(modal);
  }

  function setupDepartmentFilters() {
    $$('.filter-dept-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-dept-cat').forEach(b => b.classList.toggle('active', b === btn));
        const cat = btn.dataset.cat || btn.dataset.deptCat;
        $$('.dept-card').forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.deptCat === cat) ? 'block' : 'none';
        });
      });
    });
  }

  const TENDERS_DATA = {
    '039': { title: 'Supply & Installation of High-Performance GPU Cluster', cost: '₹42.50 Lakhs', emd: '₹85,000/-', date: '15 Oct 2026' },
    '035': { title: 'Civil Modernization & Dining Hall Renovation of Hostels 17 & 18', cost: '₹24.80 Lakhs', emd: '₹50,000/-', date: '18 Oct 2026' },
    '031': { title: 'Supply of Interactive Smart Panels for Lecture Complexes', cost: '₹18.00 Lakhs', emd: '₹35,000/-', date: '10 Oct 2026' }
  };

  function openTenderModal(id) {
    const t = TENDERS_DATA[id] || TENDERS_DATA['039'];
    const modal = $('modalTenderBackdrop');
    if (!modal) return;
    $('modalTenderTitle').textContent = `Notice Inviting Tender (NIT ${id}) · BIT Sindri`;
    $('modalTenderBody').innerHTML = `
      <div style="font-size: 13px; line-height: 1.7;">
        <h4 style="margin-top: 0;">${t.title}</h4>
        <p><strong>Estimated Cost:</strong> ${t.cost} · <strong>EMD:</strong> ${t.emd}</p>
        <p><strong>Bid Submission Deadline:</strong> ${t.date}, 03:00 PM</p>
        <p>Tender documents can be downloaded from jharkhandtenders.gov.in. Bids will be opened at Admin Building.</p>
      </div>
    `;
    openModal(modal);
  }

  const HOLIDAYS = [
    { title: 'Durga Puja & Vijayadashami Holidays', date: '19 Oct - 25 Oct 2026', cat: 'gazetted', desc: 'Autumn vacation for university academic departments.' },
    { title: 'Deepawali & Chhath Puja Holidays', date: '10 Nov - 16 Nov 2026', cat: 'gazetted', desc: 'Festival holidays as per Jharkhand Government gazette.' },
    { title: 'Birsa Munda Jayanti & Jharkhand Foundation Day', date: '15 Nov 2026', cat: 'academic', desc: 'Institute Foundation Day ceremony at Deshpande Auditorium.' },
    { title: 'Guru Nanak Jayanti', date: '24 Nov 2026', cat: 'restricted', desc: 'Restricted holiday for faculty and staff.' }
  ];

  function renderHolidays(cat = 'all', query = '') {
    const tbody = $('holidaysTableBody');
    if (!tbody) return;
    const filtered = HOLIDAYS.filter(h => {
      if (cat !== 'all' && h.cat !== cat) return false;
      if (query && !h.title.toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });

    tbody.innerHTML = filtered.map(h => `
      <tr>
        <td><strong>${h.title}</strong><br><span style="font-size: 11px; color: #64748B">${h.desc}</span></td>
        <td>${h.date}</td>
        <td><span class="badge" style="background:#F1F5F9;color:#334155">${h.cat.toUpperCase()}</span></td>
        <td><button type="button" class="btn-outline-action btn-view-holiday-circular" data-holiday-title="${escapeHtml(h.title)}">View Order</button></td>
      </tr>
    `).join('');
  }

  function setupHolidayEngine() {
    $$('.filter-holiday-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-holiday-cat').forEach(b => b.classList.toggle('active', b === btn));
        renderHolidays(btn.dataset.cat, $('holidaySearchInput')?.value);
      });
    });

    $('holidaySearchInput')?.addEventListener('input', (e) => {
      const activeCat = document.querySelector('.filter-holiday-cat.active')?.dataset.cat || 'all';
      renderHolidays(activeCat, e.target.value);
    });

    renderHolidays();
  }

  // ==========================================================================
  // 11. STATUTORY PROFORMA & OFFICIAL DOCUMENTS
  // ==========================================================================
  const PROFORMA_DOCS = {
    'bonafide': { title: 'Bonafide Certificate Proforma', body: 'Certified that the applicant is a regular bona-fide student of BIT Sindri.' },
    'nodues': { title: 'No Dues Clearance Certificate', body: 'Clearance endorsed by Library, Hostel, Workshop, and Examination Sections.' },
    'conversion': { title: 'CGPA to Percentage Conversion Certificate', body: 'Formula: Percentage Marks = (CGPA - 0.5) * 10, as per JUT Regulations.' },
    'aicte-eoa': { title: 'AICTE Extension of Approval (EoA) 2026-2027', body: 'AICTE Approval Order confirming 10 B.Tech & PG Engineering disciplines with 450 Acres unencumbered campus land.' },
    'jut-affiliation': { title: 'JUT Statutory Affiliation Order', body: 'Jharkhand University of Technology, Ranchi order confirming permanent degree conferment under JUT Act 2011/2015.' },
    'safety-cert': { title: 'Land Title & Fire Safety Clearance Certificate', body: 'Government of Jharkhand certified 450.00 Acres unencumbered land and NBC 2016 Fire Safety compliance.' }
  };

  function openProformaModal(key) {
    const doc = PROFORMA_DOCS[key] || PROFORMA_DOCS['bonafide'];
    const modal = $('modalProformaBackdrop');
    if (!modal) return;
    $('modalProformaTitle').textContent = doc.title;
    $('modalProformaBody').innerHTML = `
      <div style="font-family: serif; padding: 18px; border: 1px solid #CBD5E1; background: #fff; border-radius: var(--radius-sm);">
        <h4 style="text-align: center; margin-top: 0;">${doc.title}</h4>
        <p style="font-size: 13px; line-height: 1.7; color: #334155;">${doc.body}</p>
        <div style="display: flex; justify-content: space-between; margin-top: 24px; font-size: 12px;">
          <span>Registrar / Examination Section</span>
          <span>Director, BIT Sindri</span>
        </div>
      </div>
    `;
    openModal(modal);
  }

  // ==========================================================================
  // 12. B.TECH 160-CREDIT SYLLABI & PLACEMENT BROCHURE
  // ==========================================================================
  const SYLLABUS_MAP = {
    'CSE': { code: 'CSE', name: 'Computer Science & Engineering', courses: ['CS301 Data Structures (4.0)', 'CS302 OOP Java (4.0)', 'CS401 Operating Systems (4.0)', 'CS402 Algorithms (4.0)', 'CS501 DBMS (4.0)', 'CS602 Machine Learning (4.0)'] },
    'IT': { code: 'IT', name: 'Information Technology', courses: ['IT301 Data Structures (4.0)', 'IT302 OOP Software Design (4.0)', 'IT401 OS & Cloud (4.0)', 'IT403 Web Technologies (4.0)', 'IT601 Network Security (4.0)'] },
    'ECE': { code: 'ECE', name: 'Electronics & Communication', courses: ['EC301 Electronic Devices (4.0)', 'EC302 Signals & Systems (4.0)', 'EC401 Analog ICs (4.0)', 'EC501 DSP (4.0)', 'EC601 VLSI Design (4.0)'] },
    'EE': { code: 'EE', name: 'Electrical Engineering', courses: ['EE301 Circuit Analysis (4.0)', 'EE302 Electrical Machines (4.0)', 'EE501 Power Systems (4.0)', 'EE502 Control Systems (4.0)', 'EE601 Power Electronics (4.0)'] },
    'ME': { code: 'ME', name: 'Mechanical Engineering', courses: ['ME301 Thermodynamics (4.0)', 'ME302 Strength of Materials (4.0)', 'ME401 Fluid Mechanics (4.0)', 'ME501 Heat Transfer (4.0)', 'ME602 CAD/CAM (4.0)'] },
    'CE': { code: 'CE', name: 'Civil Engineering', courses: ['CE301 Mechanics of Solids (4.0)', 'CE303 Surveying (4.0)', 'CE402 Structural Analysis (4.0)', 'CE501 RCC Design (4.0)', 'CE601 Steel Structures (4.0)'] },
    'META': { code: 'META', name: 'Metallurgical Engineering', courses: ['MT301 Thermodynamics (4.0)', 'MT401 Iron Making (4.0)', 'MT402 Heat Treatment (4.0)', 'MT501 Steel Making (4.0)', 'MT601 Non-Ferrous (4.0)'] },
    'CHEM': { code: 'CHEM', name: 'Chemical Engineering', courses: ['CH301 Process Calculations (4.0)', 'CH302 Fluid Flow (4.0)', 'CH401 Heat Transfer (4.0)', 'CH501 Mass Transfer (4.0)', 'CH602 Process Control (4.0)'] },
    'MINE': { code: 'MINE', name: 'Mining Engineering', courses: ['MN301 Mining Technology (4.0)', 'MN302 Mine Surveying (4.0)', 'MN401 Surface Mining (4.0)', 'MN501 Underground Mining (4.0)', 'MN502 Mine Ventilation (4.0)'] },
    'PROD': { code: 'PROD', name: 'Production & Industrial Engineering', courses: ['PR301 Manufacturing Science (4.0)', 'PR401 Metal Cutting (4.0)', 'PR501 Operations Research (4.0)', 'PR502 Quality & Six Sigma (4.0)', 'PR601 CNC Automation (4.0)'] }
  };

  function openSyllabusModal(branch) {
    const data = SYLLABUS_MAP[branch?.toUpperCase()] || SYLLABUS_MAP['CSE'];
    const modal = $('modalSyllabusBackdrop');
    if (!modal) return;
    $('modalSyllabusTitle').textContent = `${data.name} · B.Tech 160-Credit CBCS Syllabus`;
    $('modalSyllabusBody').innerHTML = `
      <div style="font-size: 13px; line-height: 1.6; padding: 14px; background: #fff; border: 1px solid #CBD5E1; border-radius: var(--radius-sm);">
        <h4 style="margin-top:0;">Jharkhand University of Technology (JUT) Approved CBCS Scheme</h4>
        <p><strong>Minimum Credits Required:</strong> 160.0 Credits · <strong>Attendance Rule:</strong> 75% Mandatory</p>
        <h4 style="margin: 12px 0 6px;">Key Core Engineering Courses:</h4>
        <ul>${data.courses.map(c => `<li>${c}</li>`).join('')}</ul>
        <p style="font-size: 12px; color: #64748B; margin-top: 14px;">Includes 8-week Industrial Internship and Capstone Final Year Project.</p>
      </div>
    `;
    openModal(modal);
  }

  function openBrochureModal() {
    const modal = $('modalBrochureBackdrop');
    if (!modal) return;
    $('modalBrochureTitle').textContent = 'Campus Placement Brochure 2026-2027 · Career Development Centre';
    $('modalBrochureBody').innerHTML = `
      <div style="font-size: 13px; line-height: 1.6; padding: 14px; background: #fff; border: 1px solid #CBD5E1; border-radius: var(--radius-sm);">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; text-align: center; margin-bottom: 14px;">
          <div style="background:#EFF6FF;padding:10px;border-radius:4px;"><strong style="font-size:18px;color:#1D4ED8;">₹50 LPA</strong><br><span style="font-size:11px;">Highest CTC</span></div>
          <div style="background:#F0FDF4;padding:10px;border-radius:4px;"><strong style="font-size:18px;color:#15803D;">₹7.5 LPA</strong><br><span style="font-size:11px;">Average CTC</span></div>
          <div style="background:#FEF3C7;padding:10px;border-radius:4px;"><strong style="font-size:18px;color:#B45309;">900+</strong><br><span style="font-size:11px;">Offers</span></div>
          <div style="background:#F5F3FF;padding:10px;border-radius:4px;"><strong style="font-size:18px;color:#6D28D9;">120+</strong><br><span style="font-size:11px;">Recruiters</span></div>
        </div>
        <p><strong>Director:</strong> Prof. (Dr.) Pankaj Rai · <strong>CDC Chairman:</strong> Prof. (Dr.) Ghanshyam</p>
        <p><strong>Marquee Recruiters:</strong> Tata Steel, Vedanta, JSW, Adani, L&amp;T, Samsung R&amp;D, Microsoft, Schlumberger, Coal India.</p>
        <p><strong>Placement Cell Contact:</strong> tap@bitsindri.ac.in · PABX Ext: 212</p>
      </div>
    `;
    openModal(modal);
  }

  function openErpLoginModal() {
    const fb = $('erpLoginFeedback');
    if (fb) { fb.style.display = 'none'; fb.textContent = ''; }
    openModal($('modalErpLoginBackdrop'));
  }

  function setupErpLoginModal() {
    $('erpLoginForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const roll = $('erpRoll')?.value?.trim() || '23042';
      const fb = $('erpLoginFeedback');
      if (fb) {
        fb.style.display = 'block';
        fb.style.background = '#F0FDF4';
        fb.style.color = '#166534';
        fb.innerHTML = `✓ <strong>Authenticated!</strong> Welcome (Roll ${roll}). Redirecting to student portal...`;
        setTimeout(() => {
          closeModal($('modalErpLoginBackdrop'));
          navigateTo('students/results');
        }, 900);
      }
    });
  }

  function openHelpdeskModal() { openModal($('modalHelpdeskBackdrop')); }
  function openQuickLinksModal() { openModal($('modalQuickLinksBackdrop')); }

  // ==========================================================================
  // 13. GLOBAL EVENT DELEGATION & MODAL DISMISSAL
  // ==========================================================================
  function setupGlobalEvents() {
    window.addEventListener('hashchange', () => navigateTo(window.location.hash));

    document.addEventListener('click', (e) => {
      const subnavBtn = e.target.closest('.subnav-btn');
      if (subnavBtn) {
        const id = subnavBtn.getAttribute('data-subtab');
        if (id) activateSubtab(id);
        return;
      }

      const deptBtn = e.target.closest('.btn-open-dept-profile');
      if (deptBtn) {
        openDepartmentProfile(deptBtn.getAttribute('data-dept-id'));
        return;
      }

      const tenderBtn = e.target.closest('.btn-view-tender');
      if (tenderBtn) {
        openTenderModal(tenderBtn.getAttribute('data-tender'));
        return;
      }

      const proformaBtn = e.target.closest('.btn-view-proforma');
      if (proformaBtn) {
        openProformaModal(proformaBtn.getAttribute('data-proforma'));
        return;
      }

      const docBtn = e.target.closest('.btn-view-official-doc');
      if (docBtn) {
        openProformaModal(docBtn.getAttribute('data-doc'));
        return;
      }

      const sylBtn = e.target.closest('.btn-dl-syllabus');
      if (sylBtn) {
        openSyllabusModal(sylBtn.getAttribute('data-branch'));
        return;
      }

      const broBtn = e.target.closest('.btn-view-brochure, #btnDlPlacementBrochure');
      if (broBtn) {
        e.preventDefault();
        openBrochureModal();
        return;
      }

      if (e.target.closest('#btnHeaderStudentLogin')) { e.preventDefault(); openErpLoginModal(); return; }
      if (e.target.closest('#btnHeaderHelpdesk')) { e.preventDefault(); openHelpdeskModal(); return; }
      if (e.target.closest('#btnHeaderQuickLinks')) { e.preventDefault(); openQuickLinksModal(); return; }

      const ftLink = e.target.closest('.footer-portal-link');
      if (ftLink) {
        const href = ftLink.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          navigateTo(href);
          return;
        }
      }

      if (e.target.closest('.qk-card-link')) {
        closeModal($('modalQuickLinksBackdrop'));
      }

      const holBtn = e.target.closest('.btn-view-holiday-circular');
      if (holBtn) {
        const title = holBtn.getAttribute('data-holiday-title') || 'Official Circular';
        const modal = $('modalHolidayBackdrop');
        if (modal) {
          $('modalHolidayTitle').textContent = title;
          $('modalHolidayBody').innerHTML = `<p>Official Notification Order regarding <strong>${escapeHtml(title)}</strong> issued under authority of Director, BIT Sindri.</p>`;
          openModal(modal);
        }
        return;
      }

      if (e.target.closest('.btn-jump-to-grievance')) {
        e.preventDefault();
        window.location.hash = '#students/grievance';
        return;
      }
    });

    const closePairs = [
      ['btnModalDeptClose', 'btnModalDeptDone', 'modalDeptProfileBackdrop'],
      ['btnModalTenderClose', 'btnModalTenderDone', 'modalTenderBackdrop'],
      ['btnModalProformaClose', 'btnModalProformaDone', 'modalProformaBackdrop'],
      ['btnModalSyllabusClose', 'btnModalSyllabusDone', 'modalSyllabusBackdrop'],
      ['btnModalBrochureClose', 'btnModalBrochureDone', 'modalBrochureBackdrop'],
      ['btnModalErpClose', 'btnModalErpDone', 'modalErpLoginBackdrop'],
      ['btnModalHelpdeskClose', 'btnModalHelpdeskDone', 'modalHelpdeskBackdrop'],
      ['btnModalQuickClose', 'btnModalQuickDone', 'modalQuickLinksBackdrop'],
      ['btnModalHolidayClose', 'btnModalHolidayDone', 'modalHolidayBackdrop'],
      ['btnModalPledgeClose', 'btnModalPledgeDone', 'modalPledgeBackdrop']
    ];

    closePairs.forEach(([cBtn, dBtn, backdrop]) => {
      const bEl = $(backdrop);
      $(cBtn)?.addEventListener('click', () => closeModal(bEl));
      $(dBtn)?.addEventListener('click', () => closeModal(bEl));
      bEl?.addEventListener('click', (e) => {
        if (e.target === bEl) closeModal(bEl);
      });
    });

    $('btnSimulatePledge')?.addEventListener('click', () => openModal($('modalPledgeBackdrop')));
    $('btnSubmitPledge')?.addEventListener('click', () => {
      const msg = $('pledgeSuccessMsg');
      if (msg) { msg.style.display = 'block'; msg.textContent = '✓ Digital Anti-Ragging Affidavit generated & logged with National Compliance Cell.'; }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        $$('.modal-backdrop').forEach(m => closeModal(m));
      }
    });
  }

  // ==========================================================================
  // 14. INITIALIZATION
  // ==========================================================================
  function init() {
    setupNoticeFilters();
    setupNavbarHover();
    setupAttendanceCheck();
    setupResultSearch();
    setupGrievanceEngine();
    setupFeeEstimator();
    setupGuestHouseBooking();
    setupDepartmentFilters();
    setupHolidayEngine();
    setupErpLoginModal();
    setupGlobalEvents();

    if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#notices') {
      navigateTo(window.location.hash);
    } else {
      navigateTo('notices');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
