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
    <section className="py-12 px-6 md:px-10 relative z-10 overflow-hidden bg-[#F8FAFC]" id="metodo">
      {/* Background Decor (Clean, Modern, Technological Abstract Industrial) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Isometric Grid Base */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(to right, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        {/* Abstract Modular Blocks/Bars */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-64 h-32 border border-slate-200/60 rounded-[2rem] bg-slate-50/50 backdrop-blur-sm -rotate-6 hidden md:block"
        >
          <div className="absolute top-4 left-4 w-12 h-1 bg-brand/20 rounded-full" />
          <div className="absolute bottom-4 right-4 w-20 h-1 bg-brand/10 rounded-full" />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[20%] left-[5%] w-48 h-48 border border-slate-200/80 rounded-[2.5rem] bg-white/40 backdrop-blur-md rotate-12 flex flex-col justify-between p-6 shadow-[0_10px_40px_rgba(59,130,246,0.03)] hidden md:flex"
        >
          <div className="w-8 h-8 rounded-lg bg-brand/10 border border-brand/20" />
          <div className="w-full flex gap-2">
            <div className="flex-1 h-1.5 bg-slate-200 rounded-full" />
            <div className="w-4 h-1.5 bg-brand/30 rounded-full" />
          </div>
        </motion.div>

        <motion.div 
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[-2%] w-24 h-64 border border-brand/10 rounded-[1.5rem] bg-gradient-to-b from-brand/[0.02] to-transparent hidden lg:block"
        />

        {/* Soft Gradients */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-[600px] bg-gradient-to-bl from-blue-100/50 via-transparent to-transparent opacity-80 rounded-bl-full" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/5 border border-brand/20 text-brand text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Ecossistema Completo
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter italic skew-x-[-2deg] text-slate-900">
            NOSSA ATUAÇÃO:<br/>SERVIÇOS 360º
          </h2>
          
          <p className="text-slate-600 text-lg md:text-xl leading-[1.6] max-w-3xl mx-auto font-medium">
            O <strong className="text-slate-900 font-bold">Marketing 360º</strong> garante a amplitude da nossa atuação: sua marca com presença de alto nível em todos os canais digitais. Já a <strong className="text-brand font-bold">Estratégia 10P</strong> é a nossa base metodológica sólida, direcionando cada ação para um único propósito: gerar resultados reais e previsíveis.
          </p>
        </motion.div>

        {/* Unified Responsive Grid (HTML Compatible / Document Flow) */}
        <div className="w-full mt-10 md:mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          
          {/* Main 360 Hub Card (Spans 2 columns on desktop/tablet) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gradient-to-br from-white to-[#F1F5F9] p-8 md:p-12 rounded-[2rem] border border-slate-200 text-left relative overflow-hidden flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_20px_40px_rgb(59,130,246,0.08)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-brand/5 blur-[50px] animate-pulse opacity-50" />
            
            {/* Architectural decorative line */}
            <div className="absolute top-0 right-12 w-px h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent opacity-50" />
            <div className="absolute top-12 right-0 w-full h-px bg-gradient-to-l from-transparent via-slate-200 to-transparent opacity-50" />

            <h3 className="text-6xl md:text-8xl font-black text-slate-900 font-display tracking-tighter relative z-10 flex items-start drop-shadow-sm">
              360<span className="text-brand text-4xl md:text-6xl mt-1.5 md:mt-2">º</span>
            </h3>
            <p className="text-brand font-bold uppercase tracking-[0.2em] text-sm md:text-lg mt-2 mb-1 relative z-10">Digital Solutions</p>
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-brand to-transparent my-4 relative z-10 opacity-70" />
            <p className="text-slate-500 text-xs md:text-sm uppercase tracking-widest font-semibold relative z-10">
              Powered by <span className="text-brand font-bold">10P™</span>
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
              className="bg-white/80 backdrop-blur-md border border-slate-200 hover:border-brand/30 rounded-[2rem] flex flex-col items-start text-left p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] w-full transition-all duration-300 hover:shadow-[0_15px_35px_rgba(59,130,246,0.08)] hover:-translate-y-1.5 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-center justify-between w-full mb-5 relative z-10">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 group-hover:bg-brand/5 border border-slate-100 group-hover:border-brand/20 transition-colors rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-brand stroke-[2.5] opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-slate-900 text-base md:text-lg font-bold whitespace-pre-line leading-tight tracking-tight">
                    {service.title}
                  </h4>
                </div>
              </div>
              
              <div className="w-full mt-1 flex-1 flex flex-col justify-between relative z-10">
                <span className="text-slate-500 text-[13px] md:text-[14px] font-medium leading-[1.6] block mb-5">
                  {service.description}
                </span>
                <span className="text-brand text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1 mt-auto">
                  Detalhes <span className="group-hover:translate-x-1 transition-transform">→</span>
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
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-slate-100 relative z-10 shrink-0 bg-white/80 backdrop-blur-md">
                <div className="flex items-center gap-4 sm:gap-6">
                  {(() => {
                    const svc = services[selectedService];
                    const Icon = svc.icon;
                    return (
                      <>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand stroke-[2.5]" />
                        </div>
                        <h3 id="modal-title" className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 whitespace-pre-line leading-tight tracking-tight">
                          {svc.title}
                        </h3>
                      </>
                    )
                  })()}
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors absolute top-6 sm:top-8 right-6 sm:right-8"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar relative z-10 flex-1">
                <p className="text-slate-600 text-base sm:text-[17px] leading-[1.7] whitespace-pre-line font-medium">
                  {services[selectedService].details}
                </p>
              </div>
              
              {/* Decorative glows */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-brand/[0.02] to-transparent pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

