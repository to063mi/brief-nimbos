export interface TickerIndicator {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
}

export const tickerIndicators: TickerIndicator[] = [
{ "label": "Dólar Observado (CLP)", "value": "$922,12", "trend": "up" },
{ "label": "UF", "value": "$40.857,96", "trend": "up" },
{ "label": "Euro (CLP)", "value": "$1.067,39", "trend": "up" },
{ "label": "Cobre (US$/lb)", "value": "US$6,61", "trend": "up" },
{ "label": "IPSA", "value": "11.186,57 pts", "trend": "up" },
{ "label": "Bitcoin (USD)", "value": "~US$64.500", "trend": "neutral" },
{ "label": "IPC Anual", "value": "3,5%", "trend": "down" },
{ "label": "Imacec", "value": "+2,4%", "trend": "up" }
]