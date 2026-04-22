/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring as motionUseSpring } from "motion/react";
import { 
  CheckCircle2, 
  Target, 
  TrendingUp, 
  Map, 
  DollarSign, 
  Instagram,
  Linkedin,
  MessageSquare,
  ArrowRight,
  ArrowDown,
  MousePointer2,
  Megaphone,
  Layout,
  PenTool,
  Smartphone,
  Video,
  ChevronUp,
  Mail,
  Phone
} from "lucide-react";
import Marketing360Section from "./components/Marketing360Section";
import Strategy10PSection from "./components/Strategy10PSection";

interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
}

const MARKETING_PHRASES = [
  "ROI Explosivo", "Tráfego Pago", "Método 10P", "Vendas Reais", 
  "CTR Alto", "Escalabilidade", "Conversão", "WhatsApp Lotado",
  "Presença Digital", "Marketing Estratégico", "LTV Alto", "CPL Baixo"
];

function InteractiveReveal() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleId = useRef(0);

  const handlePointerInteraction = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticle = {
      id: particleId.current++,
      x,
      y,
      text: MARKETING_PHRASES[Math.floor(Math.random() * MARKETING_PHRASES.length)]
    };

    setParticles((prev) => [...prev.slice(-8), newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter(p => p.id !== newParticle.id));
    }, 1200);
  };

  return (
    <div 
      ref={containerRef}
      onPointerMove={handlePointerInteraction}
      onPointerDown={handlePointerInteraction}
      className="relative h-[300px] md:h-[400px] w-full bg-slate-950/50 border border-white/10 rounded-[2rem] overflow-hidden cursor-crosshair flex items-center justify-center group shadow-[inset_0_0_80px_rgba(0,0,0,0.8)] touch-none"
    >
      {/* Dynamic Animated Prompt */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 opacity-100 group-hover:opacity-10 group-active:opacity-10">
        <motion.div 
          animate={{ scale: [1, 1.03, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-center px-6"
        >
          <MousePointer2 size={40} className="text-brand mb-6 opacity-70 animate-bounce" />
          <h3 className="font-display text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-300 to-slate-500 uppercase tracking-tighter italic skew-x-[-3deg] drop-shadow-lg">
            Deslize ou Toque
          </h3>
          <p className="text-brand font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] mt-4 font-bold bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full">
            Para Revelar o Método
          </p>
        </motion.div>
      </div>

      {/* Particles */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.5, y: 20, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1, y: -60, rotate: Math.random() * 10 - 5 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(8px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ 
              position: 'absolute', 
              left: p.x, 
              top: p.y,
              x: '-50%',
              y: '-50%'
            }}
            className="pointer-events-none whitespace-nowrap z-10"
          >
            <div className="bg-slate-900/90 backdrop-blur-xl border border-brand/40 text-white px-5 py-2 md:px-8 md:py-4 rounded-xl text-sm md:text-xl font-black uppercase tracking-tighter italic shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              {p.text}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function MarqueeTape() {
  const phraseGroup = (
    <div className="flex items-center gap-8 px-4 md:gap-12 md:px-6">
      <span className="font-display font-light text-[11px] md:text-xs uppercase tracking-[0.3em] text-slate-400">Agência Dinamize</span>
      <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      <span className="font-display font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-white">MÉTODO 10P</span>
      <div className="w-1 h-1 rounded-full bg-slate-700" />
      <span className="font-display font-light text-[11px] md:text-xs uppercase tracking-[0.3em] text-slate-400">Marketing Lojista</span>
      <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      <span className="font-display font-bold text-xs md:text-sm uppercase tracking-[0.3em] text-brand drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">WHATSAPP LOTADO</span>
      <div className="w-1 h-1 rounded-full bg-slate-700" />
      <span className="font-display font-light text-[11px] md:text-xs uppercase tracking-[0.3em] text-slate-400">Tráfego de Elite</span>
      <div className="w-1 h-1 rounded-full bg-slate-700" />
    </div>
  );

  return (
    <div className="relative z-20 w-[105%] -ml-[2.5%] overflow-hidden bg-slate-900/60 backdrop-blur-xl border-y border-white/5 py-5 shadow-2xl transform -rotate-[1deg]">
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap w-max"
      >
        <div className="flex items-center">
          {[...Array(6)].map((_, i) => <React.Fragment key={`g1-${i}`}>{phraseGroup}</React.Fragment>)}
        </div>
        <div className="flex items-center">
          {[...Array(6)].map((_, i) => <React.Fragment key={`g2-${i}`}>{phraseGroup}</React.Fragment>)}
        </div>
      </motion.div>
    </div>
  );
}

function MarketingTicker() {
  const phrases = [
    "Atenção É O Novo Petróleo",
    "Venda A Solução, Não O Produto",
    "Transforme Cliques Em Clientes",
    "Marketing É Construir Confiança",
    "Dados Superam Achismos",
    "O Ótimo Marketing Vende Sozinho",
    "Pessoas Compram O Seu Porquê"
  ];
  
  return (
    <div className="relative w-full shrink-0 overflow-hidden whitespace-nowrap py-4 md:py-5 z-20 bg-[#060a14] flex items-center shadow-lg border-b border-white/5">
      <motion.div 
        className="flex items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
      >
         {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {phrases.map((phrase, j) => (
                <div key={j} className="flex items-center">
                   <span className="text-xs sm:text-[13px] md:text-sm font-sans font-bold uppercase tracking-[0.2em] text-slate-400 px-6 sm:px-10">
                     {phrase}
                   </span>
                   <span className="text-blue-600 text-xs md:text-sm flex items-center justify-center -translate-y-[1px]">♦</span>
                </div>
              ))}
            </div>
         ))}
      </motion.div>
    </div>
  );
}

function HeroCover({ onPrimaryClick }: { onPrimaryClick: () => void }) {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col origin-center pointer-events-auto bg-[#03155b] overflow-hidden">
      
      {/* Marketing Ticker Loop */}
      <MarketingTicker />
      
      {/* Full Background Image Replacement */}
      <div className="relative w-full flex-1 pointer-events-none z-0 flex items-center justify-center overflow-hidden min-h-0 bg-[#03155b]">
        <picture className="absolute inset-0 w-full h-full block">
          <source media="(min-width: 768px)" srcSet="https://i.imgur.com/crKBYSW.png?v=4" />
          <img 
            src="https://i.imgur.com/qlkSpRs.png?v=4" 
            alt="Mais pedidos no WhatsApp, mais clientes na loja, mais vendas na sua região" 
            className="w-full h-full object-cover md:object-contain object-bottom md:object-center pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </picture>
        {/* Subtle fade at the bottom so it flows smoothly into the background */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020513] via-[#020513]/60 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 text-center flex flex-col items-center pb-8 shrink-0 bg-gradient-to-t from-[#01092b] via-[#03155b]/20 to-transparent pt-10 -mt-2 md:-mt-3">
        <div className="flex flex-col items-center w-full justify-center lg:max-w-lg max-w-[92vw] sm:max-w-md mx-auto">
          <motion.button 
            onClick={onPrimaryClick}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              duration: 0.2
            }}
            className="group relative py-3.5 sm:py-5 px-3 sm:px-6 w-full bg-[#16a34a] text-white font-black text-[11px] sm:text-[14px] md:text-[16px] uppercase tracking-normal sm:tracking-widest rounded-[16px] md:rounded-[20px] overflow-hidden shadow-[0_15px_30px_rgba(22,163,74,0.3)] transition-all hover:brightness-110 active:scale-95 active:translate-y-1 z-20 flex items-center justify-center gap-2 sm:gap-3 border-b-[5px] md:border-b-[6px] border-[#14532d]"
          >
            {/* Glossy top edge highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none z-10" />
            
            {/* Auto-shine sweep effect */}
            <motion.div 
              animate={{ x: ["-300%", "300%"] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2.5, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-[25deg] pointer-events-none z-10" 
            />
            
            {/* Active/Hover overlay */}
            <div className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none z-10" />

            <MessageSquare className="fill-current w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 shrink-0 relative z-20" />
            <span className="whitespace-nowrap mt-[2px] relative z-20 drop-shadow-sm font-sans">ENVIAR MENSAGEM NO WHATSAPP</span>
          </motion.button>
        </div>

        {/* Apoio */}
        <div className="mt-3 sm:mt-5 flex flex-col items-center justify-center gap-2 text-white font-black text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest sm:tracking-widest text-center px-4 max-w-lg">
          <span className="leading-snug">CLIQUE NO BOTÃO ACIMA PARA CONVERSAR SOBRE SEU PROJETO</span>
        </div>
      </div>
    </section>
  );
}

function ScrollSequenceText() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = motionUseSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
    restDelta: 0.001
  });

  // Cinematically sequence using scale, opacity, and blur
  
  // Arrow fade out
  const arrowOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  // Phase 0: MAIS PEDIDOS NO WHATSAPP
  const s0 = useTransform(smoothProgress, [0, 0.2, 0.35], [1, 1.2, 1.5]);
  const o0 = useTransform(smoothProgress, [0, 0.15, 0.35], [1, 1, 0]);
  const b0 = useTransform(smoothProgress, [0, 0.15, 0.35], ["blur(0px)", "blur(0px)", "blur(15px)"]);

  // Phase 1: MAIS CLIENTES NA LOJA
  const s1 = useTransform(smoothProgress, [0.3, 0.5, 0.65], [0.8, 1, 1.5]);
  const o1 = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], [0, 1, 1, 0]);
  const b1 = useTransform(smoothProgress, [0.3, 0.4, 0.55, 0.65], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);

  // Phase 2: MAIS VENDAS NA REGIÃO
  const s2 = useTransform(smoothProgress, [0.6, 0.8, 1], [0.8, 1, 1.5]);
  const o2 = useTransform(smoothProgress, [0.6, 0.7, 0.9, 1], [0, 1, 1, 0]);
  const b2 = useTransform(smoothProgress, [0.6, 0.7, 0.9, 1], ["blur(15px)", "blur(0px)", "blur(0px)", "blur(15px)"]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Background Depth/Glow */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <div className="absolute top-[30%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] bg-brand/10 blur-[130px] rounded-full" />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center perspective-[1200px]">
           
           {/* Scroll Indicator Arrow */}
           <motion.div 
             style={{ opacity: arrowOpacity }}
             className="absolute z-20 flex flex-col items-center justify-center top-[15%] md:top-[25%] w-full pointer-events-none"
           >
             <motion.div
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white flex items-center justify-center text-white bg-transparent"
             >
               <ArrowDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
             </motion.div>
           </motion.div>

           {/* Phase 0 */}
           <motion.div
             style={{ scale: s0, opacity: o0, filter: b0 }}
             className="absolute w-full px-6 flex flex-col items-center justify-center origin-center pointer-events-none"
           >
             <h2 className="font-display flex flex-col items-center justify-center leading-[0.9] md:leading-[0.85] font-black uppercase tracking-tighter drop-shadow-xl text-center w-full max-w-5xl">
               <span className="text-3xl md:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/60 mb-2 md:mb-4">MAIS PEDIDOS NO</span>
               <span className="text-[12.5vw] md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] max-w-full">WHATSAPP</span>
             </h2>
           </motion.div>

           {/* Phase 1 */}
           <motion.div
             style={{ scale: s1, opacity: o1, filter: b1 }}
             className="absolute w-full px-6 flex flex-col items-center justify-center origin-center pointer-events-none"
           >
             <h2 className="font-display flex flex-col items-center justify-center leading-[0.9] md:leading-[0.85] font-black uppercase tracking-tighter drop-shadow-xl text-center w-full max-w-5xl">
               <span className="text-3xl md:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/60 mb-2 md:mb-4">MAIS CLIENTES NA</span>
               <span className="text-[15vw] md:text-[10rem] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] max-w-full">LOJA</span>
             </h2>
           </motion.div>

           {/* Phase 2 */}
           <motion.div
             style={{ scale: s2, opacity: o2, filter: b2 }}
             className="absolute w-full px-6 flex flex-col items-center justify-center origin-center pointer-events-none"
           >
             <h2 className="font-display flex flex-col items-center justify-center leading-[0.9] md:leading-[0.85] font-black uppercase tracking-tighter drop-shadow-[0_0_40px_rgba(59,130,246,0.6)] text-center w-full max-w-5xl md:scale-110">
               <span className="text-3xl md:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/60 mb-2 md:mb-4">MAIS VENDAS NA</span>
               <span className="text-[11vw] md:text-[8rem] text-transparent bg-clip-text bg-gradient-to-br from-brand via-blue-400 to-cyan-300 max-w-full">SUA REGIÃO</span>
             </h2>
           </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }} 
          className="absolute bottom-10 flex flex-col items-center text-slate-500 gap-2 pointer-events-none"
        >
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] font-black">Role para descobrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent animate-pulse" />
        </motion.div>

      </div>
    </section>
  );
}

function CreativeMindSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="relative w-full bg-[#031be0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-20 md:pt-32 pb-0 flex flex-col md:flex-row items-center justify-between min-h-[600px] md:min-h-[800px]">
        
        {/* Person Image - Positioned on the left/bottom depending on mobile/desktop */}
        <div className="order-2 md:order-1 relative w-full md:w-1/2 flex justify-start items-end self-end h-auto mt-10 md:mt-0 z-10">
          <img 
            src="https://i.imgur.com/CJ8R3VT.png" 
            alt="Especialista" 
            className="w-[90%] md:w-full max-w-[600px] max-h-[80vh] object-contain object-bottom md:object-left-bottom drop-shadow-2xl"
          />
        </div>

        {/* Text Box Content */}
        <div className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end z-20 relative">
          
          <motion.div 
            layout
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-3xl p-8 md:p-14 w-full max-w-[500px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border border-white/50"
          >
            <h2 className="text-[#031be0] text-5xl md:text-6xl font-bold font-sans tracking-[-0.03em] leading-none mb-5">
              mente criativa
            </h2>
            
            <p className="text-[#031be0] text-lg md:text-xl font-medium leading-snug mb-8 max-w-md">
              Não trabalhamos apenas com artes e vídeos. Desenvolvemos soluções criativas com estratégia, direção e intenção clara, para que cada material não seja só bonito, mas funcione de verdade para a sua marca.
            </p>

            {/* Expand / Collapse Button */}
            <motion.button 
              layout="position"
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#031be0] flex items-center justify-center text-[#031be0] hover:bg-[#031be0] hover:text-white transition-colors group mb-2 shrink-0"
            >
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                <ArrowDown size={18} className="group-hover:translate-y-px transition-transform" strokeWidth={2} />
              </motion.div>
            </motion.button>

            {/* Revealed Text Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 mt-4 border-t border-[#031be0]/10">
                    <p className="text-[#031be0] text-lg font-medium leading-relaxed origin-top italic">
                      "Dinamize sua marca. Criamos artes e vídeos sob medida para destacar o seu negócio e comunicar com mais impacto.<br/><br/>Transformamos ideias em peças visuais profissionais, estratégicas e pensadas para o que sua marca realmente precisa: atrair atenção, gerar valor e vender melhor."<br/><br/>
                      <span className="font-bold block not-italic">— Paulo</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ShowcaseCarousel() {
  const images = [
    "https://i.imgur.com/jKVgEjO.jpg",
    "https://i.imgur.com/gbJKCam.jpg",
    "https://i.imgur.com/LGTq89v.jpg",
    "https://i.imgur.com/imk8I3z.jpg",
    "https://i.imgur.com/byc0gXl.jpg"
  ];

  return (
    <section className="py-12 md:py-24 overflow-hidden relative z-10 w-full bg-slate-950">
      {/* Decorative Text */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tighter uppercase italic skew-x-[-2deg]">
          Nosso <span className="text-brand">Portfólio</span>
        </h2>
        <p className="text-slate-400 font-medium mt-2 max-w-xl text-sm md:text-base">
          Criativos estratégicos e design de alto padrão, desenvolvidos sob medida para o seu segmento.
        </p>
      </div>

      <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />
      
      <div className="flex w-max">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="flex gap-4 md:gap-8 px-4"
        >
          {/* Duplicate the array multi times to create a seamless infinite loop */}
          {[...images, ...images, ...images, ...images].map((img, index) => (
            <div 
              key={index} 
              className="relative w-[85vw] max-w-[1200px] aspect-video rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-2xl border border-slate-800/50 bg-[#0B1120] group flex items-center justify-center p-0"
            >
              <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay pointer-events-none" />
              <img 
                src={img} 
                alt={`Portfólio Dinamize ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showBackToTopMessage, setShowBackToTopMessage] = useState(false);
  const [formStep, setFormStep] = useState(0); // 0: Initial Button, 1: Name, 2: Email, 3: Phone, 4: Store, 5: Submit

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    store: '',
    phone: '',
    email: ''
  });

  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const handleWhatsAppDirect = () => {
    window.open('https://wa.me/559991863273?text=Ol%C3%A1.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20o%20meu%20projeto.', '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Integrando disparo para o Netlify Forms
    try {
      const form = e.target as HTMLFormElement;
      const data = new FormData(form);
      
      // Oculto obrigatório para que o SPAs do React enviem pro Netlify corretamente
      data.append('form-name', 'contato');
      
      await fetch('/', {
        method: 'POST',
        body: new URLSearchParams(data as any).toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      
      setIsSubmitted(true);
    } catch (error) {
      // Mesmo em erro, avançamos a tela por padrão
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    let messageTimer: NodeJS.Timeout;
    const unsub = scrollY.onChange((latest) => {
      // Show when near bottom (e.g. 80% of scroll height or absolute value)
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const threshold = scrollHeight - clientHeight - 600;

      if (latest > threshold) {
        if (!showBackToTop) {
          setShowBackToTop(true);
          setShowBackToTopMessage(true);
          clearTimeout(messageTimer);
          messageTimer = setTimeout(() => setShowBackToTopMessage(false), 3000);
        }
      } else {
        setShowBackToTop(false);
        setShowBackToTopMessage(false);
      }
    });

    return () => {
      unsub();
      clearTimeout(messageTimer);
    };
  }, [scrollY, showBackToTop]);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-brand selection:text-white relative flex flex-col w-full">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-brand/10 blur-[200px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[150px] rounded-full" />
      </div>

      {/* Hero / Cover Section First */}
      <HeroCover onPrimaryClick={handleWhatsAppDirect} />
      
      {/* Animated Text Section */}
      <ScrollSequenceText />

      {/* Zebra Marquee */}
      <div className="mt-0">
        <MarqueeTape />
      </div>

      <Marketing360Section />

      {/* Portfolio Showcase section */}
      <ShowcaseCarousel />

      <Strategy10PSection />

      {/* CTA Section */}
      <section className="py-20 md:py-40 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.85] italic skew-x-[-3deg] uppercase text-white">
            O MERCADO PREMIA <br />
            <span className="text-brand drop-shadow-[0_0_30px_rgba(59,130,246,0.4)]">QUEM AGE RÁPIDO.</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Cada dia sem um posicionamento de alto padrão e inteligência em vendas é lucro transferido para o seu concorrente. Preencha os dados abaixo e reserve sua imersão estratégica. Por garantirmos resultados exponenciais, operamos com <span className="text-white font-bold">limite rigoroso de vagas mensais.</span> Não perca o timing de dominar o seu setor.
          </p>
        </div>

        <div className="max-w-xl mx-auto immersive-card p-6 sm:p-10 md:p-12 text-center border-slate-800 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/10 blur-[150px] opacity-20" />
          
          <div className="relative z-10 w-full mb-8">
            <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Reserve sua Vaga</h3>
            <p className="text-slate-400 text-sm md:text-base">Preencha rápido e vamos dar o start na execução dos seus projetos.</p>
          </div>

          <div className="relative z-10 w-full flex flex-col items-center">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-900/80 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-brand/30 shadow-2xl w-full text-center"
                >
                  <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand/50">
                    <CheckCircle2 size={40} className="text-brand" />
                  </div>
                  <h3 className="text-white text-3xl font-black uppercase mb-4 tracking-tighter italic">Mensagem Enviada!</h3>
                  <p className="text-slate-300 text-lg font-medium leading-relaxed">
                    Mensagem enviada! <br />
                    <span className="text-brand font-bold">Entraremos em contato em breve.</span>
                  </p>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormStep(0);
                      setFormData({ name: '', store: '', phone: '', email: '' });
                    }}
                    className="mt-8 text-slate-500 hover:text-white uppercase text-[10px] font-bold tracking-widest underline"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : formStep === 0 ? (
                <motion.button 
                  key="initial-button"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setFormStep(1)}
                  className="group relative py-5 px-4 md:py-6 bg-brand text-white font-black text-[clamp(11px,4vw,18px)] uppercase tracking-tight md:tracking-wider rounded-2xl md:rounded-[24px] overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all hover:scale-[1.05] active:scale-95 w-full flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap"
                >
                  {/* Auto-shine sweep effect */}
                  <motion.div 
                    animate={{ x: ["-300%", "300%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2.5, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 left-0 w-2/3 sm:w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-[25deg] pointer-events-none z-10" 
                  />
                  <div className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300 pointer-events-none z-10" />
                  
                  <Target className="w-5 h-5 md:w-6 md:h-6 shrink-0 relative z-20" />
                  <span className="mt-[2px] relative z-20">ME INSCREVER PARA A VAGA</span>
                </motion.button>
              ) : (
                <motion.form 
                  key="form-steps"
                  name="contato"
                  data-netlify="true"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={formStep === 5 ? handleFormSubmit : (e) => { e.preventDefault(); nextStep(); }}
                  className="flex flex-col gap-6 pointer-events-auto bg-slate-900/80 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl w-full text-left max-w-md"
                >
                  <input type="hidden" name="form-name" value="contato" />
                  <AnimatePresence mode="wait">
                    {formStep === 1 && (
                      <motion.div 
                        key="step1" 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Qual o seu nome completo?</label>
                        <input 
                          autoFocus
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Digite seu nome" 
                          className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 text-white text-base transition-all"
                        />
                      </motion.div>
                    )}
                    {formStep === 2 && (
                      <motion.div 
                        key="step2" 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Seu melhor e-mail?</label>
                        <input 
                          autoFocus
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="seu@email.com" 
                          className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 text-white text-base transition-all"
                        />
                      </motion.div>
                    )}
                    {formStep === 3 && (
                      <motion.div 
                        key="step3" 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Qual o seu WhatsApp?</label>
                        <input 
                          autoFocus
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="(00) 00000-0000" 
                          className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 text-white text-base transition-all"
                        />
                      </motion.div>
                    )}
                    {formStep === 4 && (
                      <motion.div 
                        key="step4" 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <label className="block text-[11px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">Qual o nome da sua loja?</label>
                        <input 
                          autoFocus
                          type="text" 
                          name="store"
                          required
                          value={formData.store}
                          onChange={(e) => setFormData({...formData, store: e.target.value})}
                          placeholder="Nome do seu negócio" 
                          className="w-full px-5 py-4 bg-slate-950 border border-slate-800 rounded-2xl focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/50 text-white text-base transition-all"
                        />
                      </motion.div>
                    )}
                    {formStep === 5 && (
                      <motion.div 
                        key="step5" 
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        className="text-center py-6"
                      >
                        <h4 className="text-white text-xl font-bold mb-4">Tudo pronto!</h4>
                        <p className="text-slate-400 mb-6">Confirme o envio dos dados para nossa equipe.</p>
                        <div className="bg-slate-950/50 p-4 rounded-xl text-left border border-white/5 mb-6">
                           <p className="text-xs text-slate-500 mb-1">Nome: <span className="text-white font-bold">{formData.name}</span></p>
                           <p className="text-xs text-slate-500 mb-1">E-mail: <span className="text-white font-bold">{formData.email}</span></p>
                           <p className="text-xs text-slate-500 mb-1">WhatsApp: <span className="text-white font-bold">{formData.phone}</span></p>
                           <p className="text-xs text-slate-500">Loja: <span className="text-white font-bold">{formData.store}</span></p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex gap-4">
                    {formStep > 1 && (
                      <button 
                        type="button" 
                        onClick={() => setFormStep(prev => prev - 1)}
                        className="px-6 py-4 border border-slate-700 text-slate-400 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-slate-800 transition-all"
                      >
                        Voltar
                      </button>
                    )}
                    <button 
                      type="submit"
                      className="flex-1 py-4 bg-brand text-white font-black uppercase text-[12px] tracking-widest rounded-2xl shadow-lg hover:shadow-brand/20 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      {formStep === 5 ? "ENVIAR AGORA" : "PRÓXIMO"}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
            <div className="mt-6 md:mt-8 flex items-center justify-center gap-2 md:gap-3 text-brand font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] bg-brand/10 p-2 md:p-3 rounded-lg border border-brand/20">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0 drop-shadow-[0_0_8px_rgba(59,130,246,1)]" />
              <span className="text-center">Apenas 3 vagas de consultoria restantes neste mês</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-16 border-t border-white/5 bg-slate-950 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Section: Contact Info */}
          <div className="flex justify-center md:justify-start mb-16">
            <div className="flex flex-col items-start">
              <span className="text-brand text-[9px] font-black uppercase tracking-[0.3em] mb-4 ml-6 opacity-60">Canais de Contato</span>
              <div className="inline-flex flex-col items-start gap-4 border-l-2 border-brand/30 pl-6 py-2">
                <a href="mailto:dinamizemarketing@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors group">
                  <Mail size={18} className="text-brand group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em]">dinamizemarketing@gmail.com</span>
                </a>
                <a href="https://wa.me/559991863273" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors group">
                  <Phone size={18} className="text-brand group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em]">(99) 9186-3273</span>
                </a>
                <a href="https://www.instagram.com/dinamize_7?igsh=N2kwZG1heTY0YTIx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors group">
                  <Instagram size={18} className="text-brand group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.1em]">@dinamize_7</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section: Logo + Copyright | Links */}
          <div className="pt-10 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-row items-center gap-3 md:gap-6">
              <img 
                src="https://i.imgur.com/ybbaDE9.png" 
                alt="Dinamize Logo" 
                className="h-8 md:h-12 object-contain shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="h-6 md:h-8 w-px bg-slate-800 shrink-0" />
              <div className="text-left">
                <p className="text-slate-600 text-[8px] sm:text-[10px] uppercase font-bold tracking-[0.1em] sm:tracking-[0.2em] leading-tight">
                  © 2026 DINAMIZE (D7) • TODOS OS DIREITOS RESERVADOS <br className="hidden sm:block" />
                  <span className="text-slate-700 sm:ml-1">MARKETING ESTRATÉGICO</span>
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest leading-none">Termos</a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest leading-none">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 flex items-center gap-3 z-50 pointer-events-none"
          >
            <AnimatePresence>
              {showBackToTopMessage && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  className="bg-brand text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl"
                >
                  Voltar ao início
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 bg-slate-800/80 backdrop-blur-md border border-slate-700 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-700 hover:scale-110 transition-all pointer-events-auto group"
            >
              <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
