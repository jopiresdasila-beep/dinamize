import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, TrendingUp, Zap, BarChart3, ShieldCheck, Crosshair, ChevronDown, ChevronUp, Lock } from 'lucide-react';

export default function Strategy10PSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    {
      icon: Crosshair,
      title: "O que é o 10P™?",
      description: "Uma metodologia autoral baseada em 10 Pilares de Conversão. Esqueça estratégias engessadas; o 10P é uma matriz viva que diagnostica e otimiza todas as pontas do seu negócio digital, cobrindo tudo o que impacta a decisão de compra.",
      locked: false
    },
    {
      icon: ShieldCheck,
      title: "Como funciona na prática?",
      description: "Atuamos em blocos: desde a correção do seu posicionamento e identidade da marca, passando por tráfego direcionado e roteiros de vendas, até a métrica final. Nenhuma ponta fica solta, o sistema é à prova de falhas.",
      locked: false
    },
    {
      icon: TrendingUp,
      title: "Por que faz vender muito mais?",
      description: "Porque paramos de 'torcer para dar certo' e passamos a usar inteligência estratégica. Eliminamos gargalos, engajamos apenas o público pronto para comprar e transformamos cada real investido em rentabilidade.",
      locked: false
    }
  ];

  return (
    <section className="py-12 md:py-20 px-6 md:px-10 relative z-10 w-full overflow-hidden bg-white">
      {/* Background Ornaments (Light Theme) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(to right, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Abstract Architectural Shapes */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[8%] w-40 h-40 border-2 border-slate-100 rounded-[2rem] bg-slate-50/50 backdrop-blur-md rotate-45 hidden lg:block"
        >
           <div className="absolute inset-2 border border-brand/10 rounded-[1.5rem]" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] w-72 h-48 border border-slate-200/50 rounded-[3rem] bg-white/60 backdrop-blur-sm -rotate-12 hidden md:flex flex-col gap-4 p-8 shadow-[0_15px_50px_rgba(59,130,246,0.02)]"
        >
          <div className="w-16 h-2 bg-brand/10 rounded-full" />
          <div className="w-24 h-2 bg-slate-100 rounded-full" />
          <div className="w-12 h-2 bg-slate-100 rounded-full" />
        </motion.div>

        {/* Glows */}
        <div className="absolute top-0 right-0 w-full h-[500px] bg-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <Zap className="w-4 h-4 text-brand" />
            Método Exclusivo
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter italic skew-x-[-2deg] text-slate-900">
            A PODEROSA <span className="text-brand">ESTRATÉGIA 10P</span>
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-[1.6]">
            Entenda como nossa metodologia exclusiva cerca o seu cliente, cria autoridade inabalável e transforma visitantes em compradores recorrentes.
          </p>
        </motion.div>

        {/* Info Grid & Bottom Banner Wrapper */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-4">
                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
                  {steps.map((step, i) => {
                    const isLocked = step.locked;

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (i % 4) * 0.05 }}
                        className={`flex gap-4 md:gap-6 items-start p-5 md:p-8 rounded-[2rem] transition-all border shadow-[0_4px_20px_rgba(0,0,0,0.02)] ${
                          isLocked 
                            ? 'bg-slate-50 border-slate-200 text-slate-400' 
                            : 'bg-white border-slate-200 text-slate-900 hover:shadow-[0_15px_35px_rgba(59,130,246,0.06)] hover:border-brand/30 hover:-translate-y-1'
                        }`}
                      >
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0 border ${
                          isLocked ? 'bg-slate-100 border-slate-200' : 'bg-slate-50 border-slate-100 shadow-sm'
                        }`}>
                          <step.icon className={`w-5 h-5 md:w-6 md:h-6 stroke-[2.5] ${isLocked ? 'text-slate-400' : 'text-brand'}`} />
                        </div>
                        
                        <div className="flex flex-col">
                          <h3 className="text-base md:text-lg font-black uppercase tracking-tight mb-1.5 md:mb-2 text-slate-900">
                            {step.title}
                          </h3>
                          <p className={`text-[13px] md:text-[15px] font-medium leading-[1.6] ${isLocked ? 'text-slate-400' : 'text-slate-600'}`}>
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Banner */}
                <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50/50 via-white to-slate-50 border border-brand/20 rounded-[2rem] p-8 md:p-12 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden shadow-[0_8px_30px_rgba(59,130,246,0.05)]"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="max-w-2xl text-left relative z-10">
                    <h4 className="text-slate-900 text-[22px] md:text-3xl font-black mb-3 select-none leading-tight tracking-tight">
                      Resumo da Ópera: O 10P domina a jornada.
                    </h4>
                    <p className="text-slate-600 text-[14px] md:text-base font-medium leading-[1.6]">
                      Enquanto o "Marketing 360" posiciona você em todos os canais (Instagram, Google, Site, Videos...), o "Método 10P" garante que todos esses canais sejam altamente lucrativos, persuadindo seu Lead até o fechamento via WhatsApp ou Site.
                    </p>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border border-slate-200 shadow-[0_10px_40px_rgba(59,130,246,0.15)] md:self-center self-start relative z-10">
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-brand stroke-[2]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <motion.div 
          layout
          className="mt-12 flex justify-center w-full relative z-10"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-800 font-bold text-sm tracking-widest uppercase rounded-full border border-slate-200 shadow-sm hover:shadow-[0_8px_25px_rgba(59,130,246,0.12)] hover:border-brand/30 hover:text-brand transition-all duration-300"
          >
            <span>{isExpanded ? "FECHAR DETALHES 10P" : "VOCÊ QUER SABER MAIS SOBRE A 10P?"}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform stroke-[2.5]" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform stroke-[2.5]" />
            )}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
