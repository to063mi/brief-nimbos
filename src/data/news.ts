export type Category = 'Política' | 'Economía' | 'Corporativo' | 'Internacional';

export interface RawNewsItem {
  id: string;
  category: Category;
  headline: string;
  hecho: string;
  impacto: string;
  source: string;
  sourceUrl: string;
}

export interface NewsItem extends RawNewsItem {
  image: string;
  accent: 'emerald' | 'blue' | 'amber' | 'violet';
}

// Configuración de imágenes estáticas y acentos por categoría
const categoryConfig: Record<Category, { image: string; accent: NewsItem['accent'] }> = {
  Política: {
    image: 'https://images.pexels.com/photos/18729241/pexels-photo-18729241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'emerald',
  },
  Economía: {
    image: 'https://images.pexels.com/photos/35118208/pexels-photo-35118208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'blue',
  },
  Corporativo: {
    image: 'https://images.pexels.com/photos/12269027/pexels-photo-12269027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'amber',
  },
  Internacional: {
    image: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'violet',
  },
};

// Salida directa que copiarás desde Gemini
const rawNewsItems: RawNewsItem[] = [
{ "id": "politica-1", "category": "Política", "headline": "Gobierno y oposición se adjudican triunfo tras fallo del TC sobre la megarreforma", "hecho": "El viernes 14 de agosto de 2026, en el día posterior al fallo del Tribunal Constitucional, tanto el oficialismo como la oposición se declararon satisfechos con la resolución: el TC mantuvo en pie el pilar de invariabilidad tributaria a 20 años, pero eliminó las indemnizaciones estatales a privados por RCA anuladas. La presidenta de la CPC, Susana Jiménez, expresó 'moderado optimismo' por la certeza jurídica que otorga la ratificación de los contratos de inversión.", "impacto": "Confirma que el pilar más sensible para atraer inversión extranjera (la invariabilidad tributaria) sobrevivió al TC, lo que da tranquilidad al empresariado, aunque persiste el debate sobre cuánto se debilitó la iniciativa original del Gobierno.", "source": "Cooperativa.cl", "sourceUrl": "https://www.cooperativa.cl/noticias/economia/impuestos/megarreforma-gobierno-y-oposicion-se-adjudican-triunfo-tras-fallo-del-tc/2026-08-14/142412.html" },
{ "id": "corporativo-1", "category": "Corporativo", "headline": "Fontaine anuncia que Codelco reportará resultados por división y evalúa vender participaciones en privados", "hecho": "Este domingo 16 de agosto de 2026, el presidente del directorio de Codelco, Bernardo Fontaine, reveló en Mesa Central de Canal 13 que la estatal comenzará a publicar sus resultados y flujo de caja por división, reconoció una 'crisis de desempeño' con costos ~50% más altos que las grandes mineras del mundo, y confirmó que evalúan vender participaciones en privados y cerrar un nuevo acuerdo con Pucobre por el proyecto Tovaku.", "impacto": "Marca un giro en la transparencia y gestión de la principal cuprífera estatal, justo cuando Chile depende más que nunca del cobre para sostener su crecimiento; la evaluación de venta de activos se define en noviembre.", "source": "La Tercera (Pulso)", "sourceUrl": "https://www.latercera.com/pulso/noticia/fontaine-anuncia-la-entrega-de-resultados-de-codelco-por-division-y-pide-mas-facilidades-para-alianzas-con-los-privados/" },
{ "id": "internacional-1", "category": "Internacional", "headline": "Aranceles de EE.UU. al cobre y volatilidad de la Fed obligan a recalcular carteras de acciones chilenas", "hecho": "El viernes 14 de agosto de 2026, Diario Financiero reportó que la sobretasa arancelaria de 12,5% aplicada por Washington en julio, sumada a la amenaza de aranceles de 15% (2027) y 30% (2028) al cobre refinado, está llevando a corredoras locales a recomendar acciones menos expuestas a EE.UU. ante la incertidumbre por la política de tasas de la Reserva Federal.", "impacto": "El principal producto de exportación de Chile queda directamente expuesto a la política comercial estadounidense, condicionando el tipo de cambio, el IPSA y las decisiones de inversión para lo que resta de 2026.", "source": "Diario Financiero", "sourceUrl": "https://www.df.cl/senal-df/senales-financieras/las-cinco-mejores-acciones-para-esquivar-la-volatilidad-de-la-fed-y-eeuu" },
{ "id": "economia-1", "category": "Economía", "headline": "Exportaciones chilenas rompen récord histórico y superan los US$70.000 millones entre enero y julio", "hecho": "El viernes 14 de agosto de 2026, la Subsecretaría de Relaciones Económicas Internacionales (SUBREI) informó, con cifras del Banco Central y Aduanas, que las exportaciones de bienes acumularon US$70.603 millones entre enero y julio (+15% interanual), superando por primera vez esa barrera para el período. Solo en julio se exportaron US$10.248 millones (+20% interanual), el mayor monto para ese mes desde que hay registros. La minería explicó el 61,4% de los envíos (cobre: US$35.605 millones; litio: US$3.713 millones, casi triplicando su valor), mientras que las exportaciones de alimentos también marcaron récord histórico con US$8.306 millones.", "impacto": "Confirma que el sector externo —liderado por cobre y litio, pero con un aporte cada vez más relevante de alimentos— es el principal motor de la recuperación económica de 2026, reforzando el superávit comercial y aportando divisas justo cuando el Banco Central revisa al alza sus proyecciones de crecimiento.", "source": "Diario Estrategia", "sourceUrl": "https://www.diarioestrategia.cl/texto-diario/mostrar/5984216/exportaciones-enero-julio-crecen-15-superan-us-70000-millones-alimentos-alcanzan-cifra-record" }
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));