export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
{ "label": "Dólar (CLP)", "value": "$912,00", "trend": "down" },
{ "label": "UF", "value": "$40.850,06", "trend": "up" },
{ "label": "Euro (CLP)", "value": "$1.050,93", "trend": "down" },
{ "label": "Cobre (US$/lb)", "value": "$6,44", "trend": "up" },
{ "label": "Ipsa", "value": "11.000,00", "trend": "up" },
{ "label": "Bitcoin (USD)", "value": "$63.500", "trend": "up" },
{ "label": "IPC anual", "value": "3,5 %", "trend": "down" },
{ "label": "Imacec", "value": "+2,4 %", "trend": "up" }
]