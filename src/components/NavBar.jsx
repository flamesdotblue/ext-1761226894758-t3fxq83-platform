import React from 'react';
import { Home, Users, Briefcase, MessageCircle, Bell, Search, Plus } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl px-4 sm:px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400/70 to-blue-500/70 border border-white/30 backdrop-blur-xl grid place-items-center shadow-inner">
              <span className="font-extrabold text-white text-lg">in</span>
            </div>
            <span className="hidden sm:block text-white/90 font-semibold tracking-tight">LinkedIn Glass</span>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search people, jobs, and posts"
                className="w-full rounded-xl bg-white/10 border border-white/15 pl-10 pr-4 py-2.5 text-sm placeholder:text-white/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-white/30 backdrop-blur-xl"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <IconButton icon={Home} label="Home" />
            <IconButton icon={Users} label="Network" />
            <IconButton icon={Briefcase} label="Jobs" />
            <IconButton icon={MessageCircle} label="Messaging" />
            <IconButton icon={Bell} label="Alerts" />

            <button className="hidden sm:flex items-center gap-2 rounded-xl bg-gradient-to-tr from-cyan-400/80 to-blue-500/80 text-white px-3 py-2 border border-white/20 shadow-lg hover:from-cyan-400 hover:to-blue-500 transition-colors">
              <Plus className="h-4 w-4" />
              <span className="text-sm font-medium">Post</span>
            </button>

            <div className="h-9 w-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl overflow-hidden grid place-items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function IconButton({ icon: Icon, label }) {
  return (
    <button className="group relative grid place-items-center h-9 w-9 rounded-xl bg-white/10 border border-white/15 hover:border-white/30 transition-colors">
      <Icon className="h-4.5 w-4.5 text-white/80 group-hover:text-white" />
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/10 backdrop-blur-md border border-white/15 px-2 py-1 text-[10px] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
    </button>
  );
}
