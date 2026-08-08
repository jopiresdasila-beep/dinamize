import React, { useEffect, useState, useMemo, useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Marketing360Section from './components/Marketing360Section';

gsap.registerPlugin(ScrollTrigger);

const CinematicHeroBackground = ({ src, hookSrc, isMobileImg }: { src: string, hookSrc?: string, isMobileImg?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLImageElement>(null);
  const layoutRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let ctx = gsap.context(() => {
      const hook = hookRef.current;
      const layout = layoutRef.current;
      
      const tl = gsap.timeline({
        delay: 0.2
      });

      if (hook) {
         // Hook drops in like heavy machinery
         gsap.set(hook, { y: "-60%", rotationZ: -5, transformOrigin: "50% -5%" });
         tl.to(hook, { 
            y: "-4%", // Drops slightly past center
            rotationZ: 2, 
            duration: 1.2, 
            ease: "sine.inOut"
         }, 0);
         
         // Hook pulls UP
         tl.to(hook, {
            y: "-8%",
            duration: 1.5,
            ease: "sine.inOut"
         }, 1.2);
      }

      const swayDelay = hook ? 1.2 : 0;
      
      if (layout) {
          gsap.set(layout, { transformOrigin: "50% 50%" });
          gsap.to(layout, {
              rotationZ: 0.5,
              duration: 4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: swayDelay
          });
      }

      if (hook) {
          gsap.to(hook, {
              rotationZ: -1.5,
              duration: 4,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
              delay: swayDelay
          });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 z-0 bg-[#021c91] overflow-hidden ${isMobileImg ? 'md:hidden' : 'hidden md:block'}`}>
       <img 
         ref={layoutRef} 
         src={src}
         alt="Background"
         className="absolute inset-0 w-full h-full object-cover object-top z-0 scale-[1.05]" 
       />
       
       {hookSrc && (
           <img 
              ref={hookRef}
              src={hookSrc}
              alt="Gancho"
              className={isMobileImg 
                ? "absolute top-[8%] right-0 w-[50%] sm:w-[45%] h-[110%] object-contain object-top z-10 pointer-events-none"
                : "absolute -top-[5%] left-0 right-0 mx-auto w-[90%] md:w-[60%] lg:w-[45%] h-[110%] md:h-[110%] object-contain object-top z-10 pointer-events-none"
              }
           />
       )}
    </div>
  );
};

export default function App() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [state, handleSubmit] = useForm("mzdloevy");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Dispara o evento de Lead do Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    await handleSubmit(e);
    if ((e.target as HTMLFormElement).reset) {
        (e.target as HTMLFormElement).reset();
    }
  };

  useEffect(() => {
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', handleResize);

    // LGPD Cookie Check
    const consent = localStorage.getItem('dinamize_cookie_consent');
    if (!consent) {
      setShowCookieBanner(true);
    }

    // Scroll Depth Tracking
    const trackedDepths = new Set<number>();
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight * 100;
      const thresholds = [25, 50, 75, 100];
      
      thresholds.forEach(threshold => {
        // Use 99% for the 100% threshold to avoid rounding issues at the absolute bottom
        const target = threshold === 100 ? 99 : threshold;
        if (scrollPercentage >= target && !trackedDepths.has(threshold)) {
          trackedDepths.add(threshold);
          if (typeof window !== 'undefined' && (window as any).fbq) {
            (window as any).fbq('trackCustom', 'ScrollDepth', { depth: `${threshold}%` });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('dinamize_cookie_consent', 'true');
    setShowCookieBanner(false);
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('trackCustom', 'AcceptCookies');
    }
  };

  const images = [
    "https://i.imgur.com/hp5FB7Z.png",
    "https://i.imgur.com/00p0SaB.png",
    "https://i.imgur.com/byc0gXl.png"
  ];

  if (!isClient) return <div className="w-screen h-screen bg-slate-900" />;

  return (
    <div className="relative w-full min-h-screen font-sans">
      
      {/* NORMAL SITE */}
      <div className="relative w-full h-full z-0 bg-white">
        
        {/* Cover Hero */}
        <section className="relative w-full flex flex-col bg-[#021c91] overflow-hidden">
          
          {/* Cinematic CinematicHeroBackground for Desktop */}
          <CinematicHeroBackground 
            src="https://i.imgur.com/UV2yxMU.png" 
            hookSrc="https://i.imgur.com/WVOCsyy.png"
          />

          {/* Cinematic CinematicHeroBackground for Mobile */}
          <CinematicHeroBackground 
            src="https://i.imgur.com/MNjyIJL.png" 
            hookSrc="https://i.imgur.com/WVOCsyy.png"
            isMobileImg={true}
          />

          {/* Mobile Image (in-flow to show full cover height) */}
          <div className="w-full md:hidden relative z-0 pointer-events-none opacity-0">
            {/* Kept invisible to maintain the layout height of the section correctly on mobile if needed */}
            <img 
              src="https://i.imgur.com/MNjyIJL.png" 
              alt="Capa Dinamize" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            {/* Blur fading up to half of the cover */}
            <div 
              className="absolute inset-x-0 bottom-0 h-[50%] pointer-events-none backdrop-blur-md"
              style={{ WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)', maskImage: 'linear-gradient(to top, black 20%, transparent 100%)' }}
            ></div>
            {/* Blend transition into the blue background */}
            <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#021c91] via-[#021c91]/80 to-transparent pointer-events-none"></div>
          </div>

          {/* Desktop Image (in-flow to show full cover height) */}
          <div className="hidden md:block w-full relative z-0 pointer-events-none opacity-0">
            <img 
              src="https://i.imgur.com/UV2yxMU.png" 
              alt="Capa Dinamize Desktop" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating WhatsApp Button (Inside Hero now) */}
          <div className="absolute z-30 bottom-[48%] sm:bottom-[52%] md:bottom-[8%] lg:bottom-[10%] xl:bottom-[12%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[5%] lg:left-[5%] xl:left-[8%] w-auto flex justify-center md:justify-start">
            <motion.a
              href="https://wa.me/559991863273?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Contact');
                }
              }}
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1, 0.95, 1.05, 1, 1]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, times: [0, 0.83, 0.86, 0.89, 0.92, 1], ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden flex items-center justify-start gap-3 md:gap-4 bg-[#2cb75e] text-white px-5 py-3 md:px-12 md:py-5 w-max rounded-xl md:rounded-2xl font-extrabold text-[11px] sm:text-[13px] leading-[1.3] md:text-base lg:text-lg tracking-[0.05em] shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-shadow border-b-[4px] md:border-b-[5px] border-[#1e8544] hover:border-[#196b37] hover:bg-[#28ad57] group"
            >
              {/* Efeito de carregamento contínuo (loading bar effect) */}
              <motion.div 
                className="absolute inset-0 bg-white/20 origin-left"
                animate={{ 
                  scaleX: [0, 0, 0, 1, 1, 0],
                  opacity: [0, 0, 1, 1, 0, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  times: [0, 0.5, 0.51, 0.83, 0.86, 1], 
                  ease: "linear" 
                }}
              />
              <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current relative z-10 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span className="relative z-10 whitespace-nowrap">ENVIAR MENSAGEM NO WHATSAPP</span>
            </motion.a>
          </div>

        </section>

        <Marketing360Section />
        
        {/* Portfólio Carousel */}
        <section className="py-8 md:py-32 overflow-hidden relative w-full bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black font-display text-slate-900 tracking-tighter uppercase italic skew-x-[-2deg]">
              Nosso <span className="text-blue-600">Portfólio</span>
            </h2>
            <p className="text-slate-600 font-medium mt-2 max-w-xl text-sm md:text-base">
              Criativos estratégicos e design de alto padrão, desenvolvidos sob medida para o seu segmento.
            </p>
          </div>

          <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-max">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, ease: "linear", repeat: Infinity }}
              className="flex gap-4 md:gap-8 px-4 items-center"
            >
              {[0, 1, 2, 3].map((loopIndex) => (
                <React.Fragment key={loopIndex}>
                  {images.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative w-[85vw] max-w-[1200px] aspect-video rounded-2xl md:rounded-3xl overflow-hidden shrink-0 shadow-lg border border-slate-200 bg-white group flex items-center justify-center p-0"
                    >
                      <div className="absolute inset-0 bg-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay pointer-events-none" />
                      <img 
                        src={img} 
                        alt={`Portfólio Dinamize ${index + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Formulário/CTA Section */}
        <section className="relative w-full bg-[#0012A3] py-24 md:py-32 flex justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0024f5_0%,_#000a5c_100%)] opacity-80" />
          
          <div className="relative z-10 max-w-4xl w-full text-center flex flex-col items-center">
            <h2 className="font-display flex flex-col items-center justify-center text-center uppercase w-full mb-8">
              <span className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white tracking-tight drop-shadow-2xl">
                O CRESCIMENTO
              </span>
              <div className="relative inline-block mt-1 sm:mt-2">
                <span className="relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.1] text-blue-400 tracking-tight drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  NÃO ESPERA.
                </span>
                {/* Glass reflection overlay */}
                <span 
                  className="absolute inset-0 z-20 text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.1] tracking-tight bg-gradient-to-tr from-transparent via-white/80 to-transparent bg-clip-text text-transparent pointer-events-none select-none" 
                  aria-hidden="true"
                >
                  NÃO ESPERA.
                </span>
              </div>
            </h2>
            <p className="text-blue-100/80 text-lg md:text-xl mb-12 max-w-2xl font-medium">
              Preencha os dados abaixo e nossa equipe entrará em contato com você o mais rápido possível para montar sua estratégia de crescimento.
            </p>

            <form onSubmit={handleFormSubmit} className="w-full max-w-md flex flex-col gap-4">
              <input 
                type="text" 
                name="name"
                placeholder="Seu Nome" 
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all backdrop-blur-md"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input 
                type="email" 
                name="email"
                placeholder="Seu E-mail" 
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all backdrop-blur-md"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <input 
                type="tel" 
                name="phone"
                placeholder="Seu Telefone / WhatsApp" 
                required
                className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all backdrop-blur-md"
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              <button 
                type="submit"
                disabled={state.submitting || state.succeeded}
                className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Enviando...
                  </>
                ) : state.succeeded ? (
                  <>
                    <CheckCircle2 className="w-6 h-6 text-green-300" />
                    Formulário Enviado!
                  </>
                ) : (
                  "Garantir Minha Vaga"
                )}
              </button>

              <div className="flex items-center gap-4 my-2 opacity-60">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-white text-sm uppercase tracking-wider font-semibold">OU</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              <a 
                href="https://wa.me/559991863273?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'Contact');
                  }
                }}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:-translate-y-1 uppercase tracking-wider flex items-center justify-center gap-3"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chamar no WhatsApp
              </a>
            </form>
          </div>
        </section>

      </div>

      {/* LGPD Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 p-4 sm:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-gray-700 text-sm sm:text-base flex-1">
            <p>
              Utilizamos cookies e tecnologias como o <strong>Meta Pixel</strong> para analisar o tráfego e otimizar campanhas, garantindo a melhor experiência para você.
            </p>
          </div>
          <div className="flex-shrink-0 w-full sm:w-auto">
            <button 
              onClick={acceptCookies}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors whitespace-nowrap"
            >
              Entendi e Aceito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
