import { motion } from 'framer-motion';
import type { NewsItem } from '@/data/news';
import { ArrowUpRight } from 'lucide-react';

const accentMap = {
  emerald: {
    text: 'text-accent-emerald',
    border: 'group-hover:border-accent-emerald/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]',
    badge: 'bg-accent-emerald/15 text-accent-emerald border-accent-emerald/30',
    dot: 'bg-accent-emerald',
  },
  blue: {
    text: 'text-accent-blue',
    border: 'group-hover:border-accent-blue/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]',
    badge: 'bg-accent-blue/15 text-accent-blue border-accent-blue/30',
    dot: 'bg-accent-blue',
  },
  amber: {
    text: 'text-accent-amber',
    border: 'group-hover:border-accent-amber/50',
    glow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]',
    badge: 'bg-accent-amber/15 text-accent-amber border-accent-amber/30',
    dot: 'bg-accent-amber',
  },
} as const;

export default function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const a = accentMap[item.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.12 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl glass border border-white/[0.08] transition-all duration-500 hover:scale-[1.03] ${a.border} ${a.glow}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.category}
          loading="lazy"
          className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${a.badge}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${a.dot} animate-pulse-glow`} />
            {item.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-white">
          {item.headline}
        </h3>

        <div className="mt-5 space-y-4">
          <div>
            <p className="mb-1.5 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gray-500">
              <span className={`h-1 w-1 rounded-full ${a.dot}`} />
              El Hecho
            </p>
            <p className="text-sm leading-relaxed text-gray-300">{item.hecho}</p>
          </div>
          <div>
            <p className="mb-1.5 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-gray-500">
              <span className={`h-1 w-1 rounded-full ${a.dot}`} />
              El Impacto
            </p>
            <p className="text-sm leading-relaxed text-gray-400">{item.impacto}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-xs text-gray-500">
            Fuente: <span className="text-gray-300">{item.source}</span>
          </span>
          <ArrowUpRight
            className={`h-4 w-4 text-gray-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${a.text}`}
          />
        </div>
      </div>
    </motion.article>
  );
}
