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
      description: "Porque paramos de 'torcer para dar certo' e passamos a usar ciência de vendas. Eliminamos gargalos, engajamos apenas o público pronto para comprar e transformamos cada real investido na máxima rentabilidade.",
      locked: false
    }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-10 relative z-10 w-full overflow-hidden bg-[#040810]">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-brand/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase mb-6">
            <Zap className="w-4 h-4" />
            Método Exclusivo
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter italic skew-x-[-2deg] text-white">
            A CIÊNCIA POR TRÁS DA <span className="text-brand">ESTRATÉGIA 10P</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Não é mágica, é engenharia em vendas. Entenda como nossa metodologia cerca o seu cliente, cria autoridade inabalável e transforma visitantes em clientes compradores.
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
                        className={`flex gap-4 md:gap-6 items-start p-3 md:p-6 rounded-2xl transition-all border ${
                          isLocked 
                            ? 'bg-slate-900/30 border-slate-800 text-slate-500' 
                            : 'bg-slate-900/50 border-white/5 text-white hover:bg-slate-900/80 hover:border-brand/30'
                        }`}
                      >
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                          isLocked ? 'bg-slate-800 border-slate-700' : 'bg-brand/10 border-brand/20'
                        }`}>
                          <step.icon className={`w-5 h-5 md:w-6 md:h-6 ${isLocked ? 'text-slate-600' : 'text-brand'}`} />
                        </div>
                        
                        <div className="flex flex-col">
                          <h3 className="text-sm md:text-lg font-black uppercase tracking-tight mb-0.5 md:mb-1">
                            {step.title}
                          </h3>
                          <p className={`text-[11px] md:text-sm font-medium leading-relaxed ${isLocked ? 'text-slate-600' : 'text-slate-400'}`}>
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
                   className="mt-12 md:mt-16 bg-gradient-to-r from-brand/10 via-brand/5 to-transparent border border-brand/20 rounded-[2rem] p-6 md:p-12 flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="max-w-2xl text-left">
                    <h4 className="text-white text-[22px] md:text-3xl font-black mb-3 select-none leading-tight">
                      Resumo da Ópera: O 10P domina a jornada.
                    </h4>
                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                      Enquanto o "Marketing 360" posiciona você em todos os canais (Instagram, Google, Site, Videos...), o "Método 10P" garante que todos esses canais sejam altamente lucrativos, persuadindo seu Lead até o fechamento via WhatsApp ou Site.
                    </p>
                  </div>
                  
                  <div className="shrink-0 flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-slate-900 border border-slate-700 shadow-[0_0_30px_rgba(59,130,246,0.2)] md:self-center self-start">
                    <Target className="w-8 h-8 md:w-10 md:h-10 text-brand" strokeWidth={1.5} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand/Collapse Button */}
        <motion.div 
          layout
          className="mt-12 flex justify-center w-full"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand/10 text-brand font-bold text-sm tracking-widest uppercase rounded-full border border-brand/30 hover:bg-brand hover:text-white transition-all duration-300"
          >
            <span>{isExpanded ? "FECHAR DETALHES 10P" : "VOCÊ QUER SABER MAIS SOBRE A 10P?"}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            ) : (
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            )}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
