/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Mic2, 
  MessageSquare, 
  Lightbulb, 
  Users, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Menu,
  X,
  ChevronRight,
  Heart,
  Globe,
  HelpCircle,
  Zap,
  ShieldCheck
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Attend', href: '#attend' },
    { name: 'Sponsors', href: '#sponsors' },
  ];

  const APPLY_LINK = "https://forms.gle/F8HstmrN7ixbHHQB7";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black py-4' : 'bg-transparent py-6'}`}>
      <div className="max-width-container flex justify-between items-center">
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline">
            <span className="text-ted-red font-black text-2xl tracking-tighter">TED<sup className="text-xs ml-0.5">x</sup></span>
          </div>
          <div className="flex items-baseline mt-0.5">
            <span className="text-white font-light text-lg tracking-tight">Rainbow School </span>
            <span className="text-white font-bold text-lg ml-1 tracking-tight">Youth</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white hover:text-ted-red transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 py-6 px-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white text-lg font-bold uppercase tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const APPLY_LINK = "https://forms.gle/F8HstmrN7ixbHHQB7";
  
  return (
    <section className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ted-red/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-width-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-6xl md:text-8xl font-extrabold tracking-tighter mb-4">
            Ideas From Everywhere
          </h1>
          <p className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            A TEDx experience bringing together voices shaped by real experiences, bold thinking, and ideas that deserve to travel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <p className="text-ted-red font-bold text-lg tracking-widest uppercase">
              April 25, 2026 • Rainbow School, Saharanpur
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={APPLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-ted-red text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Apply to Attend
            </a>
            <a 
              href="#partner" 
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Spotlight visual */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-gradient-to-t from-ted-red/20 to-transparent blur-3xl" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-width-container grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black text-4xl md:text-5xl font-extrabold mb-8 uppercase tracking-tighter">About the Event</h2>
          <p className="text-black/70 text-lg leading-relaxed mb-6">
            TEDxRainbow School Youth brings the TEDx experience to Saharanpur for the first time.
          </p>
          <p className="text-black/70 text-lg leading-relaxed mb-8">
            This curated event features a limited audience and diverse speakers, each sharing one idea shaped by lived experience.
          </p>
          <ul className="space-y-4">
            {[
              { icon: <Zap className="text-ted-red" />, text: 'Spotlight powerful ideas' },
              { icon: <MessageSquare className="text-ted-red" />, text: 'Spark meaningful conversations' },
              { icon: <ShieldCheck className="text-ted-red" />, text: 'Inspire confidence, creativity, and leadership' },
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-4 font-bold text-lg">
                <span className="p-2 bg-ted-red/5 rounded-full">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square bg-gray-100 overflow-hidden group"
        >
          <img 
            src="https://picsum.photos/seed/tedx-stage-2/800/800" 
            alt="TEDx Stage" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ted-red/10 mix-blend-multiply" />
        </motion.div>
      </div>
    </section>
  );
};

const WhyItMatters = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-width-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-white text-sm font-bold uppercase tracking-[0.3em] mb-4">Why This Event Matters</h2>
          <h3 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
            “Most ideas are <span className="text-ted-red">never heard.</span>”
          </h3>
          <p className="text-white/60 text-xl max-w-3xl mx-auto mb-6">
            In classrooms and everyday life, people are thinking deeply but rarely given a platform.
          </p>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            This event creates space for voices, perspectives, and conversations that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Mic2 size={32} />, title: 'Voices', desc: 'Giving space to unheard perspectives' },
            { icon: <MessageSquare size={32} />, title: 'Conversations', desc: 'Encouraging meaningful dialogue' },
            { icon: <Globe size={32} />, title: 'Perspective', desc: 'Challenging how we think' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 border border-white/10 hover:border-ted-red transition-colors group"
            >
              <div className="text-ted-red mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest">{card.title}</h3>
              <p className="text-white/50">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Theme = () => {
  const items = ['Classrooms', 'Small towns', 'Questions', 'Failures', 'Conversations', 'Lived experiences'];
  
  return (
    <section className="py-24 bg-white">
      <div className="max-width-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-ted-red text-sm font-bold uppercase tracking-[0.3em] mb-4">The Theme</h2>
            <h3 className="text-black text-5xl md:text-6xl font-extrabold tracking-tighter mb-6">Ideas From Everywhere</h3>
            <p className="text-black/60 text-xl leading-relaxed">
              Great ideas are not limited by age, background, or geography. They come from classrooms, small towns, failures, and lived experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-50 border border-gray-100 flex items-center justify-between group cursor-default"
            >
              <span className="text-xl font-bold uppercase tracking-widest group-hover:text-ted-red transition-colors">{item}</span>
              <ChevronRight className="text-gray-300 group-hover:text-ted-red transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Speakers = () => {
  const speakers = [
    { name: 'Sajal Jhamb', title: 'Grassroots Leadership' },
    { name: 'Aastha Sharma', title: 'Opportunity & Access' },
    { name: 'Rajmohan Sathiyan', title: 'Education Reform' },
    { name: 'Dr. Arti Khosla', title: 'Thinking & Learning' },
    { name: 'Deepanshi Arora', title: 'Identity & Courage' },
    { name: 'Rahul Lakhanpal', title: 'Social Awareness & Responsibility' },
    { name: 'Aditya Shanker Raghuwanshi', title: 'Career Discovery' },
    { name: 'Huzaifa Hasan', title: 'Ambition & Exposure' },
  ];

  return (
    <section id="speakers" className="py-24 bg-black">
      <div className="max-width-container">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold uppercase tracking-tighter mb-4">Meet the Speakers</h2>
          <div className="w-24 h-1 bg-ted-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/tedx-speaker-${speaker.name.replace(/\s+/g, '-').toLowerCase()}/600/800`} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow">
                <h4 className="text-black text-2xl font-extrabold mb-2">{speaker.name}</h4>
                <p className="text-ted-red text-sm uppercase tracking-widest font-bold leading-tight">{speaker.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoShouldAttend = () => {
  const groups = [
    { icon: <GraduationCap />, title: 'Students', desc: 'Curious learners from Grades 6–12' },
    { icon: <Mic2 />, title: 'Educators', desc: 'Teachers and school leaders' },
    { icon: <Heart />, title: 'Parents', desc: 'Supporting next-generation thinking' },
    { icon: <HelpCircle />, title: 'Curious Individuals', desc: 'Anyone interested in ideas and growth' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-width-container">
        <h2 className="text-black text-4xl md:text-5xl font-extrabold mb-16 uppercase tracking-tighter">Who Should Attend</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {groups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-6 p-8 border border-gray-100 hover:border-ted-red transition-colors"
            >
              <div className="p-4 bg-black text-white rounded-lg shrink-0">
                {group.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">{group.title}</h4>
                <p className="text-black/60 text-lg">{group.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Apply = () => {
  const APPLY_LINK = "https://forms.gle/F8HstmrN7ixbHHQB7";

  return (
    <section id="attend" className="py-32 bg-ted-red text-white text-center">
      <div className="max-width-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter uppercase">This is a curated experience.</h2>
          <p className="text-white/90 text-xl md:text-2xl mb-12 font-light">
            Limited seats. Selected audience.
          </p>
          <a 
            href={APPLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-black text-white font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 text-lg"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-white">
      <div className="max-width-container">
        <div className="text-center mb-20">
          <h2 className="text-ted-red text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Partners</h2>
          <h3 className="text-black text-4xl md:text-6xl font-extrabold tracking-tighter">Supporting Bold Ideas</h3>
        </div>

        {/* Title Sponsor */}
        <div className="mb-24">
          <h4 className="text-center text-gray-400 uppercase tracking-widest text-sm font-bold mb-10">Title Sponsor</h4>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-12 bg-black rounded-3xl flex flex-col items-center justify-center border border-gray-100 shadow-xl group hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-full aspect-[3/1] flex items-center justify-center overflow-hidden">
              {/* Sansaar Logo Placeholder */}
              <img 
                src="https://picsum.photos/seed/sansaar-logo/800/300" 
                alt="Sansaar - A D'Decor Brand" 
                className="max-h-full w-auto grayscale invert brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-8 text-center">
              <p className="text-white/40 uppercase tracking-[0.3em] text-xs font-bold">Live Consciously</p>
            </div>
          </motion.div>
        </div>

        {/* Associate Sponsors */}
        <div>
          <h4 className="text-center text-gray-400 uppercase tracking-widest text-sm font-bold mb-10">Associate Sponsors</h4>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Evergreen', seed: 'evergreen-logo' },
              { name: 'Goyal Brothers Prakashan', seed: 'goyal-logo' }
            ].map((sponsor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100 hover:border-ted-red transition-all duration-300 group"
              >
                <img 
                  src={`https://picsum.photos/seed/${sponsor.seed}/400/150`} 
                  alt={sponsor.name} 
                  className="max-h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EventDetails = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-width-container">
        <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-12 md:p-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 uppercase tracking-widest">Event Details</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <Calendar className="text-ted-red mb-4" size={32} />
              <h4 className="text-white/50 text-sm uppercase tracking-widest mb-2">Date</h4>
              <p className="text-xl font-bold">April 25, 2026</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="text-ted-red mb-4" size={32} />
              <h4 className="text-white/50 text-sm uppercase tracking-widest mb-2">Location</h4>
              <p className="text-xl font-bold">Rainbow School, Saharanpur</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="text-ted-red mb-4" size={32} />
              <h4 className="text-white/50 text-sm uppercase tracking-widest mb-2">Audience</h4>
              <p className="text-xl font-bold">~100 Curated Attendees</p>
            </div>
            <div className="flex flex-col items-center lg:col-span-3">
              <MessageSquare className="text-ted-red mb-4" size={32} />
              <h4 className="text-white/50 text-sm uppercase tracking-widest mb-2">Format</h4>
              <p className="text-xl font-bold">Talks + Discussions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/10">
      <div className="max-width-container">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex flex-col leading-none mb-6">
              <div className="flex items-baseline">
                <span className="text-ted-red font-black text-3xl tracking-tighter">TED<sup className="text-sm ml-0.5">x</sup></span>
              </div>
              <div className="flex items-baseline mt-1">
                <span className="text-white font-light text-xl tracking-tight">Rainbow School </span>
                <span className="text-white font-bold text-xl ml-1 tracking-tight">Youth</span>
              </div>
            </div>
            <p className="text-white/50 max-w-sm mb-4">
              Saharanpur, India
            </p>
            <p className="text-white/50 max-w-sm mb-8">
              This independent TEDx event is operated under license from TED.
            </p>
            <a href="mailto:tedxrainbowschoolyouth@gmail.com" className="text-white font-bold hover:text-ted-red transition-colors">
              tedxrainbowschoolyouth@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#attend" className="hover:text-white transition-colors">Attend</a></li>
                <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest mb-6">Follow</h4>
              <ul className="space-y-4 text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-white/30 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 TEDxRainbowSchoolYouth. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Made with bold ideas in Saharanpur.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyItMatters />
        <Theme />
        <Speakers />
        <WhoShouldAttend />
        <Apply />
        <Sponsors />
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
}
