"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Mic,
} from "lucide-react";

// --- THE NEW VIBE: PRESIDENTIAL MODERN ---
// Colors: Deep Navy, Paper Cream, Gold Accents

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);
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
// 1. NAVBAR (Glassmorphism)
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
        href="#contact"
        className="px-5 py-2 bg-[#ca8a04] text-[#0f172a] text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm"
      >
        Join The Movement
      </a>
    </nav>
  );
}

// ----------------------------------------------------------------------
// 2. HERO SECTION (Bold, Image-Centric, High Energy)
// ----------------------------------------------------------------------
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
      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-[#ca8a04]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* LEFT: TEXT */}
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
            Aspirant for <strong>Vice President, National LAWSA</strong>. <br />
            Bridging the gap between promise and performance for the Nigerian
            Law Student.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Gavel size={14} className="text-[#ca8a04]" /> Advocacy
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Users size={14} className="text-[#ca8a04]" /> Welfare
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 uppercase tracking-wider">
              <Award size={14} className="text-[#ca8a04]" /> Excellence
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE IMAGE (Card Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y }}
          className="md:col-span-5 relative"
        >
          {/* DECORATIVE FRAME */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[#ca8a04] rounded-lg opacity-50" />

          <div className="relative h-[500px] w-full bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* PLACEHOLDER IMAGE - REPLACE THIS URL */}
            <img
              src="https://i.imgur.com/lULt9DZ.jpeg"
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

// ----------------------------------------------------------------------
// 3. ABOUT SECTION (High Contrast)
// ----------------------------------------------------------------------
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
              for me—it's a service mandate. I have spent my years at COOU
              building foundations, winning debates, and serving students. Now,
              I want to take that experience to the national stage.
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
            <span className="text-4xl font-bold text-[#0f172a] mb-2">3+</span>
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

// ----------------------------------------------------------------------
// 4. BENTO GRID ACHIEVEMENTS (The "Cool" Section)
// ----------------------------------------------------------------------
function BentoGridAchievements() {
  return (
    <section id="track-record" className="py-32 px-6 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#ca8a04] font-mono text-xs uppercase tracking-widest border border-[#ca8a04]/30 px-3 py-1 rounded-full">
            The Precedents
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">
            Track Record of Excellence
          </h2>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-auto md:h-[1000px]">
          {/* ITEM 1: LARGE HERO (Oratory) */}
          <BentoCard
            className="md:col-span-2 md:row-span-2"
            title="Oratory Symposium 3.0 Winner"
            category="Public Speaking"
            image="https://i.imgur.com/8LOjS7S.jpeg" // Replace
          />

          {/* ITEM 2: TALL (Awards) */}
          <div className="md:col-span-1 md:row-span-2 bg-[#1e293b] rounded-3xl p-8 flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Award size={100} />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              Honors
            </span>
            <h3 className="text-3xl font-serif text-white mb-6">
              Hall of Fame
            </h3>
            <ul className="space-y-4 text-gray-300 text-sm flex-1">
              <li className="border-b border-white/10 pb-2">
                🏆 Overall Best Student (Awkuzu 2019)
              </li>
              <li className="border-b border-white/10 pb-2">
                ⚡ Most Innovative Law Student (Regional)
              </li>
              <li className="border-b border-white/10 pb-2">
                🌟 Rising Star of Southeast
              </li>
              <li className="border-b border-white/10 pb-2">
                🎖 Best Team Leader (Cooulawsa027)
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[#ca8a04] text-xs uppercase">
                Consistent Excellence
              </p>
            </div>
          </div>

          {/* ITEM 3: WIDE (The Valiants) */}
          <div className="md:col-span-2 md:row-span-1 bg-[#ca8a04] rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="flex-1 z-10">
              <span className="text-xs font-bold text-[#0f172a]/60 uppercase tracking-widest mb-2 block">
                Foundations
              </span>
              <h3 className="text-3xl font-serif text-[#0f172a] mb-2">
                Founder of The VALIANTS
              </h3>
              <p className="text-[#0f172a]/80 text-sm font-medium max-w-md">
                A dedicated legal team advocating for students' rights on
                campus. Bridging the gap between management and student welfare.
              </p>
            </div>
            {/* Circle Image */}
            <div className="w-32 h-32 rounded-full bg-[#0f172a] border-4 border-white/20 overflow-hidden shrink-0 z-10">
              <img
                src="https://i.imgur.com/yU5EGnp.jpeg"
                className="w-full h-full object-cover"
                alt="Valiants"
              />
            </div>
            {/* Decorative Background Pattern */}
            <Gavel
              className="absolute -right-10 -bottom-10 text-[#0f172a]/10 rotate-12"
              size={200}
            />
          </div>

          {/* ITEM 4: STANDARD (Conferences) */}
          <BentoCard
            className="md:col-span-1 md:row-span-1"
            title="LIFIN 10th Anniversary"
            category="Conference"
            image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800"
          />
        </div>
      </div>
    </section>
  );
}

// Helper for Grid Cards
function BentoCard({ className, title, category, image }) {
  return (
    <motion.div
      whileHover={{ scale: 0.98 }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-90" />
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 p-8 z-20">
        <span className="px-3 py-1 bg-[#ca8a04] text-[#0f172a] text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight group-hover:text-[#ca8a04] transition-colors">
          {title}
        </h3>
      </div>

      {/* Hover Arrow */}
      <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 p-2 rounded-full backdrop-blur-sm text-white">
        <ArrowRight size={20} className="-rotate-45" />
      </div>
    </motion.div>
  );
}

// ----------------------------------------------------------------------
// 5. VISION SECTION (Clean & Direct)
// ----------------------------------------------------------------------
function VisionSection() {
  return (
    <section id="vision" className="py-32 px-6 bg-white text-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-200 pb-8">
          <h2 className="text-5xl font-serif">The Vision 2025</h2>
          <p className="max-w-md text-gray-600 mt-4 md:mt-0">
            A mandate not of promises, but of actionable plans. My roadmap for
            the National LAWSA Vice Presidency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VisionCard
            icon={<Mic className="text-[#ca8a04]" size={32} />}
            title="Capacity Beyond Class"
            desc="Launching the 'National Moot & Mock Trial League' to sharpen advocacy skills before graduation."
          />
          <VisionCard
            icon={<Users className="text-[#ca8a04]" size={32} />}
            title="Inclusive Welfare"
            desc="Implementing a 'Student Legal Aid' fund and a direct feedback loop to address victimization."
          />
          <VisionCard
            icon={<Award className="text-[#ca8a04]" size={32} />}
            title="Academic Renaissance"
            desc="Digitization of LAWSA libraries nationwide and securing virtual internships with major firms."
          />
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

// ----------------------------------------------------------------------
// 6. FOOTER
// ----------------------------------------------------------------------
function Footer() {
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
            Vice President Aspirant • National LAWSA
          </p>
        </div>

        <div className="flex gap-6">
          <SocialBtn icon={<Twitter size={18} />} />
          <SocialBtn icon={<Linkedin size={18} />} />
          <SocialBtn icon={<Instagram size={18} />} />
          <SocialBtn icon={<Mail size={18} />} />
        </div>

        <p className="text-[10px] uppercase tracking-widest opacity-50">
          © 2025 U.C.E. Campaign Organization
        </p>
      </div>
    </footer>
  );
}

function SocialBtn({ icon }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ca8a04] hover:text-[#0f172a] transition-all"
    >
      {icon}
    </a>
  );
}
