import { BackgroundScribbles } from './components/ui/AnimatedScribble';
import Header from './components/Header';
import NavigationRail from './components/NavigationRail';
import Hero from './components/Hero';
import CapabilityGrid from './components/CapabilityGrid';
import Metrics from './components/Metrics';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SectionDivider = () => (
  <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
    <hr className="border-t border-black/8" />
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-brutal-black font-sans antialiased">
      <a href="#projects" className="skip-link">
        Skip to projects
      </a>

      {/* Fixed top header */}
      <Header />

      {/* Fixed left navigation rail (desktop only) */}
      <NavigationRail />

      {/* Background layers — stacked behind content */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Layer 1: Swiss grid lines (vertical + horizontal) */}
        <div className="absolute inset-0 bg-swiss-grid opacity-60" />

        {/* Layer 2: Dot grid (dense black dots) */}
        <div className="absolute inset-0 bg-dot-grid opacity-70" />

        {/* Layer 3: Yellow accent dots — sparse */}
        <div className="absolute inset-0 bg-dot-grid-sparse" />

        {/* Layer 4: Noise texture */}
        <div className="absolute inset-0 bg-noise" />

        {/* Layer 5: Scribbles */}
        <BackgroundScribbles />

        {/* Layer 6: Subtle vignette on edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5]/70 via-transparent to-[#F5F5F5]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/40 via-transparent to-[#F5F5F5]/60" />
      </div>

      {/* Scrollable content area */}
      <main className="pt-[72px] lg:pl-[80px] min-h-screen">
        <div className="relative z-10">
          {/* Hero — white card */}
          <div className="bg-white border-b border-black/8">
            <Hero />
          </div>

          {/* Capabilities — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <CapabilityGrid />
          </div>

          {/* Metrics — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <Metrics />
          </div>

          {/* Projects — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <Projects />
          </div>

          {/* Timeline — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <Timeline />
          </div>

          {/* Skills — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <Skills />
          </div>

          {/* Contact — white card */}
          <div className="bg-white border-b border-black/8 mt-[1px]">
            <Contact />
          </div>

          {/* Footer — inside card */}
          <div className="bg-white mt-[1px]">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
