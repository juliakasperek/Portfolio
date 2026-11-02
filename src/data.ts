// All site content lives here. To update the portfolio, edit this file —
// the components read from it and don't need to change.

const base = import.meta.env.BASE_URL
export const img = (file: string) => `${base}img/${file}`

export const profile = {
  name: 'Julia Kasperek',
  role: 'Computer Science Student',
  location: 'London, ON',
  status: 'Open to internships & co-op',
  email: 'julia.kasperek3@gmail.com',
  github: 'https://github.com/juliakasperek',
  githubHandle: 'juliakasperek',
  linkedin: 'https://www.linkedin.com/in/julia-kasperek-538907301/',
  linkedinHandle: 'julia-kasperek',
  bio: "I'm a fourth year Computer Science student at Western University with a Minor in Software Engineering. I build software applications, lead team projects, and develop data-driven solutions — and I care about writing clean, purposeful code.",
  about: [
    'Pursuing an Honours Specialization in Computer Science at Western University has pushed me to think critically, collaborate across teams, and build things that actually work. I love the moment when something you coded comes to life and someone finds it genuinely useful. I\'ve applied that mindset both in the classroom and in a real work environment as a Project Coordinator, where I learned how much communication and organization matter in technical work.',
    "Outside of school I'm fluent in English and Polish, have a habit of booking flights whenever I can, and spend most of my free time in the gym. I genuinely enjoy being challenged — whether that's a hard problem to debug, a new country to navigate, or a personal best to hit.",
  ],
}

export const funFacts = [
  { emoji: '🇵🇱', label: 'Born in Poland' },
  { emoji: '🗣️', label: 'English + Polish' },
  { emoji: '✈️', label: 'Chronic flight booker' },
  { emoji: '🏋️‍♀️', label: 'Gym regular' },
]

export type Photo = { src: string; caption: string; alt: string }

export const photos: Photo[] = [
  { src: img('soccer.jpg'), alt: 'Julia with her soccer team', caption: 'Staying active and competitive with my soccer team' },
  { src: img('travel.jpg'), alt: 'Collage of travel photos', caption: 'My own shots · New York, Mexico, Poland, Italy, Nova Scotia & Vatican City' },
  { src: img('yoga.jpg'), alt: 'Yoga club at Western', caption: 'Finding balance with my club at Western' },
  { src: img('running.jpg'), alt: 'Julia running', caption: 'Pushing my limits one run at a time' },
]

export type Education = {
  school: string
  detail: string
  when: string
  where: string
  note?: string
}

export const education: Education[] = [
  {
    school: 'Western University',
    detail: 'Honours Specialization in Computer Science · Minor in Software Engineering',
    when: '2023 – Present',
    where: 'London, ON',
    note: 'Data Structures & Algorithms, Operating Systems, Database Management Systems, Networking, Requirements & Analysis, Software Design & Construction',
  },
  {
    school: 'Cardinal Leger Catholic Secondary School',
    detail: 'Ontario Secondary School Diploma (Honours)',
    when: '2019 – 2023',
    where: 'Brampton, ON',
  },
  {
    school: 'Born & raised in Poland',
    detail: 'Moved to Brampton, ON in 2019',
    when: 'Before 2019',
    where: 'Poland',
    note: 'Growing up between two cultures and languages shaped the way I think, communicate, and approach problems. That adaptability came with me to Canada and has been one of my greatest strengths ever since.',
  },
]

export type Job = {
  title: string
  org: string
  where: string
  when: string
  current?: boolean
  points: string[]
}

export const experience: Job[] = [
  {
    title: 'IT Intern',
    org: 'GUS Canada',
    where: 'Hybrid',
    when: 'Aug 2026 – Present',
    current: true,
    points: [
      'Gaining hands-on experience with hardware setup and computer imaging, preparing classroom devices for student use and running readiness checks for exam environments.',
      'Supporting Tier 1 IT operations by troubleshooting technical issues for students and staff and learning enterprise helpdesk workflows.',
      'Building foundational knowledge of enterprise networking and cybersecurity alongside IT professionals across a multi-campus organization.',
    ],
  },
  {
    title: 'Project Lead',
    org: 'Riipen Industry Project',
    where: 'Remote',
    when: 'Aug 2026',
    points: [
      'Led a 5-person cross-functional team through a 30-hour consulting project, coordinating meetings, assigning tasks by role, and keeping the team aligned on deadlines and deliverables.',
      'Evaluated competitors’ digital presence, social media strategy, website experience, and brand positioning to find gaps and opportunities for an early-stage Canadian startup.',
      'Presented a strategic report with three data-informed recommendations — social media expansion, packaging redesign, and e-commerce optimization — tailored to a lean, budget-limited team.',
    ],
  },
  {
    title: 'Project Manager Assistant',
    org: 'Robert Design Group Ltd.',
    where: 'Mississauga, ON',
    when: 'Jun 2026 – Sep 2026',
    points: [
      'Managed end-to-end procurement workflows with daily tracking across multiple concurrent projects, monitoring approvals, outstanding deliverables, and milestones.',
      'Coordinated communication between suppliers, shop teams, clients, and designers to deliver project requirements accurately and on time.',
      'Analyzed architectural and millwork drawings to verify material specifications against project scope and stakeholder requirements.',
    ],
  },
  {
    title: 'Project Lead',
    org: 'Riipen Industry Project',
    where: 'Remote',
    when: 'Mar 2026 – May 2026',
    points: [
      'Led a 4-person team through a 30-hour consulting project for a safety training startup, managing task delegation, timelines, and final deliverables.',
      'Developed three strategic recommendations covering digital presence, association partnerships, and compliance-driven service bundling.',
      'Presented findings in a structured deck with market analysis, revenue modelling, and a phased implementation roadmap.',
    ],
  },
  {
    title: 'Director of Events',
    org: "Students Fight Parkinson's Club, Western University",
    where: 'London, ON',
    when: 'Sep 2025 – Apr 2026',
    points: [
      "Planned and ran four to six events per semester for a 100+ member organization focused on Parkinson's awareness and fundraising.",
      'Organized collaborative events with other campus clubs, managing logistics, timelines, and communication between multiple stakeholders.',
    ],
  },
  {
    title: 'Project Coordinator Intern',
    org: 'Robert Design Group Ltd.',
    where: 'Mississauga, ON',
    when: 'May 2025 – Aug 2025',
    points: [
      'Coordinated multiple millwork projects by ordering materials and tracking deliveries and inventory.',
      'Introduced a structured data-tracking process that reduced manual updates and improved project visibility.',
      'Managed communication between suppliers and on-site teams to hit project milestones on time.',
      'Led the painting section in the final month, overseeing workflow and resource allocation.',
    ],
  },
]

export type Project = {
  name: string
  when: string
  blurb: string
  tags: string[]
  link?: string
  color: 'pink' | 'yellow' | 'blue' | 'mint'
  emoji: string
}

export const projects: Project[] = [
  {
    name: 'Workout Tracker',
    when: '2026',
    blurb: 'Full-stack web app for logging gym workouts and cardio. Daily and weekly stats, an interactive calendar, and a weekly schedule planner.',
    tags: ['Python', 'Flask', 'MySQL', 'JavaScript'],
    link: 'https://github.com/juliakasperek/workout_tracker',
    color: 'pink',
    emoji: '🏋️‍♀️',
  },
  {
    name: 'Spin & Solve',
    when: 'Fall 2025',
    blurb: 'A Wheel of Fortune–inspired word puzzle game in C++ and Qt, with adjustable difficulty, automated scoring logic, and a fully responsive GUI.',
    tags: ['C++', 'Qt', 'OOP', 'Git'],
    link: 'https://github.com/juliakasperek/Spin-Solve',
    color: 'yellow',
    emoji: '🎡',
  },
  {
    name: 'This Portfolio',
    when: '2026',
    blurb: 'Rebuilt from plain HTML into a React + TypeScript app with Vite, Tailwind CSS, and Motion — typed content, scroll animations, and draggable bits.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    link: 'https://github.com/juliakasperek/Portfolio',
    color: 'blue',
    emoji: '✨',
  },
  {
    name: 'Virtual Pet Game',
    when: 'Spring 2024',
    blurb: 'A GUI virtual pet simulator built in a team with Java and JavaFX, applying modular design, encapsulation, and Git-based version control.',
    tags: ['Java', 'JavaFX', 'Git', 'OOP'],
    color: 'mint',
    emoji: '🐾',
  },
]

export const skills = [
  { name: 'Java', icon: img('java.svg') },
  { name: 'Python', icon: img('python.svg') },
  { name: 'TypeScript', icon: img('typescript.svg') },
  { name: 'JavaScript', icon: img('javascript.svg') },
  { name: 'React', icon: img('react.svg') },
  { name: 'C++', icon: img('cplusplus.svg') },
  { name: 'HTML', icon: img('html5.svg') },
  { name: 'CSS', icon: img('css3.svg') },
  { name: 'MySQL', icon: img('mysql.svg') },
  { name: 'PostgreSQL', icon: img('postgresql.svg') },
  { name: 'Git', icon: img('git.svg') },
  { name: 'GitHub', icon: img('github.svg') },
]

export const marquee = [
  'Software Development',
  'Team Leadership',
  'Full-Stack Apps',
  'Clean Code',
  'Project Coordination',
  'Data-Driven Solutions',
]
