import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}