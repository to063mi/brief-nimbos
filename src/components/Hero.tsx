import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function formatDate() {
  const d = new Date();
  return d.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Embed oficial de Substack (Settings > Growth > Embeddable subscribe button)
// Transparente + texto claro, pensado para fondos oscuros. Sin logo (ya tenemos el nuestro).
const SUBSTACK_EMBED_URL = 'https://briefnimbos.substack.com/embed?transparent=1&light=1';

export default function Hero() {

  return (
    <section className="relative pt-24 pb-20 px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-gray-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
          </span>
          Brief de hoy · {formatDate()}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">La información que</span>
          <br />
          <span className="text-gradient">mueve tu día,</span>
          <br />
          <span className="bg-gradient-to-r from-accent-emerald to-accent-blue bg-clip-text text-transparent">
            en 3 minutos.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          Cada mañana, un resumen esencial de política, economía y negocios.
          Sin ruido, sin relleno, solo lo que importa.
        </motion.p>

        <motion.div
          id="suscribete"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          className="mx-auto mt-12 max-w-xl"
        >
          <div className="glass-strong rounded-2xl p-2 shadow-2xl">
            <div className="mb-2 flex items-center gap-2 px-2 pt-1">
              <Mail className="h-4 w-4 shrink-0 text-accent-emerald" />
              <span className="text-xs font-medium text-gray-400">
                Formulario oficial de Substack · @briefnimbos
              </span>
            </div>
            <iframe
              src={SUBSTACK_EMBED_URL}
              title="Suscríbete a El Brief Nimbos"
              width="100%"
              height="150"
              style={{ border: 'none', background: 'transparent' }}
              frameBorder="0"
              scrolling="no"
            />
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            Llega a tu correo cada día a las 7:00 · Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
}
