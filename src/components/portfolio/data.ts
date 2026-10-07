import surveillanceImage from '@/assets/surveillance.jpg'
import plantImage from '@/assets/plant-analysis.jpg'

export const profile = {
  name: 'Yasvand A K', title: 'Artificial Intelligence & Data Science Student',
  email: 'yasvandak@gmail.com', phone: '7904715141', location: 'Trichy, Tamil Nadu, India',
  github: 'https://github.com/yasvandak', linkedin: 'https://linkedin.com/in/yasvandak',
  summary: 'AI & Data Science undergraduate with hands-on experience developing machine learning and computer vision applications. Passionate about building practical AI solutions and continuously improving through real-world projects, hackathons, and collaborative development.',
}
export const projects = [
  {
    id: 'surveillance', number: '01', title: 'AI-Powered Area Surveillance System for Theft Detection', shortTitle: 'Intelligent surveillance.', role: 'Team Leader', image: surveillanceImage,
    alt: 'Concept visualization of computer vision tracking a person in a corridor', category: 'COMPUTER VISION',
    description: 'An AI-powered surveillance system designed to detect suspicious activity from live video streams in real time using Computer Vision and Machine Learning.',
    tags: ['Computer Vision', 'Machine Learning', 'Live Video Analysis'],
    features: ['Real-time suspicious activity detection', 'Computer Vision', 'Machine Learning', 'Live video analysis', 'Team leadership', 'Project planning and coordination'],
    problem: 'Ineffective manual surveillance systems failed to detect suspicious activity in security-critical spaces.',
    solution: 'Built an AI-powered surveillance system using Computer Vision and Machine Learning to detect suspicious activity from live video streams in real time.',
    contribution: 'Led a team of developers, coordinated project planning, monitored progress, and ensured timely completion of all major project milestones.',
    achievement: null,
  },
  {
    id: 'plant', number: '02', title: 'AI-Powered Plant Identification & Disease Classification System', shortTitle: 'Smarter plant diagnosis.', role: 'Front-End Developer', image: plantImage,
    alt: 'Concept visualization of AI image analysis detecting disease patches on a plant leaf', category: 'MACHINE LEARNING',
    description: 'An image classification system designed for automatic plant species identification and disease classification using Machine Learning and Image Processing.',
    tags: ['Machine Learning', 'Image Processing', 'Classification'],
    features: ['Plant species identification', 'Disease classification', 'Image processing', 'Machine learning', 'Image input', 'Real-time result display', 'Intuitive user interface'],
    problem: 'Delayed and inaccurate plant disease detection caused by dependency on manual inspection and limited access to expert knowledge.',
    solution: 'Engineered an image classification system using Machine Learning and Image Processing for automatic plant species identification and disease classification.',
    contribution: 'Designed and implemented the front-end interface, integrating real-time image input, live result display, and intuitive navigation for end users.',
    achievement: 'First Prize',
  },
]
export type Project = typeof projects[number]
export const certifications = ['NPTEL – Internet of Things', 'MongoDB – MongoDB Basics', 'NVIDIA – Fundamentals of Deep Learning', 'Java Programming', 'ML with AI Applications']
export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:title', content: title }, { name: 'twitter:description', content: description }],
    links: [{ rel: 'canonical', href: path }],
  }
}
