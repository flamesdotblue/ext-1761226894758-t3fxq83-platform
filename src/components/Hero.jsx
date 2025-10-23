import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[85vh]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80 mb-4">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Apple-inspired glass design system
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Rethinking LinkedIn
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400">through Glassmorphism</span>
          </h1>
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed">
            A calm, tactile interface where professional identity, opportunity, and conversation live within soft glass layers. Minimal, focused, and delightfully interactive.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#explore" className="rounded-xl bg-white/90 text-slate-900 px-4 py-2.5 text-sm font-semibold hover:bg-white transition-colors border border-white/20">
              Explore Feed
            </a>
            <button className="rounded-xl bg-white/10 text-white px-4 py-2.5 text-sm font-medium hover:bg-white/15 transition-colors border border-white/15">
              Build Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
