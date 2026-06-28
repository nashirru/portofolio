import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Keahlian from './components/Keahlian';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#09090B] text-[#FAFAFA] min-h-screen relative overflow-hidden font-sans">
      {/* Ambient Aurora / Mesh Gradient Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Cyan glow top-left */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-cyan/10 blur-[150px] animate-aurora-1" />
        {/* Purple glow mid-right */}
        <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-purple/10 blur-[150px] animate-aurora-2" />
        {/* Cyan glow bottom-left */}
        <div className="absolute bottom-[-10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-cyan/8 blur-[150px] animate-aurora-1" />
      </div>

      {/* Structured sections container */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Keahlian />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
