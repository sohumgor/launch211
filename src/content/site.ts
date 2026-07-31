export const event = {
  name: "LaunchPoint Fall Conference",
  shortName: "LaunchPoint",
  date: "Saturday, October 17, 2026",
  dateShort: "October 17, 2026",
  time: "8:00 AM–2:15 PM",
  venue: "Palatine High School",
  address: "1111 N. Rohlwing Road, Palatine, Illinois",
  attendance: "75–120 students",
  interestForm: "https://forms.gle/h2XLN4iWxxHHy2BE6",
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
    format: "7-minute pitch + 3-minute Q&A",
    preparation: "Prepared before the conference",
    href: "/competitions/pitch",
  },
  {
    slug: "roleplay",
    eyebrow: "Live case competition",
    title: "Business Roleplay",
    summary: "Analyze a realistic management, marketing, or finance scenario under time pressure and present a practical recommendation.",
    format: "7-minute presentation + 3-minute Q&A",
    preparation: "20-minute on-site preparation",
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
    answer: "Full conference registration is not open yet. Students can complete the interest form now and receive updates when eligibility, fees, team rules, and registration details are finalized.",
  },
  {
    question: "Can students enter both competitions?",
    answer: "That rule is still being finalized. The registration page will clearly state competition and team-selection rules before registration opens.",
  },
  {
    question: "How do the awards work?",
    answer: "Current sponsorship materials allocate $500, $300, and $200 awards for the top three teams in each primary competition, creating a $2,000 total prize pool. Final award and disbursement terms will be included in the official rules.",
  },
  {
    question: "Will lunch be provided?",
    answer: "Lunch is included in the current event plan. Final dietary, allergy, and accessibility questions will be collected during registration.",
  },
  {
    question: "How can a professional get involved?",
    answer: "Business professionals can participate as judges, workshop leaders, speakers, mentors, volunteers, or sponsors. Visit the Get Involved page or contact the team directly.",
  },
];
