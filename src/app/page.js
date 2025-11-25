"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Award,
  Gavel,
  Users,
  Handshake,
  Layers,
  Globe2,
  BookOpen,
  Link2,
  Cpu,
  ShieldCheck,
  Eye,
  X,
} from "lucide-react";

// !!! IMPORTANT: PASTE THE URL OF THE FLYER HERE !!!
const FLYER_IMAGE = "/flyer.jpg"; // Replace with the actual link if different

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.5,
      smoothTouch: false,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0f172a] text-[#F8FAFC] selection:bg-[#ca8a04] selection:text-black">
      {/* THE WELCOME OVERLAY (FIRST THING SEEN) */}
      <WelcomeModal
        isOpen={showWelcome}
        onClose={() => setShowWelcome(false)}
      />

      <NavBar />
      <HeroSection />
      <AboutSection />
      <BentoGridAchievements />
      <VisionSection />
      <Footer />
    </main>
  );
}

// ----------------------------------------------------------------------
// NEW COMPONENT: WELCOME MODAL (EXECUTIVE INVITATION)
// ----------------------------------------------------------------------
function WelcomeModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-[#0f172a]/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              delay: 0.1,
            }}
            className="relative w-full max-w-md md:max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20"
          >
            {/* Header / Close Bar */}
            <div className="absolute top-4 right-4 z-20">
              <button
                onClick={onClose}
                className="p-2 bg-black/50 text-white rounded-full hover:bg-[#ca8a04] hover:text-black transition-colors backdrop-blur-sm"
              >
                <X size={20} />
              </button>
            </div>

            {/* The Flyer Image Container */}
            <div className="w-full bg-gray-100 flex items-center justify-center">
              {/* 
                  Using aspect-auto to respect the flyer's dimensions. 
                  Max-height ensures it fits on smaller screens.
              */}
              <img
                src={FLYER_IMAGE}
                alt="Welcome Delegate"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* The Action Area (Bottom) */}
            <div className="p-6 bg-white text-center border-t border-gray-100">
              <p className="text-[#0f172a] font-serif font-bold text-xl mb-2">
                Welcome to the Convention
              </p>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
                A Message from Udemmadu Cornelius
              </p>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0f172a] text-white font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-[#ca8a04] hover:text-[#0f172a] transition-all flex items-center justify-center gap-2"
              >
                Join the Movement <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------------------------
// REST OF THE SITE (UNCHANGED)
// ----------------------------------------------------------------------

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-5 z-50 flex justify-between items-center backdrop-blur-md bg-[#0f172a]/70 border-b border-white/10">
      <div className="text-lg font-bold tracking-tighter uppercase font-serif text-white">
        U.C.E.
      </div>
      <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-300">
        <a href="#about" className="hover:text-[#ca8a04] transition-colors">
          The Man
        </a>
        <a
          href="#track-record"
          className="hover:text-[#ca8a04] transition-colors"
        >
          The Record
        </a>
        <a href="#vision" className="hover:text-[#ca8a04] transition-colors">
          The Plan
        </a>
      </div>
      <a
        href="https://chat.whatsapp.com/F0BGbIACZtr4T1cfjAkuaW"
        className="px-5 py-2 bg-[#ca8a04] text-[#0f172a] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
      >
        Join The Movement
      </a>
    </nav>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#ca8a04]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-[#ca8a04]"></span>
            <span className="text-[#ca8a04] font-mono text-xs uppercase tracking-widest">
              Vote for Competence
            </span>
          </div>

          <h1 className="font-serif text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-white">
            Udemmadu <br />
            <span className="text-gray-400 italic font-light">
              Cornelius
            </span>{" "}
            <br />
            Ezechukwu.
          </h1>

          <p className="text-lg text-gray-300 max-w-lg leading-relaxed mb-10 border-l-2 border-gray-700 pl-6">
            Aspirant for{" "}
            <strong>Vice President (External), National LAWSA</strong>. <br />
            Bridging the gap between promise and performance for the Nigerian
            Law Student.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Gavel size={14} className="text-[#ca8a04]" /> Law
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Users size={14} className="text-[#ca8a04]" /> Leadership
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Award size={14} className="text-[#ca8a04]" /> Innovation
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y }}
          className="md:col-span-5 relative"
        >
          <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[#ca8a04] rounded-lg opacity-50" />

          <div className="relative h-[500px] w-full bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://i.imgur.com/81wjAPS.jpeg"
              alt="Udemmadu Cornelius"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-white font-serif text-2xl">
                The People's Choice
              </p>
              <p className="text-[#ca8a04] text-xs uppercase tracking-widest">
                COOU Chapter
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-white text-[#0f172a]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-serif text-5xl mb-8 leading-tight">
            "We do not need more politicians. We need{" "}
            <span className="text-[#ca8a04] italic">Solutionists.</span>"
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              My name is Udemmadu Cornelius Ezechukwu. I am a Law Student at
              Chukwuemeka Odumegwu Ojukwu University, and I believe in the power
              of the law to transform lives.
            </p>
            <p>
              Running for Vice President of National LAWSA isn't a career move
              for me, it's a service mandate. I have spent my years building
              foundations, winning debates, and serving students. Now, I want to
              take that experience to the national stage.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="font-bold font-serif text-xl">Cornelius Ezechukwu</p>
            <p className="text-sm text-gray-500 uppercase tracking-widest">
              The Candidate
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="bg-[#f1f5f9] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-48">
            <span className="text-4xl font-bold text-[#0f172a] mb-2">4+</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">
              Years Service
            </span>
          </div>
          <div className="bg-[#0f172a] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-48 text-white">
            <span className="text-4xl font-bold text-[#ca8a04] mb-2">5+</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Major Awards
            </span>
          </div>
          <div className="bg-[#ca8a04] p-8 rounded-2xl flex flex-col items-center justify-center text-center h-48 col-span-2">
            <span className="text-2xl font-serif font-bold text-[#0f172a] mb-2">
              The Valiants
            </span>
            <span className="text-xs uppercase tracking-widest text-[#0f172a]/70">
              Founder & Lead
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoGridAchievements() {
  return (
    <section id="track-record" className="py-20 md:py-32 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[#ca8a04] font-mono text-xs uppercase tracking-widest border border-[#ca8a04]/30 px-4 py-2 rounded-full">
            The Precedents
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-6">
            Evidence of Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-auto">
          <div className="md:col-span-7 relative h-64 md:h-96 rounded-3xl overflow-hidden group">
            <img
              src="https://i.imgur.com/8LOjS7S.jpeg"
              alt="Oratory Winner"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <span className="bg-[#ca8a04] text-[#0f172a] text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Winner
              </span>
              <h3 className="text-2xl md:text-4xl font-serif text-white mt-2">
                Oratory Symposium 3.0
              </h3>
              <p className="text-gray-300 text-xs md:text-sm mt-1">
                Southeast Edition Champion
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-[#ca8a04] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <div className="flex items-center gap-2 mb-4">
                <Gavel className="text-[#0f172a]" size={20} />
                <span className="text-[#0f172a] font-bold uppercase tracking-widest text-xs">
                  Foundation
                </span>
              </div>
              <h3 className="text-3xl font-serif text-[#0f172a] leading-none mb-4">
                The VALIANTS
              </h3>
              <p className="text-[#0f172a]/80 text-sm font-medium leading-relaxed">
                Founder of a dedicated legal team advocating for students'
                rights on campus.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 z-10">
              <div className="w-12 h-12 rounded-full bg-[#0f172a] overflow-hidden border-2 border-white/20">
                <img
                  src="https://i.imgur.com/yU5EGnp.jpeg"
                  className="w-full h-full object-cover"
                  alt="Valiants"
                />
              </div>
              <span className="text-xs font-bold text-[#0f172a] uppercase">
                Legal Advocacy Team
              </span>
            </div>
            <Users className="absolute -bottom-4 -right-4 text-[#0f172a]/10 w-32 h-32 rotate-12" />
          </div>

          <div className="md:col-span-4 bg-[#1e293b] rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[#ca8a04]" size={24} />
              <h3 className="text-xl font-serif text-white">Hall of Fame</h3>
            </div>
            <ul className="space-y-4">
              <AwardItem
                title="Overall Best Student"
                subtitle="Awkuzu Hometown (2019)"
              />
              <AwardItem
                title="Most Innovative Student"
                subtitle="COOU Law Faculty"
              />
              <AwardItem
                title="Most Innovative Student"
                subtitle="Southeast Zone"
              />
              <AwardItem title="Rising Star" subtitle="Southeast Zone" />
              <AwardItem title="Best Team Leader" subtitle="Cooulawsa027" />
            </ul>
          </div>

          <div className="md:col-span-8 bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
            <div className="flex-1 z-10">
              <span className="text-[#ca8a04] font-bold uppercase tracking-widest text-xs mb-2 block">
                Major Project
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0f172a] mb-4">
                Bridging the Bar
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Chief Host of a 7-day legal education initiative. Collaborated
                with PROs from UNIZIK, UNN, and ESUT to deliver trivia, hot
                seats, and case law sessions.
              </p>
              <div className="bg-[#f1f5f9] p-4 rounded-xl border-l-4 border-[#ca8a04]">
                <p className="text-xs font-bold text-[#0f172a] uppercase mb-1">
                  The Impact
                </p>
                <p className="text-gray-600 text-xs">
                  Concluded with a massive webinar on "Networking
                  Opportunities," creating a vibrant platform for professional
                  growth.
                </p>
              </div>
            </div>

            <div className="w-full md:w-64 bg-[#f8fafc] rounded-2xl p-6 border border-gray-200 z-10">
              <h4 className="text-[#0f172a] font-bold text-sm mb-4 uppercase">
                Other Events
              </h4>
              <ul className="space-y-3">
                <li className="text-xs text-gray-600 flex gap-2">
                  <span className="text-[#ca8a04]">•</span> Library Orientation
                </li>
                <li className="text-xs text-gray-600 flex gap-2">
                  <span className="text-[#ca8a04]">•</span> Career Development
                  (School Visitations)
                </li>
              </ul>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ca8a04]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
              {" "}
            </div>
          </div>

          <div className="md:col-span-12 bg-[#1e293b] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6 border border-white/5">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif text-white mb-2">
                Conferences & Engagements
              </h3>
              <p className="text-gray-400 text-sm">
                Representation across the legal landscape
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <ConferenceTag text="LIFIN 10th Anniversary" />
              <ConferenceTag text="Southeast LAWSAN Convention" />
              <ConferenceTag text="Intl. Interdisciplinary Conf. 2024" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardItem({ title, subtitle }) {
  return (
    <li className="flex flex-col pb-3 border-b border-white/5 last:border-0">
      <span className="text-gray-200 font-medium text-sm">{title}</span>
      <span className="text-gray-500 text-xs uppercase tracking-wider">
        {subtitle}
      </span>
    </li>
  );
}

function ConferenceTag({ text }) {
  return (
    <span className="px-4 py-2 rounded-full bg-[#0f172a] border border-[#ca8a04]/30 text-gray-300 text-xs font-medium hover:border-[#ca8a04] transition-colors cursor-default">
      {text}
    </span>
  );
}

function VisionSection() {
  const visions = [
    {
      icon: <Handshake className="text-[#ca8a04]" size={32} />,
      title: "Strong National Partnerships",
      desc: "Unlock internships, mentorships, scholarships and career opportunities for LAWSANites nationwide.",
    },
    {
      icon: <Layers className="text-[#ca8a04]" size={32} />,
      title: "Bridging the Bar 2.0 (National Edition)",
      desc: "A bigger, better, and nationwide mentorship system connecting top lawyers with students.",
    },
    {
      icon: <Globe2 className="text-[#ca8a04]" size={32} />,
      title: "International Exposure for LAWSAN",
      desc: "Open access to AU, UN, and global youth legal platforms for national representation.",
    },
    {
      icon: <BookOpen className="text-[#ca8a04]" size={32} />,
      title: "Legal Education Support Program",
      desc: "Nationwide webinars, moot court training, and academic support for every law student.",
    },
    {
      icon: <Link2 className="text-[#ca8a04]" size={32} />,
      title: "Campus–National Linkage Reform",
      desc: "Equal updates, equal opportunities, ensuring no faculty or campus is left behind.",
    },
    {
      icon: <Cpu className="text-[#ca8a04]" size={32} />,
      title: "Digital Visibility Upgrade",
      desc: "Modern, active, and fast external communication delivering real-time opportunities.",
    },
    {
      icon: <ShieldCheck className="text-[#ca8a04]" size={32} />,
      title: "The Student Support Agency (TSA)",
      desc: "A national support system providing recommendations, guidance, and welfare access.",
    },
    {
      icon: <Eye className="text-[#ca8a04]" size={32} />,
      title: "Transparent External Engagement",
      desc: "Clear, inclusive, and accountable national external operations.",
    },
  ];

  return (
    <section id="vision" className="py-32 px-6 bg-white text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-8">
          <h2 className="text-5xl font-serif">The Vision 2026</h2>
          <p className="max-w-md text-gray-600 mt-4 md:mt-0">
            A mandate not of promises, but of actionable plans. My roadmap for
            the National LAWSA Vice Presidency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visions.map((v, i) => (
            <VisionCard key={i} icon={v.icon} title={v.title} desc={v.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionCard({ icon, title, desc }) {
  return (
    <div className="bg-[#f8fafc] p-10 rounded-2xl hover:bg-[#0f172a] hover:text-white transition-colors duration-500 group border border-gray-100 hover:border-[#0f172a]">
      <div className="mb-6 p-4 bg-white rounded-full w-fit shadow-sm group-hover:bg-white/10">
        {icon}
      </div>
      <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed group-hover:text-gray-300">
        {desc}
      </p>
    </div>
  );
}

function Footer() {
  const socialLinks = [
    {
      href: "#",
      label: "X (formerly Twitter) — konelius1",
      icon: <Twitter size={18} />,
    },
    {
      href: "https://www.linkedin.com/in/konelius-udemmadu-27839838a",
      label: "LinkedIn — Konelius Udemmadu",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://www.instagram.com/konelius1",
      label: "Instagram — @konelius1",
      icon: <Instagram size={18} />,
    },
    {
      href: "mailto:corneliusezechukwu@gmail.com",
      label: "Email — corneliusezechukwu@gmail.com",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#020617] text-gray-400 py-20 px-6 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl text-white font-serif font-bold mb-2">
            Udemmadu Cornelius Ezechukwu
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#ca8a04]">
            Vice President (External) Aspirant • National LAWSA
          </p>
        </div>

        <nav aria-label="Social links" className="flex gap-4">
          {socialLinks.map((s) => (
            <SocialBtn
              key={s.href}
              href={s.href}
              label={s.label}
              icon={s.icon}
            />
          ))}
        </nav>

        <p className="text-[10px] uppercase tracking-widest opacity-50">
          © 2025 U.C.E. Campaign
        </p>
      </div>
    </footer>
  );
}

function SocialBtn({ href = "#", label, icon }) {
  const isMailTo = href?.startsWith?.("mailto:");

  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      target={isMailTo ? undefined : "_blank"}
      rel={isMailTo ? undefined : "noopener noreferrer"}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ca8a04] hover:text-[#0f172a] transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ca8a04]"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );
}
