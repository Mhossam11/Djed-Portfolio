'use client';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Features } from '@/components/sections/Features';
import { Benefits } from '@/components/sections/Benefits';
import { Screenshots } from '@/components/sections/Screenshots';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Features />
      <Benefits />
      <Screenshots />
      <Contact />
      <Footer />
    </main>
  );
}