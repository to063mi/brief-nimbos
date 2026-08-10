export type Category = 'Política' | 'Economía' | 'Corporativo';

export interface NewsItem {
  id: string;
  category: Category;
  headline: string;
  hecho: string;
  impacto: string;
  source: string;
  image: string;
  accent: 'emerald' | 'blue' | 'amber';
}

export const newsItems: NewsItem[] = [
  {
    id: 'politica',
    category: 'Política',
    headline:
      'Congreso aprueba reforma fiscal en debate maratónico de 14 horas',
    hecho: 'La cámara baja selló el acuerdo con 112 votos a favor tras una sesión que se extendió hasta el amanecer. La nueva tasa grava las grandes fortunas y recaudaría un 0,8 % adicional del PIB el próximo ejercicio.',
    impacto:
      'El Ejecutivo promete destinar los fondos a vivienda y sanidad, pero la oposición ya prepara un recurso de inconstitucionalidad que podría paralizar la entrada en vigor hasta 2026.',
    source: 'Diario Política',
    image:
      'https://images.pexels.com/photos/18729241/pexels-photo-18729241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'emerald',
  },
  {
    id: 'economia',
    category: 'Economía',
    headline:
      'El Banco Central recorta tipos medio punto ante el enfriamiento del consumo',
    hecho: 'Es el primer descenso en siete meses: el precio del dinero baja al 3,75 % para reactivar el crédito. La inflación interanual se modera al 2,9 %, su nivel más bajo desde el inicio de la crisis energética.',
    impacto:
      'Los mercados aplauden la decisión: el Ipsa sube un 1,4 % y la deuda a diez años afloja la rentabilidad. Las hipotecas variables podrían abaratarse ya en el próximo reajuste trimestral.',
    source: 'Finanzas Hoy',
    image:
      'https://images.pexels.com/photos/35118208/pexels-photo-35118208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'blue',
  },
  {
    id: 'corporativo',
    category: 'Corporativo',
    headline:
      'Nimbos cierra una ronda de 120 M€ y acelera su expansión por Latinoamérica',
    hecho: 'La serie C liderada por Atlantic Ventures valora la compañía en 850 millones, rozando el estatus de unicornio. El capital financiará la apertura de oficinas en CDMX, Bogotá y São Paulo antes de fin de año.',
    impacto:
      'La plantilla crecerá un 40 %: 180 nuevos puestos en ingeniería, datos y operaciones internacionales. Analistas ven en la operación una señal de que el capital de riesgo vuelve a apostar por la región.',
    source: 'Negocio & Tech',
    image:
      'https://images.pexels.com/photos/12269027/pexels-photo-12269027.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'amber',
  },
];
