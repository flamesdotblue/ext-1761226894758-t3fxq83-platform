import React from 'react';

export default function Sidebar() {
  return (
    <div className="space-y-6" id="explore">
      <ProfileCard />
      <QuickShortcuts />
      <TrendingTopics />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-slate-200 to-slate-500">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold">Jordan Winters</h3>
          <p className="text-sm text-white/70">Product Designer · Fintech</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
        <Stat label="Views" value="1,248" />
        <Stat label="Connections" value="892" />
        <Stat label="Searches" value="34" />
      </div>
      <button className="mt-5 w-full rounded-xl bg-white/10 border border-white/15 py-2.5 text-sm hover:bg-white/15 transition-colors">
        Edit Profile
      </button>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 py-3">
      <div className="text-white font-semibold">{value}</div>
      <div className="text-xs text-white/70">{label}</div>
    </div>
  );
}

function QuickShortcuts() {
  const items = [
    { title: 'Grow your network', desc: 'Discover relevant people and groups' },
    { title: 'Job alerts', desc: 'Personalized roles in fintech' },
    { title: 'Saved posts', desc: 'Curate your inspiration' },
  ];
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
      <h4 className="font-semibold mb-4">Quick actions</h4>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.title} className="group flex items-start justify-between gap-3 rounded-xl bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition-colors">
            <div>
              <p className="text-sm font-medium">{i.title}</p>
              <p className="text-xs text-white/70">{i.desc}</p>
            </div>
            <span className="text-xs text-white/60 group-hover:text-white">›</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrendingTopics() {
  const topics = ['Glass UI', 'Fintech Design', 'SwiftUI', '3D Web', 'Motion UX'];
  return (
    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
      <h4 className="font-semibold mb-3">Trending</h4>
      <div className="flex flex-wrap gap-2">
        {topics.map((t) => (
          <span key={t} className="text-xs rounded-full bg-white/10 border border-white/15 px-3 py-1 text-white/80">
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}
