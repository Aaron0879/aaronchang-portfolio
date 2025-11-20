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
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
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
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Data from your CV
  const personalInfo = {
    name: "Aaron Chang Kar Yoong",
    role: "Software Engineer",
    tagline: "Building scalable web & mobile solutions with modern tech stacks.",
    email: "aaronchang563@gmail.com",
    phone: "+60 17-475 1893",
    linkedin: "https://linkedin.com/in/aaron0879",
    github: "https://github.com/Aaron0879",
    location: "Ipoh, Perak, Malaysia"
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Dart", "PHP", "Python", "Java", "C/C++", "SQL"],
    frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "Bootstrap 5", "GSAP", "Flutter"],
    backend: ["Node.js", "Express.js", "Laravel", "Firebase", "MySQL"],
    tools: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Vercel"],
    ai: ["TensorFlow", "ML Kit", "OpenAI API", "OpenCV", "Computer Vision"]
  };

  const experience = [
    {
      id: 1,
      role: "Software Engineer (Intern)",
      company: "Polyware Sdn Bhd",
      period: "July 2025 - Dec 2025",
      description: "Developed a React Native warehouse app with Bluetooth scanning and ERP sync. Optimized Laravel REST APIs for high-performance inventory tracking.",
      type: "work"
    },
    {
      id: 2,
      role: "Full-Stack Developer",
      company: "Freelance",
      period: "March 2025 - Present",
      description: "Building full-stack apps using Laravel & React. Integrated WhatsApp/Instagram APIs and payment gateways. Configured CI/CD and hosting infrastructure.",
      type: "work"
    },
    {
      id: 3,
      role: "Software Engineer (Intern)",
      company: "Polyware Sdn Bhd",
      period: "Jan 2023 - April 2023",
      description: "Designed UI/UX for POS systems and implemented secure authentication logic. Collaborated on system architecture documentation.",
      type: "work"
    },
    {
      id: 4,
      role: "Bachelor of Computer Science (Software Engineering)",
      company: "Quest International University",
      period: "July 2023 - Dec 2025",
      description: "CGPA: 3.84 / 4.0. Major in Software Engineering.",
      type: "education"
    },
    {
      id: 5,
      role: "Diploma in Information Technology",
      company: "Quest International University",
      period: "Oct 2020 - April 2023",
      description: "CGPA: 3.82 / 4.0.",
      type: "education"
    }
  ];

  const projects = [

    {
      title: "Warehouse Management App",
      tech: ["React Native", "Expo SDK", "TypeScript", "Laravel"],
      description: "Real-time inventory tracking with QR code scanning and offline capabilities using NetInfo and AsyncStorage.",
      icon: <Smartphone size={20} />
    },
    {
      title: "GPT-5 Customer Service Bot",
      tech: ["OpenAI API", "Meta Webhooks", "Node.js"],
      description: "Intelligent chatbot using GPT-5 Mini with context-aware prompts and real-time response handling.",
      icon: <Terminal size={20} />
    },
    {
      title: "QIU AI Gallery App",
      tech: ["Flutter", "Firebase", "ML Kit", "TensorFlow"],
      description: "AI-powered gallery with Circle-to-Search, OCR text extraction, and real-time image analysis.",
      icon: <Cpu size={20} />
    },
    {
      title: "Job Market Scraper",
      tech: ["Python", "BeautifulSoup", "Discord Webhooks"],
      description: "Automated scraper extracting job data and sending real-time push notifications via Discord.",
      icon: <Database size={20} />
    },
    {
      title: "Full-Stack Web App",
      tech: ["Laravel", "Bootstrap 5", "GSAP", "Three.js"],
      description: "Responsive web app with 3D elements, WhatsApp integration, and automated deployment pipelines.",
      icon: <Globe size={20} />
    }   , {
      title: "POS System Development",
      tech: ["React", "Laravel", "MySQL", "Bootstrap"],
      description: "Developed a POS system with user-friendly UI/UX, secure authentication, and comprehensive system documentation.",
      icon: <Briefcase size={20} />
    },
    {
      title: "Mobile Appointment Booking System",
      tech: ["React Native", "Firebase", "Node.js"],
      description: "Built mobile application enabling users to schedule appointments efficiently. Provides flexibility to choose preferred doctor, time, and location with integrated single platform for streamlined booking.",
      icon: <Smartphone size={20} />
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans selection:bg-blue-100">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-4 shadow-md' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            AC.
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-6 flex flex-col space-y-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-gray-700 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-300 bg-blue-50 text-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Full-Stack Developer
            </div>
            <h1 className="text-5xl md:text-5xl font-bold tracking-tight text-gray-900">
              Hi, I'm <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-700">Aaron Chang</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
              {personalInfo.role}
            </h2>
            <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
              {personalInfo.tagline} Fresh graduate with a production-grade full-stack experience.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center shadow-lg shadow-blue-500/20"
              >
                View Work <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-lg font-medium transition-all flex items-center"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          {/* Abstract Code Visual */}
          <div className="hidden md:block relative">
            <div className="relative z-10 bg-white border border-gray-200 rounded-xl p-6 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs text-gray-500 font-mono">developer_profile.tsx</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex">
                  <span className="text-purple-600 mr-2">const</span>
                  <span className="text-blue-600">developer</span>
                  <span className="text-gray-600 mx-2">=</span>
                  <span className="text-gray-700">{`{`}</span>
                </div>
                <div className="pl-4 flex">
                  <span className="text-gray-600 mr-2">name:</span>
                  <span className="text-green-600">'{personalInfo.name}'</span>,
                </div>
                <div className="pl-4 flex">
                  <span className="text-gray-600 mr-2">role:</span>
                  <span className="text-green-600">'{personalInfo.role}'</span>,
                </div>
                <div className="pl-4 flex">
                  <span className="text-gray-600 mr-2">cgpa:</span>
                  <span className="text-orange-600">3.84</span>,
                </div>
                 <div className="pl-4 flex">
                  <span className="text-gray-600 mr-2">stack:</span>
                  <span className="text-gray-700">['React', 'Laravel', 'Next.js']</span>
                </div>
                <div className="text-gray-700">{`};`}</div>
                <div className="flex pt-2">
                  <span className="text-purple-600 mr-2">await</span>
                  <span className="text-blue-600">developer</span>.
                  <span className="text-yellow-600">buildFuture</span>();
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-blue-500 transform translate-x-4 translate-y-4 rounded-xl -z-10 opacity-10"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2 space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                I am a motivated <span className="text-blue-600 font-medium">Software Engineer</span> recently graduated from Quest International University with a CGPA of 3.84.
              </p>
              <p>
                My journey involves deep dives into modern web and mobile technologies. I have hands-on experience deploying production-grade applications using <span className="text-gray-900 font-medium">React, Laravel, and Flutter</span>. Whether it's optimizing database queries for warehouse systems or integrating AI models for customer service bots, I love solving complex problems.
              </p>
              <p>
                Currently seeking opportunities to contribute my technical expertise to innovative projects while continuously expanding my knowledge in emerging technologies like AI and Cloud Computing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-colors shadow-sm">
                <GraduationCap className="text-blue-600 mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <p className="text-sm text-gray-600">Bachelor of Computer Science</p>
                <p className="text-xs text-gray-500 mt-1">Quest International University</p>
                <p className="text-blue-600 font-mono text-sm mt-2">CGPA: 3.84</p>
              </div>
              <div className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 transition-colors shadow-sm">
                <Briefcase className="text-blue-600 mb-4 h-8 w-8" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experience</h3>
                <p className="text-sm text-gray-600">Multiple Internships & Freelance</p>
                <p className="text-xs text-gray-500 mt-1">Polyware Sdn Bhd & More</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technical Skill</h2>
            <p className="text-gray-600">Tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Frontend */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all group shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600 group-hover:text-blue-700 transition-colors">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-blue-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all group shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-lg text-green-600 group-hover:text-green-700 transition-colors">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-green-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all group shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-lg text-purple-600 group-hover:text-purple-700 transition-colors">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI & ML</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-purple-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
             {/* Languages */}
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-400 transition-all group shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-100 rounded-lg text-orange-600 group-hover:text-orange-700 transition-colors">
                  <Terminal size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-orange-400 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Journey So Far</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>

            {experience.map((item, index) => (
              <div key={item.id} className={`relative mb-12 md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 mt-1.5 md:mt-0"></div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-900">{item.role}</h3>
                      <span className={`text-xs px-2 py-1 rounded border ${item.type === 'education' ? 'bg-purple-100 border-purple-300 text-purple-700' : 'bg-blue-100 border-blue-300 text-blue-700'}`}>
                        {item.type === 'education' ? 'Edu' : 'Work'}
                      </span>
                    </div>
                    <h4 className="text-blue-600 font-medium mb-1">{item.company}</h4>
                    <p className="text-xs text-gray-500 font-mono mb-4">{item.period}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Featured Projects</h2>
            <p className="text-gray-600">A selection of applications I've built.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-400 transition-all duration-300 flex flex-col">
                <div className="p-6 flex-1">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-200">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-gray-100 border border-gray-300 text-gray-600">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                   {/* <button className="text-sm text-gray-900 font-medium flex items-center hover:text-blue-600 transition-colors">
                     View Details <ExternalLink className="ml-2 h-3 w-3" />
                   </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-linear-to-r from-white to-white border border-gray-200 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden shadow-sm">
            
            {/* Decorative Glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Let's Work Together</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              I am currently available for full-time opportunities. Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-10">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <Mail size={18} />
                </div>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                 <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <Phone size={18} />
                </div>
                {personalInfo.phone}
              </a>
            </div>

            <div className="flex justify-center gap-4">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-md shadow-blue-500/25 flex items-center"
              >
                <Send className="mr-2 h-4 w-4" /> Say Hello
              </a>
              <a 
                href="/Aaron-Chang-CV.pdf" 
                download="Aaron-Chang-CV.pdf"
                className="px-8 py-3 border border-gray-300 hover:border-blue-400 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-all flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aaron Chang. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href={personalInfo.github} className="text-gray-400 hover:text-gray-600 transition-colors"><Github size={20} /></a>
            <a href={personalInfo.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;