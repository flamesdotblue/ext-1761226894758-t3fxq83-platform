import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

export default function Feed() {
  const posts = [
    {
      id: 1,
      author: 'Sienna Park',
      role: 'Design Lead · Atlas Bank',
      avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop',
      content:
        'Just shipped a glassmorphic card experience for mobile onboarding. Subtle blur, elevated focus, and haptics make a surprising difference in trust perception. Sharing flows soon.',
      image:
        'https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=1200&auto=format&fit=crop',
      likes: '2.1k',
      comments: '184',
    },
    {
      id: 2,
      author: 'Noah Kim',
      role: 'iOS Engineer · Freelance',
      avatar: 'https://images.unsplash.com/photo-1548536906-1f3c0c6ee992?q=80&w=300&auto=format&fit=crop',
      content:
        'Prototyped a 3D credit card with Spline + SwiftUI. Realtime lighting with parallax feels magical. Thinking about writing up a snippet and performance notes.',
      image:
        'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjEyMjY5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      likes: '1.3k',
      comments: '96',
    },
    {
      id: 3,
      author: 'Ava Patel',
      role: 'Recruiter · Elevate',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
      content:
        'Hiring senior product designers with a knack for tactile interfaces and motion systems. Remote-friendly, strong health benefits, and a calm culture.',
      image: '',
      likes: '986',
      comments: '72',
    },
  ];

  return (
    <div className="space-y-6">
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

function PostCard({ post }) {
  return (
    <article className="backdrop-blur-xl bg-white/6 border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-2xl overflow-hidden border border-white/20 bg-white/10">
            <img src={post.avatar} alt={post.author} className="h-full w-full object-cover" />
          </div>
          <div>
            <h3 className="font-semibold leading-tight">{post.author}</h3>
            <p className="text-xs text-white/70">{post.role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-white/90 leading-relaxed">{post.content}</p>
      </div>
      {post.image && (
        <div className="px-5 pb-5">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img src={post.image} alt="Post media" className="w-full h-64 object-cover" />
          </div>
        </div>
      )}
      <div className="px-5 pb-5 pt-2">
        <div className="flex items-center gap-4 text-sm text-white/70">
          <span>{post.likes} likes</span>
          <span>{post.comments} comments</span>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <ActionButton icon={Heart} label="Like" />
          <ActionButton icon={MessageCircle} label="Comment" />
          <ActionButton icon={Share2} label="Share" />
        </div>
      </div>
    </article>
  );
}

function ActionButton({ icon: Icon, label }) {
  return (
    <button className="flex items-center justify-center gap-2 rounded-xl bg-white/8 hover:bg-white/12 border border-white/12 px-3 py-2 text-sm text-white/90 transition-colors">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </button>
  );
}
