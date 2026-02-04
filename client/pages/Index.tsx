import { Mail, Github, Linkedin, Code2, Brain, Users, Clock, ExternalLink, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="section-container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">PIYUSH</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-foreground/60 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-container py-20 md:py-32 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground mb-4" style={{ fontFamily: '"Itim", sans-serif' }}>
                Hi, I'm PIYUSH
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-2">
                First-Year Computer Science Student
              </p>
              <p className="text-lg text-foreground/60">
                Aspiring Software Developer | Passionate About Problem Solving
              </p>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed max-w-lg">
              I'm a first-year CS student with a passion for building elegant solutions to complex problems. Currently learning the fundamentals of computer science while exploring full-stack development.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="smooth-button px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="smooth-button px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-64 h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary/30">
                  <Code2 size={120} strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-secondary/30">
        <div className="section-container animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto border border-border rounded-lg p-6 italic font-semibold text-center opacity-91">
            <p className="text-foreground/80 text-xl leading-relaxed mb-6">
              I'm a dedicated first-year Computer Science student with a genuine curiosity about how technology works. My journey in computer science has just begun, and I'm excited to explore the vast possibilities this field offers.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              I believe in the power of continuous learning and growth. Every project I work on teaches me something new, and I'm always eager to tackle challenges that push me outside my comfort zone. I'm particularly interested in full-stack development and love the process of taking an idea from concept to working application.
            </p>
            <p className="text-foreground/80 text-xl leading-relaxed">
              Beyond coding, I value collaboration and clear communication. I enjoy working in teams, sharing knowledge, and learning from others. My goal is to become a well-rounded software developer who can build meaningful applications that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-28">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Brain className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-primary font-semibold mb-2">
                    NEWTON SCHOOL OF TECHNOLOGY
                  </p>
                  <p className="text-foreground/60 mb-3">2024 – 2028 (1st Year)</p>
                  <p className="text-foreground/70 leading-relaxed font-semibold italic underline">
                    Currently pursuing a comprehensive Computer Science degree with focus on core fundamentals, algorithms, data structures, and web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-28 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Python", "C", "HTML", "CSS", "JavaScript", "Git", "DSA"].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-primary" size={28} />
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem Solving",
                  "Communication",
                  "Teamwork",
                  "Time Management",
                  "Adaptability",
                  "Leadership",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-28">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm card-hover group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors flex items-center justify-center">
                <Code2 className="text-primary/40 group-hover:text-primary/60 transition-colors" size={60} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Todo Application</h3>
                <p className="text-foreground/70 mb-4">
                  A full-featured todo app with add, delete, and complete functionality. Built with React and localStorage for data persistence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm card-hover group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors flex items-center justify-center">
                <Code2 className="text-primary/40 group-hover:text-primary/60 transition-colors" size={60} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Calculator App</h3>
                <p className="text-foreground/70 mb-4">
                  A responsive calculator with basic arithmetic operations. Clean UI with real-time display of calculations and error handling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    JavaScript
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm card-hover group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors flex items-center justify-center">
                <Code2 className="text-primary/40 group-hover:text-primary/60 transition-colors" size={60} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-foreground/70 mb-4">
                  Personal portfolio to showcase projects and skills. Responsive design with smooth animations and modern UI components.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    React
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    Responsive
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm card-hover group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10 transition-colors flex items-center justify-center">
                <Code2 className="text-primary/40 group-hover:text-primary/60 transition-colors" size={60} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Weather Dashboard</h3>
                <p className="text-foreground/70 mb-4">
                  Real-time weather information app using a public API. Features location search, current weather, and 5-day forecast display.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    API
                  </span>
                  <span className="px-3 py-1 bg-secondary text-foreground/70 rounded-full text-xs font-medium">
                    HTML/CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <a
                href="mailto:piyushanand819@gmail.com"
                target="_blank"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-foreground/60 text-sm">piyushanand819@gmail.com</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Linkedin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">LinkedIn</h3>
                    <p className="text-foreground/60 text-sm">in/yourprofile</p>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/piyushanand1432/desktop-tutorial"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Github className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">GitHub</h3>
                    <p className="text-foreground/60 text-sm">https://github.com/piyushanand1432/desktop-tutorial</p>
                  </div>
                </div>
              </a>

              {/* Message */}
              <a
                href="https://wa.me/917619976836"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">WhatsApp</h3>
                    <p className="text-foreground/60 text-sm">+91 76199 76836</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center">
              <a
                href="mailto:piyushanand819@gmail.com"
                className="smooth-button inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg"
              >
                Send me an Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="section-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">PIYUSH</div>
              <p className="text-foreground/60 text-sm">
                First-Year CS Student | Aspiring Software Developer
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Todo App
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Weather App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:student@email.com"
                  className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-foreground/60 text-sm">
            <p>&copy; 2024 PIYUSH. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
