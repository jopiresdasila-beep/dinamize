import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  Layout,
  Video,
  Search,
  CalendarDays,
  Palette,
  Instagram,
  X
} from 'lucide-react';

const services = [
  { icon: Layout, title: "Websites &\nLanding Pages", description: "Estruturas de alta conversão para transformar visitantes em clientes fiéis.", details: "Criamos páginas focadas em conversão, otimizadas para velocidade, responsivas em todos os dispositivos e com design centrado na experiência do usuário.\n\nElas são projetadas especificamente para receber tráfego qualificado e conduzir o visitante por uma jornada persuasiva até que ele tome a ação desejada: seja uma compra, envio de formulário ou contato no WhatsApp." },
  { icon: Search, title: "SEO Local &\nGoogle", description: "Domine as buscas da sua região e seja a escolha óbvia dos seus clientes.", details: "Posicionamos sua empresa no topo do Google quando os clientes estão ativamente buscando pelos seus serviços.\n\nIsso inclui a otimização completa do seu Perfil da Empresa no Google (antigo Google Meu Negócio), configuração de palavras-chave locais e estratégias de SEO para garantir que você seja encontrado antes da concorrência na sua cidade e região." },
  { icon: CalendarDays, title: "Cronograma\nde Postagens", description: "Mapeamento estratégico de publicações para manter sua audiência sempre engajada e atrair novas vendas.", details: "Construímos o fluxo ideal de postagens para sua marca ganhar constância e relevância ao longo da semana.\n\nNosso método planeja temas de topo, meio e fundo de funil, distribuindo o conteúdo em dias estratégicos para aquecer o público e também oferecer seus produtos ou serviços no momento certo, evitando perfis panfleteiros e cansativos." },
  { icon: Instagram, title: "Gerenciamento\nde Redes Sociais", description: "Posicionamento de autoridade que transforma seguidores em compradores.", details: "Assumimos a linha de frente do seu Instagram, organizando a casa, construindo branding de valor e alinhando cada detalhe visual.\n\nO objetivo é ter um perfil magnético que transmita imediatamente a credibilidade e a qualidade do seu negócio. Desde a bio, organização dos destaques, até o feed alinhado e cativante." },
  { icon: Video, title: "Roteirização\nde Vídeos", description: "Roteiros magnéticos que prendem a atenção e conduzem direto para a venda.", details: "Descobrimos o ângulo perfeito para os seus vídeos (Tiktok, Reels, Shorts). Usamos técnicas de copywriting para prender a atenção nos primeiros 3 segundos.\n\nTe entregamos roteiros completos, indicando o que você ou sua equipe devem gravar e falar, passo a passo, construindo o desejo pela sua solução antes da chamada para ação final." },
  { icon: Megaphone, title: "Gestão de Tráfego\n& Performance", description: "Campanhas de alta performance focadas em escalar seu ROI e lucratividade.", details: "Investimos de maneira calculada em anúncios pagos (Facebook Ads, Instagram Ads e Google Ads) para atrair milhares de pessoas segmentadas.\n\nAnalisamos métricas diariamente e otimizamos as campanhas para garantir o menor custo de aquisição e o maior retorno sobre investimento, levando uma enxurrada de clientes qualificados à sua porta todos os dias." },
  { icon: Palette, title: "Design &\nCriativos", description: "Materiais visuais com padrão ouro que destacam o seu negócio e valorizam sua marca frente à concorrência.", details: "Muito além de imagens bonitas. Produzimos recursos visuais (artes, anúncios e criativos) alinhados à identidade da marca.\n\nEsses criativos comunicam profissionalismo, geram confiança e superam visualmente os materiais da sua concorrência, aumentando diretamente o valor percebido do seu negócio no mercado." },
];

export default function Marketing360Section() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
              onClick={() => setSelectedService(i)}
              className="bg-[#0B1120] border border-slate-800/70 hover:border-brand/40 rounded-[2rem] flex flex-col items-start text-left p-6 md:p-7 shadow-lg w-full transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 group cursor-pointer"
            >
              <div className="flex items-center justify-between w-full mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-700/80 to-slate-800/80 group-hover:from-brand/20 group-hover:to-brand/5 transition-colors rounded-2xl flex items-center justify-center shrink-0 border border-slate-600/30 group-hover:border-brand/40 shadow-inner">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:text-brand group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-colors" strokeWidth={2} />
                  </div>
                  <span className="text-white text-[16px] md:text-lg font-black whitespace-pre-line leading-tight">
                    {service.title}
                  </span>
                </div>
              </div>
              
              <div className="w-full mt-1 flex-1 flex flex-col justify-between">
                <span className="text-slate-300 text-[14px] md:text-[15px] font-medium leading-[1.5] block mb-4">
                  {service.description}
                </span>
                <span className="text-brand text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-auto">
                  Ler detalhes <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-[#020513]/80 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-gradient-to-b from-[#0e162c] to-[#040816] rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 relative z-10 shrink-0 bg-[#0e162c]">
                <div className="flex items-center gap-4 sm:gap-6">
                  {(() => {
                    const svc = services[selectedService];
                    const Icon = svc.icon;
                    return (
                      <>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0">
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        </div>
                        <h3 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-black text-white whitespace-pre-line leading-tight">
                          {svc.title}
                        </h3>
                      </>
                    )
                  })()}
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors absolute top-6 sm:top-8 right-6 sm:right-8"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar relative z-10 flex-1">
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                  {services[selectedService].details}
                </p>
              </div>
              
              {/* Decorative glows */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand/10 blur-[100px] pointer-events-none rounded-full" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
