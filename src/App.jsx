import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white antialiased">
      <NavBar />
      <Hero />

      <main className="relative z-0 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <aside className="lg:col-span-4 xl:col-span-3">
          <Sidebar />
        </aside>
        <section className="lg:col-span-8 xl:col-span-9">
          <Feed />
        </section>
      </main>

      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-slate-300 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>Concept redesign for educational purposes · Glassmorphic LinkedIn by an Apple-inspired aesthetic</p>
          <p className="text-slate-400">Built with React, Tailwind CSS, and Spline</p>
        </div>
      </footer>
    </div>
  );
}
