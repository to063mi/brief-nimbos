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
{
"id": "politica-1",
"category": "Política",
"headline": "Gobierno y oposición se adjudican triunfo tras fallo del TC",
"hecho": "El TC ratificó la invariabilidad tributaria a 20 años, pero eliminó las indemnizaciones estatales por RCA anuladas. La presidenta de la CPC, Susana Jiménez, expresó 'moderado optimismo' por la certeza jurídica que otorga la ratificación de los contratos de inversión.",
"impacto": "Confirma que el pilar más sensible para atraer inversión extranjera sobrevivió al TC, dando tranquilidad al empresariado. Persiste el debate sobre cuánto se debilitó la iniciativa original del Gobierno.",
"source": "Cooperativa.cl",
"sourceUrl": "https://www.cooperativa.cl/noticias/economia/impuestos/megarreforma-gobierno-y-oposicion-se-adjudican-triunfo-tras-fallo-del-tc/2026-08-14/142412.html"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Codelco reportará resultados por división y evalúa vender participaciones",
"hecho": "Bernardo Fontaine anunció que Codelco publicará resultados y flujo de caja por división, reconociendo una 'crisis de desempeño' con costos ~50% más altos que grandes mineras. Evalúan vender participaciones en privados y cerrar un acuerdo con Pucobre por el proyecto Tovaku.",
"impacto": "Marca un giro en transparencia y gestión de la principal cuprífera estatal, clave para el crecimiento del país. La evaluación de venta de activos se define en noviembre.",
"source": "La Tercera (Pulso)",
"sourceUrl": "https://www.latercera.com/pulso/noticia/fontaine-anuncia-la-entrega-de-resultados-de-codelco-por-division-y-pide-mas-facilidades-para-alianzas-con-los-privados/"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Aranceles de EE.UU. al cobre obligan a recalcular carteras chilenas",
"hecho": "La sobretasa arancelaria de 12,5% de EE.UU., sumada a nuevos aranceles de 15% (2027) y 30% (2028) al cobre refinado, lleva a corredoras a recomendar acciones menos expuestas a EE.UU. La incertidumbre por la política de tasas de la Fed también pesa.",
"impacto": "El principal producto de exportación de Chile queda expuesto a la política comercial estadounidense, condicionando el tipo de cambio, el IPSA y la inversión en 2026.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/senal-df/senales-financieras/las-cinco-mejores-acciones-para-esquivar-la-volatilidad-de-la-fed-y-eeuu"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Exportaciones chilenas rompen récord y superan US$70.000 millones",
"hecho": "Las exportaciones de bienes acumularon US$70.603 millones entre enero y julio, un alza de 15% interanual, con julio como el mejor mes desde que hay registros. La minería explicó el 61,4% de los envíos, liderada por cobre y litio.",
"impacto": "Confirma al sector externo, liderado por cobre y litio, con aporte creciente de alimentos, como motor de la recuperación económica de 2026. Refuerza el superávit comercial justo cuando el Banco Central revisa al alza sus proyecciones.",
"source": "Diario Estrategia",
"sourceUrl": "https://www.diarioestrategia.cl/texto-diario/mostrar/5984216/exportaciones-enero-julio-crecen-15-superan-us-70000-millones-alimentos-alcanzan-cifra-record"
}
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));