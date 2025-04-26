
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { cn } from "@/lib/utils";

interface ThreatDistributionProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
  className?: string;
}

export default function ThreatDistribution({ data, className }: ThreatDistributionProps) {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <h2 className="text-lg font-semibold mb-4 text-stegoshield-light">Threat Distribution</h2>
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ 
                backgroundColor: "#2E2E2E", 
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.5rem",
                color: "#FDF6EC" 
              }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              formatter={(value) => <span className="text-stegoshield-light">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
