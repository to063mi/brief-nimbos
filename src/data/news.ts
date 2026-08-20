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
{ "id": "politica-1", "category": "Política", "headline": "Frei critica la 'permisología' y culpa una década de proyectos frenados", "hecho": "Este miércoles 19 de agosto de 2026, el expresidente Eduardo Frei volvió a cuestionar las trabas a la inversión en Chile. Apuntó contra el exceso de observaciones que, a su juicio, retrasan la ejecución de proyectos. Fue consultado sobre el escenario económico y las oportunidades de desarrollo ligadas a la inversión.", "impacto": "Reabre el debate transversal sobre la 'permisología' como freno estructural al crecimiento. Ocurre justo cuando el Gobierno de Kast impulsa su agenda de simplificación regulatoria y el mercado revisa a la baja las proyecciones de PIB para 2026.", "source": "Emol Economía", "sourceUrl": "https://www.emol.com/noticias/Economia/2026/08/19/1208957/frei-permisologia-chile.html" },
{ "id": "economia-1", "category": "Economía", "headline": "Banco Central confirma que el PIB cayó 0,2% en el segundo trimestre", "hecho": "Diario Financiero analizó el informe de Cuentas Nacionales del segundo trimestre publicado ayer por el Banco Central, que registró una caída del PIB de 0,2% anual entre abril y junio, tras el -0,3% del primer trimestre. La recesión técnica se evitó solo en términos desestacionalizados. El propio Banco Central redujo su proyección de crecimiento 2026 a un rango de 1%-1,75%, mientras la última Encuesta de Expectativas Económicas sitúa el consenso de mercado en 1,3%.", "impacto": "Confirma que, pese al cambio de gobierno y el repunte de expectativas empresariales de inicios de año, la actividad económica chilena sigue estancada. Esto obliga a preguntarse si la reactivación llegará recién en 2027 y presiona al Ejecutivo a gestionar expectativas ciudadanas mientras administra la fragilidad fiscal.", "source": "Diario Financiero", "sourceUrl": "https://www.df.cl/opinion/editorial/economia-estancada-reactivacion-en-2027" },
{ "id": "corporativo-1", "category": "Corporativo", "headline": "Subtel ejecuta garantías por US$14 millones a WOM tras informe de Contraloría", "hecho": "Subtel resolvió a comienzos de agosto ejecutar íntegramente las garantías correspondientes a las cinco macrozonas de la Fibra Óptica Nacional operadas por WOM. El monto asciende a cerca de 316 mil UF, equivalentes a unos US$14 millones. La medida llegó tras un informe de Contraloría que cuestionó la gestión de incumplimientos de la compañía. El tema escaló al Congreso, que pedirá una sesión especial en el Senado.", "impacto": "Profundiza la crisis regulatoria de WOM en un momento en que la compañía también enfrenta observaciones por el despliegue de su red 5G. Existe riesgo de nuevas sanciones y mayor escrutinio parlamentario sobre la gestión de infraestructura crítica de telecomunicaciones.", "source": "Emol Economía", "sourceUrl": "https://www.emol.com/noticias/Economia/2026/08/19/1208960/incumplimientos-fon-wom-garrido.html" },
{ "id": "internacional-1", "category": "Internacional", "headline": "Cobre corrige tras récord histórico mientras el mercado espera las actas de la Fed", "hecho": "Diario Financiero reportó que el cobre caía 1% hasta los US$6,42 la libra, en una toma de utilidades tras el récord histórico marcado días atrás. El mercado espera hoy la publicación de las actas de la reunión de julio de la Reserva Federal, en la que el FOMC mantuvo la tasa por decisión dividida, con tres votos disidentes a favor de un alza. Los inversionistas también evalúan el enfoque comunicacional del nuevo presidente de la Fed, Kevin Warsh, más opaco que el de su antecesor Jerome Powell.", "impacto": "Las actas de la Fed son clave para el peso chileno y el precio del cobre, principal producto de exportación del país. Un tono más restrictivo podría fortalecer al dólar global y presionar al alza el tipo de cambio local, mientras que señales más moderadas favorecerían un nuevo repunte del metal rojo justo cuando el Banco Central revisa a la baja sus proyecciones de crecimiento para 2026.", "source": "Diario Financiero", "sourceUrl": "https://www.df.cl/primer-click/el-mercado-de-bonos-da-un-respiro-y-la-fed-concentrara-las-miradas-de-los" }
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));