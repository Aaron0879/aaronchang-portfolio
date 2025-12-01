"use client";

import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Server, 
  Smartphone, 
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  Send,
  Layers
} from 'lucide-react';

// --- Data Types & Data (Moved outside component for cleanliness) ---

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
}

interface ProjectItem {
  title: string;
  tech: string[];
  description: string;
  icon: React.ReactNode;
  link?: string; // Added optional link
}

const personalInfo = {
  name: "Aaron Chang Kar Yoong",
  role: "Full-Stack Software Engineer", // Upgraded title
  // Enhanced tagline to focus on value
  tagline: "Bridging the gap between code and business value. Building scalable, stateless, and cost-efficient solutions.",
  email: "aaronchang563@gmail.com",
  phone: "+60 17-475 1893",
  linkedin: "https://linkedin.com/in/aaron0879",
  github: "https://github.com/Aaron0879",
  location: "Ipoh, Perak, Malaysia"
};

const skills = {
  // Grouped slightly differently for better logical flow
  languages: ["TypeScript", "JavaScript", "PHP", "Dart", "Python", "SQL", "Java", "C++"],
  frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "GSAP", "Flutter", "Bootstrap"],
  backend: ["Laravel", "Node.js", "Express.js", "MySQL", "Firebase"],
  devops: [ "CI/CD", "AWS S3", "Cloudflare R2", "Railway", "Vercel", "Git"], // Added DevOps category
  ai: ["OpenAI API", "TensorFlow", "ML Kit", "OpenCV"]
};

const experience: ExperienceItem[] = [
  {
    id: 1,
    role: "Software Engineer (Intern)",
    company: "Polyware Sdn Bhd",
    period: "July 2025 - Dec 2025",
    description: "Engineered an offline-first React Native warehouse app with Bluetooth hardware integration. Reduced legacy system bugs by 40% and optimized Laravel API queries for high-volume inventory sync.",
    type: "work"
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "March 2025 - Present",
    description: "Delivered end-to-end web solutions using stateless architecture (Laravel Cloud/Railway). Integrated complex APIs (WhatsApp/Payment Gateways) and reduced hosting OpEx by using Object Storage.",
    type: "work"
  },
  {
    id: 3,
    role: "Software Engineer (Intern)",
    company: "Polyware Sdn Bhd",
    period: "Jan 2023 - April 2023",
    description: "Revamped POS system UI/UX and implemented role-based security. Authored comprehensive technical documentation to streamline future onboarding.",
    type: "work"
  },
  {
    id: 4,
    role: "BSc Computer Science (Software Engineering)",
    company: "Quest International University",
    period: "July 2023 - Dec 2025",
    description: "CGPA: 3.84 / 4.0. Focus on System Architecture and AI Integration.",
    type: "education"
  },
  {
    id: 5,
    role: "Diploma in Information Technology",
    company: "Quest International University",
    period: "Oct 2020 - April 2023",
    description: "CGPA: 3.82 / 4.0. Dean's List Awardee.",
    type: "education"
  }
];

const projects: ProjectItem[] = [
  {
    title: "Warehouse Management System",
    tech: ["React Native", "Laravel", "TypeScript", "Bluetooth HID"],
    description: "Enterprise-grade mobile app with offline-first architecture (NetInfo/AsyncStorage) and direct hardware integration for industrial scanners.",
    icon: <Smartphone size={24} />
  },
  {
    title: "Full-Stack Wesite",
    tech: ["Laravel", "Cloudflare R2", "Railway", "Billplz"],
    description: "Developed a full-stack Laravel web application with WhatsApp Bot API, Instagram integration, payment gateway and real-time communications. Deployed on Laravel Cloud with SSL/HTTPS, configured CI/CD pipeline for automated testing and deployment",
    icon: <Globe size={24} />
  },
  {
    title: "GPT-5 Customer Support Bot",
    tech: ["Node.js", "OpenAI API", "Meta Webhooks"],
    description: "Context-aware AI chatbot handling real-time customer queries via WhatsApp. Reduced manual support ticket volume by automating common responses.",
    icon: <Terminal size={24} />
  },
  {
    title: "QIU AI Gallery",
    tech: ["Flutter", "TensorFlow", "ML Kit", "Firebase"],
    description: "Smart gallery app featuring on-device machine learning for Circle-to-Search, OCR text extraction, and automated image tagging.",
    icon: <Cpu size={24} />
  },
  {
    title: "Job Market Scraper",
    tech: ["Python", "BeautifulSoup", "Discord API"],
    description: "Automated ETL pipeline extracting job data from multiple portals and delivering real-time, filtered alerts via Discord Webhooks.",
    icon: <Database size={24} />
  },
  {
    title: "Cross-Platform Booking System",
    tech: ["Flutter", "Firebase", "Cloud Functions"],
    description: "Unified appointment scheduling platform with real-time slot management, push notifications, and multi-user role support.",
    icon: <Smartphone size={24} />
  },
];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Simpler Intersection Observer alternative for active section
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter cursor-pointer group" onClick={() => scrollToSection('home')}>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all">
              AC.
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 
                  ${activeSection === item.toLowerCase() 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col space-y-2 md:hidden animate-in slide-in-from-top-5 duration-200">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for Hire
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                Building <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Digital Value</span> through Code.
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                I'm <span className="font-semibold text-slate-900">Aaron Chang</span>. A full-stack engineer who builds production-grade, offline-first systems that save costs and scale effortlessly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center group"
              >
                View Selected Work 
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </button>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 rounded-xl font-semibold transition-all shadow-sm hover:shadow-md flex items-center justify-center"
              >
                <Github className="mr-2 h-5 w-5" /> GitHub Profile
              </a>
            </div>

            <div className="flex items-center gap-6 text-slate-500 pt-4">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Stateless Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone size={18} className="text-blue-500" />
                <span className="text-sm font-medium">Mobile First</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={18} className="text-blue-500" />
                <span className="text-sm font-medium">AI Integration</span>
              </div>
            </div>
          </div>

          {/* Enhanced Code Visual */}
          <div className="hidden lg:block relative animate-in slide-in-from-right duration-700 delay-200">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20 blur-sm"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono">profile_config.json</span>
              </div>
              <div className="font-mono text-sm leading-relaxed">
                <div className="text-purple-400">const <span className="text-blue-400">engineer</span> = <span className="text-yellow-400">{`{`}</span></div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-green-400">'{personalInfo.name}'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-green-400">'Ready to Deploy 🚀'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">core_strengths:</span> <span className="text-yellow-400">[</span>
                </div>
                <div className="pl-8 text-green-400">'Full-Stack Development',</div>
                <div className="pl-8 text-green-400">'Cloud Cost Optimization',</div>
                <div className="pl-8 text-green-400">'System Architecture'</div>
                <div className="pl-4 text-yellow-400">],</div>
                <div className="pl-4">
                  <span className="text-slate-400">hard_skills:</span> <span className="text-yellow-400">{`{`}</span>
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">frontend:</span> <span className="text-green-400">['React', 'Next.js', 'Tailwind']</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">backend:</span> <span className="text-green-400">['Laravel', 'Node.js']</span>,
                </div>
                <div className="pl-8">
                  <span className="text-slate-400">mobile:</span> <span className="text-green-400">['React Native', 'Flutter']</span>
                </div>
                <div className="pl-4 text-yellow-400">{`}`}</div>
                <div className="text-yellow-400">{`};`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - More concise layout */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">More Than Just Code</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  I focus on building practical <strong className="text-blue-600">solutions</strong> that work. I believe in writing clean code and architecting systems that are both efficient and maintainable.
                </p>
                <p>
                  I've had the opportunity to work with stateless architectures on <strong>Railway</strong> and <strong>Laravel Cloud</strong>, and I've learned how object storage can help optimize costs. I'm always exploring better ways to solve problems.
                </p>
                <p>
                  I've worked on various projects ranging from maintaining legacy systems to building mobile apps for warehouse operations. I enjoy solving complex problems and learning from every project.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">5+</h3>
                <p className="font-medium text-slate-800">Projects Delivered</p>
                <p className="text-sm text-slate-500">Web & Mobile</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">20+</h3>
                <p className="font-medium text-slate-800">Critical Bugs</p>
                <p className="text-sm text-slate-500">Resolved in Production</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all">
                <h3 className="text-4xl font-bold text-blue-600 mb-2">40%</h3>
                <p className="font-medium text-slate-800">Cost Reduction</p>
                <p className="text-sm text-slate-500">via OpEx Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Clean Cards */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical Arsenal</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">My stack is chosen for performance, scalability, and developer experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", icon: <Code />, skills: skills.frontend, color: "blue" },
              { title: "Backend", icon: <Server />, skills: skills.backend, color: "green" },
              { title: "DevOps & Cloud", icon: <Globe />, skills: skills.devops, color: "orange" },
              { title: "AI & Data", icon: <Cpu />, skills: skills.ai, color: "purple" }
            ].map((category) => (
              <div key={category.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl bg-${category.color}-50 flex items-center justify-center text-${category.color}-600 mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section - Timeline Style */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">Professional Journey</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            {experience.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-0">
                {/* Timeline Line for Desktop */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>
                
                <div className={`md:flex items-center justify-between group ${item.id % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-sm transform md:-translate-x-1/2 mt-1.5 md:mt-0 z-10"></div>
                  
                  {/* Date (Desktop) */}
                  <div className={`hidden md:block w-[45%] text-right ${item.id % 2 === 0 ? 'text-left pl-8' : 'pr-8'}`}>
                    <span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">{item.period}</span>
                  </div>

                  {/* Card */}
                  <div className="md:w-[45%] bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-md">
                    <div className="md:hidden text-xs font-bold text-blue-600 uppercase mb-2">{item.period}</div>
                    <h3 className="text-lg font-bold text-slate-900">{item.role}</h3>
                    <p className="text-slate-700 font-medium mb-3">{item.company}</p>
                    <p className="text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-slate-900">Featured Projects</h2>
              <p className="text-slate-600">Real-world applications solving actual business problems.</p>
            </div>
            <a href={personalInfo.github} target="_blank" className="text-blue-600 font-medium hover:text-blue-700 flex items-center">
              View Github <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Let's Work Together</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg relative z-10">
              I'm open to new opportunities. If you think we might be a good fit, I'd love to discuss potential collaborations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" /> Send an Email
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                className="px-8 py-4 bg-blue-700 border border-blue-500 text-white rounded-xl font-bold hover:bg-blue-800 transition-all flex items-center justify-center"
              >
                <Linkedin className="mr-2 h-5 w-5" /> LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 font-bold text-xl text-slate-900">
            AC.
          </div>
          <p className="text-slate-500 text-sm mb-6">
            Built with React, Tailwind CSS, and a focus on performance.
          </p>
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Aaron Chang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;