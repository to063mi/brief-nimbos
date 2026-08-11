import { motion } from 'framer-motion';
import { newsItems } from '@/data/news';
import NewsCard from './NewsCard';

export default function NewsGrid() {
  return (
    <section id="noticias" className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent-emerald">
              Edición de hoy
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Lo que debes saber
            </h2>
          </div>
          <p className="max-w-sm text-sm text-gray-500">
            Cuatro historias. Cero ruido. Curadas para que decidas mejor en
            menos de tres minutos.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newsItems.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
