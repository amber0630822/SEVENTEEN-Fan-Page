import React from 'react';
import { X, Sparkles, User, HelpCircle, Heart, Star, Smile } from 'lucide-react';
import { Miniteen } from '../types';

interface MiniteenModalProps {
  character: Miniteen | null;
  onClose: () => void;
}

export default function MiniteenModal({ character, onClose }: MiniteenModalProps) {
  if (!character) return null;

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

        {/* Left Side: Avatar Panel with character Color theme */}
        <div 
          className="w-full md:w-5/12 aspect-square md:aspect-auto min-h-[250px] sm:min-h-[300px] md:min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden bg-slate-150"
          style={{ background: character.photoGradient }}
        >
          {character.photoUrl ? (
            <img 
              src={character.photoUrl} 
              alt={character.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 absolute inset-0"
            />
          ) : (
            <div className="text-[9rem] select-none scale-100 transform hover:scale-110 hover:-rotate-6 transition-all duration-500 cursor-pointer drop-shadow-[0_15px_20px_rgba(0,0,0,0.15)]">
              {character.avatarEmoji}
            </div>
          )}
        </div>

        {/* Right Side: Information file */}
        <div className="w-full md:w-7/12 p-8 sm:p-11 flex flex-col justify-start bg-gradient-to-br from-white/75 to-slate-50/55 relative overflow-y-auto">
          {/* Header Metadata */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-extrabold tracking-widest text-[#92A8D1] uppercase px-3 py-1 rounded-full bg-[#92A8D1]/10">
                對應成員: {character.originalMember}
              </span>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                角色類型: {character.characterType}
              </span>
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800" style={{ fontFamily: 'var(--font-serif), sans-serif' }}>
              {character.name}
            </h3>
            
            <p className="text-sm font-medium text-pink-500 tracking-wide mt-1.5 flex items-center gap-1.5">
              <Smile size={16} /> {character.personality}
            </p>
          </div>

          <div className="h-px bg-slate-200/60 mb-6" />

          {/* Bento Mappings attributes from 17forever */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {character.residence && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">🏡 居住地 Residence</span>
                <span className="text-xs font-semibold text-slate-700">{character.residence}</span>
              </div>
            )}
            {character.favoriteFood && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">🥪 喜歡的食物 Favorite Food</span>
                <span className="text-xs font-semibold text-slate-700">{character.favoriteFood}</span>
              </div>
            )}
            {character.favoriteSong && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">🎵 喜歡的歌曲 Favorite Song</span>
                <span className="text-xs font-semibold text-slate-700">{character.favoriteSong}</span>
              </div>
            )}
            {character.mbti && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">🧠 MBTI 性格密碼</span>
                <span className="text-xs font-semibold text-slate-700">{character.mbti}</span>
              </div>
            )}
            {character.hobbies && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl sm:col-span-2">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">🎨 休閒興趣 Hobbies</span>
                <span className="text-xs font-semibold text-slate-700">{character.hobbies}</span>
              </div>
            )}
            {character.favoriteThings && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl sm:col-span-2">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">💖 喜歡的事物 Likes</span>
                <span className="text-xs font-semibold text-slate-700">{character.favoriteThings}</span>
              </div>
            )}
            {character.dislikedThings && (
              <div className="bg-slate-50/70 border border-slate-100/50 p-3.5 rounded-2xl sm:col-span-2">
                <span className="text-[10px] font-bold text-[#92A8D1] block mb-0.5">⚠️ 討厭的事物 Dislikes</span>
                <span className="text-xs font-semibold text-slate-700">{character.dislikedThings}</span>
              </div>
            )}
            {character.specialNotes && (
              <div className="bg-pink-50/20 border border-pink-100/30 p-3.5 rounded-2xl sm:col-span-2">
                <span className="text-[10px] font-bold text-pink-400 block mb-0.5">🌟 特別事項 Special Notes</span>
                <span className="text-xs font-semibold text-pink-600">{character.specialNotes}</span>
              </div>
            )}
          </div>

          {/* Cute features list */}
          <div className="mb-6">
            <h4 className="text-xs font-extrabold tracking-wider text-[#92A8D1] uppercase mb-2.5 flex items-center gap-1">
              <Sparkles size={12} className="text-[#F7CAC9] fill-[#F7CAC9]" /> 萌萌外貌特徵 Cute Features
            </h4>
            <ul className="space-y-2 bg-white/50 border border-slate-100/80 p-4 rounded-2xl shadow-sm">
              {character.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="text-pink-400 font-bold select-none">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interesting Facts Bullet highlights */}
          <div>
            <h4 className="text-xs font-extrabold tracking-wider text-[#92A8D1] uppercase mb-2.5 flex items-center gap-1">
              <HelpCircle size={12} className="text-[#92A8D1]" /> 夥伴趣聞小百科 Chibi Trivia
            </h4>
            <ul className="space-y-2">
              {character.facts.map((fact, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                  <span className="mt-1 flex-shrink-0 text-[#92A8D1] font-bold select-none">💎</span>
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
