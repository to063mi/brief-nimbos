export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
{ "label": "Dólar (CLP)", "value": "$914,70", "trend": "down" },
{ "label": "UF", "value": "$40.847,42", "trend": "neutral" },
{ "label": "Euro (CLP)", "value": "$1.054,50", "trend": "up" },
{ "label": "Cobre (US$/lb)", "value": "$6,54", "trend": "up" },
{ "label": "Ipsa", "value": "11.256,28", "trend": "down" },
{ "label": "Bitcoin (USD)", "value": "$63.468", "trend": "down" },
{ "label": "IPC anual", "value": "2,4 %", "trend": "down" },
{ "label": "Imacec", "value": "+2,4 %", "trend": "up" }
]