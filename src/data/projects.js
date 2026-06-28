import projectCashflow from '../assets/project_cashflow.png';
import projectAbsen from '../assets/project_absen.png';
import projectPnom from '../assets/project_pnom.png';

export const projectsData = [
  {
    title: 'Warok Cashflow Dashboard',
    description: 'Aplikasi manajemen keuangan SaaS untuk memantau arus kas bisnis UMKM secara real-time dengan visualisasi data interaktif.',
    tags: ['React', 'Laravel', 'MySQL', 'Tailwind CSS'],
    image: projectCashflow,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'ASA Absen Portal',
    description: 'Sistem presensi berbasis geolokasi dan scan QR code dinamis untuk memvalidasi kehadiran karyawan secara instan.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    image: projectAbsen,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Pnom CMS Gallery',
    description: 'Content Management System & showcase galeri interaktif bagi desainer grafis dengan integrasi media dinamis.',
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    image: projectPnom,
    liveUrl: '#',
    githubUrl: '#'
  }
];
