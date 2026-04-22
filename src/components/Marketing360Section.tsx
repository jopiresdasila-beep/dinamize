import React from 'react';
import { motion } from 'motion/react';
import {
  Megaphone,
  Layout,
  Video,
  Search,
  CalendarDays,
  Palette,
  Instagram
} from 'lucide-react';

const services = [
  { icon: Layout, title: "Websites &\nLanding Pages", description: "Estruturas de alta conversão para transformar visitantes em clientes fiéis." },
  { icon: Search, title: "SEO Local &\nGoogle", description: "Domine as buscas da sua região e seja a escolha óbvia dos seus clientes." },
  { icon: CalendarDays, title: "Cronograma\nde Postagens", description: "Mapeamento estratégico de publicações para manter sua audiência sempre engajada e atrair novas vendas." },
  { icon: Instagram, title: "Gerenciamento\nde Redes Sociais", description: "Posicionamento de autoridade que transforma seguidores em compradores." },
  { icon: Video, title: "Roteirização\nde Vídeos", description: "Roteiros magnéticos que prendem a atenção e conduzem direto para a venda." },
  { icon: Megaphone, title: "Gestão de Tráfego\n& Performance", description: "Campanhas de alta performance focadas em escalar seu ROI e lucratividade." },
  { icon: Palette, title: "Design &\nCriativos", description: "Materiais visuais com padrão ouro que destacam o seu negócio e valorizam sua marca frente à concorrência." },
];

export default function Marketing360Section() {
  return (
    <section className="py-24 px-6 md:px-10 relative z-10 overflow-hidden" id="metodo">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 max-w-4xl relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Ecossistema Completo
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter italic skew-x-[-2deg] text-gradient">
            MARKETING 360º +<br/>ESTRATÉGIA 10P
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            O <strong className="text-white font-bold">Marketing 360º</strong> garante a amplitude da nossa atuação: sua marca com presença de alto nível em todos os canais digitais. Já a <strong className="text-brand font-bold drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">Estratégia 10P</strong> é a nossa base metodológica sólida, direcionando cada ação para um único propósito: gerar resultados reais e previsíveis.
          </p>
        </motion.div>

        {/* Unified Responsive Grid (HTML Compatible / Document Flow) */}
        <div className="w-full mt-10 md:mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          
          {/* Main 360 Hub Card (Spans 2 columns on desktop/tablet) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-[#0B1120] p-8 md:p-12 rounded-[2rem] border border-brand/20 text-left relative overflow-hidden flex flex-col justify-center shadow-[0_0_40px_rgba(59,130,246,0.1)] group"
          >
            <div className="absolute inset-0 bg-brand/5 blur-[50px] animate-pulse" />
            <h3 className="text-6xl md:text-8xl font-black text-white font-display tracking-tighter drop-shadow-2xl relative z-10 flex items-start">
              360<span className="text-brand text-4xl md:text-6xl mt-1.5 md:mt-2">º</span>
            </h3>
            <p className="text-white font-bold uppercase tracking-[0.2em] text-sm md:text-lg mt-2 mb-1 relative z-10">Digital Solutions</p>
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-brand to-transparent my-4 relative z-10" />
            <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest font-semibold relative z-10">
              Powered by <span className="text-brand">10P™</span>
            </p>
          </motion.div>

          {/* Service Cards Standard Flow */}
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0B1120] border border-slate-800/70 hover:border-brand/40 rounded-[2rem] flex flex-col items-start text-left p-6 md:p-7 shadow-lg w-full transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 group"
            >
              {/* Top Row: Icon + Title */}
              <div className="flex items-center gap-4 w-full mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-700/80 to-slate-800/80 group-hover:from-brand/20 group-hover:to-brand/5 transition-colors rounded-2xl flex items-center justify-center shrink-0 border border-slate-600/30 group-hover:border-brand/40 shadow-inner">
                  <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-brand group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-colors" strokeWidth={2} />
                </div>
                <span className="text-white text-[16px] md:text-lg font-black whitespace-pre-line leading-tight">
                  {service.title}
                </span>
              </div>
              
              {/* Bottom: Description */}
              <div className="w-full mt-1">
                <span className="text-slate-300 text-[14px] md:text-[15px] font-medium leading-[1.5] block">
                  {service.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
