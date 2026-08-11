import { motion } from 'framer-motion';
import { Wrench, Instagram, Plus } from 'lucide-react';

const sponsors = [
  {
    name: 'Ferremagno',
    icon: Wrench,
    href: 'https://ferremagno.cl',
  },
  {
    name: '@txmi.pl',
    icon: Instagram,
    href: 'https://instagram.com/txmi.pl',
  },
];

export default function Sponsors() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl glass px-8 py-10 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
            Colaboradores
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-gray-400">
            El Brief Nimbos es posible gracias al apoyo de quienes creen en la
            información con criterio.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {sponsors.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_24px_rgba(255,255,255,0.06)]"
              >
                <Icon className="h-5 w-5 text-gray-500 transition-colors group-hover:text-accent-emerald" />
                <span className="font-display text-sm font-medium tracking-tight text-gray-300 transition-colors group-hover:text-white">
                  {name}
                </span>
              </a>
            ))}

            {/* Espacio abierto para futuros colaboradores — sin link, solo invitación visual */}
            <div className="flex items-center gap-3 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.01] px-5 py-3 text-gray-600">
              <Plus className="h-5 w-5" />
              <span className="font-display text-sm font-medium tracking-tight">
                Tu marca aquí
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
