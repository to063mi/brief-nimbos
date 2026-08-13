export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
{ "label": "Dólar (CLP)", "value": "$914,60", "trend": "down" },
{ "label": "UF", "value": "$40.848,74", "trend": "up" },
{ "label": "Euro (CLP)", "value": "$1.054,09", "trend": "down" },
{ "label": "Cobre (US$/lb)", "value": "$6,44", "trend": "up" },
{ "label": "Ipsa", "value": "10.960,10", "trend": "down" },
{ "label": "Bitcoin (USD)", "value": "$63.358", "trend": "down" },
{ "label": "IPC anual", "value": "3,5 %", "trend": "down" },
{ "label": "Imacec", "value": "+2,4 %", "trend": "up" }
]