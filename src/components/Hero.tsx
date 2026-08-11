import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Clock, Check, Loader2 } from 'lucide-react';

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

// Tu "buzón" real de Substack, ya confirmado que funciona
const SUBSTACK_ENDPOINT = 'https://briefnimbos.substack.com/api/v1/free';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    const datos = new URLSearchParams();
    datos.append('email', email);

    try {
      await fetch(SUBSTACK_ENDPOINT, {
        method: 'POST',
        body: datos,
        mode: 'no-cors',
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

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
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-strong flex items-center justify-center gap-2 rounded-2xl p-4 text-accent-emerald"
              >
                <Check className="h-5 w-5" />
                <span className="font-medium">¡Listo! Revisa tu correo para confirmar.</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass-strong rounded-2xl p-2 shadow-2xl"
              >
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex flex-1 items-center gap-2 rounded-xl bg-white/5 px-4 py-3">
                    <Mail className="h-5 w-5 shrink-0 text-gray-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus('idle');
                      }}
                      placeholder="tu@email.com"
                      className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-emerald to-emerald-500 px-6 py-3 font-semibold text-ink-950 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] active:scale-95 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        Suscribirme
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {status === 'error' && (
            <p className="mt-2 text-xs text-red-400">Ingresa un email válido.</p>
          )}

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <Clock className="h-3.5 w-3.5" />
            Llega a tu correo cada día a las 7:00 · Cancela cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
}
