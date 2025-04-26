
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Mail, Check, AlertTriangle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmailAttachment {
  id: string;
  sender: string;
  filename: string;
  status: "clean" | "suspicious" | "malware" | "stego";
  time: string;
  blockchainLogged: boolean;
}

interface EmailScannerProps {
  className?: string;
}

export default function EmailScanner({ className }: EmailScannerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [attachments, setAttachments] = useState<EmailAttachment[]>([]);

  const mockAttachments: EmailAttachment[] = [
    {
      id: "1",
      sender: "john.doe@example.com",
      filename: "quarterly_report.pdf",
      status: "clean",
      time: "2023-04-26 13:45",
      blockchainLogged: false
    },
    {
      id: "2",
      sender: "sales@company.com",
      filename: "product_preview.jpg",
      status: "suspicious",
      time: "2023-04-26 11:20",
      blockchainLogged: true
    },
    {
      id: "3",
      sender: "marketing@newsletter.com",
      filename: "newsletter.mp4",
      status: "stego",
      time: "2023-04-26 09:15",
      blockchainLogged: true
    },
    {
      id: "4",
      sender: "unknown@suspicious.net",
      filename: "invoice_details.zip",
      status: "malware",
      time: "2023-04-26 08:30",
      blockchainLogged: true
    },
    {
      id: "5",
      sender: "team@workspace.com",
      filename: "meeting_notes.docx",
      status: "clean",
      time: "2023-04-25 17:10",
      blockchainLogged: false
    }
  ];

  const handleScanGmail = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAttachments(mockAttachments);
      setIsLoading(false);
    }, 2000);
  };

  const getStatusIcon = (status: EmailAttachment["status"]) => {
    switch (status) {
      case "clean":
        return <Check className="h-5 w-5 text-green-500" />;
      case "suspicious":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "stego":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case "malware":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-stegoshield-light">Gmail Attachment Scanner</h2>
          <p className="text-sm text-stegoshield-light/70">
            Scan email attachments for hidden threats and steganography
          </p>
        </div>
        
        <Button
          onClick={handleScanGmail}
          disabled={isLoading}
          className="bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scanning...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Scan Gmail Attachments
            </>
          )}
        </Button>
      </div>
      
      {attachments.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-stegoshield-light/10">
                <TableHead className="text-stegoshield-light/70">Sender</TableHead>
                <TableHead className="text-stegoshield-light/70">Filename</TableHead>
                <TableHead className="text-stegoshield-light/70">Scan Result</TableHead>
                <TableHead className="text-stegoshield-light/70">Time</TableHead>
                <TableHead className="text-stegoshield-light/70 text-right">Blockchain</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attachments.map((attachment) => (
                <TableRow 
                  key={attachment.id} 
                  className="border-stegoshield-light/10 hover:bg-stegoshield-light/5"
                >
                  <TableCell className="text-stegoshield-light">{attachment.sender}</TableCell>
                  <TableCell className="text-stegoshield-light">{attachment.filename}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(attachment.status)}
                      <span className="text-stegoshield-light">
                        {attachment.status.charAt(0).toUpperCase() + attachment.status.slice(1)}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-stegoshield-light">{attachment.time}</TableCell>
                  <TableCell className="text-right">
                    {attachment.blockchainLogged ? (
                      <Badge variant="outline" className="bg-blue-500/20 text-blue-400 border-blue-500/20">Logged</Badge>
                    ) : (
                      <Badge variant="outline" className="bg-gray-500/20 text-gray-400 border-gray-500/20">Not Logged</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Mail className="h-12 w-12 text-stegoshield-accent/60 mb-4" />
          <h3 className="text-lg font-medium text-stegoshield-light mb-1">No Attachments Scanned</h3>
          <p className="text-sm text-stegoshield-light/70 max-w-md">
            Click the "Scan Gmail Attachments" button to check your recent emails for potential threats
          </p>
        </div>
      )}
    </div>
  );
}
