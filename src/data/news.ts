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
const rawNewsItems: RawNewsItem[] =[
{
"id": "politica-1",
"category": "Política",
"headline": "TC valida invariabilidad tributaria pero elimina indemnizaciones estatales en megarreforma",
"hecho": "El viernes 14 de agosto de 2026, un día después del fallo del Tribunal Constitucional, oficialismo y oposición se declararon satisfechos con la resolución sobre la megarreforma. El TC mantuvo vigente el pilar de invariabilidad tributaria a 20 años, pero eliminó las indemnizaciones estatales a privados por RCA anuladas. La presidenta de la CPC, Susana Jiménez, expresó 'moderado optimismo' por la certeza jurídica que otorga la ratificación de los contratos de inversión.",
"impacto": "El pilar más sensible para atraer inversión extranjera sobrevivió al fallo, lo que entrega tranquilidad al empresariado. Persiste, sin embargo, el debate sobre cuánto se debilitó la iniciativa original del Gobierno.",
"source": "Cooperativa.cl",
"sourceUrl": "https://www.cooperativa.cl/noticias/economia/impuestos/megarreforma-gobierno-y-oposicion-se-adjudican-triunfo-tras-fallo-del-tc/2026-08-14/142412.html"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Exportaciones chilenas superan US$70.000 millones entre enero y julio",
"hecho": "La SUBREI informó este viernes 14 de agosto que las exportaciones de bienes acumularon US$70.603 millones entre enero y julio, un alza de 15% interanual que supera por primera vez esa barrera para el período. Solo en julio se exportaron US$10.248 millones, un 20% más que el año anterior y el mayor monto para ese mes desde que hay registros. La minería explicó el 61,4% de los envíos, con el cobre aportando US$35.605 millones y el litio US$3.713 millones, casi triplicando su valor. Las exportaciones de alimentos también marcaron un récord histórico de US$8.306 millones.",
"impacto": "El sector externo, liderado por cobre y litio pero con un aporte creciente de alimentos, se confirma como el principal motor de la recuperación económica de 2026. El resultado refuerza el superávit comercial y aporta divisas justo cuando el Banco Central revisa al alza sus proyecciones de crecimiento.",
"source": "Diario Estrategia",
"sourceUrl": "https://www.diarioestrategia.cl/texto-diario/mostrar/5984216/exportaciones-enero-julio-crecen-15-superan-us-70000-millones-alimentos-alcanzan-cifra-record"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Codelco reportará resultados por división y evalúa vender participaciones en privados",
"hecho": "El presidente del directorio de Codelco, Bernardo Fontaine, reveló este domingo 16 de agosto en Mesa Central de Canal 13 que la estatal comenzará a publicar sus resultados y flujo de caja por división. Reconoció una 'crisis de desempeño', con costos aproximadamente 50% más altos que los de las grandes mineras del mundo. Confirmó además que la empresa evalúa vender participaciones en privados y cerrar un nuevo acuerdo con Pucobre por el proyecto Tovaku.",
"impacto": "El anuncio marca un giro en la transparencia y gestión de la principal cuprífera estatal, justo cuando Chile depende más que nunca del cobre para sostener su crecimiento. La evaluación de venta de activos quedará definida en noviembre.",
"source": "La Tercera (Pulso)",
"sourceUrl": "https://www.latercera.com/pulso/noticia/fontaine-anuncia-la-entrega-de-resultados-de-codelco-por-division-y-pide-mas-facilidades-para-alianzas-con-los-privados/"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Aranceles de EEUU al cobre obligan a recalcular carteras de acciones chilenas",
"hecho": "Diario Financiero reportó este viernes 14 de agosto que la sobretasa arancelaria de 12,5% aplicada por Washington en julio se suma a la amenaza de nuevos aranceles de 15% en 2027 y 30% en 2028 al cobre refinado. Ante ese escenario, corredoras locales están recomendando acciones con menor exposición a Estados Unidos. La incertidumbre se profundiza por la política de tasas de la Reserva Federal, que condiciona las decisiones de inversión de corto plazo.",
"impacto": "El principal producto de exportación de Chile queda directamente expuesto a la política comercial estadounidense, lo que condiciona el tipo de cambio y el IPSA. La situación también influye en las decisiones de inversión para lo que resta de 2026.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/senal-df/senales-financieras/las-cinco-mejores-acciones-para-esquivar-la-volatilidad-de-la-fed-y-eeuu"
}
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));