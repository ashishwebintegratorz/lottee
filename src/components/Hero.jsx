'use client';

import { motion } from 'framer-motion';

const heroText =
  'antialiased leading-[0.92] tracking-[-0.02em] font-medium text-[clamp(2.15rem,8.5vw,6rem)] sm:text-[clamp(2.75rem,9vw,6.5rem)] md:text-[clamp(2.85rem,7.5vw,5.5rem)] lg:text-[clamp(2.6rem,6vw,4.5rem)] xl:text-[4.5rem] 2xl:text-[5rem]';

export default function Hero() {
  return (
    <section
      className="hero-section relative h-[100dvh] lg:h-[115vh] w-full overflow-hidden bg-black antialiased"
      style={{ textRendering: 'optimizeLegibility' }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/expo-new-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25" aria-hidden />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-10 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20 sm:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="relative w-full max-w-[1400px] mx-auto flex justify-center">
          <div
            className={`flex flex-col text-white overflow-hidden w-full max-w-[min(90vw,1100px)] lg:ml-[6rem] xl:ml-[14rem] ${heroText}`}
            style={{ fontFamily: "'Roc Grotesk', sans-serif" }}
          >
          </div>

          {/* Desktop right text */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="stay-tuned-desktop hidden lg:flex flex-col absolute right-0 -top-32 text-right"
            style={{
              fontFamily: "'Roc Grotesk', sans-serif",
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              willChange: 'transform',
            }}
          >
            <p
              className="stay-tuned-title uppercase text-white/95"
              style={{ fontSize: '13.5px', letterSpacing: '0.2em' }}
            >
              Lotte Aimee
            </p>

            <p
              className="stay-tuned-sub uppercase text-white/75 mt-1.5"
              style={{ fontSize: '12px', letterSpacing: '0.18em' }}
            >
              <span className="block">Choreographer</span>
              <span className="block">& Dancer</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mobile bottom text */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="lg:hidden absolute bottom-28 left-5 sm:left-8 z-10 text-white"
        style={{
          fontFamily: "'Roc Grotesk', sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          willChange: 'transform',
        }}
      >
        <p
          style={{ fontSize: '14px', letterSpacing: '0.12em', fontWeight: 500 }}
          className="uppercase text-white/90"
        >
          Lotte Aimee
        </p>

        <p
          style={{ fontSize: '11px', letterSpacing: '0.15em' }}
          className="uppercase text-white/70 mt-1"
        >
          <span className="block">Choreographer</span>
          <span className="block">& Dancer</span>
        </p>
      </motion.div>
    </section>
  );
}