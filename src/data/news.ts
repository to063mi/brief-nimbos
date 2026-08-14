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
"headline": "Gobierno anuncia arquitectura legal para potenciar la industria minera",
"hecho": "El biministro de Economía y Minería, Daniel Mas, presentó en un seminario de Clapes UC el plan del Ejecutivo para modernizar la institucionalidad minera. El objetivo de las nuevas normativas es enfrentar la caída en las leyes de los minerales y reducir los altos costos operacionales.",
"impacto": "Esta reforma institucional es considerada clave para asegurar el retorno del país a una producción anual de seis millones de toneladas de cobre. La medida pretende mantener la posición competitiva del mercado local frente a competidores emergentes y nuevas regulaciones ambientales.",
"source": "Clapes UC",
"sourceUrl": "https://clapesuc.cl/comunicados/los-desafios-de-la-mineria-recuperar-produccion-elevar-la-productividad-y-generar-mas-valor"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Congreso internacional de inteligencia artificial inyectará US$500 millones al país",
"hecho": "Se confirmó que Santiago acogerá el 11° Congreso Latinoamericano IA, Tecnología y Negocios America Digital en septiembre, reuniendo a más de 5.000 ejecutivos internacionales. El encuentro contará con la participación de figuras destacadas del sector, como el actual asesor de ética en IA de Anthropic.",
"impacto": "El evento generará ingresos estimados en US$500 millones para el mercado interno debido al turismo de negocios y la actividad corporativa que moviliza. De esta manera, se refuerza el posicionamiento estratégico nacional como uno de los centros de innovación y desarrollo digital líderes en la región.",
"source": "Infobae",
"sourceUrl": "https://www.infobae.com/america/agencias/2026/08/13/lideres-globales-de-ia-llegaran-a-chile-para-impulsar-la-economia-digital/"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Codelco lidera por undécimo año consecutivo el ranking Merco Talento",
"hecho": "La minera estatal obtuvo el primer lugar como la empresa más atractiva para trabajar en Chile en la 13ª edición de este ranking laboral. El estudio evaluó a las 200 firmas más destacadas del mercado chileno reuniendo las percepciones de más de 50.000 participantes encuestados.",
"impacto": "El reconocimiento fortalece significativamente la marca empleadora de la compañía en un momento donde requiere captar capital humano altamente especializado para sus próximos proyectos. Posicionarse como líder resulta estratégico para concretar su ansiada transición operativa hacia una minería plenamente digital y sostenible a largo plazo.",
"source": "Codelco",
"sourceUrl": "https://www.codelco.com/prensa/2026/codelco-suma-11-anos-como-la-empresa-mas-atractiva-para-trabajar"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Moderación inflacionaria en Estados Unidos quita presión al dólar global",
"hecho": "El dato de inflación de julio en la principal economía del mundo anotó una nueva moderación, tendencia que también reflejó el índice de precios al productor. Estas cifras macroeconómicas disminuyen drásticamente las expectativas de una política monetaria restrictiva inmediata por parte de la Reserva Federal.",
"impacto": "Para Chile, este escenario externo más benigno provocó inicialmente una baja del tipo de cambio, llevando al dólar observado oficial a los $912,00. Esta menor presión global otorga mayor margen de acción y flexibilidad al Banco Central chileno de cara a sus próximas decisiones sobre la tasa de interés local.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/mercados/bolsa-monedas/dolar-hoy-gcwrw"
}
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));