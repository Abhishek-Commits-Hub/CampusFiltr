/**
 * BIT SINDRI STUDENT ACADEMIC PORTAL
 * NOTICE SECTION REDESIGN LOGIC
 * High-performance client-side filtering, reactive counters, and detail rendering
 */

(function () {
  'use strict';

  // ========================================================
  // SAMPLE DATA: BIT SINDRI NOTICES REPOSITORY
  // Realistic official university notices and circulars
  // ========================================================
  const NOTICES_DATA = [
    {
      id: 'not-001',
      title: 'Institute student innovation hackathon',
      type: 'Opportunity',
      postedDate: '02 Oct 2026',
      postedTimestamp: new Date('2026-10-02T10:00:00').getTime(),
      deadline: '02 Nov 2026',
      dueDays: 26,
      dueText: 'Due in 26 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'All',
        branches: ['All'],
        semesters: ['All'],
        entryType: 'All'
      },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/R&D/HACK/2026/104',
      department: 'Center for Innovation, Incubation & Entrepreneurship (CIIE)',
      originalNotice: `All students of B.Tech, M.Tech, and Ph.D programmes of BIT Sindri are hereby informed that the Institute Annual Innovation Hackathon 2026 is officially declared open.

Teams consisting of 3 to 5 students may formulate and register project proposals addressing real-world engineering problems in Smart Energy, Rural Automation, AI in Manufacturing, or Clean Mining Technologies.

Shortlisted teams will receive dedicated lab prototyping support, cloud computing credits, and direct incubation mentorship at the Siemens Center of Excellence. Cash prizes up to ₹1,50,000 will be awarded to the top three prototypes.

All submissions must be uploaded through the CIIE student innovation portal before 02 November 2026, 11:59 PM.`,
      extracted: {
        category: 'Opportunity',
        cohort: 'Open to all cohorts',
        eligibility: 'Open to all students; teams must follow the event rules in the detailed notice.',
        deadline: '02 Nov 2026 · 26 days left',
        requiredAction: 'Register a team and submit the proposed problem statement.',
        source: 'Student activity notices / CIIE BIT Sindri'
      },
      summary: 'Eligible students must register a team and submit the proposed problem statement by 02 Nov 2026.'
    },

    {
      id: 'not-002',
      title: 'Summer internship applications — open call',
      type: 'Opportunity',
      postedDate: '06 Oct 2026',
      postedTimestamp: new Date('2026-10-06T09:30:00').getTime(),
      deadline: '05 Nov 2026',
      dueDays: 30,
      dueText: 'Due in 30 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'All',
        branches: ['All'],
        semesters: ['All'],
        entryType: 'All'
      },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/TAP/INTERN/2026/412',
      department: 'Training & Placement Cell, BIT Sindri',
      originalNotice: `Applications are invited from eligible students of B.Tech for summer internship opportunities at reputed public sector undertakings (PSUs), state technical boards, and corporate research partners for the upcoming academic break.

Interested candidates must submit their updated resume along with an authenticated semester grade card (CGPA 7.0 and above without standing backlogs) to the Training & Placement Cell.

Applicants must obtain a Non-Objection Certificate (NOC) endorsed by their respective Head of Department before the final verification date.`,
      extracted: {
        category: 'Opportunity',
        cohort: 'Open to all cohorts',
        eligibility: 'All active undergraduate students with minimum CGPA 7.00 and no active backlogs.',
        deadline: '05 Nov 2026 · 30 days left',
        requiredAction: 'Upload updated CV, verified grade card, and Departmental NOC on the T&P portal.',
        source: 'Training & Placement Office Circulars'
      },
      summary: 'Undergraduate students meeting CGPA criteria can apply for approved industrial summer internships by 05 Nov 2026.'
    },

    {
      id: 'not-003',
      title: 'First semester admission document verification',
      type: 'Admission',
      postedDate: '05 Oct 2026',
      postedTimestamp: new Date('2026-10-05T11:00:00').getTime(),
      deadline: '20 Oct 2026',
      dueDays: 13,
      dueText: 'Due in 13 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['1st Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 1st Sem',
      refNo: 'BITS/ADM/VERIF/2026/089',
      department: 'Office of Dean (Academic Affairs)',
      originalNotice: `Newly admitted candidates allotted seats through JCECEB / JEE Mains counselling for the B.Tech First Semester (Session 2026-30) are instructed to report to Deshpande Auditorium for final physical document verification.

Candidates must bring 3 sets of self-attested photocopies along with original documents:
1. JEE Mains Admit Card & Rank Card
2. Seat Allotment Letter
3. Class X & XII Mark sheets and Passing Certificates
4. Residential / Domicile Certificate issued by Circle Officer / SDO
5. Caste & Income Certificate (if claiming reservation quota)
6. Anti-ragging affidavit executed on non-judicial stamp paper.

Failure to verify documents within the prescribed schedule will result in forfeiture of the provisional seat.`,
      extracted: {
        category: 'Admission',
        cohort: 'B.Tech, 1st Semester',
        eligibility: 'All candidates allotted B.Tech seats for Session 2026-30.',
        deadline: '20 Oct 2026 · 13 days left',
        requiredAction: 'Physical reporting at Deshpande Auditorium with original certificates and affidavits.',
        source: 'Academic Admission Section'
      },
      summary: 'First semester newly admitted students must complete mandatory physical document verification at Deshpande Auditorium by 20 Oct 2026.'
    },

    {
      id: 'not-004',
      title: 'Third semester laboratory batch allocation',
      type: 'Class',
      postedDate: '01 Oct 2026',
      postedTimestamp: new Date('2026-10-01T14:15:00').getTime(),
      deadline: null,
      dueDays: null,
      dueText: 'No deadline',
      dueCategory: 'none',
      status: 'Info',
      cohort: {
        programme: 'B.Tech',
        branches: ['CSE', 'IT'],
        semesters: ['3rd Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 3rd Sem · CSE',
      refNo: 'BITS/CSE/LAB/2026/29',
      department: 'Department of Computer Science & Engineering',
      originalNotice: `The laboratory practical batches for B.Tech 3rd Semester (CSE) students for the subjects Data Structures & Algorithms Lab (CS-301P) and Object Oriented Programming Lab (CS-302P) are hereby notified.

Batches are divided as follows:
- Batch A1: Roll No. 24/CSE/001 to 24/CSE/035 (Room: Software Lab 1, Mon/Wed 02:00 PM - 05:00 PM)
- Batch A2: Roll No. 24/CSE/036 to 24/CSE/070 (Room: Systems Lab 2, Tue/Thu 02:00 PM - 05:00 PM)
- Batch A3: Lateral Entry Students and Remaining Candidates (Room: AI Lab, Fri 09:00 AM - 12:00 PM)

Students must maintain laboratory observation notebooks and strictly adhere to lab safety protocols and attendance requirements (minimum 75%).`,
      extracted: {
        category: 'Class',
        cohort: 'B.Tech · CSE · 3rd Sem',
        eligibility: 'All registered 3rd Semester Computer Science students.',
        deadline: 'No deadline',
        requiredAction: 'Note assigned laboratory batch and report to respective software labs accordingly.',
        source: 'Department of Computer Science & Engineering Notice Board'
      },
      summary: '3rd Semester CSE students are allocated practical laboratory batches (A1, A2, A3) starting immediately with 75% mandatory attendance.'
    },

    {
      id: 'not-005',
      title: 'Submission of 5th semester examination forms',
      type: 'Examination',
      postedDate: '06 Oct 2026',
      postedTimestamp: new Date('2026-10-06T12:00:00').getTime(),
      deadline: '14 Oct 2026',
      dueDays: 7,
      dueText: 'Due in 7 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['5th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 5th Sem',
      refNo: 'BITS/EXAM/FORM/2026/512',
      department: 'Office of Controller of Examinations',
      originalNotice: `It is notified for information of all concerned that the link for online filling of Examination Forms for B.Tech 5th Semester Examination 2026 (Regular & Ex-students) under Jharkhand University of Technology (JUT) will remain active up to 14 October 2026.

Important Instructions:
1. Complete online fee payment of ₹1,800 via the SBI Collect portal under 'BIT Sindri Examination Fee'.
2. Enter transaction reference on JUT Gyanjyoti portal (jutgyanjyoti.jharkhand.gov.in).
3. Download printed copy of the examination form and submit to respective departmental examination in-charge with fee receipt.
4. Late submission with fine of ₹500 will be permitted between 15 Oct and 17 Oct 2026 only.`,
      extracted: {
        category: 'Examination',
        cohort: 'B.Tech · 5th Semester',
        eligibility: 'Enrolled 5th semester students with approved semester registration.',
        deadline: '14 Oct 2026 · 7 days left',
        requiredAction: 'Submit online examination form on JUT Gyanjyoti portal and submit hard copy.',
        source: 'Examination Section Circulars'
      },
      summary: '5th Semester students must submit online examination forms via JUT portal and pay ₹1,800 fee by 14 Oct 2026 to avoid late fines.'
    },

    {
      id: 'not-006',
      title: 'Hostel No. 22 & 23 Mess committee meeting and fee dues notice',
      type: 'Hostel',
      postedDate: '03 Oct 2026',
      postedTimestamp: new Date('2026-10-03T16:00:00').getTime(),
      deadline: '09 Oct 2026',
      dueDays: 2,
      dueText: 'Due in 2 days',
      dueCategory: '48h',
      status: 'Urgent',
      cohort: {
        programme: 'All',
        branches: ['All'],
        semesters: ['All'],
        entryType: 'All'
      },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/HOSTEL/MESS/2026/78',
      department: 'Office of Dean Students Welfare (DSW) & Chief Warden',
      originalNotice: `All boarders of Senior Hostels No. 22, 23 and 24 are hereby informed that the monthly mess advance reconciliation meeting will be convened on 09 October 2026 at 06:30 PM in Hostel 22 Common Room.

Boarders having pending mess charges for August & September 2026 must clear outstanding dues via the hostel digital mess counter. Unsettled dues after 09 October will lead to dining suspension and withholding of examination clearance certificates.`,
      extracted: {
        category: 'Hostel',
        cohort: 'Open to all cohorts (Hostel Residents)',
        eligibility: 'All resident boarders of Hostel 22, 23 & 24.',
        deadline: '09 Oct 2026 · 2 days left',
        requiredAction: 'Clear outstanding mess dues and attend the scheduled committee election meeting.',
        source: 'Hostel Superintendent & DSW Office'
      },
      summary: 'Hostel 22 & 23 residents must clear all outstanding mess dues by 09 Oct 2026 to avoid dining suspension.'
    },

    {
      id: 'not-007',
      title: 'Annual Technical Fest — Sandhaan 2026 Core Induction',
      type: 'Event',
      postedDate: '04 Oct 2026',
      postedTimestamp: new Date('2026-10-04T17:00:00').getTime(),
      deadline: '18 Oct 2026',
      dueDays: 11,
      dueText: 'Due in 11 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'All',
        branches: ['All'],
        semesters: ['All'],
        entryType: 'All'
      },
      cohortLabel: 'Open to all cohorts',
      refNo: 'BITS/TECH/SANDHAAN/2026/02',
      department: 'Model Club & Student Technical Council',
      originalNotice: `The Model Club, in coordination with the Office of Student Welfare, announces the induction of student volunteers and coordinators for the national-level annual technical festival 'SANDHAAN 2026'.

Domains open for induction:
- Technical Events (Robotics, Web/App Dev, CAD Modeling)
- Corporate Relations & Sponsorship
- Public Relations & Social Media Outreach
- Logistics, Stage Management & Hospitality

Students across all branches and semesters are invited to attend the preliminary interview rounds at the IT Building Auditorium.`,
      extracted: {
        category: 'Event',
        cohort: 'Open to all cohorts',
        eligibility: 'All enthusiastic students of 1st, 2nd, and 3rd year B.Tech.',
        deadline: '18 Oct 2026 · 11 days left',
        requiredAction: 'Register via the Sandhaan induction link and appear for domain interviews.',
        source: 'Technical Advisory Board'
      },
      summary: 'Induction for Sandhaan 2026 Technical Fest core teams is ongoing; registrations close on 18 Oct 2026.'
    },

    {
      id: 'not-008',
      title: 'Shortlisted candidates for Siemens Center of Excellence training program',
      type: 'Name List',
      postedDate: '02 Oct 2026',
      postedTimestamp: new Date('2026-10-02T13:45:00').getTime(),
      deadline: '08 Oct 2026',
      dueDays: 1,
      dueText: 'Due tomorrow',
      dueCategory: '48h',
      status: 'Urgent',
      cohort: {
        programme: 'B.Tech',
        branches: ['CSE', 'ECE', 'EE', 'ME', 'Production'],
        semesters: ['3rd Sem', '5th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 3rd & 5th Sem',
      refNo: 'BITS/SIEMENS/SL/2026/88',
      department: 'Siemens Center of Excellence (CoE)',
      originalNotice: `The list of 60 candidates shortlisted for the Advanced Industrial Automation & IoT Hands-on Training Module at Siemens CoE is hereby published.

Shortlisted students must report to Lab 4, Siemens CoE on or before 08 October 2026 (04:00 PM) to confirm their seat acceptance and collect project kit credentials. Vacant seats after the deadline will automatically be offered to waitlisted candidates.`,
      extracted: {
        category: 'Name List',
        cohort: 'B.Tech · 3rd & 5th Sem',
        eligibility: 'Shortlisted applicants from CSE, ECE, EE, ME, and Production branches.',
        deadline: '08 Oct 2026 · 1 day left',
        requiredAction: 'Physical seat confirmation and biometric registration at Siemens CoE Lab 4.',
        source: 'Siemens CoE Executive Director Office'
      },
      summary: 'Shortlisted students for Siemens CoE Automation batch must confirm acceptance at Lab 4 by 08 Oct 2026.'
    },

    {
      id: 'not-009',
      title: 'Class routine revision for 3rd Semester CSE & IT batches',
      type: 'Class',
      postedDate: '05 Oct 2026',
      postedTimestamp: new Date('2026-10-05T15:00:00').getTime(),
      deadline: null,
      dueDays: null,
      dueText: 'No deadline',
      dueCategory: 'none',
      status: 'Info',
      cohort: {
        programme: 'B.Tech',
        branches: ['CSE', 'IT'],
        semesters: ['3rd Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 3rd Sem · CSE',
      refNo: 'BITS/CSE/ROUTINE/2026/34',
      department: 'Department of Computer Science & Engineering',
      originalNotice: `In view of the faculty load rationalization, the lecture timetable for B.Tech 3rd Semester CSE (Sections A & B) stands revised with effect from Monday, 10 October 2026.

Key Changes:
- Discrete Mathematics (CS-303): Shifted to Mon/Wed/Fri 10:00 AM - 11:00 AM (Room LH-04).
- Computer Organization (CS-304): Tue/Thu 11:15 AM - 12:45 PM (Room LH-04).
- All tutorial sessions will be conducted in Department Seminar Hall.

Students must download the updated timetable from the student portal and check attendance regularities with faculty advisors.`,
      extracted: {
        category: 'Class',
        cohort: 'B.Tech · 3rd Sem · CSE & IT',
        eligibility: 'All students enrolled in 3rd Semester Computer Science & Information Tech.',
        deadline: 'No deadline',
        requiredAction: 'Note updated classroom schedule effective from 10 October 2026.',
        source: 'Department Routine Committee'
      },
      summary: 'Revised lecture routine for 3rd Sem CSE takes effect Monday 10 Oct 2026; venue moved to Lecture Hall 04.'
    },

    {
      id: 'not-010',
      title: 'End Semester Examination schedule for B.Tech 7th Semester (Regular & Carryover)',
      type: 'Examination',
      postedDate: '28 Sep 2026',
      postedTimestamp: new Date('2026-09-28T11:00:00').getTime(),
      deadline: '15 Oct 2026',
      dueDays: 8,
      dueText: 'Due in 8 days',
      dueCategory: 'normal',
      status: 'Info',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['7th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 7th Sem',
      refNo: 'BITS/EXAM/SCHED/2026/498',
      department: 'Office of Controller of Examinations',
      originalNotice: `The detailed timetable for B.Tech 7th Semester Theory Examinations 2026 under Jharkhand University of Technology (JUT) has been notified.

Examinations will commence from 24 October 2026 across designated examination halls (Main Building & New Academic Block). Admit cards will be distributed through respective branch departments starting 15 October 2026.

Candidates must report 30 minutes prior to exam commencement with valid college identity card and university admit card. No electronic gadgets or programmable calculators will be allowed inside the hall.`,
      extracted: {
        category: 'Examination',
        cohort: 'B.Tech · 7th Semester',
        eligibility: 'All registered 7th semester students with clearance from central library and departments.',
        deadline: '15 Oct 2026 · 8 days left',
        requiredAction: 'Collect printed admit cards from departmental coordinators starting 15 Oct 2026.',
        source: 'JUT Examination Wing / BIT Sindri Center'
      },
      summary: '7th Semester final theory examinations commence 24 Oct 2026; admit cards will be issued from 15 Oct 2026.'
    },

    {
      id: 'not-011',
      title: 'Registration for 2nd Semester Remedial & Supplementary Examinations',
      type: 'Examination',
      postedDate: '04 Oct 2026',
      postedTimestamp: new Date('2026-10-04T11:30:00').getTime(),
      deadline: '16 Oct 2026',
      dueDays: 9,
      dueText: 'Due in 9 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['2nd Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 2nd Sem',
      refNo: 'BITS/EXAM/REM/2026/304',
      department: 'Office of Controller of Examinations',
      originalNotice: `Students having backlogs or seeking supplementary grading in B.Tech 2nd Semester courses (Session 2025-26) are directed to register for the Special Remedial Examinations on the university examination portal.

Prescribed registration fee of ₹600 per subject must be remitted through online banking before generating the application receipt.

Duly verified application forms must be deposited with respective course coordinators on or before 16 October 2026.`,
      extracted: {
        category: 'Examination',
        cohort: 'B.Tech · 2nd Semester',
        eligibility: 'B.Tech students with carryover papers in 2nd semester courses.',
        deadline: '16 Oct 2026 · 9 days left',
        requiredAction: 'Complete portal registration and submit fee receipts to department coordinators.',
        source: 'Examination Wing Notification'
      },
      summary: '2nd Semester backlog and remedial exam registration open until 16 Oct 2026 with ₹600 per subject fee.'
    },

    {
      id: 'not-012',
      title: 'Fourth semester mini-project synopsis submission guidelines',
      type: 'Class',
      postedDate: '03 Oct 2026',
      postedTimestamp: new Date('2026-10-03T10:00:00').getTime(),
      deadline: '22 Oct 2026',
      dueDays: 15,
      dueText: 'Due in 15 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'B.Tech',
        branches: ['CSE', 'IT', 'ECE'],
        semesters: ['4th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 4th Sem · CSE/IT',
      refNo: 'BITS/CSE/PROJ/2026/18',
      department: 'Department Project Evaluation Committee',
      originalNotice: `All students of B.Tech 4th Semester (Computer Science, Information Technology, and ECE) are instructed to submit their Project Synopsis (2 pages, IEEE format) for the 4th Semester Mini-Project.

Project groups may consist of 2 to 3 members. Each group must identify a faculty mentor from the department before final synopsis upload.

Presentations for topic defense will commence from 27 October 2026 before the departmental panel.`,
      extracted: {
        category: 'Class',
        cohort: 'B.Tech · 4th Sem · CSE, IT, ECE',
        eligibility: 'All 4th Semester students registered for Mini-Project Lab.',
        deadline: '22 Oct 2026 · 15 days left',
        requiredAction: 'Submit signed 2-page project synopsis endorsed by faculty mentor.',
        source: 'Department Project Cell'
      },
      summary: '4th Semester students must submit Mini-Project synopses with faculty mentor endorsement by 22 Oct 2026.'
    },

    {
      id: 'not-013',
      title: 'Mandatory industrial training approval & company NOC format (6th Sem)',
      type: 'Opportunity',
      postedDate: '02 Oct 2026',
      postedTimestamp: new Date('2026-10-02T15:20:00').getTime(),
      deadline: '28 Oct 2026',
      dueDays: 21,
      dueText: 'Due in 21 days',
      dueCategory: 'normal',
      status: 'Open',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['6th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 6th Sem',
      refNo: 'BITS/TAP/NOC/2026/92',
      department: 'Training & Placement Cell, BIT Sindri',
      originalNotice: `In accordance with AICTE & JUT curriculum guidelines, all students currently in B.Tech 6th Semester must undertake compulsory 4 to 6 weeks Industrial Internship/Vocational Training during the upcoming semester break.

Students who have received training offers from certified PSUs, research organizations, or established corporations must apply for official institutional NOCs through the T&P portal.

Late or unapproved internship venues will not be considered for semester credit awards.`,
      extracted: {
        category: 'Opportunity',
        cohort: 'B.Tech · 6th Semester',
        eligibility: 'All students enrolled in B.Tech 6th Semester.',
        deadline: '28 Oct 2026 · 21 days left',
        requiredAction: 'Submit corporate acceptance letter and request official T&P clearance NOC.',
        source: 'Training & Placement Cell Bulletin'
      },
      summary: '6th Semester students must obtain verified college NOC for mandatory summer industrial training by 28 Oct 2026.'
    },

    {
      id: 'not-014',
      title: 'Final Year 8th Semester major project thesis submission & viva-voce schedule',
      type: 'Examination',
      postedDate: '01 Oct 2026',
      postedTimestamp: new Date('2026-10-01T09:00:00').getTime(),
      deadline: '12 Oct 2026',
      dueDays: 5,
      dueText: 'Due in 5 days',
      dueCategory: '7d',
      status: 'Urgent',
      cohort: {
        programme: 'B.Tech',
        branches: ['All'],
        semesters: ['8th Sem'],
        entryType: 'Regular'
      },
      cohortLabel: 'B.Tech · 8th Sem',
      refNo: 'BITS/EXAM/THESIS/2026/621',
      department: 'Academic Section & Examination Wing',
      originalNotice: `Final year B.Tech 8th Semester candidates are hereby notified that the final bound copies of their Major Project Thesis, along with plagiarism reports (similarity index below 15% as per Turnitin/UGC norm), must be submitted to their respective departmental offices.

External viva-voce examinations with university appointed examiners will be conducted between 18 October and 21 October 2026.

Candidates failing to submit before the deadline will not be eligible to appear for the degree clearance viva.`,
      extracted: {
        category: 'Examination',
        cohort: 'B.Tech · 8th Semester',
        eligibility: 'All graduating B.Tech 8th Semester candidates.',
        deadline: '12 Oct 2026 · 5 days left',
        requiredAction: 'Submit 3 spiral/hard-bound thesis copies with anti-plagiarism certificate.',
        source: 'Dean Academic & Controller of Examinations'
      },
      summary: '8th Semester students must submit major project theses and plagiarism clearance by 12 Oct 2026 ahead of final viva.'
    }
  ];

  // ========================================================
  // ACADEMIC YEAR TO SEMESTERS MAPPING
  // Supports Year dropdown selection and reactive semester pills
  // ========================================================
  // ========================================================
  // SEMESTER & YEAR LABELS MAPPING (SINGLE DROPDOWN)
  // Human-readable names for options in the single semester dropdown
  // ========================================================
  const SEMESTER_LABELS = {
    'All': 'All Semesters',
    '1st Year': '1st Year (Both 1st & 2nd Sem)',
    '1st Sem': '1st Semester (1st Year)',
    '2nd Sem': '2nd Semester (1st Year)',
    '2nd Year': '2nd Year (Both 3rd & 4th Sem)',
    '3rd Sem': '3rd Semester (2nd Year)',
    '4th Sem': '4th Semester (2nd Year)',
    '3rd Year': '3rd Year (Both 5th & 6th Sem)',
    '5th Sem': '5th Semester (3rd Year)',
    '6th Sem': '6th Semester (3rd Year)',
    '4th Year': '4th Year (Both 7th & 8th Sem)',
    '7th Sem': '7th Semester (4th Year)',
    '8th Sem': '8th Semester (4th Year)'
  };

  // ========================================================
  // ACTIVE FILTER STATE MANAGEMENT
  // Default: B.Tech -> CSE -> 3rd Semester (2nd Year) -> Regular
  // ========================================================
  const state = {
    // Top Cohort Filters
    programme: 'B.Tech',
    branch: 'CSE',
    sem: '3rd Sem',
    entry: 'Regular',

    // Notice-Type Sidebar Filters
    selectedTypes: new Set(), // If empty, all types eligible
    due: 'any', // 'any', '48h', '7d', 'none'
    showOtherCohorts: false, // Default: false (only relevant notices)

    // Search
    searchQuery: '',

    // Selected Notice in Detail View
    selectedNoticeId: 'not-001'
  };

  // DOM Elements Cache
  const elements = {
    // Top Filters
    cohortSummaryText: document.getElementById('cohortSummaryText'),
    selectBranch: document.getElementById('selectBranch'),
    selectSemester: document.getElementById('selectSemester'),
    programmePills: document.querySelectorAll('#groupProgramme .pill-opt'),
    entryPills: document.querySelectorAll('#groupEntryType .pill-opt'),

    // Sidebar
    noticeSidebar: document.getElementById('noticeSidebar'),
    typeCheckboxes: document.querySelectorAll('#typeCheckboxGroup input[type="checkbox"]'),
    dueRadios: document.querySelectorAll('input[name="dueFilter"]'),
    chkOtherCohorts: document.getElementById('chkOtherCohorts'),
    btnClearTypeFilters: document.getElementById('btnClearTypeFilters'),
    btnResetFilters: document.getElementById('btnResetFilters'),
    btnMobileFilterToggle: document.getElementById('btnMobileFilterToggle'),
    mobileActiveFilterCount: document.getElementById('mobileActiveFilterCount'),

    // Category Counts
    counts: {
      Examination: document.getElementById('countExamination'),
      Admission: document.getElementById('countAdmission'),
      Hostel: document.getElementById('countHostel'),
      Class: document.getElementById('countClass'),
      Opportunity: document.getElementById('countOpportunity'),
      Event: document.getElementById('countEvent'),
      'Name List': document.getElementById('countNameList')
    },

    // Latest Notice Bar
    latestNoticeBar: document.getElementById('latestNoticeBar'),
    latestNoticeText: document.getElementById('latestNoticeText'),

    // Search & Meta
    noticeSearchInput: document.getElementById('noticeSearchInput'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    resultsCount: document.getElementById('resultsCount'),
    activeTagsRow: document.getElementById('activeTagsRow'),
    activeTagsList: document.getElementById('activeTagsList'),
    btnClearAllTags: document.getElementById('btnClearAllTags'),

    // List & Detail Panes
    noticeListContainer: document.getElementById('noticeListContainer'),
    noticeListPane: document.getElementById('noticeListPane'),
    noticeDetailPane: document.getElementById('noticeDetailPane'),
    detailCard: document.getElementById('detailCard'),

    // Modal
    modalSourceBackdrop: document.getElementById('modalSourceBackdrop'),
    modalDocTitle: document.getElementById('modalDocTitle'),
    modalDocBody: document.getElementById('modalDocBody'),
    btnModalClose: document.getElementById('btnModalClose'),
    btnModalDone: document.getElementById('btnModalDone'),

    // Refresh
    btnRefreshNotices: document.getElementById('btnRefreshNotices')
  };

  // ========================================================
  // RELEVANCE & FILTERING ALGORITHMS
  // ========================================================

  /**
   * Checks if a notice matches the student's academic cohort
   */
  function matchesCohort(notice, p, b, s, e) {
    const c = notice.cohort;
    if (!c) return true;

    // Check Programme
    if (c.programme !== 'All' && c.programme !== p) return false;

    // Check Branch
    if (c.branches && !c.branches.includes('All') && !c.branches.includes(b)) return false;

    // Check Entry Type
    if (c.entryType && c.entryType !== 'All' && c.entryType !== e) return false;

    // Check Academic Semester / Year Option
    if (c.semesters && !c.semesters.includes('All')) {
      if (s === 'All') {
        return true;
      } else if (s === '1st Year') {
        const matches1st = c.semesters.includes('1st Sem') || c.semesters.includes('2nd Sem');
        if (!matches1st) return false;
      } else if (s === '2nd Year') {
        const matches2nd = c.semesters.includes('3rd Sem') || c.semesters.includes('4th Sem');
        if (!matches2nd) return false;
      } else if (s === '3rd Year') {
        const matches3rd = c.semesters.includes('5th Sem') || c.semesters.includes('6th Sem');
        if (!matches3rd) return false;
      } else if (s === '4th Year') {
        const matches4th = c.semesters.includes('7th Sem') || c.semesters.includes('8th Sem');
        if (!matches4th) return false;
      } else {
        // Specific semester (e.g. '3rd Sem')
        if (!c.semesters.includes(s)) return false;
      }
    }

    return true;
  }

  /**
   * Filters the complete notices list according to all active criteria
   */
  function getFilteredNotices() {
    return NOTICES_DATA.filter(notice => {
      // 1. Cohort relevance check
      if (!state.showOtherCohorts) {
        if (!matchesCohort(notice, state.programme, state.branch, state.sem, state.entry)) {
          return false;
        }
      }

      // 2. Notice-Type Sidebar filter (Checkboxes)
      if (state.selectedTypes.size > 0) {
        if (!state.selectedTypes.has(notice.type)) {
          return false;
        }
      }

      // 3. Due filter (Radio buttons)
      if (state.due !== 'any') {
        if (state.due === '48h') {
          // Within 48 hours: dueDays is not null and <= 2
          if (notice.dueDays === null || notice.dueDays > 2) return false;
        } else if (state.due === '7d') {
          // Within 7 days: dueDays is not null and <= 7
          if (notice.dueDays === null || notice.dueDays > 7) return false;
        } else if (state.due === 'none') {
          // No deadline
          if (notice.deadline !== null && notice.dueDays !== null) return false;
        }
      }

      // 4. Keyword search filter
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        const matchTitle = notice.title.toLowerCase().includes(query);
        const matchType = notice.type.toLowerCase().includes(query);
        const matchDept = notice.department.toLowerCase().includes(query);
        const matchBody = notice.originalNotice.toLowerCase().includes(query);
        if (!matchTitle && !matchType && !matchDept && !matchBody) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Computes category counts for the sidebar based on cohort and due filters
   */
  function updateSidebarCounts() {
    const types = ['Examination', 'Admission', 'Hostel', 'Class', 'Opportunity', 'Event', 'Name List'];
    const counts = {};
    types.forEach(t => counts[t] = 0);

    NOTICES_DATA.forEach(notice => {
      // Must match cohort condition
      if (!state.showOtherCohorts && !matchesCohort(notice, state.programme, state.branch, state.sem, state.entry)) {
        return;
      }

      // Must match due filter
      if (state.due !== 'any') {
        if (state.due === '48h' && (notice.dueDays === null || notice.dueDays > 2)) return;
        if (state.due === '7d' && (notice.dueDays === null || notice.dueDays > 7)) return;
        if (state.due === 'none' && (notice.deadline !== null && notice.dueDays !== null)) return;
      }

      if (counts[notice.type] !== undefined) {
        counts[notice.type]++;
      }
    });

    types.forEach(t => {
      const el = elements.counts[t];
      if (el) {
        el.textContent = `(${counts[t]})`;
      }
    });
  }

  // ========================================================
  // RENDERING FUNCTIONS
  // ========================================================

  /**
   * Renders the Latest Notice strip
   */
  function renderLatestNotice() {
    // Sort notices by postedTimestamp descending
    const sorted = [...NOTICES_DATA].sort((a, b) => b.postedTimestamp - a.postedTimestamp);
    if (sorted.length > 0) {
      const newest = sorted[0];
      elements.latestNoticeText.innerHTML = `
        <strong>${escapeHtml(newest.title)}</strong> &mdash; 
        <span class="type-pill-text">${escapeHtml(newest.type)}</span> &mdash; 
        <span>${escapeHtml(newest.postedDate)}</span>
      `;
      elements.latestNoticeBar.dataset.noticeId = newest.id;
    }
  }

  /**
   * Renders the Notice List area
   */
  function renderNoticeList(notices) {
    elements.noticeListContainer.innerHTML = '';

    // Update results meta
    elements.resultsCount.textContent = `Showing ${notices.length} of ${NOTICES_DATA.length} notices`;

    if (notices.length === 0) {
      elements.noticeListContainer.innerHTML = `
        <div class="notice-empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.35-4.35"></path>
            <path d="M8 11h6"></path>
          </svg>
          <h4>No matching notices found</h4>
          <p>Try adjusting your Type checkboxes, Due timeline, or academic cohort filters.</p>
          <button type="button" class="btn-refresh" id="btnEmptyReset" style="margin: 0 auto;">Reset Filters</button>
        </div>
      `;
      const btnReset = document.getElementById('btnEmptyReset');
      if (btnReset) {
        btnReset.addEventListener('click', resetAllFilters);
      }
      renderNoticeDetail(null);
      return;
    }

    // Ensure selectedNoticeId is valid
    const hasSelected = notices.some(n => n.id === state.selectedNoticeId);
    if (!hasSelected && notices.length > 0) {
      state.selectedNoticeId = notices[0].id;
    }

    notices.forEach(notice => {
      const isSelected = notice.id === state.selectedNoticeId;
      const card = document.createElement('article');
      card.className = `notice-card ${isSelected ? 'selected' : ''}`;
      card.tabIndex = 0;
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      card.dataset.id = notice.id;

      // Type badge class
      const typeClass = notice.type.toLowerCase().replace(/\s+/g, '');

      // Due badge styling
      let dueBadgeHtml = '';
      if (notice.dueDays !== null) {
        const isUrgent = notice.dueDays <= 2;
        dueBadgeHtml = `
          <span class="due-badge ${isUrgent ? 'urgent' : 'normal'}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            ${escapeHtml(notice.dueText)}
          </span>
        `;
      } else {
        dueBadgeHtml = `<span class="due-badge none">No deadline</span>`;
      }

      card.innerHTML = `
        <div class="notice-card-header">
          <span class="type-badge ${typeClass}">${escapeHtml(notice.type)}</span>
          <span class="status-pill ${notice.status.toLowerCase()}">${escapeHtml(notice.status)}</span>
        </div>
        <h4 class="notice-card-title">${escapeHtml(notice.title)}</h4>
        <div class="notice-card-meta">
          <span class="posted-date">Posted ${escapeHtml(notice.postedDate)}</span>
          <span class="meta-dot">·</span>
          <span class="cohort-tag">${escapeHtml(notice.cohortLabel)}</span>
        </div>
        <div class="notice-card-footer">
          ${dueBadgeHtml}
          <span style="font-size: 11px; color: var(--color-navy-light); font-weight: 500;">Details &rarr;</span>
        </div>
      `;

      card.addEventListener('click', () => {
        selectNotice(notice.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectNotice(notice.id);
        }
      });

      elements.noticeListContainer.appendChild(card);
    });

    // Render the currently selected notice detail
    const currentNotice = NOTICES_DATA.find(n => n.id === state.selectedNoticeId);
    renderNoticeDetail(currentNotice);
  }

  /**
   * Renders the Notice Detail Area (Right Pane)
   */
  function renderNoticeDetail(notice) {
    if (!notice) {
      elements.detailCard.innerHTML = `
        <div style="padding: 40px 20px; text-align: center; color: var(--color-text-muted);">
          <p>Please select a notice from the list to view complete details, extracted metadata, and official circular content.</p>
        </div>
      `;
      return;
    }

    const typeClass = notice.type.toLowerCase().replace(/\s+/g, '');

    elements.detailCard.innerHTML = `
      <div class="detail-header-block">
        <button type="button" class="btn-mobile-back" id="btnMobileBackToList">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          &larr; Back to Notice List
        </button>

        <div class="detail-top-meta">
          <div class="detail-pills-row">
            <span class="type-badge ${typeClass}">${escapeHtml(notice.type)}</span>
            <span class="status-pill ${notice.status.toLowerCase()}">${escapeHtml(notice.status)}</span>
          </div>

          <div class="detail-actions-row">
            <button type="button" class="btn-detail-action" id="btnShareNotice" title="Copy Notice Link">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 1L5 2.586A2 2 0 0 0 6.414 4.001l1.828-1.829A3 3 0 0 1 11.45 6.88l-1.829 1.828a1.002 1.002 0 0 0-.199.154 2 2 0 0 0 3.338-.861l1.828-1.828a3 3 0 1 0-4.243-4.243L8.586 3.5 8 2.914a1.002 1.002 0 0 0-.154-.199A2 2 0 0 1 6.586 1z"/>
              </svg>
              Share
            </button>
            <button type="button" class="btn-detail-action" id="btnPrintNotice" title="Print Circular">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
              </svg>
              Print
            </button>
          </div>
        </div>

        <h3 class="detail-title">${escapeHtml(notice.title)}</h3>

        <div class="detail-sub-meta">
          <span><strong>${escapeHtml(notice.type)}</strong></span>
          <span>·</span>
          <span>Posted ${escapeHtml(notice.postedDate)}</span>
          <span>·</span>
          <span>${escapeHtml(notice.department)}</span>
        </div>
      </div>

      <div class="detail-body-content">

        <!-- Academic Circular Reference Header -->
        <div class="academic-ref-bar">
          <div>
            <strong>Memo No:</strong> ${escapeHtml(notice.refNo)}
          </div>
          <div>
            <strong>Office:</strong> ${escapeHtml(notice.department)}
          </div>
        </div>

        <!-- Original Notice Section -->
        <div>
          <h4 class="detail-section-title">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
            </svg>
            Original Notice
          </h4>
          <div class="original-notice-box">
            ${notice.originalNotice.split('\n\n').map(p => `<p>${escapeHtml(p)}</p>`).join('')}

            <div class="official-signatory">
              <strong>By Order of the Competent Authority,</strong>
              ${escapeHtml(notice.department)}<br>
              Birsa Institute of Technology, Sindri (Dhanbad)
            </div>
          </div>
        </div>

        <!-- Extracted Details Table -->
        <div>
          <h4 class="detail-section-title">
            <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-14v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4zM1 3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1z"/>
            </svg>
            Extracted Details
          </h4>
          <table class="extracted-details-table" role="table">
            <tbody>
              <tr>
                <th scope="row">Category</th>
                <td><strong>${escapeHtml(notice.extracted.category)}</strong></td>
              </tr>
              <tr>
                <th scope="row">Cohort</th>
                <td>${escapeHtml(notice.extracted.cohort)}</td>
              </tr>
              <tr>
                <th scope="row">Eligibility</th>
                <td>${escapeHtml(notice.extracted.eligibility)}</td>
              </tr>
              <tr>
                <th scope="row">Deadline</th>
                <td>
                  <span style="color: ${notice.dueDays !== null && notice.dueDays <= 2 ? '#B91C1C' : 'var(--color-navy-dark)'}; font-weight: 600;">
                    ${escapeHtml(notice.extracted.deadline)}
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Required action</th>
                <td>${escapeHtml(notice.extracted.requiredAction)}</td>
              </tr>
              <tr>
                <th scope="row">Source</th>
                <td>
                  <div class="source-action-cell">
                    <span>${escapeHtml(notice.extracted.source)}</span>
                    <button type="button" class="btn-view-source" id="btnOpenSourceModal">
                      <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/>
                      </svg>
                      View original source
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Auto-Generated Summary Callout -->
        <div class="summary-box">
          <div class="summary-header">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="#0B2545">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            <h5 class="summary-title">Auto-generated summary</h5>
          </div>
          <p class="summary-text">${escapeHtml(notice.summary)}</p>
        </div>

      </div>
    `;

    // Hook up detail action handlers
    const btnOpenModal = document.getElementById('btnOpenSourceModal');
    if (btnOpenModal) {
      btnOpenModal.addEventListener('click', () => openSourceModal(notice));
    }

    const btnShare = document.getElementById('btnShareNotice');
    if (btnShare) {
      btnShare.addEventListener('click', () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href);
          btnShare.textContent = 'Copied!';
          setTimeout(() => {
            btnShare.innerHTML = `
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                <path d="M6.586 1L5 2.586A2 2 0 0 0 6.414 4.001l1.828-1.829A3 3 0 0 1 11.45 6.88l-1.829 1.828a1.002 1.002 0 0 0-.199.154 2 2 0 0 0 3.338-.861l1.828-1.828a3 3 0 1 0-4.243-4.243L8.586 3.5 8 2.914a1.002 1.002 0 0 0-.154-.199A2 2 0 0 1 6.586 1z"/>
              </svg> Share
            `;
          }, 2000);
        }
      });
    }

    const btnPrint = document.getElementById('btnPrintNotice');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => window.print());
    }

    const btnMobileBack = document.getElementById('btnMobileBackToList');
    if (btnMobileBack) {
      btnMobileBack.addEventListener('click', () => {
        elements.noticeDetailPane.classList.remove('mobile-active');
        elements.noticeListPane.classList.remove('mobile-hidden');
      });
    }
  }

  /**
   * Renders active filter tags chips
   */
  function renderActiveTags() {
    elements.activeTagsList.innerHTML = '';
    const tags = [];

    // Cohort tags
    tags.push({ label: `Prog: ${state.programme}`, type: 'programme' });
    tags.push({ label: `Branch: ${state.branch}`, type: 'branch' });
    const semLabel = SEMESTER_LABELS[state.sem] || state.sem;
    tags.push({ label: `Sem: ${semLabel}`, type: 'sem' });
    tags.push({ label: `Entry: ${state.entry}`, type: 'entry' });

    // Type tags
    state.selectedTypes.forEach(t => {
      tags.push({ label: `Type: ${t}`, type: 'type', val: t });
    });

    // Due tag
    if (state.due !== 'any') {
      const dueLabel = state.due === '48h' ? 'Due: ≤ 48 hrs' : (state.due === '7d' ? 'Due: ≤ 7 days' : 'Due: No deadline');
      tags.push({ label: dueLabel, type: 'due' });
    }

    // Cohort toggle tag
    if (state.showOtherCohorts) {
      tags.push({ label: 'Include Other Cohorts', type: 'cohortToggle' });
    }

    // Search tag
    if (state.searchQuery.trim() !== '') {
      tags.push({ label: `Search: "${state.searchQuery.trim()}"`, type: 'search' });
    }

    tags.forEach(t => {
      const chip = document.createElement('span');
      chip.className = 'filter-tag-chip';
      chip.innerHTML = `
        ${escapeHtml(t.label)}
        <span class="remove-tag" title="Remove filter" aria-label="Remove filter">&times;</span>
      `;
      chip.querySelector('.remove-tag').addEventListener('click', () => {
        removeFilterTag(t);
      });
      elements.activeTagsList.appendChild(chip);
    });

    // Update mobile filter badge
    let activeSidebarFilters = state.selectedTypes.size + (state.due !== 'any' ? 1 : 0) + (state.showOtherCohorts ? 1 : 0);
    elements.mobileActiveFilterCount.textContent = activeSidebarFilters;
  }

  /**
   * Removes an individual active filter chip
   */
  function removeFilterTag(tag) {
    if (tag.type === 'type') {
      state.selectedTypes.delete(tag.val);
      syncTypeCheckboxes();
    } else if (tag.type === 'due') {
      state.due = 'any';
      const anyRadio = document.getElementById('dueAny');
      if (anyRadio) anyRadio.checked = true;
    } else if (tag.type === 'sem') {
      state.sem = 'All';
      if (elements.selectSemester) elements.selectSemester.value = 'All';
    } else if (tag.type === 'cohortToggle') {
      state.showOtherCohorts = false;
      elements.chkOtherCohorts.checked = false;
    } else if (tag.type === 'search') {
      state.searchQuery = '';
      elements.noticeSearchInput.value = '';
      elements.btnClearSearch.style.display = 'none';
    }
    applyFilters();
  }

  /**
   * Selects a notice and marks it active
   */
  function selectNotice(id) {
    state.selectedNoticeId = id;

    // Highlight card in list
    const cards = elements.noticeListContainer.querySelectorAll('.notice-card');
    cards.forEach(c => {
      const matches = c.dataset.id === id;
      c.classList.toggle('selected', matches);
      c.setAttribute('aria-selected', matches ? 'true' : 'false');
    });

    const notice = NOTICES_DATA.find(n => n.id === id);
    renderNoticeDetail(notice);

    // On mobile screens, slide into detail pane
    if (window.innerWidth <= 860) {
      elements.noticeDetailPane.classList.add('mobile-active');
      elements.noticeListPane.classList.add('mobile-hidden');
      elements.noticeDetailPane.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Opens the simulated official document modal
   */
  function openSourceModal(notice) {
    elements.modalDocTitle.textContent = `${notice.title} (Official Ref: ${notice.refNo})`;
    elements.modalDocBody.innerHTML = `
      <div style="border: 2px solid #0B2545; padding: 20px; background: #FFF; position: relative;">
        <div style="text-align: center; border-bottom: 2px solid #0B2545; padding-bottom: 12px; margin-bottom: 16px;">
          <img src="bit-sindri-logo.svg" alt="BIT Sindri Emblem" style="width: 52px; height: auto; margin-bottom: 6px; display: inline-block;">
          <h3 style="font-size: 16px; font-weight: 800; color: #0B2545; margin-bottom: 2px;">BIRSA INSTITUTE OF TECHNOLOGY, SINDRI</h3>
          <p style="font-size: 12px; color: #475569; margin-bottom: 2px;">P.O. Sindri Institute, Dhanbad, Jharkhand - 828123</p>
          <p style="font-size: 12px; font-weight: 700; color: #1E3A8A;">${escapeHtml(notice.department)}</p>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 14px; font-weight: 600;">
          <span>Memo No: ${escapeHtml(notice.refNo)}</span>
          <span>Date: ${escapeHtml(notice.postedDate)}</span>
        </div>

        <h4 style="font-size: 14px; font-weight: 700; text-align: center; text-decoration: underline; margin-bottom: 16px; color: #0B2545;">
          OFFICIAL CIRCULAR / NOTIFICATION
        </h4>

        <div style="font-size: 13px; line-height: 1.6; color: #1E293B;">
          ${notice.originalNotice.split('\n\n').map(p => `<p style="margin-bottom: 12px;">${escapeHtml(p)}</p>`).join('')}
        </div>

        <div style="margin-top: 30px; display: flex; justify-content: flex-end; text-align: right;">
          <div style="font-size: 12px;">
            <div style="height: 35px; border-bottom: 1px dotted #94A3B8; width: 140px; margin-bottom: 4px;"></div>
            <strong>Controller / Dean / OIC</strong><br>
            Birsa Institute of Technology, Sindri
          </div>
        </div>
      </div>
    `;

    elements.modalSourceBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeSourceModal() {
    elements.modalSourceBackdrop.hidden = true;
    document.body.style.overflow = '';
  }

  // ========================================================
  // FILTER EVENT HANDLERS & BINDINGS
  // ========================================================

  /**
   * Main filter pipeline execution
   */
  function applyFilters() {
    // 1. Update Cohort summary banner
    const semDisplay = SEMESTER_LABELS[state.sem] || state.sem;

    elements.cohortSummaryText.innerHTML = `
      Viewing notices for: <strong>${escapeHtml(state.programme)}</strong> · 
      <strong>${escapeHtml(state.branch)}</strong> · 
      <strong>${escapeHtml(semDisplay)}</strong> · 
      <strong>${escapeHtml(state.entry)}</strong>
    `;

    // 2. Update dynamic sidebar category counts
    updateSidebarCounts();

    // 3. Filter and render notices list
    const filtered = getFilteredNotices();
    renderNoticeList(filtered);

    // 4. Render active tag badges
    renderActiveTags();
  }

  /**
   * Synchronizes checkboxes UI with state.selectedTypes
   */
  function syncTypeCheckboxes() {
    elements.typeCheckboxes.forEach(cb => {
      cb.checked = state.selectedTypes.has(cb.value);
    });
  }

  /**
   * Resets all filters back to standard defaults
   */
  function resetAllFilters() {
    state.programme = 'B.Tech';
    state.branch = 'CSE';
    state.sem = '3rd Sem';
    state.entry = 'Regular';
    state.selectedTypes.clear();
    state.due = 'any';
    state.showOtherCohorts = false;
    state.searchQuery = '';

    // Reset Top Cohort UI
    updatePillGroup(elements.programmePills, 'B.Tech');
    if (elements.selectBranch) elements.selectBranch.value = 'CSE';
    if (elements.selectSemester) elements.selectSemester.value = '3rd Sem';
    updatePillGroup(elements.entryPills, 'Regular');

    // Reset Sidebar UI
    syncTypeCheckboxes();
    const anyRadio = document.getElementById('dueAny');
    if (anyRadio) anyRadio.checked = true;
    elements.chkOtherCohorts.checked = false;

    // Reset Search UI
    elements.noticeSearchInput.value = '';
    elements.btnClearSearch.style.display = 'none';

    applyFilters();
  }

  function updatePillGroup(pills, val) {
    pills.forEach(p => {
      const match = p.dataset.val === val;
      p.classList.toggle('active', match);
      p.setAttribute('aria-checked', match ? 'true' : 'false');
    });
  }

  // Bind Top Cohort Filter Controls
  elements.programmePills.forEach(pill => {
    pill.addEventListener('click', () => {
      state.programme = pill.dataset.val;
      updatePillGroup(elements.programmePills, state.programme);
      applyFilters();
    });
  });

  elements.selectBranch.addEventListener('change', (e) => {
    state.branch = e.target.value;
    applyFilters();
  });

  // Single Semester & Year Dropdown Selection
  if (elements.selectSemester) {
    elements.selectSemester.addEventListener('change', (e) => {
      state.sem = e.target.value;
      applyFilters();
    });
  }

  elements.entryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      state.entry = pill.dataset.val;
      updatePillGroup(elements.entryPills, state.entry);
      applyFilters();
    });
  });

  // Bind Sidebar Type Checkboxes
  elements.typeCheckboxes.forEach(cb => {
    cb.addEventListener('change', (e) => {
      if (e.target.checked) {
        state.selectedTypes.add(e.target.value);
      } else {
        state.selectedTypes.delete(e.target.value);
      }
      applyFilters();
    });
  });

  // Bind Clear/Select all Types
  elements.btnClearTypeFilters.addEventListener('click', () => {
    const allChecked = state.selectedTypes.size === elements.typeCheckboxes.length;
    if (allChecked) {
      state.selectedTypes.clear();
      elements.btnClearTypeFilters.textContent = 'Select all';
    } else {
      elements.typeCheckboxes.forEach(cb => state.selectedTypes.add(cb.value));
      elements.btnClearTypeFilters.textContent = 'Clear all';
    }
    syncTypeCheckboxes();
    applyFilters();
  });

  // Bind Sidebar Due Radios
  elements.dueRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.due = e.target.value;
      applyFilters();
    });
  });

  // Bind "Show notices for other cohorts" Checkbox
  elements.chkOtherCohorts.addEventListener('change', (e) => {
    state.showOtherCohorts = e.target.checked;
    applyFilters();
  });

  // Bind Reset Filters Button
  elements.btnResetFilters.addEventListener('click', resetAllFilters);
  elements.btnClearAllTags.addEventListener('click', resetAllFilters);

  // Bind Search Input
  elements.noticeSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    elements.btnClearSearch.style.display = state.searchQuery ? 'block' : 'none';
    applyFilters();
  });

  elements.btnClearSearch.addEventListener('click', () => {
    state.searchQuery = '';
    elements.noticeSearchInput.value = '';
    elements.btnClearSearch.style.display = 'none';
    elements.noticeSearchInput.focus();
    applyFilters();
  });

  // Bind Latest Notice Bar Click
  elements.latestNoticeBar.addEventListener('click', () => {
    const noticeId = elements.latestNoticeBar.dataset.noticeId;
    if (noticeId) {
      // Temporarily ensure notice is visible by resetting filters if needed
      const found = NOTICES_DATA.find(n => n.id === noticeId);
      if (found) {
        // If hidden by filters, enable other cohorts or reset
        state.showOtherCohorts = true;
        elements.chkOtherCohorts.checked = true;
        state.selectedTypes.clear();
        syncTypeCheckboxes();
        state.due = 'any';
        const anyRadio = document.getElementById('dueAny');
        if (anyRadio) anyRadio.checked = true;
        applyFilters();
        selectNotice(noticeId);
      }
    }
  });

  // Mobile Filter Drawer Toggle
  elements.btnMobileFilterToggle.addEventListener('click', () => {
    const isOpen = elements.noticeSidebar.classList.toggle('mobile-open');
    elements.btnMobileFilterToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Sync / Refresh Simulation
  elements.btnRefreshNotices.addEventListener('click', () => {
    elements.btnRefreshNotices.innerHTML = `
      <svg class="spin-anim" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
      </svg>
      Syncing...
    `;
    setTimeout(() => {
      elements.btnRefreshNotices.innerHTML = `
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
          <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
        </svg>
        Sync Notices
      `;
      applyFilters();
    }, 450);
  });

  // Modal Close Events
  elements.btnModalClose.addEventListener('click', closeSourceModal);
  elements.btnModalDone.addEventListener('click', closeSourceModal);
  elements.modalSourceBackdrop.addEventListener('click', (e) => {
    if (e.target === elements.modalSourceBackdrop) {
      closeSourceModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !elements.modalSourceBackdrop.hidden) {
      closeSourceModal();
    }
  });

  // Helper Utility: escapeHtml
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ========================================================
  // INITIALIZATION
  // ========================================================
  renderLatestNotice();
  applyFilters();

})();

// ============================================================================
// BIT SINDRI INSTITUTIONAL PROTOTYPE CONTROLLER
// Handles multi-section navigation, dropdown routing, deep links,
// interactive tools (Results, Grievance, Fee Estimator, Tenders, Departments, Modals)
// Preserves the official Notice Portal state 100% intact!
// ============================================================================
(function () {
  'use strict';

  // Section & Subtab Mapping Configuration
  const ROUTE_CONFIG = {
    'notices': {
      containerId: 'noticeSectionContainer',
      name: 'Student Portal',
      current: 'Notices & Official Circulars',
      defaultSubtab: null
    },
    'about-us': {
      containerId: 'aboutSectionContainer',
      name: 'About BIT Sindri',
      current: 'BIT Sindri History',
      defaultSubtab: 'about-history',
      subtabs: {
        'history': 'about-history',
        'mission': 'about-mission',
        'director': 'about-director',
        'vision2030': 'about-vision2030',
        'visit': 'about-visit',
        'logo': 'about-logo',
        'activities': 'about-activities',
        'mous': 'about-activities',
        'annual-reports': 'about-activities',
        'bogs': 'about-activities',
        'internal-audit': 'about-activities',
        'staff-dev': 'about-activities',
        'equity-plans': 'about-activities'
      }
    },
    'administration': {
      containerId: 'adminSectionContainer',
      name: 'Administration',
      current: 'Offices & Administration',
      defaultSubtab: 'admin-offices',
      subtabs: {
        'offices': 'admin-offices',
        'mandatory-disclose': 'admin-mandatory',
        'teqip': 'admin-teqip',
        'tenders': 'admin-tenders',
        'rti': 'admin-rti',
        'infrastructure': 'admin-infrastructure'
      }
    },
    'academics': {
      containerId: 'academicsSectionContainer',
      name: 'Academics',
      current: 'Departments (15 Disciplines)',
      defaultSubtab: 'academics-departments',
      subtabs: {
        'departments': 'academics-departments',
        'admissions': 'academics-admissions',
        'fee-structure': 'academics-fee',
        'calendar': 'academics-calendar',
        'coe': 'academics-coe',
        'seminars': 'academics-coe',
        'anti-ragging': 'academics-committees',
        'sgrc': 'academics-committees',
        'research-committees': 'academics-committees',
        'other-committees': 'academics-committees'
      }
    },
    'students': {
      containerId: 'studentsSectionContainer',
      name: 'Student Life & Services',
      current: 'Results & Grade Card Portal',
      defaultSubtab: 'students-results',
      subtabs: {
        'results': 'students-results',
        'grievance': 'students-grievance',
        'activities': 'students-activities',
        'sports': 'students-activities',
        'tech': 'students-activities',
        'cultural': 'students-activities',
        'startup': 'students-activities',
        'facilities': 'students-facilities',
        'syllabus': 'students-syllabus',
        'namelist': 'students-results',
        'archives': 'students-results',
        'downloads': 'students-downloads',
        'e-journals': 'students-ejournals',
        'scholarships': 'students-scholarships',
        'nats': 'students-scholarships'
      }
    },
    'ranking': {
      containerId: 'rankingSectionContainer',
      name: 'Accreditation & Ranking',
      current: 'NIRF Ranking Data',
      defaultSubtab: 'ranking-nirf',
      subtabs: {
        'nirf': 'ranking-nirf',
        'naac': 'ranking-naac',
        'certificates': 'ranking-certificates',
        'ariia': 'ranking-ariia',
        'iirf': 'ranking-ariia'
      }
    },
    'alumni': {
      containerId: 'alumniSectionContainer',
      name: 'Alumni Network (BITSAA)',
      current: 'Alma Connect Global Network',
      defaultSubtab: 'alumni-alma',
      subtabs: {
        'alma-connect': 'alumni-alma',
        'bitsaa': 'alumni-bitsaa',
        'endowment': 'alumni-endowment',
        'hall-of-fame': 'alumni-halloffame',
        'guest-house': 'alumni-guesthouse'
      }
    },
    'training-placement': {
      containerId: 'placementSectionContainer',
      name: 'Career Development Centre',
      current: 'CDC Directorate Overview',
      defaultSubtab: 'placement-cdc',
      subtabs: {
        'cdc': 'placement-cdc',
        'statistics': 'placement-stats',
        'recruiters': 'placement-recruiters',
        'internships': 'placement-internships',
        'brochure': 'placement-team'
      }
    },
    'notification': {
      containerId: 'notificationSectionContainer',
      name: 'Notification',
      current: 'Holiday Notifications (Common to All Years)',
      defaultSubtab: null,
      subtabs: {}
    }
  };

  // Subtab title dictionary for clear breadcrumb indicators
  const SUBTAB_NAMES = {
    'about-history': 'BIT Sindri History',
    'about-mission': 'Vision & Mission',
    'about-director': "Director's Message",
    'about-vision2030': 'Vision 2030 Roadmap',
    'about-visit': 'Visit BIT Sindri Campus',
    'about-logo': 'Insignia & Motto',
    'about-activities': 'Institutional Activities & MoUs',
    'admin-offices': 'Offices & Directory',
    'admin-tenders': 'Tenders & Quotations',
    'admin-mandatory': 'Mandatory Disclosures & Approvals',
    'admin-teqip': 'TEQIP Phase III Outcomes',
    'admin-rti': 'Right to Information (RTI)',
    'admin-infrastructure': 'New Infrastructure Projects',
    'academics-departments': 'Departments (15 Disciplines)',
    'academics-admissions': 'Admission Procedures & Cutoffs',
    'academics-fee': 'Fee Structure & Calculator',
    'academics-calendar': 'Academic Calendar 2026-27',
    'academics-coe': 'Siemens Center of Excellence',
    'academics-committees': 'Academic & Statutory Committees',
    'students-results': 'JUT Examination Results',
    'students-grievance': 'Online Grievance Redressal',
    'students-activities': 'Student Societies & Sports',
    'students-facilities': 'Campus Amenities & Hostels',
    'students-syllabus': 'Curriculum & CBCS Syllabus',
    'students-downloads': 'Forms, Proformas & Downloads',
    'students-ejournals': 'e-Journals & Central Library',
    'students-scholarships': 'Scholarships & Welfare Aid',
    'ranking-nirf': 'NIRF Engineering Data',
    'ranking-naac': 'NAAC Self Study Report',
    'ranking-certificates': 'NBA Tier-II Accreditations',
    'ranking-ariia': 'ARIIA & IIRF National Ranks',
    'alumni-alma': 'Alma Connect Platform',
    'alumni-bitsaa': 'BITSAA Chapters Worldwide',
    'alumni-endowment': 'Endowment Giving Fund',
    'alumni-halloffame': 'Distinguished Alumni Hall of Fame',
    'alumni-guesthouse': 'Alumni Guest House Booking',
    'placement-cdc': 'Career Development Centre',
    'placement-stats': 'Placement Statistics 2025-26',
    'placement-recruiters': 'Major Campus Recruiters',
    'placement-internships': 'Industrial Internships',
    'placement-team': 'T&P Directorate & Brochure'
  };

  // Department Database for Rich Profile Modal
  const DEPARTMENT_DATA = {
    'cse': {
      name: 'Computer Science & Engineering',
      code: 'CSE',
      est: 1987,
      hod: 'Prof. (Dr.) D. K. Mallick',
      email: 'hod.cse@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 241)',
      intake: 'B.Tech: 68 | Ph.D: 10',
      description: 'The Department of Computer Science & Engineering is equipped with high-performance computing clusters and state-of-the-art laboratories. It delivers cutting-edge instruction in algorithms, machine learning, cloud systems, and cybersecurity.',
      labs: [
        'Advanced Artificial Intelligence & Deep Learning Lab',
        'Cloud Computing & Distributed Systems Facility',
        'High Performance GPU Computing Cluster',
        'Software Engineering & Object-Oriented Modeling Lab',
        'Database & Data Engineering Suite'
      ],
      thrustAreas: ['Explainable AI & Machine Learning', 'Big Data Engineering', 'Cloud Native Architectures', 'Wireless Sensor Networks', 'Information Security'],
      facultyCount: '18 Regular Faculty & Research Fellows'
    },
    'it': {
      name: 'Information Technology',
      code: 'IT',
      est: 2001,
      hod: 'Prof. (Dr.) S. C. Roy',
      email: 'hod.it@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 242)',
      intake: 'B.Tech: 45 | Ph.D: 6',
      description: 'Established to address the exponential demand for high-tier software architects and information security specialists, the IT department excels in practical engineering and full-stack systems design.',
      labs: [
        'Cyber Security & Digital Forensics Lab',
        'Web Engineering & Full-Stack Prototyping Lab',
        'Network Design & Cryptography Lab',
        'Mobile Application & IoT Experimentation Cell'
      ],
      thrustAreas: ['Network Security & Cryptography', 'Applied IoT Solutions', 'Distributed Ledger Technologies', 'Data Science & Visual Analytics'],
      facultyCount: '12 Regular Faculty'
    },
    'ece': {
      name: 'Electronics & Communication Engineering',
      code: 'ECE',
      est: 1957,
      hod: 'Prof. (Dr.) Imteyaz Ahmad',
      email: 'hod.ece@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 243)',
      intake: 'B.Tech: 52 | M.Tech: 18',
      description: 'A historic department at BIT Sindri with specialized equipment for semiconductor design, RF microwave testing, and next-generation 5G/6G communication systems.',
      labs: [
        'VLSI Design Lab (Cadence & Synopsys EDA Suite)',
        'RF & Microwave Engineering Chamber',
        'Digital Signal Processing (DSP) Lab',
        'Optical Fiber Communications Lab',
        'Embedded Systems & Microcontroller Prototyping Cell'
      ],
      thrustAreas: ['Low-power VLSI Architecture', 'Microwave Antennas & Meta-materials', 'Cognitive Radio Networks', 'Biomedical Signal Processing'],
      facultyCount: '16 Regular Faculty'
    },
    'ee': {
      name: 'Electrical Engineering',
      code: 'EE',
      est: 1949,
      hod: 'Prof. (Dr.) Nirmal Kumar',
      email: 'hod.ee@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 244)',
      intake: 'B.Tech: 99 | M.Tech: 25',
      description: 'One of the founding disciplines of BIT Sindri since 1949. Has produced distinguished electrical technocrats steering state and national power grids, renewable energy, and heavy electric drives.',
      labs: [
        'High Voltage Engineering & Breakdown Test Lab',
        'Power Systems Simulation Lab (ETAP & PSCAD)',
        'Electric Drives & Power Electronics Lab',
        'Smart Microgrid & Renewable Energy Station',
        'Electrical Machines Testing Yard'
      ],
      thrustAreas: ['Smart Grid Integration', 'EV Powertrain & Battery Management', 'Non-linear Control Systems', 'Condition Monitoring of Transformers'],
      facultyCount: '22 Regular Faculty'
    },
    'mech': {
      name: 'Mechanical Engineering',
      code: 'ME',
      est: 1949,
      hod: 'Prof. (Dr.) R. K. Verma',
      email: 'hod.mech@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 245)',
      intake: 'B.Tech: 105 | M.Tech: 25',
      description: 'The premier mechanical engineering department in eastern India. Houses massive thermo-fluid test beds, modern wind tunnels, and direct training wings at the Siemens Center of Excellence.',
      labs: [
        'Advanced Thermal Science & Heat Transfer Lab',
        'IC Engines & Alternative Fuels Testing Cell',
        'Fluid Mechanics & Subsonic Wind Tunnel Facility',
        'Robotics & Industrial Mechatronics Lab',
        'CAD/CAM Simulation & FEA Computational Suite'
      ],
      thrustAreas: ['Computational Fluid Dynamics (CFD)', 'Renewable Thermal Cycles', 'Additive Manufacturing & Composite Mechanics', 'Tribology & Surface Engineering'],
      facultyCount: '24 Regular Faculty'
    },
    'civil': {
      name: 'Civil Engineering',
      code: 'CE',
      est: 1952,
      hod: 'Prof. (Dr.) J. P. Singh',
      email: 'hod.civil@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 246)',
      intake: 'B.Tech: 98 | M.Tech: 20',
      description: 'Pioneering structural, geotechnical, and environmental engineering. Engaged in high-value consultancy testing for flyovers, dams, and municipal water purification across Jharkhand and Bihar.',
      labs: [
        'Concrete Technology & Non-Destructive Testing (NDT) Lab',
        'Geotechnical Engineering & Soil Dynamics Lab',
        'Environmental Engineering & Effluent Analysis Lab',
        'Surveying & Modern Total Station Geomatics Yard',
        'Structural Dynamics & Shake Table Lab'
      ],
      thrustAreas: ['Earthquake Resistant Structures', 'Geosynthetics & Soil Reinforcement', 'Waste Material Concrete', 'Hydrological Modeling'],
      facultyCount: '20 Regular Faculty'
    },
    'meta': {
      name: 'Metallurgical Engineering',
      code: 'META',
      est: 1954,
      hod: 'Prof. (Dr.) B. N. Roy',
      email: 'hod.meta@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 247)',
      intake: 'B.Tech: 54 | M.Tech: 15',
      description: 'Located in India’s metallurgical hub, the department maintains close industrial ties with Tata Steel, SAIL, and Jindal. Renowned for extractive metallurgy, phase transformations, and failure analysis.',
      labs: [
        'Scanning Electron Microscopy (SEM) & Characterization Lab',
        'Physical Metallurgy & Optical Metallography Lab',
        'Heat Treatment Furnaces & Quenching Facility',
        'Foundry & Metal Casting Yard',
        'Corrosion & Electrochemical Testing Suite'
      ],
      thrustAreas: ['Advanced High Strength Steels (AHSS)', 'Extractive Pyrometallurgy', 'Failure Analysis & Fracture Mechanics', 'Nanostructured Alloys'],
      facultyCount: '15 Regular Faculty'
    },
    'chem': {
      name: 'Chemical Engineering',
      code: 'CHEM',
      est: 1956,
      hod: 'Prof. (Dr.) A. K. Choudhary',
      email: 'hod.chem@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 248)',
      intake: 'B.Tech: 91 | M.Tech: 18',
      description: 'Nurturing chemical process engineers for petrochemical plants, refineries, fertilizer manufacturing, and green hydrogen systems.',
      labs: [
        'Mass Transfer & Distillation Column Pilot Plant',
        'Chemical Reaction Engineering & Kinetics Lab',
        'Process Dynamics & Instrumentation Control Lab',
        'Polymer Processing & Rheology Lab',
        'Pollution Abatement & Effluent Treatment Facility'
      ],
      thrustAreas: ['Process Optimization & Simulation', 'Carbon Capture Technologies', 'Biofuels & Catalysis', 'Membrane Separations'],
      facultyCount: '18 Regular Faculty'
    },
    'mining': {
      name: 'Mining Engineering',
      code: 'MINE',
      est: 1957,
      hod: 'Prof. (Dr.) K. M. Singh',
      email: 'hod.mining@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 249)',
      intake: 'B.Tech: 49 | Ph.D: 8',
      description: 'Strategically located in the mineral-rich Dhanbad coal basin. Collaborates with CSIR-CIMFR, Coal India, BCCL, and ECL on clean coal, deep underground mining, and rock mechanics.',
      labs: [
        'Rock Mechanics & High-Capacity Triaxial Testing Lab',
        'Mine Ventilation & Gas Chromatography Lab',
        'Mine Surveying & Gyro-Theodolite Geodesy Yard',
        'Mineral Processing & Coal Washing Pilot Facility',
        'Mine Safety & Virtual Hazard Simulator'
      ],
      thrustAreas: ['Deep Underground Coal Mining', 'Rock Slope Stability', 'Clean Coal Gasification', 'Mine Environmental Management'],
      facultyCount: '14 Regular Faculty'
    },
    'prod': {
      name: 'Production & Industrial Engineering',
      code: 'PROD',
      est: 1955,
      hod: 'Prof. (Dr.) P. K. Singh',
      email: 'hod.prod@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 250)',
      intake: 'B.Tech: 54 | M.Tech: 15',
      description: 'Focuses on precision manufacturing, CNC tooling, supply chain logistics, lean six-sigma, and smart Industry 4.0 automation systems.',
      labs: [
        'Precision Metrology & Coordinate Measuring Machine (CMM) Lab',
        'Advanced CNC Machining & Unconventional Machining (EDM/ECM)',
        'Work Study & Human Factors Ergonomics Lab',
        'Industrial Automation & PLC Simulator Cell'
      ],
      thrustAreas: ['Supply Chain Optimization', 'Sustainable Lean Manufacturing', 'Micro-machining & Nanofinishing', 'Reliability Engineering'],
      facultyCount: '14 Regular Faculty'
    },
    'sciences': {
      name: 'Applied Sciences & Humanities',
      code: 'ASH',
      est: 1949,
      hod: 'Prof. (Dr.) B. K. Sharma',
      email: 'hod.ash@bitsindri.ac.in',
      phone: '+91-326-2350495 (Ext: 251)',
      intake: 'Ph.D: 15 Across Sciences',
      description: 'Comprises Physics, Chemistry, Mathematics, Geology, and Professional English departments. Imparts rigorous foundational scientific education and interdisciplinary research.',
      labs: [
        'Applied Optics & Laser Physics Lab',
        'Engineering Chemistry & Water Testing Lab',
        'Engineering Geology & Mineralogy Museum',
        'Digital Language Learning & Phonetics Lab',
        'Computational Mathematical Modeling Lab'
      ],
      thrustAreas: ['Condensed Matter Physics', 'Coordination Chemistry & Green Solvents', 'Applied Differential Geometry', 'Structural Geology'],
      facultyCount: '26 Regular Faculty'
    }
  };

  // Tender Database for Realistic NIT Modal View
  const TENDER_DATA = {
    '038': {
      refNo: 'BITS/TEND/2026/038',
      title: 'Procurement of High-End GPU Workstations and Server Racks for AI & Robotics Center',
      category: 'Goods & Equipment',
      estCost: '₹12.40 Lakhs',
      emd: '₹25,000/- via Demand Draft or Bank Guarantee',
      tenderFee: '₹1,500/- (Non-Refundable)',
      closingDate: '24 Oct 2026, 03:00 PM',
      openingDate: '25 Oct 2026, 03:30 PM',
      validity: '90 Days from the date of technical bid opening',
      description: 'Sealed bids under Two-Bid System (Technical Bid and Financial Bid) are invited from authorized OEMs / Tier-1 channel partners for the supply, installation, testing, and commissioning of enterprise-grade GPU workstations equipped with NVIDIA RTX Ada generation accelerators for the newly established AI & Robotics Research Lab.',
      specs: [
        'Processor: Dual Intel Xeon Silver or AMD EPYC 32-Core Processor',
        'Memory: Minimum 128 GB DDR5 ECC Registered RAM expandable to 512 GB',
        'GPU: 2 x NVIDIA RTX 4500 Ada 24GB or equivalent',
        'Storage: 2 TB NVMe PCIe 4.0 M.2 SSD + 8 TB Enterprise SATA HDD (7200 RPM)',
        'Operating System: Ubuntu 24.04 LTS pre-installed with CUDA toolkit and PyTorch',
        'Warranty: 3-Year comprehensive OEM on-site parts and labour warranty'
      ]
    },
    '035': {
      refNo: 'BITS/TEND/2026/035',
      title: 'Civil Modernization & Dining Hall Renovation of Hostel No. 17 & 18',
      category: 'Civil Works',
      estCost: '₹24.80 Lakhs',
      emd: '₹50,000/- via Fixed Deposit Receipt / BG',
      tenderFee: '₹2,500/- (Non-Refundable)',
      closingDate: '18 Oct 2026, 02:00 PM',
      openingDate: '19 Oct 2026, 03:00 PM',
      validity: '120 Days',
      description: 'Item-rate tenders are invited from registered Jharkhand PWD / CPWD / MES Class-A contractors for structural repairs, vitrified tile flooring, stainless steel dining furniture installation, and sanitary plumbing modernization of student dining complexes.',
      specs: [
        'Flooring: Heavy-duty 600x600mm anti-skid vitrified tiles in dining areas',
        'Furniture: 30 sets of 8-seater SS-304 food-grade dining tables with welded stools',
        'Plumbing: Complete replacement of GI supply pipes with CPVC plumbing and sensor taps',
        'Electrical: LED panel illumination and industrial air ventilation exhaust systems',
        'Completion Timeline: 90 days from the date of work order issuance'
      ]
    },
    '031': {
      refNo: 'BITS/TEND/2026/031',
      title: 'Supply of Interactive Touch Flat Panels for New Academic Complex',
      category: 'ICT & Smart Classrooms',
      estCost: '₹18.00 Lakhs',
      emd: '₹35,000/-',
      tenderFee: '₹2,000/-',
      closingDate: '10 Oct 2026, 05:00 PM',
      openingDate: '12 Oct 2026, 11:00 AM',
      validity: '90 Days',
      description: 'Supply, bracket mounting, and commissioning of 86-inch 4K UHD smart interactive displays across ten tiered lecture halls.',
      specs: [
        'Display: 86-inch 4K UHD (3840x2160) Anti-glare Toughened Glass (7H hardness)',
        'Touch: 40-point IR touch with zero-bonding technology and stylus support',
        'OPS Module: Intel Core i7 12th Gen, 16GB RAM, 512GB SSD, Windows 11 Pro',
        'Connectivity: Wi-Fi 6, Bluetooth 5.2, Dual HDMI In/Out, Type-C 65W PD',
        'Audio: Built-in 2x20W subwoofers with 8-array noise-cancelling microphones'
      ]
    }
  };

  // Student Grievances In-Memory Store
  const grievancesStore = [
    {
      id: 'BITS-GRV-2026-1042',
      name: 'Rohan Verma',
      roll: '23015',
      category: 'Hostel & Mess Facility',
      subject: 'Hostel 14 Hot Water Geyser Repair in 2nd Floor Washrooms',
      status: 'Resolved',
      timestamp: '03 Oct 2026 · 11:30 AM',
      resolution: 'Hostel Superintendent inspected washroom units. Electrician replaced heating elements on 05 Oct 2026.'
    },
    {
      id: 'BITS-GRV-2026-1055',
      name: 'Priya Kumari',
      roll: '22045',
      category: 'Scholarship Verification (E-Kalyan)',
      subject: 'Delay in physical bio-metric verification at Academic Section',
      status: 'In Progress',
      timestamp: '05 Oct 2026 · 02:15 PM',
      resolution: 'Assigned to Dealing Assistant (Scholarships). Token queue created for 10 Oct 2026.'
    }
  ];

  // DOM Elements Reference
  const dom = {
    // Nav & Mobile Drawer
    navbarMobileToggle: document.getElementById('navbarMobileToggle'),
    mainNavLinks: document.getElementById('mainNavLinks'),
    navRootItems: document.querySelectorAll('#mainNavLinks > li'),

    // Breadcrumbs
    bcHome: document.getElementById('bcHome'),
    bcParent: document.getElementById('bcParent'),
    bcCurrent: document.getElementById('bcCurrent'),

    // All Portal Section Containers
    sections: {
      'notices': document.getElementById('noticeSectionContainer'),
      'about-us': document.getElementById('aboutSectionContainer'),
      'administration': document.getElementById('adminSectionContainer'),
      'academics': document.getElementById('academicsSectionContainer'),
      'students': document.getElementById('studentsSectionContainer'),
      'ranking': document.getElementById('rankingSectionContainer'),
      'alumni': document.getElementById('alumniSectionContainer'),
      'training-placement': document.getElementById('placementSectionContainer'),
      'notification': document.getElementById('notificationSectionContainer')
    },

    // Subnav buttons and panels
    subnavButtons: document.querySelectorAll('.subnav-btn'),

    // Modals
    modalDept: document.getElementById('modalDeptProfileBackdrop'),
    modalDeptTitle: document.getElementById('modalDeptTitle'),
    modalDeptBody: document.getElementById('modalDeptBody'),
    btnModalDeptClose: document.getElementById('btnModalDeptClose'),
    btnModalDeptDone: document.getElementById('btnModalDeptDone'),

    modalTender: document.getElementById('modalTenderBackdrop'),
    modalTenderTitle: document.getElementById('modalTenderTitle'),
    modalTenderBody: document.getElementById('modalTenderBody'),
    btnModalTenderClose: document.getElementById('btnModalTenderClose'),
    btnModalTenderDone: document.getElementById('btnModalTenderDone'),

    modalProforma: document.getElementById('modalProformaBackdrop'),
    modalProformaTitle: document.getElementById('modalProformaTitle'),
    modalProformaBody: document.getElementById('modalProformaBody'),
    btnModalProformaClose: document.getElementById('btnModalProformaClose'),
    btnModalProformaDone: document.getElementById('btnModalProformaDone'),

    modalPledge: document.getElementById('modalPledgeBackdrop'),
    btnSimulatePledge: document.getElementById('btnSimulatePledge'),
    btnSubmitPledge: document.getElementById('btnSubmitPledge'),
    pledgeSuccessMsg: document.getElementById('pledgeSuccessMsg'),
    btnModalPledgeClose: document.getElementById('btnModalPledgeClose'),
    btnModalPledgeDone: document.getElementById('btnModalPledgeDone'),

    // Interactive Results Checker
    resultSearchForm: document.getElementById('resultSearchForm'),
    inputRollNo: document.getElementById('inputRollNo'),
    selectResultSem: document.getElementById('selectResultSem'),
    marksheetContainer: document.getElementById('marksheetContainer'),
    resStudentName: document.getElementById('resStudentName'),
    resRollNo: document.getElementById('resRollNo'),
    resBranch: document.getElementById('resBranch'),
    resSem: document.getElementById('resSem'),
    resultSubjectsBody: document.getElementById('resultSubjectsBody'),
    resSgpa: document.getElementById('resSgpa'),
    resCgpa: document.getElementById('resCgpa'),

    // Interactive Grievance
    grievanceForm: document.getElementById('grievanceForm'),
    grvName: document.getElementById('grvName'),
    grvRoll: document.getElementById('grvRoll'),
    grvEmail: document.getElementById('grvEmail'),
    grvCategory: document.getElementById('grvCategory'),
    grvSubject: document.getElementById('grvSubject'),
    grvDetail: document.getElementById('grvDetail'),
    btnTrackGrievance: document.getElementById('btnTrackGrievance'),
    trackGrievanceId: document.getElementById('trackGrievanceId'),
    grievanceStatusDisplay: document.getElementById('grievanceStatusDisplay'),

    // Fee Estimator
    calcProg: document.getElementById('calcProg'),
    calcCat: document.getElementById('calcCat'),
    calcHostel: document.getElementById('calcHostel'),
    calcTotalFee: document.getElementById('calcTotalFee'),

    // Guest House
    guestHouseForm: document.getElementById('guestHouseForm'),
    ghBookingConfirm: document.getElementById('ghBookingConfirm'),

    // Department Filter
    filterDeptCats: document.querySelectorAll('.filter-dept-cat'),
    departmentsGrid: document.getElementById('departmentsGrid'),

    // Holiday Notifications Engine
    holidaySearchInput: document.getElementById('holidaySearchInput'),
    filterHolidayCats: document.querySelectorAll('.filter-holiday-cat'),
    holidaysTableBody: document.getElementById('holidaysTableBody'),
    holidayResultsCount: document.getElementById('holidayResultsCount'),
    modalHoliday: document.getElementById('modalHolidayBackdrop'),
    modalHolidayTitle: document.getElementById('modalHolidayTitle'),
    modalHolidayBody: document.getElementById('modalHolidayBody'),
    btnModalHolidayClose: document.getElementById('btnModalHolidayClose'),
    btnModalHolidayDone: document.getElementById('btnModalHolidayDone')
  };

  // ========================================================
  // ROUTING & SECTION DISPLAY ENGINE
  // ========================================================

  /**
   * Switches active section and activates child subtab
   */
  function navigateTo(targetPath) {
    if (!targetPath) targetPath = 'notices';

    // Parse path and query parameters
    let pathPart = targetPath.replace(/^#/, '').trim();
    let queryParams = {};

    if (pathPart.includes('?')) {
      const parts = pathPart.split('?');
      pathPart = parts[0];
      const searchParams = new URLSearchParams(parts[1]);
      searchParams.forEach((val, key) => {
        queryParams[key] = val;
      });
    }

    const segments = pathPart.split('/').filter(Boolean);
    const mainSectionKey = segments[0] || 'notices';
    const subRouteKey = segments[1] || null;

    // Identify configuration
    const config = ROUTE_CONFIG[mainSectionKey] || ROUTE_CONFIG['notices'];

    // 1. Hide all sections and show targeted section
    Object.keys(dom.sections).forEach((key) => {
      const container = dom.sections[key];
      if (container) {
        if (key === (config.containerId === 'noticeSectionContainer' ? 'notices' : mainSectionKey)) {
          container.hidden = false;
        } else {
          container.hidden = true;
        }
      }
    });

    // 2. Update Navbar Active Indicator
    dom.navRootItems.forEach((li) => {
      const sec = li.getAttribute('data-section');
      if (sec === mainSectionKey) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });

    // 3. Resolve Target Subtab
    let targetSubtabId = null;
    if (subRouteKey && config.subtabs && config.subtabs[subRouteKey]) {
      targetSubtabId = config.subtabs[subRouteKey];
    } else if (config.defaultSubtab) {
      targetSubtabId = config.defaultSubtab;
    }

    // 4. Activate Subtab if section contains subnav
    if (targetSubtabId) {
      activateSubtab(targetSubtabId);
    }

    // 5. Update Breadcrumb trail
    if (dom.bcParent && dom.bcCurrent) {
      dom.bcParent.textContent = config.name;
      dom.bcParent.href = `#${mainSectionKey}`;
      const subName = targetSubtabId && SUBTAB_NAMES[targetSubtabId] ? SUBTAB_NAMES[targetSubtabId] : config.current;
      dom.bcCurrent.textContent = subName;
    }

    // 6. Handle Department modal trigger via URL param (?dept=code)
    if (queryParams.dept && DEPARTMENT_DATA[queryParams.dept]) {
      setTimeout(() => {
        openDepartmentProfile(queryParams.dept);
      }, 100);
    }

    // Close mobile nav drawer if open
    if (dom.mainNavLinks) {
      dom.mainNavLinks.classList.remove('open');
      if (dom.navbarMobileToggle) {
        dom.navbarMobileToggle.setAttribute('aria-expanded', 'false');
      }
    }

    // Smooth scroll to breadcrumbs/top
    const breadcrumb = document.getElementById('breadcrumbBar');
    if (breadcrumb && window.scrollY > 150) {
      breadcrumb.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Activates a specific subtab panel within the currently active section
   */
  function activateSubtab(subtabId) {
    const targetPanel = document.getElementById(subtabId);
    if (!targetPanel) return;

    // Find parent section
    const sectionParent = targetPanel.closest('.portal-section');
    if (!sectionParent) return;

    // Update buttons within this section
    const buttons = sectionParent.querySelectorAll('.subnav-btn');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-subtab') === subtabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update panels within this section
    const panels = sectionParent.querySelectorAll('.subtab-panel');
    panels.forEach((p) => {
      if (p.id === subtabId) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });

    // Update breadcrumb current
    if (dom.bcCurrent && SUBTAB_NAMES[subtabId]) {
      dom.bcCurrent.textContent = SUBTAB_NAMES[subtabId];
    }
  }

  // ========================================================
  // INTERACTIVE FEATURE: DEPARTMENT PROFILES MODAL
  // ========================================================
  function openDepartmentProfile(deptCode) {
    const data = DEPARTMENT_DATA[deptCode] || DEPARTMENT_DATA['mech'];
    if (!data || !dom.modalDept) return;

    dom.modalDeptTitle.textContent = `${data.name} (Est. ${data.est})`;

    let labsHtml = data.labs.map(l => `<li>${l}</li>`).join('');
    let thrustHtml = data.thrustAreas.map(t => `<span class="dept-badge" style="background: #E2E8F0; color: #1E293B;">${t}</span>`).join(' ');

    dom.modalDeptBody.innerHTML = `
      <div style="margin-bottom: 16px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
          <span class="badge-status active">Established ${data.est}</span>
          <span class="badge-status" style="background: #EEF2FF; color: #3730A3;">${data.intake}</span>
          <span class="badge-status" style="background: #ECFDF5; color: #065F46;">${data.facultyCount}</span>
        </div>
        <p style="font-size: 13.5px; line-height: 1.6; color: #334155; margin-bottom: 16px;">${data.description}</p>
      </div>

      <div class="portal-grid-2" style="margin-bottom: 16px;">
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 14px; border-radius: var(--radius-md);">
          <h4 style="font-size: 13.5px; color: var(--color-navy-dark); font-weight: 700; margin-bottom: 6px;">Head of Department (HOD)</h4>
          <p style="font-size: 13px; font-weight: 600; color: #0F172A;">${data.hod}</p>
          <p style="font-size: 12px; color: #64748B; margin-top: 4px;">Email: <code>${data.email}</code></p>
          <p style="font-size: 12px; color: #64748B;">Contact: ${data.phone}</p>
        </div>
        <div style="background: #F8FAFC; border: 1px solid #E2E8F0; padding: 14px; border-radius: var(--radius-md);">
          <h4 style="font-size: 13.5px; color: var(--color-navy-dark); font-weight: 700; margin-bottom: 6px;">Major Research Thrust Areas</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;">
            ${thrustHtml}
          </div>
        </div>
      </div>

      <div style="background: #FFFFFF; border: 1px solid #E2E8F0; padding: 16px; border-radius: var(--radius-md);">
        <h4 style="font-size: 14px; color: var(--color-navy-dark); font-weight: 700; margin-bottom: 8px;">Key Specialized Laboratories</h4>
        <ul style="padding-left: 20px; font-size: 13px; color: #334155; line-height: 1.7;">
          ${labsHtml}
        </ul>
      </div>
    `;

    dom.modalDept.hidden = false;
  }

  function closeDepartmentProfile() {
    if (dom.modalDept) dom.modalDept.hidden = true;
  }

  // ========================================================
  // INTERACTIVE FEATURE: TENDER NIT VIEWER
  // ========================================================
  function openTenderModal(tenderId) {
    const t = TENDER_DATA[tenderId] || TENDER_DATA['038'];
    if (!t || !dom.modalTender) return;

    dom.modalTenderTitle.textContent = `${t.refNo} — Tender Specifications`;

    const specsHtml = t.specs.map(s => `<li>${s}</li>`).join('');

    dom.modalTenderBody.innerHTML = `
      <div style="border-bottom: 2px solid #E2E8F0; padding-bottom: 12px; margin-bottom: 16px;">
        <span class="badge-status urgent" style="margin-bottom: 6px; display: inline-block;">${t.category}</span>
        <h3 style="font-size: 16px; font-weight: 700; color: var(--color-navy-dark); line-height: 1.4;">${t.title}</h3>
      </div>

      <div class="portal-grid-2" style="margin-bottom: 16px;">
        <div style="background: #F8FAFC; padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 12px; color: #64748B;">Estimated Project Cost:</div>
          <div style="font-size: 16px; font-weight: 700; color: #0F172A;">${t.estCost}</div>
          <div style="font-size: 12px; color: #64748B; margin-top: 6px;">Earnest Money Deposit (EMD):</div>
          <div style="font-size: 13px; font-weight: 600; color: #0F172A;">${t.emd}</div>
        </div>
        <div style="background: #F8FAFC; padding: 12px; border-radius: var(--radius-md);">
          <div style="font-size: 12px; color: #64748B;">Bid Submission Closing:</div>
          <div style="font-size: 14px; font-weight: 700; color: #B91C1C;">${t.closingDate}</div>
          <div style="font-size: 12px; color: #64748B; margin-top: 6px;">Technical Bid Opening:</div>
          <div style="font-size: 13px; font-weight: 600; color: #0F172A;">${t.openingDate}</div>
        </div>
      </div>

      <div style="margin-bottom: 16px;">
        <h4 style="font-size: 13.5px; font-weight: 700; color: var(--color-navy-dark); margin-bottom: 6px;">Brief Description & Scope</h4>
        <p style="font-size: 13px; color: #334155; line-height: 1.6;">${t.description}</p>
      </div>

      <div style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 14px; border-radius: var(--radius-md);">
        <h4 style="font-size: 13.5px; font-weight: 700; color: #92400E; margin-bottom: 6px;">Minimum Technical Requirements</h4>
        <ul style="padding-left: 18px; font-size: 12.5px; color: #78350F; line-height: 1.6;">
          ${specsHtml}
        </ul>
      </div>
    `;

    dom.modalTender.hidden = false;
  }

  function closeTenderModal() {
    if (dom.modalTender) dom.modalTender.hidden = true;
  }

  // ========================================================
  // INTERACTIVE FEATURE: PROFORMA DOWNLOAD PREVIEW
  // ========================================================
  const PROFORMA_DATA = {
    'bonafide': {
      title: 'Application for Bonafide Certificate / Character Endorsement',
      content: `
        <div style="border: 1px solid #CBD5E1; padding: 20px; border-radius: var(--radius-md); background: #FFFFFF; font-family: serif;">
          <div style="text-align: center; border-bottom: 2px solid #0F172A; padding-bottom: 10px; margin-bottom: 16px;">
            <h3 style="font-size: 16px; margin: 0; text-transform: uppercase;">Birsa Institute of Technology, Sindri</h3>
            <p style="font-size: 12px; margin: 2px 0;">(Affiliated to Jharkhand University of Technology, Ranchi)</p>
            <p style="font-size: 13px; font-weight: bold; margin-top: 6px;">BONAFIDE STUDENT CERTIFICATE PROFORMA</p>
          </div>
          <p style="font-size: 13px; line-height: 1.8;">
            This is to certify that Mr./Ms. <strong>_____________________________________</strong>, Son/Daughter of 
            <strong>_____________________________________</strong>, is a bonafide student of this Institute pursuing four-year 
            <strong>Bachelor of Technology (B.Tech)</strong> in <strong>_____________________________________</strong> Engineering, 
            bearing Institute Roll No. <strong>______________</strong> and JUT Reg. No. <strong>______________</strong>.
          </p>
          <p style="font-size: 13px; line-height: 1.8; margin-top: 12px;">
            He/She is currently studying in the <strong>______ Semester</strong> for the Academic Session 2026-27. 
            As per our institutional records, his/her conduct and moral character during his/her tenure at this Institute have been found <strong>Good</strong>.
          </p>
          <div style="display: flex; justify-content: space-between; margin-top: 40px; font-size: 13px;">
            <div>Date: _______________<br>Place: Sindri, Dhanbad</div>
            <div style="text-align: center;">_______________________<br><strong>Dean (Academic Affairs)</strong><br>BIT Sindri</div>
          </div>
        </div>
      `
    },
    'nodues': {
      title: 'Institutional Clearance / No-Dues Certificate',
      content: `
        <div style="border: 1px solid #CBD5E1; padding: 20px; border-radius: var(--radius-md); background: #FFFFFF; font-family: serif;">
          <div style="text-align: center; border-bottom: 2px solid #0F172A; padding-bottom: 10px; margin-bottom: 16px;">
            <h3 style="font-size: 16px; margin: 0; text-transform: uppercase;">Birsa Institute of Technology, Sindri</h3>
            <p style="font-size: 13px; font-weight: bold; margin-top: 4px;">NO-DUES CERTIFICATE (FINAL DEGREE RELEASE)</p>
          </div>
          <table class="portal-table" style="font-size: 12px; margin-bottom: 16px;">
            <thead>
              <tr>
                <th>Department / Section</th>
                <th>Dues Outstanding (₹)</th>
                <th>Remarks / Book Return</th>
                <th>Signature of Officer In-Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Concerned Department HOD</strong></td>
                <td>NIL</td>
                <td>Lab manuals & apparatus deposited</td>
                <td>__________________________</td>
              </tr>
              <tr>
                <td><strong>Central Library (OPAC)</strong></td>
                <td>NIL</td>
                <td>All issued books returned</td>
                <td>__________________________</td>
              </tr>
              <tr>
                <td><strong>Hostel Superintendent / Warden</strong></td>
                <td>NIL</td>
                <td>Room vacated & keys handed over</td>
                <td>__________________________</td>
              </tr>
              <tr>
                <td><strong>Institute Accounts Office</strong></td>
                <td>NIL</td>
                <td>All tuition & caution fees settled</td>
                <td>__________________________</td>
              </tr>
            </tbody>
          </table>
        </div>
      `
    },
    'conversion': {
      title: 'CGPA to Percentage Conversion Certificate',
      content: `
        <div style="border: 1px solid #CBD5E1; padding: 20px; border-radius: var(--radius-md); background: #FFFFFF; font-family: serif;">
          <div style="text-align: center; border-bottom: 2px solid #0F172A; padding-bottom: 10px; margin-bottom: 16px;">
            <h3 style="font-size: 16px; margin: 0; text-transform: uppercase;">Jharkhand University of Technology, Ranchi</h3>
            <p style="font-size: 13px; font-weight: bold; margin-top: 4px;">OFFICIAL CONVERSION EQUIVALENCE NOTIFICATION</p>
          </div>
          <p style="font-size: 13.5px; line-height: 1.8;">
            As per JUT Academic Regulation Clause 14.2 for Choice Based Credit System (CBCS) B.Tech & M.Tech degree examinations, 
            the conversion formula from Cumulative Grade Point Average (CGPA) on a 10-point scale to equivalent percentage marks is officially defined as:
          </p>
          <div style="background: #F1F5F9; border: 1px solid #94A3B8; padding: 14px; text-align: center; font-size: 16px; font-weight: bold; color: #0F172A; margin: 16px 0; border-radius: 4px;">
            Equivalent Percentage of Marks = (CGPA - 0.5) × 10
          </div>
          <p style="font-size: 13px; line-height: 1.6;">
            <strong>Illustrative Example:</strong><br>
            If a candidate has secured a CGPA of 8.50 out of 10.00:<br>
            Equivalent Percentage = (8.50 - 0.50) × 10 = <strong>80.00%</strong>
          </p>
          <div style="text-align: right; margin-top: 30px; font-size: 13px;">
            <strong>Controller of Examinations</strong><br>Jharkhand University of Technology, Ranchi
          </div>
        </div>
      `
    }
  };

  function openProformaModal(proformaKey) {
    const data = PROFORMA_DATA[proformaKey] || PROFORMA_DATA['bonafide'];
    if (!data || !dom.modalProforma) return;

    dom.modalProformaTitle.textContent = data.title;
    dom.modalProformaBody.innerHTML = data.content;
    dom.modalProforma.hidden = false;
  }

  function closeProformaModal() {
    if (dom.modalProforma) dom.modalProforma.hidden = true;
  }

  // ========================================================
  // INTERACTIVE FEATURE: JUT RESULT & GRADE CARD LOOKUP
  // ========================================================
  const SAMPLE_SUBJECTS_BY_SEM = {
    '1': [
      { code: 'PH101', name: 'Engineering Physics', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'MA101', name: 'Calculus & Linear Algebra', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'EE101', name: 'Basic Electrical Engineering', credits: '4.0', grade: 'B+', points: '7.0' },
      { code: 'ME101', name: 'Engineering Graphics & Design', credits: '3.0', grade: 'A', points: '8.0' },
      { code: 'PH101P', name: 'Engineering Physics Lab', credits: '1.5', grade: 'O', points: '10.0' },
      { code: 'EE101P', name: 'Basic Electrical Engg Lab', credits: '1.5', grade: 'A+', points: '9.0' }
    ],
    '2': [
      { code: 'CH102', name: 'Engineering Chemistry', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'MA102', name: 'Differential Equations & Transforms', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS102', name: 'Programming for Problem Solving (C)', credits: '4.0', grade: 'O', points: '10.0' },
      { code: 'HS102', name: 'English for Communication', credits: '2.0', grade: 'A+', points: '9.0' },
      { code: 'CS102P', name: 'C Programming Lab', credits: '1.5', grade: 'O', points: '10.0' }
    ],
    '3': [
      { code: 'CS301', name: 'Data Structures & Algorithms', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS302', name: 'Object Oriented Programming (Java)', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS303', name: 'Digital Logic & Computer Design', credits: '3.0', grade: 'A', points: '8.0' },
      { code: 'MA301', name: 'Discrete Mathematics & Graph Theory', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS301P', name: 'Data Structures Laboratory', credits: '1.5', grade: 'O', points: '10.0' },
      { code: 'CS302P', name: 'Java Programming Laboratory', credits: '1.5', grade: 'A+', points: '9.0' }
    ],
    '4': [
      { code: 'CS401', name: 'Design & Analysis of Algorithms', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS402', name: 'Operating Systems & System Programming', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS403', name: 'Computer Organization & Architecture', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS404', name: 'Formal Language & Automata Theory', credits: '3.0', grade: 'B+', points: '7.0' },
      { code: 'CS401P', name: 'Algorithms Lab', credits: '1.5', grade: 'O', points: '10.0' },
      { code: 'CS402P', name: 'Operating Systems Lab (Linux)', credits: '1.5', grade: 'A+', points: '9.0' }
    ],
    '5': [
      { code: 'CS501', name: 'Database Management Systems', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS502', name: 'Computer Networks & Protocols', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS503', name: 'Artificial Intelligence & Neural Networks', credits: '3.0', grade: 'O', points: '10.0' },
      { code: 'CS504', name: 'Software Engineering & Agile Methods', credits: '3.0', grade: 'A+', points: '9.0' },
      { code: 'CS501P', name: 'DBMS Lab (Oracle/PostgreSQL)', credits: '1.5', grade: 'O', points: '10.0' }
    ],
    '6': [
      { code: 'CS601', name: 'Compiler Design', credits: '4.0', grade: 'A', points: '8.0' },
      { code: 'CS602', name: 'Machine Learning & Big Data Tools', credits: '4.0', grade: 'A+', points: '9.0' },
      { code: 'CS603', name: 'Cloud Computing & Virtualization', credits: '3.0', grade: 'A+', points: '9.0' },
      { code: 'CS601P', name: 'Compiler & Lexical Analysis Lab', credits: '1.5', grade: 'A+', points: '9.0' }
    ],
    '7': [
      { code: 'CS701', name: 'Cyber & Information Security', credits: '3.0', grade: 'O', points: '10.0' },
      { code: 'CS702', name: 'Distributed Systems & Microservices', credits: '3.0', grade: 'A+', points: '9.0' },
      { code: 'CS703P', name: 'Major Project Phase - I', credits: '4.0', grade: 'O', points: '10.0' },
      { code: 'CS704P', name: 'Industrial Summer Internship Viva', credits: '2.0', grade: 'A+', points: '9.0' }
    ],
    '8': [
      { code: 'CS801', name: 'Advanced Deep Learning & Generative AI', credits: '3.0', grade: 'O', points: '10.0' },
      { code: 'CS802P', name: 'Major Project Phase - II & Dissertation', credits: '10.0', grade: 'O', points: '10.0' },
      { code: 'CS803P', name: 'Comprehensive Technical Grand Viva', credits: '2.0', grade: 'A+', points: '9.0' }
    ]
  };

  function setupResultSearch() {
    if (!dom.resultSearchForm) return;

    dom.resultSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const roll = (dom.inputRollNo.value || '23042').trim();
      const sem = dom.selectResultSem.value || '3';

      // Populate Meta
      if (dom.resRollNo) dom.resRollNo.textContent = roll;
      if (dom.resSem) dom.resSem.textContent = `${sem}${getOrdinal(sem)} Semester (2026-27)`;

      // Derive branch & name
      let name = 'RAJA KUMAR SHAW';
      let branch = 'Computer Science & Engineering';

      if (roll !== '23042') {
        name = `STUDENT (ROLL: ${roll})`;
        if (roll.toLowerCase().includes('me') || roll.startsWith('210') || roll.startsWith('220')) {
          branch = 'Mechanical Engineering';
        } else if (roll.toLowerCase().includes('ee')) {
          branch = 'Electrical Engineering';
        } else if (roll.toLowerCase().includes('civil')) {
          branch = 'Civil Engineering';
        }
      }

      if (dom.resStudentName) dom.resStudentName.textContent = name;
      if (dom.resBranch) dom.resBranch.textContent = branch;

      // Populate Subjects
      const subjects = SAMPLE_SUBJECTS_BY_SEM[sem] || SAMPLE_SUBJECTS_BY_SEM['3'];
      let html = '';
      let totalCreds = 0;
      let weightedPoints = 0;

      subjects.forEach((subj) => {
        const c = parseFloat(subj.credits);
        const p = parseFloat(subj.points);
        totalCreds += c;
        weightedPoints += (c * p);

        html += `
          <tr>
            <td><strong>${subj.code}</strong></td>
            <td>${subj.name}</td>
            <td>${subj.credits}</td>
            <td><span class="badge-status active">${subj.grade}</span></td>
            <td>${subj.points}</td>
          </tr>
        `;
      });

      if (dom.resultSubjectsBody) dom.resultSubjectsBody.innerHTML = html;

      const sgpa = (weightedPoints / totalCreds).toFixed(2);
      const cgpa = (parseFloat(sgpa) + 0.07).toFixed(2);

      if (dom.resSgpa) dom.resSgpa.textContent = sgpa;
      if (dom.resCgpa) dom.resCgpa.textContent = Math.min(10.0, parseFloat(cgpa)).toFixed(2);

      // Show Result Card with pulse animation
      if (dom.marksheetContainer) {
        dom.marksheetContainer.style.display = 'block';
        dom.marksheetContainer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // ========================================================
  // INTERACTIVE FEATURE: STUDENT GRIEVANCE SUBMIT & TRACK
  // ========================================================
  function setupGrievanceEngine() {
    if (dom.grievanceForm) {
      dom.grievanceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const code = `BITS-GRV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

        const newGrv = {
          id: code,
          name: dom.grvName.value,
          roll: dom.grvRoll.value,
          email: dom.grvEmail.value,
          category: dom.grvCategory.value,
          subject: dom.grvSubject.value,
          status: 'Under Review',
          timestamp: 'Just now (Oct 2026)',
          resolution: 'Forwarded to Dean Student Welfare (DSW). Departmental officer assigned for verification.'
        };

        grievancesStore.unshift(newGrv);

        // Pre-fill tracker input
        if (dom.trackGrievanceId) {
          dom.trackGrievanceId.value = code;
        }

        // Show prominent confirmation
        if (dom.grievanceStatusDisplay) {
          dom.grievanceStatusDisplay.innerHTML = `
            <div style="background: #ECFDF5; border: 1px solid #A7F3D0; padding: 14px; border-radius: var(--radius-md); color: #065F46;">
              <h4 style="margin: 0 0 6px 0; font-size: 14px; font-weight: 700;">Grievance Successfully Registered!</h4>
              <p style="margin: 0; font-size: 13px;">Your official tracking token is: <strong style="letter-spacing: 0.5px;">${code}</strong></p>
              <p style="margin: 4px 0 0 0; font-size: 12px; color: #047857;">A confirmation acknowledgment has been routed to Dean Student Welfare (DSW) Office.</p>
            </div>
          `;
        }

        alert(`Grievance Lodged Successfully!\n\nYour Unique Tracking Token is: ${code}\nKeep this token safe to monitor resolution progress.`);
        dom.grievanceForm.reset();
      });
    }

    if (dom.btnTrackGrievance) {
      dom.btnTrackGrievance.addEventListener('click', () => {
        const query = (dom.trackGrievanceId.value || '').trim().toUpperCase();
        if (!query) {
          alert('Please enter your 16-character tracking token.');
          return;
        }

        const found = grievancesStore.find(g => g.id.toUpperCase() === query);

        if (found) {
          const badgeClass = found.status === 'Resolved' ? 'active' : 'urgent';
          dom.grievanceStatusDisplay.innerHTML = `
            <div style="background: #F8FAFC; border: 1px solid #CBD5E1; padding: 16px; border-radius: var(--radius-md);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <strong style="color: var(--color-navy-dark); font-size: 14px;">${found.id}</strong>
                <span class="badge-status ${badgeClass}">${found.status}</span>
              </div>
              <p style="font-size: 13px; font-weight: 600; color: #1E293B; margin-bottom: 4px;">${found.subject}</p>
              <p style="font-size: 12px; color: #64748B;">Category: ${found.category} · Logged: ${found.timestamp}</p>
              <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #CBD5E1; font-size: 12.5px; color: #334155;">
                <strong>Official Action / Note:</strong><br>${found.resolution}
              </div>
            </div>
          `;
        } else {
          dom.grievanceStatusDisplay.innerHTML = `
            <div style="background: #FEF2F2; border: 1px solid #FECACA; padding: 12px; border-radius: var(--radius-md); color: #991B1B; font-size: 13px;">
              No grievance found for token <strong>"${query}"</strong>. Please verify the code or check your submission slip.
            </div>
          `;
        }
      });
    }
  }

  // ========================================================
  // INTERACTIVE FEATURE: SEMESTER FEE ESTIMATOR
  // ========================================================
  function setupFeeEstimator() {
    function calculateFee() {
      if (!dom.calcProg || !dom.calcCat || !dom.calcHostel || !dom.calcTotalFee) return;

      const prog = dom.calcProg.value;
      const cat = dom.calcCat.value;
      const hostel = dom.calcHostel.value;

      let tuition = 0;
      let institutional = 3500;
      let exam = 1800;
      let hostelRent = 0;

      if (prog === 'btech') {
        tuition = (cat === 'gen') ? 3866 : 0;
        institutional = 3500;
        exam = 1800;
        hostelRent = (hostel === 'hostel') ? 2500 : 0;
      } else {
        tuition = (cat === 'gen') ? 7000 : 0;
        institutional = 4500;
        exam = 2200;
        hostelRent = (hostel === 'hostel') ? 3000 : 0;
      }

      const total = tuition + institutional + exam + hostelRent;
      dom.calcTotalFee.textContent = `₹${total.toLocaleString('en-IN')}/-`;
    }

    if (dom.calcProg) dom.calcProg.addEventListener('change', calculateFee);
    if (dom.calcCat) dom.calcCat.addEventListener('change', calculateFee);
    if (dom.calcHostel) dom.calcHostel.addEventListener('change', calculateFee);
    calculateFee();
  }

  // ========================================================
  // INTERACTIVE FEATURE: ALUMNI GUEST HOUSE BOOKING
  // ========================================================
  function setupGuestHouseBooking() {
    if (!dom.guestHouseForm) return;

    dom.guestHouseForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = `AGH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const name = document.getElementById('ghName').value;
      const batch = document.getElementById('ghBatch').value;
      const room = document.getElementById('ghRoomType').value;
      const rate = room === 'deluxe' ? 800 : 1500;

      if (dom.ghBookingConfirm) {
        dom.ghBookingConfirm.innerHTML = `
          <div style="background: #F0FDF4; border: 1px solid #BBF7D0; padding: 16px; border-radius: var(--radius-md); color: #166534;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="margin: 0; font-size: 15px; font-weight: 700;">Booking Request Confirmed!</h4>
              <span class="badge-status active">Reference: ${code}</span>
            </div>
            <p style="font-size: 13px; margin: 0 0 6px 0;">
              Thank you, <strong>${name}</strong> (${batch}). A provisional room reservation has been registered at the 
              <strong>BIT Sindri Alumni Guest House</strong>.
            </p>
            <p style="font-size: 12px; margin: 0; color: #14532D;">
              Tariff: ₹${rate}/night · Please present this booking reference along with ID card at the Caretaker Desk on arrival.
            </p>
          </div>
        `;
        dom.ghBookingConfirm.scrollIntoView({ behavior: 'smooth' });
      }

      dom.guestHouseForm.reset();
    });
  }

  // ========================================================
  // INTERACTIVE FEATURE: ALUMNI PLEDGE SIMULATOR
  // ========================================================
  function setupPledgeSimulator() {
    if (dom.btnSimulatePledge && dom.modalPledge) {
      dom.btnSimulatePledge.addEventListener('click', () => {
        if (dom.pledgeSuccessMsg) dom.pledgeSuccessMsg.style.display = 'none';
        dom.modalPledge.hidden = false;
      });
    }

    if (dom.btnSubmitPledge) {
      dom.btnSubmitPledge.addEventListener('click', () => {
        if (dom.pledgeSuccessMsg) {
          dom.pledgeSuccessMsg.style.display = 'block';
        }
        setTimeout(() => {
          if (dom.modalPledge) dom.modalPledge.hidden = true;
          alert('Thank you for supporting BIT Sindri! Your simulated alumni contribution pledge has been recorded.');
        }, 1200);
      });
    }

    if (dom.btnModalPledgeClose && dom.modalPledge) {
      dom.btnModalPledgeClose.addEventListener('click', () => dom.modalPledge.hidden = true);
    }
    if (dom.btnModalPledgeDone && dom.modalPledge) {
      dom.btnModalPledgeDone.addEventListener('click', () => dom.modalPledge.hidden = true);
    }
  }

  // ========================================================
  // INTERACTIVE FEATURE: DEPARTMENT CATEGORY FILTER
  // ========================================================
  function setupDepartmentFilters() {
    if (!dom.filterDeptCats || !dom.departmentsGrid) return;

    dom.filterDeptCats.forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.filterDeptCats.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-cat');
        const cards = dom.departmentsGrid.querySelectorAll('.dept-card');

        cards.forEach((card) => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ========================================================
  // INTERACTIVE FEATURE: HOLIDAY NOTICES COMMON TO ALL YEARS
  // ========================================================
  const HOLIDAYS_DATA = [
    {
      id: 'durga-puja',
      ref: 'BITS/ESTB/HOL/2026/01',
      name: 'Durga Puja & Vijayadashami Vacation',
      shortDesc: 'Autumn Vacation & Vijayadashami break declared for entire institute',
      dates: '19 Oct 2026 – 28 Oct 2026',
      duration: '10 Days',
      days: 'Monday – Wednesday',
      category: 'vacation',
      catLabel: 'Vacation Break',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'diwali',
      ref: 'BITS/ESTB/HOL/2026/02',
      name: 'Deepawali & Govardhan Puja',
      shortDesc: 'Festival of Lights, Lakshmi Puja & Govardhan Puja observance',
      dates: '08 Nov 2026 – 10 Nov 2026',
      duration: '3 Days',
      days: 'Sunday – Tuesday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'chhath',
      ref: 'BITS/ESTB/HOL/2026/03',
      name: 'Chhath Puja Mahaparv',
      shortDesc: 'Surya Shasthi Mahaparv — Nahay-Khay to Usha Arghya',
      dates: '15 Nov 2026 – 18 Nov 2026',
      duration: '4 Days',
      days: 'Sunday – Wednesday',
      category: 'state',
      catLabel: 'State Festival',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'birsa-munda',
      ref: 'BITS/ESTB/HOL/2026/04',
      name: 'Bhagwan Birsa Munda Jayanti / Jharkhand Statehood Day',
      shortDesc: 'Commemoration of Dharti Aaba Bhagwan Birsa Munda & State Foundation Day',
      dates: '15 Nov 2026',
      duration: '1 Day',
      days: 'Sunday',
      category: 'state',
      catLabel: 'State Festival',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'guru-nanak',
      ref: 'BITS/ESTB/HOL/2026/05',
      name: 'Guru Nanak Dev Jayanti & Kartik Purnima',
      shortDesc: '557th Prakash Parv Celebrations & Kartik Purnima snan',
      dates: '24 Nov 2026',
      duration: '1 Day',
      days: 'Tuesday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'winter-break',
      ref: 'BITS/ESTB/HOL/2026/06',
      name: 'Winter Vacation & Christmas Day',
      shortDesc: 'Annual Institutional Winter Recess for all engineering batches & offices',
      dates: '25 Dec 2026 – 01 Jan 2027',
      duration: '8 Days',
      days: 'Friday – Friday',
      category: 'vacation',
      catLabel: 'Vacation Break',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'republic-day',
      ref: 'BITS/ESTB/HOL/2027/07',
      name: 'Republic Day (National Celebration)',
      shortDesc: '78th Republic Day Flag Hoisting ceremony at Central Sports Ground',
      dates: '26 Jan 2027',
      duration: '1 Day',
      days: 'Tuesday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'saraswati-puja',
      ref: 'BITS/ESTB/HOL/2027/08',
      name: 'Basant Panchami & Saraswati Puja',
      shortDesc: 'Vasant Panchami Campus Celebrations across all hostels and academic block',
      dates: '11 Feb 2027',
      duration: '1 Day',
      days: 'Thursday',
      category: 'state',
      catLabel: 'State Festival',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'maha-shivratri',
      ref: 'BITS/ESTB/HOL/2027/09',
      name: 'Maha Shivratri',
      shortDesc: 'Gazetted Holiday on the auspicious observance of Maha Shivratri',
      dates: '06 Mar 2027',
      duration: '1 Day',
      days: 'Saturday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'holi',
      ref: 'BITS/ESTB/HOL/2027/10',
      name: 'Holi & Dhulandi Vacation',
      shortDesc: 'Festival of Colors & Spring Recess declared for all academic wings',
      dates: '22 Mar 2027 – 25 Mar 2027',
      duration: '4 Days',
      days: 'Monday – Thursday',
      category: 'vacation',
      catLabel: 'Vacation Break',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'sarhul',
      ref: 'BITS/ESTB/HOL/2027/11',
      name: 'Sarhul (Tribal Nature & Spring Festival)',
      shortDesc: 'Traditional Jharkhand Nature Worship Festival of Sal Blossoms',
      dates: '10 Apr 2027',
      duration: '1 Day',
      days: 'Saturday',
      category: 'state',
      catLabel: 'State Festival',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'eid-ul-fitr',
      ref: 'BITS/ESTB/HOL/2027/12',
      name: 'Eid-ul-Fitr',
      shortDesc: 'Celebration of Eid-ul-Fitr (Subject to moon visibility)',
      dates: '11 Apr 2027',
      duration: '1 Day',
      days: 'Sunday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'ambedkar-jayanti',
      ref: 'BITS/ESTB/HOL/2027/13',
      name: 'Dr. B.R. Ambedkar Jayanti',
      shortDesc: 'Birth Anniversary of Bharat Ratna Babasaheb Dr. B.R. Ambedkar',
      dates: '14 Apr 2027',
      duration: '1 Day',
      days: 'Wednesday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'buddha-purnima',
      ref: 'BITS/ESTB/HOL/2027/14',
      name: 'Buddha Purnima',
      shortDesc: 'Vesak Buddha Purnima Celebrations and gazetted holiday',
      dates: '20 May 2027',
      duration: '1 Day',
      days: 'Thursday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'bakrid',
      ref: 'BITS/ESTB/HOL/2027/15',
      name: 'Eid-ul-Adha (Bakrid)',
      shortDesc: 'Sacred Festival of Eid-ul-Adha (Feast of the Sacrifice)',
      dates: '17 Jun 2027',
      duration: '1 Day',
      days: 'Thursday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'muharram',
      ref: 'BITS/ESTB/HOL/2027/16',
      name: 'Muharram (Youm-e-Ashura)',
      shortDesc: '10th Day of Muharram observance across institute',
      dates: '17 Jul 2027',
      duration: '1 Day',
      days: 'Saturday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Upcoming',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'independence-day',
      ref: 'BITS/ESTB/HOL/2026/17',
      name: 'Independence Day (Campus Celebration)',
      shortDesc: '80th National Independence Day Observance & Flag Hoisting',
      dates: '15 Aug 2026',
      duration: '1 Day',
      days: 'Saturday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Completed',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'karma-puja',
      ref: 'BITS/ESTB/HOL/2026/18',
      name: 'Karma Festival',
      shortDesc: 'State festival of Nature worship and sisterly love in Jharkhand',
      dates: '22 Sep 2026',
      duration: '1 Day',
      days: 'Tuesday',
      category: 'state',
      catLabel: 'State Festival',
      status: 'Completed',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    },
    {
      id: 'gandhi-jayanti',
      ref: 'BITS/ESTB/HOL/2026/19',
      name: 'Mahatma Gandhi Jayanti & Lal Bahadur Shastri Jayanti',
      shortDesc: 'Birth Anniversary of Father of the Nation & National Cleanliness Day',
      dates: '02 Oct 2026',
      duration: '1 Day',
      days: 'Friday',
      category: 'gazetted',
      catLabel: 'Gazetted National',
      status: 'Completed',
      scope: 'Common to All Years (1st - 4th Year, M.Tech, Ph.D)'
    }
  ];

  function buildHolidayCircularHtml(h) {
    return `
      <div class="holiday-paper-circular">
        <div class="holiday-circular-header">
          <div style="font-size: 11px; letter-spacing: 1.2px; font-weight: 700; color: #1E3A8A;">GOVERNMENT OF JHARKHAND</div>
          <div style="font-size: 10.5px; color: #475569;">DEPARTMENT OF HIGHER &amp; TECHNICAL EDUCATION</div>
          <h3 style="font-size: 17px; margin: 6px 0; color: #0F172A; font-family: serif; font-weight: 700;">BIRSA INSTITUTE OF TECHNOLOGY, SINDRI</h3>
          <p style="font-size: 11.5px; margin: 0; color: #334155;">P.O. Sindri Institute, Dhanbad, Jharkhand - 828123</p>
          <p style="font-size: 11px; font-weight: 600; color: #1E3A8A; margin-top: 3px;">Office of the Registrar (Establishment Section)</p>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 14px; border-bottom: 1px dashed #CBD5E1; padding-bottom: 8px;">
          <div><strong>Circular Memo Ref.:</strong> <code>${h.ref}</code></div>
          <div><strong>Applicability:</strong> <span style="color: #047857; font-weight: 700;">COMMON TO ALL YEARS</span></div>
        </div>

        <div style="text-align: center; margin-bottom: 16px;">
          <div style="font-size: 13.5px; font-weight: 800; text-decoration: underline; color: #0F172A; text-transform: uppercase;">OFFICIAL NOTIFICATION: ${h.name.toUpperCase()}</div>
          <div style="font-size: 11.5px; font-weight: 700; color: #059669; margin-top: 4px;">SCHEDULED DATES: ${h.dates.toUpperCase()} (${h.duration.toUpperCase()})</div>
        </div>

        <div style="font-size: 13px; line-height: 1.7; color: #1E293B; text-align: justify; margin-bottom: 18px;">
          <p style="margin-bottom: 10px;">In pursuance of the Government of Jharkhand official gazette notification and the unified Academic Calendar of Jharkhand University of Technology (JUT), it is hereby officially notified that Birsa Institute of Technology, Sindri shall remain closed on account of <strong>${h.name}</strong> on <strong>${h.dates} (${h.days})</strong>.</p>
          
          <p style="margin-bottom: 10px;"><strong>Uniform Institutional Applicability:</strong> This notification applies universally and uniformly across all batches — B.Tech 1st Year, B.Tech 2nd Year, B.Tech 3rd Year, and B.Tech 4th Year across all 10 branches, M.Tech postgraduate programs, and Ph.D. scholars. Departmental laboratories, workshops, and administrative divisions will remain closed during the declared period.</p>
          
          <p style="margin-bottom: 10px;"><strong>Academic Directive:</strong> No regular lecture classes, continuous assessments, mid-semester evaluations, or practical laboratory examinations shall be conducted on the specified holiday date(s). Academic schedules shall resume as customary following the holiday.</p>
          
          <p style="margin-bottom: 0;"><strong>Essential Maintenance Services:</strong> Campus Power Sub-Station, Water Works, Security Division, and Student Health Centre shall continue 24x7 emergency operation under rostered personnel.</p>
        </div>

        <div style="margin-top: 24px; display: flex; justify-content: flex-end; text-align: center;">
          <div style="font-size: 12px; line-height: 1.4;">
            <div style="font-weight: 700; color: #0F172A;">By Order of the Director,</div>
            <div style="margin-top: 35px; font-weight: 700;">Registrar (Officiating)</div>
            <div style="color: #475569;">Birsa Institute of Technology, Sindri</div>
          </div>
        </div>

        <div style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #64748B;">
          <strong>Copy forwarded for information &amp; necessary action to:</strong><br>
          1. All Heads of Departments (15 Departments) for dissemination to all undergraduate and postgraduate batches.<br>
          2. Dean (Academic Affairs) &amp; Dean (Student Welfare).<br>
          3. Controller of Examinations (COE), BIT Sindri.<br>
          4. Prof.-in-Charge (Hostels &amp; Campus Amenities).<br>
          5. All Hostel Wardens (Hostels 1 to 29).<br>
          6. Webmaster for official display on BIT Sindri Portal.
        </div>
      </div>
    `;
  }

  let currentHolidayFilterCat = 'all';
  let currentHolidaySearchQuery = '';

  function renderHolidays(filterCat = currentHolidayFilterCat, searchQuery = currentHolidaySearchQuery) {
    currentHolidayFilterCat = filterCat;
    currentHolidaySearchQuery = searchQuery;

    if (!dom.holidaysTableBody) return;

    const q = searchQuery.trim().toLowerCase();
    const filtered = HOLIDAYS_DATA.filter((h) => {
      // Category filter
      let matchesCat = true;
      if (filterCat === 'upcoming') {
        matchesCat = (h.status === 'Upcoming');
      } else if (filterCat === 'vacation') {
        matchesCat = (h.category === 'vacation');
      } else if (filterCat === 'state') {
        matchesCat = (h.category === 'state');
      } else if (filterCat === 'gazetted') {
        matchesCat = (h.category === 'gazetted');
      }

      if (!matchesCat) return false;

      // Text query filter
      if (!q) return true;
      return (
        h.name.toLowerCase().includes(q) ||
        h.ref.toLowerCase().includes(q) ||
        h.dates.toLowerCase().includes(q) ||
        h.shortDesc.toLowerCase().includes(q) ||
        h.days.toLowerCase().includes(q) ||
        h.catLabel.toLowerCase().includes(q)
      );
    });

    if (dom.holidayResultsCount) {
      dom.holidayResultsCount.textContent = `Showing ${filtered.length} Holiday${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      dom.holidaysTableBody.innerHTML = `
        <tr>
          <td colspan="8" style="text-align: center; padding: 32px; color: #64748B;">
            <p style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">No holiday notices matched your criteria</p>
            <p style="font-size: 12px; margin: 0;">Try adjusting your search query or select "All Holidays (19)"</p>
          </td>
        </tr>
      `;
      return;
    }

    dom.holidaysTableBody.innerHTML = filtered.map((h) => {
      const isUpcoming = h.status === 'Upcoming';
      return `
        <tr ${isUpcoming ? 'class="highlight-holiday"' : ''}>
          <td>
            <code style="font-size: 11px; font-weight: 700; color: #1E3A8A;">${h.ref}</code>
          </td>
          <td>
            <div style="font-weight: 700; color: var(--color-navy-dark); font-size: 13.5px;">${h.name}</div>
            <div style="font-size: 11.5px; color: var(--color-text-muted); margin-top: 2px;">${h.shortDesc}</div>
          </td>
          <td>
            <strong style="color: #0F172A; font-size: 13px;">${h.dates}</strong>
            <span style="display: block; font-size: 11px; color: #047857; font-weight: 600; margin-top: 2px;">${h.duration}</span>
          </td>
          <td style="font-size: 12.5px; color: #334155;">
            ${h.days}
          </td>
          <td>
            <span class="badge-cohort-all" title="Applies uniformly to 1st, 2nd, 3rd, 4th Year B.Tech, M.Tech and Ph.D">Common to All Years</span>
          </td>
          <td>
            <span class="dept-badge" style="background: #F1F5F9; color: #334155; font-size: 11px;">${h.catLabel}</span>
          </td>
          <td>
            <span class="badge-status ${isUpcoming ? 'active' : ''}" style="font-size: 11px;">${h.status}</span>
          </td>
          <td>
            <button type="button" class="btn-table-action btn-view-holiday-circular" data-holiday-id="${h.id}" title="View official signed circular">
              View Circular
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  function openHolidayCircularModal(holidayId) {
    const h = HOLIDAYS_DATA.find(item => item.id === holidayId) || HOLIDAYS_DATA[0];
    if (!h || !dom.modalHoliday) return;

    if (dom.modalHolidayTitle) {
      dom.modalHolidayTitle.textContent = `${h.name} — Circular (${h.ref})`;
    }
    if (dom.modalHolidayBody) {
      dom.modalHolidayBody.innerHTML = buildHolidayCircularHtml(h);
    }
    dom.modalHoliday.hidden = false;
  }

  function closeHolidayCircularModal() {
    if (dom.modalHoliday) {
      dom.modalHoliday.hidden = true;
    }
  }

  function setupHolidayEngine() {
    // Search input
    if (dom.holidaySearchInput) {
      dom.holidaySearchInput.addEventListener('input', (e) => {
        renderHolidays(currentHolidayFilterCat, e.target.value);
      });
    }

    // Filter category pills
    if (dom.filterHolidayCats) {
      dom.filterHolidayCats.forEach((btn) => {
        btn.addEventListener('click', () => {
          dom.filterHolidayCats.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.getAttribute('data-cat') || 'all';
          renderHolidays(cat, currentHolidaySearchQuery);
        });
      });
    }

    // Modal Close buttons
    if (dom.btnModalHolidayClose) dom.btnModalHolidayClose.addEventListener('click', closeHolidayCircularModal);
    if (dom.btnModalHolidayDone) dom.btnModalHolidayDone.addEventListener('click', closeHolidayCircularModal);
    if (dom.modalHoliday) {
      dom.modalHoliday.addEventListener('click', (e) => {
        if (e.target === dom.modalHoliday) closeHolidayCircularModal();
      });
    }

    // Initial render
    renderHolidays('all', '');
  }

  // ========================================================
  // GLOBAL EVENT LISTENERS & CLICKS DELEGATION
  // ========================================================
  function setupGlobalEvents() {
    // 1. Mobile Navbar Toggle
    if (dom.navbarMobileToggle && dom.mainNavLinks) {
      dom.navbarMobileToggle.addEventListener('click', () => {
        const isOpen = dom.mainNavLinks.classList.toggle('open');
        dom.navbarMobileToggle.setAttribute('aria-expanded', String(isOpen));
      });
    }

    // 2. Hash Change Listener
    window.addEventListener('hashchange', () => {
      navigateTo(window.location.hash);
    });

    // 3. Subnav Buttons Click Listener (Delegated)
    document.addEventListener('click', (e) => {
      const subnavBtn = e.target.closest('.subnav-btn');
      if (subnavBtn) {
        const subtabId = subnavBtn.getAttribute('data-subtab');
        if (subtabId) {
          activateSubtab(subtabId);
        }
        return;
      }

      // Department Profile Trigger
      const deptBtn = e.target.closest('.btn-open-dept-profile');
      if (deptBtn) {
        const deptId = deptBtn.getAttribute('data-dept-id');
        openDepartmentProfile(deptId);
        return;
      }

      // Tender NIT Trigger
      const tenderBtn = e.target.closest('.btn-view-tender');
      if (tenderBtn) {
        const tId = tenderBtn.getAttribute('data-tender');
        openTenderModal(tId);
        return;
      }

      // Proforma Trigger
      const proformaBtn = e.target.closest('.btn-view-proforma');
      if (proformaBtn) {
        const pKey = proformaBtn.getAttribute('data-proforma');
        openProformaModal(pKey);
        return;
      }

      // Holiday Circular Trigger
      const holBtn = e.target.closest('.btn-view-holiday-circular');
      if (holBtn) {
        const hId = holBtn.getAttribute('data-holiday-id');
        openHolidayCircularModal(hId);
        return;
      }

      // Jump to Grievance Link
      const jumpGrv = e.target.closest('.btn-jump-to-grievance');
      if (jumpGrv) {
        e.preventDefault();
        window.location.hash = '#students/grievance';
        return;
      }
    });

    // 4. Modal Close Triggers
    if (dom.btnModalDeptClose) dom.btnModalDeptClose.addEventListener('click', closeDepartmentProfile);
    if (dom.btnModalDeptDone) dom.btnModalDeptDone.addEventListener('click', closeDepartmentProfile);
    if (dom.modalDept) {
      dom.modalDept.addEventListener('click', (e) => {
        if (e.target === dom.modalDept) closeDepartmentProfile();
      });
    }

    if (dom.btnModalTenderClose) dom.btnModalTenderClose.addEventListener('click', closeTenderModal);
    if (dom.btnModalTenderDone) dom.btnModalTenderDone.addEventListener('click', closeTenderModal);
    if (dom.modalTender) {
      dom.modalTender.addEventListener('click', (e) => {
        if (e.target === dom.modalTender) closeTenderModal();
      });
    }

    if (dom.btnModalProformaClose) dom.btnModalProformaClose.addEventListener('click', closeProformaModal);
    if (dom.btnModalProformaDone) dom.btnModalProformaDone.addEventListener('click', closeProformaModal);
    if (dom.modalProforma) {
      dom.modalProforma.addEventListener('click', (e) => {
        if (e.target === dom.modalProforma) closeProformaModal();
      });
    }

    // Escape Key Close for Prototype Modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeDepartmentProfile();
        closeTenderModal();
        closeProformaModal();
        closeHolidayCircularModal();
        if (dom.modalPledge) dom.modalPledge.hidden = true;
      }
    });
  }

  // ========================================================
  // INITIALIZATION
  // ========================================================
  setupGlobalEvents();
  setupResultSearch();
  setupGrievanceEngine();
  setupFeeEstimator();
  setupGuestHouseBooking();
  setupPledgeSimulator();
  setupDepartmentFilters();
  setupHolidayEngine();

  // Route according to initial URL hash or default to notices
  if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#notices') {
    navigateTo(window.location.hash);
  } else {
    navigateTo('notices');
  }

})();

