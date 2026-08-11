import { motion } from 'framer-motion';
import { Instagram, CloudLightning, ArrowRight } from 'lucide-react';

function XLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative px-6 pb-12 pt-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl glass-strong px-8 py-14 text-center md:px-16"
        >
          <div className="absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent-emerald/15 blur-[100px]" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Tu día empieza mejor informado.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-400">
             La información clave de Chile y el mundo, 
             sintetizada en tu correo antes de empezar tu día. Sin relleno.
            </p>
            <a
              href="#suscribete"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-emerald to-emerald-500 px-7 py-3.5 font-semibold text-ink-950 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] active:scale-95"
            >
              Suscribirme gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/[0.06] pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <CloudLightning className="h-5 w-5 text-accent-emerald" />
            <span className="font-display text-base font-semibold tracking-tight">
              El Brief Nimbos
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/briefnimbos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-gray-400 transition-all hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <XLogo className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://instagram.com/briefnimbos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-gray-400 transition-all hover:scale-110 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} El Brief Nimbos · Hecho con criterio
          </p>
        </div>
      </div>
    </footer>
  );
}
