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
"headline": "Gremio del gas recurrirá al TC por reconexión de clientes en mora",
"hecho": "El jueves 20 de agosto de 2026, Diario Financiero confirmó que la Asociación de Empresas de Gas Natural (AGN) recurrirá en las próximas horas al Tribunal Constitucional contra una indicación incorporada como artículo 31 en la ley de reconstrucción nacional. La norma crea un régimen permanente de reconexión de servicios en zonas de catástrofe, incluso para clientes en mora. El gremio considera la medida inconstitucional.",
"impacto": "La disputa tensiona al Congreso, el Ejecutivo y el sector energético en medio del proceso de reconstrucción post-catástrofe. El gremio advierte riesgos para la seguridad del suministro si la norma se mantiene.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/empresas/energia/gremio-del-gas-alista-ofensiva-ante-el-tc-por-indicacion-de-ley-miscelanea"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Pampa Investments de la familia Ponce ingresará al Ipsa",
"hecho": "El jueves 20 de agosto de 2026, nuam anunció la nueva composición del Ipsa, que a partir del 1 de septiembre pasará de 30 a 31 empresas. El índice adoptará una metodología MSCI con número variable de componentes, revisiones trimestrales y mayor ponderación del free float. Pampa Investments, vehículo de inversión de Julio Ponce Lerou en SQM hoy encabezado por Francisca Ponce Pinochet, se incorpora al selectivo.",
"impacto": "Cambia la metodología y periodicidad de revisión del principal índice bursátil chileno, alineándolo con Colombia y Perú. Da entrada a un nuevo actor relevante ligado a SQM en la bolsa local.",
"source": "La Tercera Pulso",
"sourceUrl": "https://www.latercera.com/pulso/noticia/pampa-investments-de-la-familia-ponce-ingresara-al-ipsa/"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Copec aclara aporte a Arauco y sincera valor de Puerto Coronel",
"hecho": "El jueves 20 de agosto de 2026, Copec precisó que el compromiso de aporte de US$450 millones a Arauco no es una inyección directa de capital. Corresponde a la venta del 50% que Arauco poseía en Puerto Coronel a Neltume Ports por US$65 millones, recibidos el 12 de agosto. La operación generará una utilidad de US$26 millones para Arauco en el tercer trimestre.",
"impacto": "Aclara la estructura financiera de una de las mayores forestales del país y su relación con el mercado portuario. Tendrá efecto directo en los resultados del tercer trimestre de Arauco.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/empresas/energia/empresas-copec-aclara-apoyo-en-capital-a-arauco-y-sincera-valor-de-puerto"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Amazon invertirá US$2.000 millones en Prime Video en Latinoamérica",
"hecho": "El jueves 20 de agosto de 2026, Amazon anunció en el evento Prime Video Presents Latin America, en Ciudad de México, una inversión de US$2.000 millones entre 2027 y 2030. Los fondos se destinarán a México, Brasil, Argentina, Colombia y Chile, en producciones originales, contenido adquirido y derechos deportivos.",
"impacto": "Representa una inyección relevante de capital extranjero al sector audiovisual chileno. El plan proyecta más de 25 nuevos títulos regionales para su primer año.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/df-sud/amazon-invertira-us-2-000-millones-en-prime-video-en-america-latina-y"
}     
]
// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));