import { motion } from 'framer-motion';
import { CloudLightning } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl glass px-5 py-3">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <CloudLightning className="h-6 w-6 text-accent-emerald" />
              <div className="absolute inset-0 blur-md text-accent-emerald opacity-50">
                <CloudLightning className="h-6 w-6" />
              </div>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight">
              El Brief Nimbos
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
            <a href="#noticias" className="transition-colors hover:text-white">
              Noticias
            </a>
            <a href="#suscribete" className="transition-colors hover:text-white">
              Suscríbete
            </a>
            <a
              href="#suscribete"
              className="rounded-full border border-accent-emerald/40 bg-accent-emerald/10 px-4 py-1.5 font-medium text-accent-emerald transition-all hover:bg-accent-emerald/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Leer el brief
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
