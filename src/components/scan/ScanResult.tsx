import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle, AlertCircle, FileArchive } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

interface ScanResultProps {
  result: {
    filename: string;
    status: "clean" | "malware" | "stego";
    hash: string;
    source: string;
    date: string;
    details?: string;
    confidence?: number;
  } | null;
  className?: string;
}

export default function ScanResult({ result, className }: ScanResultProps) {
  const [isLogging, setIsLogging] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const { toast } = useToast();

  if (!result) return null;

  const handleLogToBlockchain = () => {
    setIsLogging(true);
    // Simulate blockchain logging
    setTimeout(() => {
      setIsLogging(false);
      setIsLogged(true);
      toast({
        title: "Success",
        description: "Threat logged to blockchain successfully.",
      });
    }, 2000);
  };

  const getStatusAlert = () => {
    switch (result.status) {
      case "clean":
        return (
          <Alert className="bg-green-500/20 border-green-500/20">
            <Check className="h-5 w-5 text-green-500" />
            <AlertDescription className="text-green-500">
              No threats found. This file is clean.
            </AlertDescription>
          </Alert>
        );
      case "malware":
        return (
          <Alert className="bg-red-500/20 border-red-500/20">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <AlertDescription className="text-red-500">
              Malware detected with {result.confidence}% confidence.
            </AlertDescription>
          </Alert>
        );
      case "stego":
        return (
          <Alert className="bg-yellow-500/20 border-yellow-500/20">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <AlertDescription className="text-yellow-500">
              Steganography detected with {result.confidence}% confidence.
            </AlertDescription>
          </Alert>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = () => {
    switch (result.status) {
      case "clean":
        return <Badge className="bg-green-500 text-white">Clean</Badge>;
      case "malware":
        return <Badge className="bg-red-500 text-white">Malware</Badge>;
      case "stego":
        return <Badge className="bg-yellow-500 text-black">Steganography</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      <h2 className="text-lg font-semibold text-stegoshield-light mb-4">Scan Results</h2>
      
      <div className="space-y-6">
        {getStatusAlert()}
        
        <div className="grid gap-4">
          <div className="flex justify-between items-center">
            <span className="text-stegoshield-light/70">Status</span>
            <div>{getStatusBadge()}</div>
          </div>
          
          <div className="flex justify-between">
            <span className="text-stegoshield-light/70">Filename</span>
            <span className="text-stegoshield-light font-medium">{result.filename}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-stegoshield-light/70">File Hash</span>
            <span className="text-stegoshield-light font-mono text-sm">{result.hash}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-stegoshield-light/70">Source</span>
            <span className="text-stegoshield-light">{result.source}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-stegoshield-light/70">Scan Date</span>
            <span className="text-stegoshield-light">{result.date}</span>
          </div>
          
          {result.details && (
            <div className="pt-2">
              <span className="text-stegoshield-light/70 block mb-1">Details</span>
              <p className="text-stegoshield-light bg-stegoshield-light/5 p-3 rounded">{result.details}</p>
            </div>
          )}
        </div>
        
        {(result.status === "malware" || result.status === "stego") && !isLogged && (
          <Button 
            onClick={handleLogToBlockchain}
            disabled={isLogging}
            className="bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90"
          >
            {isLogging ? "Logging..." : "Log to Blockchain"}
          </Button>
        )}
      </div>
    </div>
  );
}
