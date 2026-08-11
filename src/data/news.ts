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
"headline": "Gobierno ingresa reforma constitucional para crear nuevo estado de excepción",
"hecho": "El Presidente José Antonio Kast firmó un proyecto de reforma constitucional en el marco de la Agenda contra el Crimen Organizado y el Terrorismo. La iniciativa busca consagrar la seguridad pública como un deber del Estado e incorporar un estado de excepción constitucional focalizado en zonas de alta vulnerabilidad. La medida facultará al Ejecutivo para intervenir en territorios amenazados por el crimen organizado.",
"impacto": "Con este proyecto, las Fuerzas Armadas podrán prestar apoyo logístico, perimetral y de vigilancia a Carabineros y la PDI en áreas delictivas complejas. La iniciativa requerirá la aprobación del Congreso Nacional para sus renovaciones y facilitará la incautación de bienes ilícitos.",
"source": "La Tercera",
"sourceUrl": "https://www.latercera.com/"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Cobre ronda máximos históricos y empuja a la baja al dólar",
"hecho": "El precio del cobre cotizó en torno a los US$ 6,54 por libra en la Bolsa de Metales de Londres, rozando su récord histórico impulsado por una caída superior al 40% en los inventarios disponibles. Paralelamente, el dólar en Chile inició la jornada con una baja de $4,2 ubicándose en los $914,7 en el mercado cambiario local. La fortaleza del peso responde también a la liquidación de posiciones de agentes no residentes.",
"impacto": "El repunte en el valor del metal rojo incrementa la recaudación fiscal proyectada y reduce la presión sobre el tipo de cambio. Diversos analistas señalan que este ciclo de precios altos otorga un mayor espacio fiscal para los presupuestos de los próximos años.",
"source": "Emol Economía",
"sourceUrl": "https://www.emol.com/noticias/Economia/2026/08/11/1208145/dolar-mercado-cambiario-local.html"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Utilidades de SMU caen 91% por costos de reestructuración operacional",
"hecho": "La matriz de Unimarc, SMU, reportó utilidades por $1.708 millones durante el primer semestre de 2026, lo que representa un descenso del 91% en comparación con los $19.162 millones obtenidos en el mismo periodo de 2025. Sin embargo, la compañía registró un aumento en sus ingresos consolidados y en el indicador Ebitda. El resultado neto estuvo presionado por los costos asociados a su plan de reorganización.",
"impacto": "El mercado observa el proceso de reestructuración de la firma retail para evaluar el retorno a mayores márgenes de rentabilidad. A pesar de la caída puntual en las ganancias netas, el crecimiento de los ingresos demuestra la solidez de la operación de ventas en sus locales.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Estados Unidos evalúa nuevos aranceles a las manufacturas de cobre",
"hecho": "El Departamento de Comercio de Estados Unidos inició un proceso de consulta pública bajo la Sección 232 para analizar la aplicación de aranceles a manufacturas derivadas del cobre. La propuesta normativa no afecta por el momento la importación de cobre refinado o a granel. Washington fundamenta la medida en razones de seguridad nacional y abastecimiento de su cadena industrial.",
"impacto": "La decisión impacta directamente a Chile al encender alertas en el sector exportador nacional de productos elaborados y subproductos del cobre dirigidos a Estados Unidos. La revisión evidencia un aumento de las restricciones arancelarias mundiales que amenazan la dinamización del comercio exterior chileno.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/economia_y_politica/comercio-exterior"
}
]

// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));