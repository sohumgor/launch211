export const event = {
  name: "LaunchPoint Fall Conference",
  shortName: "LaunchPoint",
  date: "October 2026 · Date TBD",
  dateShort: "October 2026 · Date TBD",
  time: "8:00 AM–2:15 PM",
  venue: "Palatine High School",
  address: "1111 N. Rohlwing Road, Palatine, Illinois",
  attendance: "75–120 students",
  registrationFee: "Approximately $20 (pending confirmation)",
  email: "launch211team@gmail.com",
  instagram: "https://www.instagram.com/official_launchpoint/",
  instagramLabel: "@official_launchpoint",
};

export const schedule = [
  { time: "8:00–8:30 AM", title: "Arrival and check-in", detail: "Welcome desk opens and participants find their assigned spaces." },
  { time: "8:30–9:00 AM", title: "Opening remarks", detail: "Conference welcome, event briefing, and final instructions." },
  { time: "9:00–11:00 AM", title: "Competition judging", detail: "Venture Pitch and Business Roleplay run concurrently." },
  { time: "11:00 AM–12:00 PM", title: "Lunch", detail: "A shared break for students, judges, workshop leaders, and volunteers." },
  { time: "12:00–1:30 PM", title: "Professional workshops", detail: "Interactive sessions focused on careers and practical business skills." },
  { time: "1:30–2:15 PM", title: "Awards and closing", detail: "Competition recognition, partner remarks, and next steps." },
];

export const competitions = [
  {
    slug: "pitch",
    eyebrow: "Prepared competition",
    title: "Venture Pitch",
    summary: "Build an original business concept, make the case for it, and defend your assumptions before an investor-style judging panel.",
    format: "7-minute pitch + 2-minute Q&A",
    preparation: "Prepared before the conference",
    href: "/competitions/pitch",
  },
  {
    slug: "roleplay",
    eyebrow: "Live case competition",
    title: "Business Roleplay",
    summary: "Work through an entrepreneurship or business management scenario with your team, then present your recommendation to a judge in character.",
    format: "7-minute presentation + 2-minute Q&A",
    preparation: "15-minute on-site preparation",
    href: "/competitions/roleplay",
  },
];

export const prizeLevels = [
  { place: "First", amount: "$500" },
  { place: "Second", amount: "$300" },
  { place: "Third", amount: "$200" },
];

export const sponsorTiers = [
  {
    name: "Title Sponsor",
    amount: "$1,500",
    note: "Exclusive to one business",
    benefits: ["Premier homepage and event branding", "Recognition at opening and closing", "Up to three judging seats", "Optional booth and mentorship opportunities"],
  },
  {
    name: "Partner Sponsor",
    amount: "$1,000",
    note: "Category exclusivity",
    benefits: ["Premium placement across event materials", "Recognition at opening and closing", "Up to two judging seats", "Optional booth and mentorship opportunities"],
  },
  {
    name: "Gold Sponsor",
    amount: "$500",
    note: "High-visibility community support",
    benefits: ["Website and event signage logo", "Featured social post", "One judging seat", "Verbal event recognition"],
  },
  {
    name: "Silver Sponsor",
    amount: "$250",
    note: "Community supporter",
    benefits: ["Sponsors-page listing", "Event signage recognition", "Stage slideshow recognition", "Group social acknowledgement"],
  },
  {
    name: "Bronze Sponsor",
    amount: "$100",
    note: "Conference supporter",
    benefits: ["Sponsors-page listing", "Stage slideshow recognition"],
  },
];

export const faqs = [
  {
    question: "Who is LaunchPoint for?",
    answer: "LaunchPoint is designed for high school students interested in entrepreneurship, marketing, finance, management, investing, strategy, or career exploration. No club membership or prior competition experience is required.",
  },
  {
    question: "Is registration open?",
    answer: "Full conference registration is not open yet. Eligibility, fees, team rules, and registration details will be posted here once they are finalized.",
  },
  {
    question: "Can students enter both competitions?",
    answer: "That rule is still being finalized. The registration page will clearly state competition and team-selection rules before registration opens.",
  },
  {
    question: "How many students are on a team?",
    answer: "Both current event guides specify teams of 2–4 students. Every member presents and answers at least one judge question.",
  },
  {
    question: "Is there a registration fee?",
    answer: "The registration fee is expected to be approximately $20 to help cover conference costs. The final amount will be confirmed before registration opens.",
  },
  {
    question: "How do the awards work?",
    answer: "The award structure allocates $500, $300, and $200 to the top three teams in each primary competition, creating a $2,000 total prize pool. Official rules will explain award eligibility and disbursement.",
  },
  {
    question: "Will lunch be provided?",
    answer: "Lunch is included in the conference schedule. Dietary, allergy, and accessibility questions will be collected during registration.",
  },
  {
    question: "How can a professional get involved?",
    answer: "Business professionals can participate as judges, workshop leaders, speakers, mentors, volunteers, or sponsors. Visit the Get Involved page or contact the team directly.",
  },
];
