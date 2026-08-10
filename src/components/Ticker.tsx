import { tickerIndicators } from '@/data/ticker';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

function TrendIcon({ trend }: { trend: 'up' | 'down' | 'neutral' }) {
  if (trend === 'up')
    return <TrendingUp className="h-3 w-3 text-accent-emerald" />;
  if (trend === 'down')
    return <TrendingDown className="h-3 w-3 text-red-400" />;
  return <Minus className="h-3 w-3 text-gray-500" />;
}

export default function Ticker() {
  const items = [...tickerIndicators, ...tickerIndicators];
  return (
    <div className="relative z-50 w-full overflow-hidden border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-md">
      <div className="flex whitespace-nowrap py-2">
        <div className="flex shrink-0 animate-[ticker_32s_linear_infinite] items-center gap-8 pr-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs font-medium text-gray-400"
            >
              <span className="uppercase tracking-wider text-gray-500">
                {item.label}
              </span>
              <span className="text-gray-200">{item.value}</span>
              <TrendIcon trend={item.trend} />
              <span className="ml-1 text-gray-700">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
