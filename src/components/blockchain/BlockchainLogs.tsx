import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlockchainEntry {
  id: string;
  fileHash: string;
  result: "clean" | "malware" | "stego";
  threatLevel: "low" | "medium" | "high";
  timestamp: string;
  source: "manual" | "email" | "whatsapp";
  logged: boolean;
}

interface BlockchainLogsProps {
  className?: string;
}

export default function BlockchainLogs({ className }: BlockchainLogsProps) {
  const [entries] = useState<BlockchainEntry[]>([
    {
      id: "1",
      fileHash: "a1b2c3d4e5f6...",
      result: "malware",
      threatLevel: "high",
      timestamp: "2023-04-26 14:22",
      source: "email",
      logged: true
    },
    {
      id: "2",
      fileHash: "f6e5d4c3b2a1...",
      result: "stego",
      threatLevel: "medium",
      timestamp: "2023-04-26 12:15",
      source: "whatsapp",
      logged: true
    },
    {
      id: "3",
      fileHash: "1a2b3c4d5e6f...",
      result: "malware",
      threatLevel: "low",
      timestamp: "2023-04-26 10:05",
      source: "manual",
      logged: true
    },
    {
      id: "4",
      fileHash: "6f5e4d3c2b1a...",
      result: "stego",
      threatLevel: "high",
      timestamp: "2023-04-25 18:40",
      source: "email",
      logged: true
    },
    {
      id: "5",
      fileHash: "abcdef123456...",
      result: "malware",
      threatLevel: "medium",
      timestamp: "2023-04-25 15:12",
      source: "manual",
      logged: false
    }
  ]);

  const getSourceBadge = (source: BlockchainEntry["source"]) => {
    switch(source) {
      case "manual":
        return <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/20">Manual</Badge>;
      case "email":
        return <Badge variant="outline" className="bg-purple-500/20 text-purple-400 border-purple-500/20">Email</Badge>;
      case "whatsapp":
        return <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/20">WhatsApp</Badge>;
      default:
        return null;
    }
  };

  const getResultBadge = (result: BlockchainEntry["result"]) => {
    switch(result) {
      case "clean":
        return <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500/20">Clean</Badge>;
      case "malware":
        return <Badge variant="outline" className="bg-red-500/20 text-red-400 border-red-500/20">Malware</Badge>;
      case "stego":
        return <Badge variant="outline" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/20">Stego</Badge>;
      default:
        return null;
    }
  };

  const getThreatLevelBadge = (level: BlockchainEntry["threatLevel"]) => {
    switch(level) {
      case "low":
        return <Badge className="bg-yellow-500 text-white">Low</Badge>;
      case "medium":
        return <Badge className="bg-orange-500 text-white">Medium</Badge>;
      case "high":
        return <Badge className="bg-red-500 text-white">High</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <h2 className="text-lg font-semibold text-stegoshield-light mb-6">Blockchain Log Viewer</h2>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-stegoshield-light/10">
              <TableHead className="text-stegoshield-light/70">File Hash</TableHead>
              <TableHead className="text-stegoshield-light/70">Scan Result</TableHead>
              <TableHead className="text-stegoshield-light/70">Timestamp</TableHead>
              <TableHead className="text-stegoshield-light/70">Source</TableHead>
              <TableHead className="text-stegoshield-light/70">Status</TableHead>
              <TableHead className="text-stegoshield-light/70 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow 
                key={entry.id}
                className="border-stegoshield-light/10 hover:bg-stegoshield-light/5"
              >
                <TableCell className="font-mono text-xs text-stegoshield-light">{entry.fileHash}</TableCell>
                <TableCell>{getResultBadge(entry.result)}</TableCell>
                <TableCell className="text-stegoshield-light">{entry.timestamp}</TableCell>
                <TableCell>{getSourceBadge(entry.source)}</TableCell>
                <TableCell>
                  {entry.logged ? (
                    <div className="flex items-center gap-1 text-green-500">
                      <Check className="h-4 w-4" />
                      <span>Logged</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="h-4 w-4" />
                      <span>Not Logged</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {entry.logged && (
                    <Button 
                      size="sm"
                      variant="outline"
                      className="bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90 border-none"
                      onClick={() => window.open("https://etherscan.io", "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View on Etherscan
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
