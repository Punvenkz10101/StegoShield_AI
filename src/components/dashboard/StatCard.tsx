
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: StatCardProps) {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 flex flex-col gap-2",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-stegoshield-light/70">{title}</h3>
        {icon && <div className="text-stegoshield-accent">{icon}</div>}
      </div>
      <div className="flex items-end gap-2">
        <p className="text-2xl font-semibold text-stegoshield-light">{value}</p>
        {trend && (
          <span className={cn(
            "text-xs font-medium",
            trend.isPositive ? "text-green-500" : "text-red-500"
          )}>
            {trend.isPositive ? "+" : "-"}{trend.value}%
          </span>
        )}
      </div>
      {description && (
        <p className="text-xs text-stegoshield-light/70">{description}</p>
      )}
    </div>
  );
}
