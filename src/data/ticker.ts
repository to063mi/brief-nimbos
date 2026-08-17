export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
{ "label": "Dólar Observado", "value": "$913,15", "trend": "neutral" },
{ "label": "UF", "value": "$40.854,01", "trend": "up" },
{ "label": "Euro", "value": "$1.052,92", "trend": "neutral" },
{ "label": "Cobre", "value": "US$6,59/lb", "trend": "up" },
{ "label": "IPSA", "value": "11.042,69 pts", "trend": "up" },
{ "label": "Bitcoin", "value": "~US$63.057", "trend": "neutral" },
{ "label": "IPC anual", "value": "3,5%", "trend": "down" },
{ "label": "Imacec", "value": "+2,4%", "trend": "up" }
]