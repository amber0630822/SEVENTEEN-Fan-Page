import React from 'react';
import { X, Calendar, Sparkles, User, HelpCircle, Heart, Star, Instagram } from 'lucide-react';
import { Member } from '../types';
import { getMemberPhotoUrl } from '../utils/albumCovers';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/45 backdrop-blur-md flex items-start sm:items-center justify-center p-3 sm:p-6 transition-all duration-300">
      <div 
        className="w-full max-w-4xl bg-white/70 backdrop-blur-2xl rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/60 flex flex-col md:flex-row animate-in fade-in zoom-in duration-300 my-auto max-h-none md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-11 h-11 bg-slate-150 rounded-full flex items-center justify-center hover:bg-slate-200 text-slate-700 hover:text-slate-950 transition-all z-20 cursor-pointer shadow-sm border border-slate-200"
          title="關閉詳情"
        >
          <X size={20} />
        </button>

        {/* Left Side: Avatar Panel with official Color theme */}
        <div 
          className="w-full md:w-5/12 aspect-square md:aspect-auto min-h-[250px] sm:min-h-[300px] md:min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: member.photoGradient }}
        >
          {(getMemberPhotoUrl(member.name) || member.photoUrl) ? (
            <img 
              src={getMemberPhotoUrl(member.name) || member.photoUrl} 
              alt={member.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 absolute inset-0"
            />
          ) : (
            <div className="text-[9rem] select-none scale-100 transform hover:scale-110 hover:-rotate-6 transition-all duration-500 cursor-pointer drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)]">
              {member.avatarEmoji}
            </div>
          )}
        </div>

        {/* Right Side: Information file */}
        <div className="w-full md:w-7/12 p-8 sm:p-11 flex flex-col justify-start bg-gradient-to-br from-white/75 to-slate-50/55 relative overflow-y-auto">
          {/* Header Metadata */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-extrabold tracking-widest text-[#92A8D1] uppercase px-3 py-1 rounded-full bg-[#92A8D1]/10">
                {member.unit} Team
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                {member.zodiac}
              </span>
            </div>
            
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter text-slate-800" style={{ fontFamily: 'var(--font-bebas), sans-serif' }}>
              {member.name}
            </h3>
            
            <p className="text-sm font-medium text-[#2D1B3D] tracking-wide mt-1">
              實名: {member.realName}
            </p>
          </div>

          <div className="h-px bg-slate-200/60 mb-6" />

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-3 bg-slate-100/50 rounded-xl border border-slate-200/40 flex flex-col justify-between">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <Calendar size={10} /> Birthday
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1 font-mono">
                {member.birthDate}
              </div>
            </div>
            <div className="p-3 bg-slate-100/50 rounded-xl border border-slate-200/40 flex flex-col justify-between">
              <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                <User size={10} /> Core Role
              </div>
              <div className="text-xs font-bold text-[#2D1B3D] mt-1 line-clamp-1">
                {member.role.replace('SVT ', '')}
              </div>
            </div>
            {member.instagram && (
              <a 
                href={`https://www.instagram.com/${member.instagram}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-pink-500/10 to-orange-500/10 hover:from-pink-500/20 hover:to-orange-500/20 rounded-xl border border-pink-200/30 flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                title={`${member.name} 官方 Instagram`}
              >
                <div className="text-[9px] font-extrabold text-pink-500 uppercase tracking-widest flex items-center gap-1">
                  <Instagram size={10} /> Instagram
                </div>
                <div className="text-xs font-bold text-[#2D1B3D] mt-1 truncate group-hover:text-pink-600 transition-colors">
                  @{member.instagram}
                </div>
              </a>
            )}
          </div>

          {/* Long Description Intro */}
          <div className="mb-6">
            <h4 className="text-xs font-extrabold tracking-wider text-[#92A8D1] uppercase mb-2 flex items-center gap-1">
              <Star size={12} className="text-[#F7CAC9] fill-[#F7CAC9]" /> 成員特寫 Intro
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed font-normal bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              {member.description}
            </p>
          </div>

          {/* Interesting Facts Bullet highlights */}
          <div>
            <h4 className="text-xs font-extrabold tracking-wider text-[#92A8D1] uppercase mb-2.5 flex items-center gap-1">
              <HelpCircle size={12} className="text-[#92A8D1]" /> 趣味小百科 Trivia
            </h4>
            <ul className="space-y-2">
              {member.facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                  <span className="mt-1 flex-shrink-0 text-pink-300 font-bold select-none">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
