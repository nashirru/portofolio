import { useLanyard } from '../../hooks/useLanyard';
import { usePresenceCanvas } from '../../hooks/usePresenceCanvas';
import Lanyard3D from './Lanyard3D';

export default function Lanyard() {
  // Query presence data (uses fallback mockup when empty user id is passed)
  const { data, loading } = useLanyard('');
  const presenceTextureUrl = usePresenceCanvas(data);

  if (loading || !presenceTextureUrl) {
    return (
      <div className="h-[480px] w-full max-w-[380px] flex flex-col items-center justify-center rounded-3xl border border-glass-border bg-glass-fill backdrop-blur-xl">
        <span className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin mb-3" />
        <span className="text-xs text-text-secondary font-mono">Memuat simulasi 3D...</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[400px] h-[520px] relative flex justify-center items-center select-none">
      {/* Accent glow behind canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-accent-cyan/10 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" />
      
      <Lanyard3D 
        frontImage={presenceTextureUrl} 
        lanyardWidth={1.4}
        fov={16} // Zoomed in camera for larger display
        position={[0, 0, 18]} // Camera closer to the model
        gravity={[0, -40, 0]}
      />
    </div>
  );
}
