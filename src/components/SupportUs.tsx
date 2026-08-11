import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const MERCADOPAGO_LINK = 'https://link.mercadopago.cl/briefnimbos';

export default function SupportUs() {
  return (
    <section className="relative px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="flex items-center gap-3">
            <Heart className="h-4 w-4 shrink-0 text-gray-500" />
            <p className="text-sm text-gray-400">
              ¿Te gusta lo que hacemos? Puedes apoyarnos con un aporte
              voluntario.
            </p>
          </div>
          <a
            href={MERCADOPAGO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-gray-300 transition-all hover:border-accent-emerald/50 hover:text-accent-emerald"
          >
            Hacer un aporte
          </a>
        </motion.div>
      </div>
    </section>
  );
}
