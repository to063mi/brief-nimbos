export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
  { label: 'Dólar (CLP)', value: '$942,30', trend: 'up' },
  { label: 'UF', value: '$38.456,12', trend: 'neutral' },
  { label: 'Euro (CLP)', value: '$1.018,55', trend: 'down' },
  { label: 'Cobre (US$/lb)', value: '$4,12', trend: 'up' },
  { label: 'Ipsa', value: '6.842,10', trend: 'up' },
  { label: 'Bitcoin (USD)', value: '$67.420', trend: 'down' },
  { label: 'IPC anual', value: '2,9 %', trend: 'down' },
  { label: 'Imacec', value: '+0,3 %', trend: 'up' },
];
