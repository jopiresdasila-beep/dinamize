import React from 'react';
import { motion } from 'framer-motion';
import { 
  HardHat, 
  TrendingUp, 
  ShoppingCart, 
  Handshake 
} from 'lucide-react';
import { FallingBricksDecoration } from './FallingBricksDecoration';

export default function HookStrategySection() {
  return (
    <section className="relative w-full bg-white text-slate-900 overflow-hidden font-sans py-16 md:py-32">
      <FallingBricksDecoration />
      <div className="relative z-20 max-w-lg md:max-w-5xl mx-auto px-4 md:px-0">
        {/* Simplified Premium Header */}
        <div className="mb-12 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-6 border border-blue-100 px-4 py-1.5 rounded-full">
              Metodologia Dinamize
            </span>
            <h4 className="text-slate-400 text-xs md:text-base font-medium uppercase tracking-[0.2em] max-w-xs md:max-w-none">
              Estratégia que Constrói. Resultados que Sustentam.
            </h4>
          </motion.div>
        </div>

        <div className="relative w-full flex flex-col items-center">

          {/* Layer 2: Main Hook Image */}
          <div className="relative z-20 w-full max-w-[280px] md:max-w-[700px] aspect-[1/2.8] md:aspect-[1/2]">
            {/* Top Fade/Blur to avoid sharp cut */}
            <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-30 pointer-events-none" />
            
            <img 
              src="https://i.ibb.co/YFLWfkv5/nivel.png" 
              alt="Cabo Hook" 
              className="w-full h-full object-contain object-top" 
            />

            {/* Step 1 - Left */}
            <motion.div 
              initial={{ opacity: 0.4, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              className="absolute top-[2%] md:top-[5%] left-[-15%] md:left-[-15%] w-[45%] md:w-[45%] text-right flex flex-col items-end z-30"
            >
              <div className="text-blue-600 mb-1"><HardHat className="w-4 h-4 md:w-8 md:h-8" /></div>
              <span className="text-xl md:text-5xl font-black text-slate-950 mb-0 leading-none">01</span>
              <div className="bg-blue-600 text-white px-1 py-0.5 md:px-3 md:py-1 mb-1 mt-1">
                 <h3 className="text-[8px] md:text-lg font-black uppercase tracking-tight leading-none text-white text-right">
                   POSICIONAMENTO DE<br/>AUTORIDADE
                 </h3>
              </div>
              <p className="text-slate-500 text-[7px] md:text-sm max-w-[100px] md:max-w-xs leading-tight font-medium text-right">
                Construímos marcas fortes no mercado para sua loja se tornar referência.
              </p>
            </motion.div>

            {/* Step 2 - Right */}
            <motion.div 
              initial={{ opacity: 0.4, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              className="absolute top-[20%] md:top-[25%] right-[-20%] md:right-[-20%] w-[45%] md:w-[45%] text-left flex flex-col items-start z-30"
            >
              <div className="text-blue-600 mb-1"><TrendingUp className="w-4 h-4 md:w-8 md:h-8" /></div>
              <span className="text-xl md:text-5xl font-black text-slate-950 mb-0 leading-none">02</span>
              <div className="bg-blue-600 text-white px-1 py-0.5 md:px-3 md:py-1 mb-1 mt-1">
                <h3 className="text-[8px] md:text-lg font-black uppercase tracking-tight leading-none text-white text-left">
                  TRÁFEGO QUE GERA<br/>CLIENTES
                </h3>
              </div>
              <p className="text-slate-500 text-[7px] md:text-sm max-w-[100px] md:max-w-[200px] leading-tight font-medium text-left">
                Campanhas estratégicas que levam o cliente certo até sua loja e aumentam suas vendas.
              </p>
            </motion.div>

            {/* Step 3 - Left */}
            <motion.div 
              initial={{ opacity: 0.4, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              className="absolute top-[40%] md:top-[45%] left-[-10%] md:left-[-10%] w-[45%] md:w-[45%] text-right flex flex-col items-end z-30"
            >
              <div className="text-blue-600 mb-1"><ShoppingCart className="w-4 h-4 md:w-8 md:h-8" /></div>
              <span className="text-xl md:text-5xl font-black text-slate-950 mb-0 leading-none">03</span>
              <div className="bg-blue-600 text-white px-1 py-0.5 md:px-3 md:py-1 mb-1 mt-1">
                <h3 className="text-[8px] md:text-lg font-black uppercase tracking-tight leading-none text-white text-right">
                  CONTEÚDO QUE VENDE
                </h3>
              </div>
              <p className="text-slate-500 text-[7px] md:text-sm max-w-[100px] md:max-w-xs leading-tight font-medium text-right">
                Conteúdo que educa, conecta e acelera a decisão de compra.
              </p>
            </motion.div>

            {/* Step 4 - Right */}
            <motion.div 
              initial={{ opacity: 0.4, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }}
              className="absolute top-[58%] md:top-[65%] right-[-10%] md:right-[-12%] w-[45%] md:w-[45%] text-left flex flex-col items-start z-30"
            >
               <div className="text-blue-600 mb-1"><Handshake className="w-4 h-4 md:w-8 md:h-8" /></div>
              <span className="text-xl md:text-5xl font-black text-slate-950 mb-0 leading-none">04</span>
              <div className="bg-blue-600 text-white px-1 py-0.5 md:px-3 md:py-1 mb-1 mt-1">
                <h3 className="text-[8px] md:text-lg font-black uppercase tracking-tight leading-none text-white text-left">
                  RELACIONAMENTO QUE FIDELIZA
                </h3>
              </div>
              <p className="text-slate-500 text-[7px] md:text-sm max-w-[100px] md:max-w-xs leading-tight font-medium text-left">
                Transformamos compradores em defensores da sua loja.
              </p>
            </motion.div>

          </div>

          {/* PREMIUM TYPOGRAPHIC COMPOSITION - NIKE/APPLE STYLE */}
          <div className="mt-8 md:mt-12 text-center w-full max-w-6xl mx-auto px-4 relative z-40 pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              {/* Main anchor text */}
              <h2 className="text-[14vw] md:text-[10rem] font-black tracking-[-0.06em] uppercase leading-[0.8] mb-8 md:mb-12 text-slate-900">
                SUA LOJA
              </h2>
              
              {/* Transition phrase */}
              <div className="flex flex-col items-center gap-6 md:gap-12">
                <span className="text-[12px] md:text-2xl font-bold uppercase tracking-[0.6em] text-slate-400">
                  PARA O PRÓXIMO
                </span>
                
                {/* Final Goal */}
                <h3 className="text-[18vw] md:text-[13rem] font-black tracking-[-0.04em] uppercase leading-none text-blue-600">
                  NÍVEL.
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
