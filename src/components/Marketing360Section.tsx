import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  Layout,
  Video,
  Search,
  CalendarDays,
  Palette,
  Instagram,
  BarChart2,
  MessageCircle,
  X
} from 'lucide-react';

const services = [
  { 
    icon: Layout, 
    title: "Websites & Landing Pages", 
    subtitle: "Sites que convertem.",
    description: "Estruturas de alta conversão para transformar visitantes em clientes fiéis.", 
    image: "https://i.imgur.com/KzeVUJb.png",
    details: "Criamos páginas focadas em conversão, otimizadas para velocidade, responsivas em todos os dispositivos e com design centrado na experiência do usuário.\n\nElas são projetadas especificamente para receber tráfego qualificado e conduzir o visitante por uma jornada persuasiva até que ele tome a ação desejada: seja uma compra, envio de formulário ou contato no WhatsApp." 
  },
  { 
    icon: Search, 
    title: "SEO Local & Google", 
    subtitle: "Apareça no Google.",
    description: "Domine as buscas da sua região e seja a escolha óbvia dos seus clientes.", 
    image: "https://i.imgur.com/awSp9tz.png",
    details: "Posicionamos sua empresa no topo do Google quando os clientes estão ativamente buscando pelos seus serviços.\n\nIsso inclui a otimização completa do seu Perfil da Empresa no Google (antigo Google Meu Negócio), configuração de palavras-chave locais e estratégias de SEO para garantir que você seja encontrado antes da concorrência na sua cidade e região." 
  },
  { 
    icon: CalendarDays, 
    title: "Cronograma de Postagens", 
    subtitle: "Planejamento que organiza e gera resultados.",
    description: "Mapeamento estratégico de publicações para manter sua audiência sempre engajada e atrair novas vendas.", 
    image: "https://i.imgur.com/TIRpznd.png",
    details: "Construímos o fluxo ideal de postagens para sua marca ganhar constância e relevância ao longo da semana.\n\nNosso método planeja temas de topo, meio e fundo de funil, distribuindo o conteúdo em dias estratégicos para aquecer o público e também oferecer seus produtos ou serviços no momento certo, evitando perfis panfleteiros e cansativos." 
  },
  { 
    icon: Instagram, 
    title: "Gestão de Redes Sociais", 
    subtitle: "Gestão estratégica que engaja.",
    description: "Posicionamento de autoridade que transforma seguidores em compradores.", 
    image: "https://i.imgur.com/lQ6Svjh.png",
    details: "Assumimos a linha de frente do seu Instagram, organizando a casa, construindo branding de valor e alinhando cada detalhe visual.\n\nO objetivo é ter um perfil magnético que transmita imediatamente a credibilidade e a qualidade do seu negócio. Desde a bio, organização dos destaques, até o feed alinhado e cativante." 
  },
  { 
    icon: Megaphone, 
    title: "Gestão de Tráfego", 
    subtitle: "Performance escalável.",
    description: "Campanhas de alta performance focadas em escalar seu ROI e lucratividade.", 
    image: "https://i.imgur.com/zQ6fWvs.png",
    details: "Investimos de maneira calculada em anúncios pagos (Facebook Ads, Instagram Ads e Google Ads) para atrair milhares de pessoas segmentadas.\n\nAnalisamos métricas diariamente e otimizamos as campanhas para garantir o menor custo de aquisição e o maior retorno sobre investimento, levando uma enxurrada de clientes qualificados à sua porta todos os dias." 
  },
  { 
    icon: Palette, 
    title: "Design & Criativos", 
    subtitle: "Criativos que vendem.",
    description: "Materiais visuais com padrão ouro que destacam o seu negócio e valorizam sua marca frente à concorrência.", 
    image: "https://i.imgur.com/T3zVfSd.png",
    details: "Muito além de imagens bonitas. Produzimos recursos visuais (artes, anúncios e criativos) alinhados à identidade da marca.\n\nEsses criativos comunicam profissionalismo, geram confiança e superam visualmente os materiais da sua concorrência, aumentando diretamente o valor percebido do seu negócio no mercado." 
  },
  { 
    icon: Video, 
    title: "Editor de Vídeo", 
    subtitle: "Focado em Instagram.",
    description: "Edição dinâmica e envolvente para aumentar o engajamento e as vendas nas redes sociais.", 
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200",
    details: "Formatamos e editamos todo o material gravado para criar vídeos de alta retenção voltados para Reels, TikTok, YouTube Shorts etc.\n\nUtilizamos transições modernas, legendas dinâmicas, tratamento de cor, mixagem de áudio e todos os elementos necessários para garantir que sua mensagem chegue com clareza e alto nível profissional." 
  },
  { 
    icon: MessageCircle, 
    title: "Ferramentas para WhatsApp", 
    subtitle: "Automação e gestão de conversas.",
    description: "Facilite o atendimento, diminua a espera e aumente sua taxa de conversão diária.", 
    image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1200",
    details: "Implementamos integrações para o atendimento via WhatsApp do seu negócio. Desde respostas instantâneas, organização por etapas até disparo de lembretes e ofertas.\n\nCom ferramentas eficientes, você otimiza o tempo da sua equipe de vendas, garantindo que nenhum lead esfrie e todos os contatos recebam atenção rápida e profissional." 
  },
];

export default function Marketing360Section() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section 
      className="pb-16 md:pb-32 relative z-10 bg-white" 
      id="metodo"
    >
      {/* Edge-to-edge Image Divider (The "Divisão") */}
      <div className="w-screen absolute -top-12 sm:-top-20 md:-top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none lg:hidden">
        <img 
          src="https://i.imgur.com/ydIVbPF.png" 
          alt="Divisor de seção" 
          className="w-full h-auto block object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Soft Blue Vibrant Background with Radial Gradients for White Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-blue-100/50 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#001eff]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 w-full px-4 sm:px-6 pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        
        {/* Header Content - Updated for Light Theme */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Nossos Serviços
          </div>

          <h2 className="font-display flex flex-col items-center justify-center text-center uppercase w-full">
            <span className="text-sm sm:text-base md:text-lg tracking-[0.5em] font-semibold text-blue-700 mb-2">SOLUÇÕES</span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.1] text-slate-900 tracking-tight">EXPERIÊNCIA</span>
            <div className="flex items-center justify-center gap-2 md:gap-4 -mt-1 md:-mt-2">
              <span className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-500">EM</span>
              <div className="relative inline-block pb-2">
                <span className="relative z-10 text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-black leading-[1.1] text-blue-700 tracking-tight">
                  MARKETING
                </span>
              </div>
            </div>
          </h2>
        </motion.div>

        {/* Glowing Royal Blue Service Grid (Responsive: 2 mobile/tablet, 3 desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 md:gap-10 w-full max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onClick={() => {
                  setSelectedService(index);
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('trackCustom', 'ViewService', { service_name: service.title });
                  }
                }}
                className="group cursor-pointer relative"
              >
                {/* Hover Glowing Border Background */}
                <div className="absolute -inset-[1px] bg-blue-600/20 rounded-[2rem] sm:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

                {/* Card Container (Outline Blue) */}
                <div className="relative h-full p-5 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border-2 border-blue-700 flex flex-col items-center text-center overflow-hidden transition-all duration-500 group-hover:bg-blue-50/50 group-hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)]">
                  
                  {/* Icon */}
                  <div className="mb-4 sm:mb-10 relative">
                    <div className="w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                       <Icon className="w-8 h-8 sm:w-14 sm:h-14 text-blue-700 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2 sm:space-y-4 relative z-10">
                    <h3 className="text-sm sm:text-2xl font-bold text-blue-700 leading-tight tracking-tight px-1 sm:px-2 group-hover:text-blue-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-[10px] sm:text-base font-medium leading-relaxed max-w-[220px] mx-auto group-hover:text-slate-800 transition-colors">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
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
              <div className="p-0 overflow-y-auto custom-scrollbar relative z-10 flex-1">
                <div className="p-6 sm:p-8 pt-6">
                  <p className="text-slate-600 text-base sm:text-[17px] leading-[1.7] whitespace-pre-line font-medium">
                    {services[selectedService].details}
                  </p>
                </div>
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

