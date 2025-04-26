
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  filename: string;
  type: string;
  source: string;
  status: "clean" | "malware" | "stego";
  timestamp: string;
}

interface ActivityTableProps {
  activities: Activity[];
  className?: string;
}

export default function ActivityTable({ activities, className }: ActivityTableProps) {
  const getStatusBadge = (status: Activity["status"]) => {
    switch (status) {
      case "clean":
        return <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/20">Clean</Badge>;
      case "malware":
        return <Badge variant="outline" className="bg-red-500/20 text-red-500 border-red-500/20">Malware</Badge>;
      case "stego":
        return <Badge variant="outline" className="bg-yellow-500/20 text-yellow-500 border-yellow-500/20">Stego</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("glass-card rounded-xl p-4", className)}>
      <h2 className="text-lg font-semibold mb-4 text-stegoshield-light">Recent Activity</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-stegoshield-light/10">
              <TableHead className="text-stegoshield-light/70">Filename</TableHead>
              <TableHead className="text-stegoshield-light/70">Type</TableHead>
              <TableHead className="text-stegoshield-light/70">Source</TableHead>
              <TableHead className="text-stegoshield-light/70">Status</TableHead>
              <TableHead className="text-stegoshield-light/70 text-right">Timestamp</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow 
                key={activity.id}
                className="border-stegoshield-light/10 hover:bg-stegoshield-light/5"
              >
                <TableCell className="text-stegoshield-light">{activity.filename}</TableCell>
                <TableCell className="text-stegoshield-light">{activity.type}</TableCell>
                <TableCell className="text-stegoshield-light">{activity.source}</TableCell>
                <TableCell>{getStatusBadge(activity.status)}</TableCell>
                <TableCell className="text-stegoshield-light text-right">{activity.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
