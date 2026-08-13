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
"headline": "Congreso despacha a ley ampliación de subsidio hipotecario y garantías estatales",
"hecho": "El Congreso Nacional aprobó de forma unánime el proyecto que amplía el subsidio a la tasa de interés y las garantías del Fogaes. La medida incrementa a 6.000 UF el valor máximo de las viviendas elegibles e inyecta 30 mil nuevos cupos.",
"impacto": "Esta ley busca reactivar el deprimido sector inmobiliario e impulsar el acceso de la clase media a la vivienda propia. Se estima que las tasas hipotecarias para los beneficiarios podrían caer desde el 4% al 3%.",
"source": "Gobierno de Chile",
"sourceUrl": "https://www.gob.cl/noticias/congreso-despacha-a-ley-ampliacion-del-subsidio-hipotecario-y-garantias-estatales/"
},
{
"id": "economia-1",
"category": "Economía",
"headline": "Operadores financieros anticipan mayor inflación y prolongada mantención de tasas",
"hecho": "La Encuesta de Operadores Financieros reveló que el mercado espera un alza del IPC de 0,3% en agosto y de 0,5% mensual en septiembre. Además, se ratificó que el Banco Central mantendrá la Tasa de Política Monetaria inalterada por un periodo prolongado.",
"impacto": "El cambio en las expectativas consolida un escenario de mayor presión inflacionaria a mediano plazo. Esto mantendrá elevado el costo de endeudamiento para hogares y empresas, frenando una recuperación económica más ágil en el país.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/economia-y-politica/macro/operadores-ven-una-mayor-inflacion-para-los-proximos-doce-meses-y-anticipan"
},
{
"id": "corporativo-1",
"category": "Corporativo",
"headline": "Gobierno autoriza a Codelco a retener y capitalizar todas sus utilidades",
"hecho": "El gobierno decidió que las ganancias de 2025 de la minera estatal, equivalentes a US$ 2.423 millones, no ingresarán al fisco. Estos recursos serán retenidos íntegramente por la compañía para amortizar pasivos y financiar sus proyectos estructurales.",
"impacto": "La inédita medida otorga un alivio financiero crucial a Codelco, cuya deuda supera los US$ 27.000 millones tras años de alta exigencia de caja fiscal. La inyección de capital permitirá estabilizar su matriz productiva frente al retroceso de sus volúmenes operativos.",
"source": "Diario Financiero",
"sourceUrl": "https://www.df.cl/opinion/editorial/nuevas-perspectivas-para-codelco"
},
{
"id": "internacional-1",
"category": "Internacional",
"headline": "Embajador de China pide a Chile resistir injerencias frente a presiones",
"hecho": "En un seminario de la Sofofa por los 20 años del Tratado de Libre Comercio, el embajador Niu Qingbao urgió a proteger la cooperación bilateral. El diplomático acusó que ciertas naciones distorsionan la seguridad nacional para imponer sanciones arancelarias injustificadas, en clara alusión a Estados Unidos.",
"impacto": "El mensaje evidencia la creciente presión geopolítica sobre Chile en medio de la disputa comercial entre Beijing y Washington. Esta tensión amenaza con condicionar las futuras inversiones extranjeras en el país, especialmente en sectores estratégicos como la minería y el litio.",
"source": "Emol",
"sourceUrl": "https://www.emol.com/noticias/Economia/2026/08/12/1208319/chile-china-embajador.html"
}
]

// Mapeo automático que inyecta imagen y accent a la aplicación
export const newsItems: NewsItem[] = rawNewsItems.map((item) => ({
  ...item,
  image: categoryConfig[item.category].image,
  accent: categoryConfig[item.category].accent,
}));