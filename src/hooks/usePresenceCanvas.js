import { useState, useEffect } from 'react';

export function usePresenceCanvas(lanyardData) {
  const [canvasElement, setCanvasElement] = useState(null);

  useEffect(() => {
    if (!lanyardData) return;

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 760;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const user = lanyardData.discord_user;
    const status = lanyardData.discord_status || 'offline';
    const activeActivity = lanyardData.activities?.find(act => act.type === 0) || null;
    const isSpotify = lanyardData.listening_to_spotify && lanyardData.spotify;

    const drawCard = async () => {
      // 1. Background linear gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 760);
      grad.addColorStop(0, '#09090B');
      grad.addColorStop(0.5, '#121217');
      grad.addColorStop(1, '#09090B');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 760);

      // Add a neon accent corner glow (cyan / amethyst)
      const glowGrad = ctx.createRadialGradient(512, 0, 10, 512, 0, 300);
      glowGrad.addColorStop(0, 'rgba(6, 182, 212, 0.15)'); // Neon Cyan glow
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, 512, 760);

      const glowGrad2 = ctx.createRadialGradient(0, 760, 10, 0, 760, 300);
      glowGrad2.addColorStop(0, 'rgba(139, 92, 246, 0.15)'); // Amethyst glow
      glowGrad2.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad2;
      ctx.fillRect(0, 0, 512, 760);

      // Draw glass card thin border reflection
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, 508, 756);

      // 2. Barcode/Badge detail at top
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(40, 40, 432, 60);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText('LIVE ACCESS CARD // NASIR.DEV', 60, 75);

      // 3. Status Badge Top-Right
      let statusColor = '#9ca3af'; // offline
      let statusText = 'OFFLINE';
      if (status === 'online') { statusColor = '#10b981'; statusText = 'ONLINE'; }
      else if (status === 'idle') { statusColor = '#f59e0b'; statusText = 'IDLE'; }
      else if (status === 'dnd') { statusColor = '#f43f5e'; statusText = 'DND'; }

      ctx.beginPath();
      ctx.arc(430, 70, 6, 0, Math.PI * 2);
      ctx.fillStyle = statusColor;
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(statusText, 415, 74);
      ctx.textAlign = 'left'; // reset

      // 4. Load & Draw User Avatar
      const avatarUrl = user?.avatar
        ? (user.avatar.startsWith('http')
          ? user.avatar
          : `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`)
        : `https://cdn.discordapp.com/embed/avatars/${parseInt(user?.id || '0') % 5}.png`;

      const loadImage = (url) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = () => resolve(null); // resolve null on failure to keep draw thread running
          img.src = url;
        });
      };

      const avatarImg = await loadImage(avatarUrl);
      const cx = 256;
      const cy = 250;
      const radius = 90;

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.clip();

      if (avatarImg) {
        ctx.drawImage(avatarImg, cx - radius, cy - radius, radius * 2, radius * 2);
      } else {
        // Fallback placeholder circle if loading fails or CORS prevents it
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
        ctx.fillStyle = '#06B6D4';
        ctx.font = 'bold 48px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(user?.global_name?.[0]?.toUpperCase() || 'N', cx, cy + 16);
        ctx.textAlign = 'left';
      }
      ctx.restore();

      // Avatar frame glow
      ctx.strokeStyle = '#06B6D4'; // cyan ring
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 4, 0, Math.PI * 2);
      ctx.stroke();

      // 5. User Details Text
      ctx.textAlign = 'center';
      
      // Name
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText(user?.global_name || 'Muhammad Abdun Nasir', 256, 395);

      // Handle
      ctx.fillStyle = '#06B6D4'; // Neon Cyan
      ctx.font = '500 18px monospace';
      ctx.fillText(`@${user?.username || 'nasir.dev'}`, 256, 425);

      // Title (Requested exact value)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.font = '400 15px sans-serif';
      ctx.fillText('Freelance Developer', 256, 450);

      ctx.textAlign = 'left'; // reset

      // Divider line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(60, 480);
      ctx.lineTo(452, 480);
      ctx.stroke();

      // 6. Active Activity / Spotify Box
      if (activeActivity) {
        // VS Code or general coding activity
        ctx.fillStyle = 'rgba(6, 182, 212, 0.04)'; // Cyan tint
        ctx.fillRect(50, 500, 412, 110);
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 500, 412, 110);

        ctx.fillStyle = '#06B6D4'; // Cyan
        ctx.font = 'bold 11px monospace';
        ctx.fillText('CURRENT DEVELOPMENT STATE', 70, 525);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        ctx.fillText(activeActivity.name || 'Visual Studio Code', 70, 555);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '400 13px sans-serif';
        ctx.fillText(activeActivity.details || 'Writing Backend API code', 70, 580);
      } else if (isSpotify) {
        // Spotify Listening
        ctx.fillStyle = 'rgba(16, 185, 129, 0.05)'; // Spotify green tint
        ctx.fillRect(50, 500, 412, 110);
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 500, 412, 110);

        ctx.fillStyle = '#10b981'; // Green
        ctx.font = 'bold 11px monospace';
        ctx.fillText('LISTENING ON SPOTIFY', 70, 525);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        ctx.fillText(lanyardData.spotify.song || 'Song Name', 70, 555);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '400 13px sans-serif';
        ctx.fillText(`by ${lanyardData.spotify.artist || 'Artist'}`, 70, 580);
      } else {
        // Idle state box
        ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
        ctx.fillRect(50, 500, 412, 110);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 500, 412, 110);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.font = 'bold 11px monospace';
        ctx.fillText('CURRENT ACTIVITY STATUS', 70, 525);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        ctx.fillText('Designing Systems & Planning', 70, 555);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '400 13px sans-serif';
        ctx.fillText('Enjoying downtime or drawing architectures', 70, 580);
      }

      // 7. Footer details
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.font = '10px monospace';
      ctx.fillText('FIBER PHYSICS ENGINE v1.0 // CARD INTEGRATION', 50, 680);
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = 'bold 12px sans-serif';
      ctx.fillText('SCAN CODE FOR COMPILER VERIFICATION', 50, 715);

      // Draw a tiny mock QR/matrix box at the bottom right
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(400, 670, 60, 60);
      // Mock QR blocks
      ctx.fillStyle = '#090d16';
      ctx.fillRect(405, 675, 20, 20);
      ctx.fillRect(435, 675, 20, 20);
      ctx.fillRect(405, 705, 20, 20);
      ctx.fillRect(435, 705, 10, 10);
      ctx.fillRect(445, 715, 10, 10);

      // Output texture as HTML Canvas Element directly
      setCanvasElement(canvas);
    };

    drawCard();
  }, [lanyardData]);

  return canvasElement;
}
