"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";
import {
  ArrowDown,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  X,
  Camera,
  ArrowRight,
} from "lucide-react";

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
    <main className="w-full min-h-screen bg-[#F4F4F0] text-[#111111]">
      <NavBar />
      <HeroSection />
      <TheBrief />
      <Precedents onItemClick={setSelectedItem} />
      <VisionSection />
      <Footer />
      <CaseFileDrawer
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </main>
  );
}

// NAVBAR -------------------------------------------------------
function NavBar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 mix-blend-difference text-[#F4F4F0]"
    >
      <div className="text-sm font-bold tracking-widest uppercase font-sans">
        U.C.E.
      </div>
      <div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest">
        <a href="#about" className="hover:opacity-50 transition-opacity">
          The Brief
        </a>
        <a href="#achievements" className="hover:opacity-50 transition-opacity">
          Precedents
        </a>
        <a href="#vision" className="hover:opacity-50 transition-opacity">
          Vision
        </a>
      </div>
      <div className="md:hidden text-xs font-bold uppercase">Menu</div>
    </motion.nav>
  );
}

// HERO SECTION (NOW WITH IMAGE SLOT) ---------------------------
// HERO SECTION (Fixed: Split Editorial Layout) -----------------
function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen pt-32 md:pt-0 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden"
    >
      {/* LEFT: TEXT CONTENT */}
      <motion.div
        style={{ y: textY }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 flex flex-col items-center md:items-start"
        >
          <div className="h-[1px] w-12 bg-[#666] mb-4"></div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-[#666]">
            Law Student • COOU • Anambra
          </p>
        </motion.div>

        <h1 className="font-serif text-[15vw] md:text-[7vw] leading-[0.9] tracking-tighter text-[#111] mb-8">
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Udemmadu
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block italic font-light text-[#555]"
            >
              Cornelius
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Ezechukwu
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-md"
        >
          <p className="text-sm md:text-lg font-sans text-[#333] leading-relaxed">
            Aspirant for the Office of the Vice President
            <br />
            <span className="font-semibold border-b border-[#111] pb-1">
              National LAWSA
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* RIGHT: IMAGE FRAME */}
      <motion.div
        style={{ y: imageY }}
        className="flex-1 w-full md:w-auto flex justify-center md:justify-end relative z-0 mb-12 md:mb-0"
      >
        {/* Image Container: Constrains size so it never looks 'messed up' */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-[80vw] md:w-[30vw] h-[50vh] md:h-[70vh] bg-[#e0e0e0] overflow-hidden rounded-sm shadow-2xl"
        >
          {/* THE IMAGE */}
          <img
            src="https://i.imgur.com/lULt9DZ.jpeg"
            alt="Udemmadu Cornelius"
            className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-1000 ease-out"
          />

          {/* Overlay Gradient for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

          {/* Decorative border */}
          <div className="absolute inset-4 border border-white/30 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 flex items-center gap-3"
      >
        <ArrowDown size={16} className="opacity-50 animate-bounce" />
        <span className="text-[10px] uppercase tracking-widest opacity-50">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}

// THE BRIEF ----------------------------------------------------
function TheBrief() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 border-b border-[#d4d4d0] relative z-20 bg-[#F4F4F0]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">The Brief</h2>
            <div className="h-[1px] w-12 bg-[#111] mb-6"></div>
            <p className="text-xs font-sans tracking-widest uppercase text-[#666]">
              Statement of Purpose
            </p>
          </div>
        </div>
        <div className="md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-4xl font-serif leading-tight mb-10">
              "Leadership isn't about the noise. It's about the nuance.
              <span className="text-[#888] italic">
                {" "}
                It is the quiet dedication to the welfare of the Nigerian Law
                Student."
              </span>
            </h3>
            <div className="space-y-8 font-sans text-sm md:text-base text-[#333] leading-relaxed max-w-xl">
              <p>
                Hailing from Chukwuemeka Odumegwu Ojukwu University, I have
                learned that the law is a tool for social engineering...
              </p>
              <p>
                True representation requires a balance of diplomacy and
                action...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// PRECEDENTS (CLEAN LIST VERSION) ------------------------------
function Precedents({ onItemClick }) {
  return (
    <section
      id="achievements"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#EAEAE6] relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-[#ccc] pb-6">
          <h2 className="font-serif text-4xl md:text-6xl">The Precedents</h2>
          <p className="mt-4 md:mt-0 text-xs font-sans tracking-widest uppercase text-[#666]">
            Evidence of Excellence
          </p>
        </div>

        {/* Categories */}
        <CategoryBlock
          title="Honors & Recognition"
          data={AWARDS_DATA}
          onClick={onItemClick}
        />
        <CategoryBlock
          title="Leadership & Impact"
          data={FOUNDATION_DATA}
          onClick={onItemClick}
        />
        <CategoryBlock
          title="Engagements"
          data={CONFERENCE_DATA}
          onClick={onItemClick}
        />
      </div>
    </section>
  );
}

function CategoryBlock({ title, data, onClick }) {
  return (
    <div className="mb-20">
      <h3 className="font-sans text-xs tracking-widest uppercase mb-8 opacity-50">
        {title}
      </h3>
      <div className="flex flex-col">
        {data.map((item, index) => (
          <AchievementItem
            key={index}
            item={item}
            index={index}
            onClick={() => onClick(item)}
          />
        ))}
      </div>
    </div>
  );
}

function AchievementItem({ item, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative border-b border-[#ccc] py-8 md:py-10 cursor-pointer hover:bg-[#dededb] transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-baseline justify-between">
        <div className="flex flex-col md:flex-row md:gap-12 w-full items-baseline">
          <span className="text-xs font-mono text-[#888] w-32 shrink-0 uppercase tracking-wider">
            {item.tag}
          </span>
          <h3 className="text-xl md:text-3xl font-serif group-hover:translate-x-2 transition-transform duration-300">
            {item.title}
          </h3>
        </div>

        {/* Subtle "View" Button */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-[10px] uppercase tracking-widest">
            View File
          </span>
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}

// THE DRAWER (MODAL FOR IMAGES) --------------------------------
function CaseFileDrawer({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Slide-out Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full md:w-[600px] h-full bg-[#F4F4F0] z-[70] overflow-y-auto shadow-2xl"
          >
            <div className="p-8 md:p-12 min-h-full flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-start mb-12">
                <div className="text-xs font-mono text-[#888] uppercase tracking-widest border border-[#ccc] px-3 py-1 rounded-full">
                  Exhibit: {item.tag}
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Title & Desc */}
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                {item.title}
              </h2>
              <p className="font-sans text-[#444] leading-relaxed mb-12 border-l-2 border-[#111] pl-4">
                {item.description}
              </p>

              {/* THE GALLERY GRID */}
              {item.images && item.images.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {item.images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img
                        src={img}
                        alt={`${item.title} evidence ${idx + 1}`}
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-40 flex flex-col items-center justify-center border border-dashed border-gray-400 rounded text-gray-400 bg-gray-50">
                  <Camera size={24} className="mb-2 opacity-50" />
                  <span className="text-xs uppercase tracking-widest">
                    No Visual Evidence on File
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// VISION SECTION -----------------------------------------------
function VisionSection() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 px-6 md:px-12 bg-[#111] text-[#F4F4F0] relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-[#333] pb-8">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl mb-2">The Vision</h2>
            <p className="text-[#888] font-sans text-sm max-w-md leading-relaxed">
              "A mandate not of promises, but of actionable plans."
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <p className="text-xs font-sans tracking-widest uppercase text-[#666]">
              Agenda 2025
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VISION_DATA.map((item, index) => (
            <VisionCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col justify-between h-full border-t border-[#333] pt-8 hover:border-[#F4F4F0] transition-colors duration-500 group"
    >
      <div>
        <span className="text-xs font-mono text-[#555] mb-6 block">
          0{index + 1}
        </span>
        <h3 className="text-2xl font-serif mb-4 group-hover:translate-x-2 transition-transform duration-300">
          {item.title}
        </h3>
        <p className="text-[#999] text-sm leading-relaxed group-hover:text-[#ccc] transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

// FOOTER -------------------------------------------------------
function Footer() {
  return (
    <footer className="bg-[#111] text-[#F4F4F0] px-6 md:px-12 py-12 border-t border-[#222] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-serif text-2xl">Udemmadu Cornelius Ezechukwu</h4>
          <p className="text-xs text-[#666] uppercase tracking-widest mt-2">
            Vice President Aspirant • National LAWSA
          </p>
        </div>
        <div className="flex gap-8">
          <SocialLink href="#" icon={<Twitter size={20} />} />
          <SocialLink href="#" icon={<Linkedin size={20} />} />
          <SocialLink href="#" icon={<Instagram size={20} />} />
          <SocialLink
            href="mailto:example@email.com"
            icon={<Mail size={20} />}
          />
        </div>
        <div className="text-[10px] text-[#444] uppercase tracking-widest">
          © 2025 U.C.E. Campaign
        </div>
      </div>
    </footer>
  );
}
function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="text-[#888] hover:text-white transition-colors duration-300 hover:scale-110 transform"
    >
      {icon}
    </a>
  );
}

// DATA ARRAYS (NOW WITH MULTIPLE IMAGES SUPPORT) ---------------
// Change 'images' to contain an ARRAY of strings ["url1", "url2"]

const AWARDS_DATA = [
  {
    tag: "Symposium",
    title: "Winner, Oratory Symposium 3.0",
    description:
      "Champion of the Southeast Edition. Demonstrated exceptional argumentative rigor and public speaking prowess among top regional contenders.",
    images: [
      "https://i.imgur.com/8LOjS7S.jpeg",
      "https://i.imgur.com/YShbGw9.jpeg", // Add more images here
    ],
  },
  {
    tag: "Academic",
    title: "Overall Best Student",
    description:
      "Awarded in Awkuzu (Hometown), 2019. Recognized for consistent academic excellence.",
    images: [], // Empty array if no images
  },
  {
    tag: "Innovation",
    title: "Most Innovative Law Student",
    description:
      "A triple-crown recognition: Awarded 'Most Innovative' at the Faculty level, Chapter level, and Regional level.",
    images: ["https://i.imgur.com/YShbGw9.jpeg"],
  },
];

const FOUNDATION_DATA = [
  {
    tag: "Founder",
    title: "The VALIANTS",
    description:
      "Founder of a dedicated legal team advocating for students' rights on campus.",
    images: ["https://i.imgur.com/yU5EGnp.jpeg"],
  },
  {
    tag: "Leadership",
    title: "Best Team Leader",
    description:
      "Cooulawsa027. Recognized for ability to mobilize teams and manage conflicts.",
    images: [],
  },
];

const CONFERENCE_DATA = [
  {
    tag: "Conference",
    title: "LIFIN 10th Anniversary",
    description:
      "Active participant and contributor to the Legal Ideas Forum International.",
    images: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

const VISION_DATA = [
  {
    title: "Academic Renaissance",
    description:
      "Advocating for the digitization of LAWSA libraries nationwide and securing partnerships with major law firms.",
  },
  {
    title: "Inclusive Welfare",
    description:
      "Implementing a 'Student Legal Aid' fund and a direct feedback loop to address victimization.",
  },
  {
    title: "Capacity Beyond Class",
    description:
      "Launching the 'National Moot & Mock Trial League' to sharpen advocacy skills.",
  },
];
