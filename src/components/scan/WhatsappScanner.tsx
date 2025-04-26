
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Loader2, Check, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsappMedia {
  id: string;
  name: string;
  type: "image" | "audio" | "video";
  thumbnail?: string;
  status: "clean" | "suspicious" | "malware" | "stego" | "unknown";
  date: string;
}

interface WhatsappScannerProps {
  className?: string;
}

export default function WhatsappScanner({ className }: WhatsappScannerProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [media, setMedia] = useState<WhatsappMedia[]>([]);

  const mockMedia: WhatsappMedia[] = [
    {
      id: "1",
      name: "family_photo.jpg",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop&auto=format",
      status: "clean",
      date: "2023-04-25"
    },
    {
      id: "2",
      name: "voice_message.mp3",
      type: "audio",
      status: "clean",
      date: "2023-04-24"
    },
    {
      id: "3",
      name: "birthday_video.mp4",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop&auto=format",
      status: "stego",
      date: "2023-04-23"
    },
    {
      id: "4",
      name: "document_scan.jpg",
      type: "image",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop&auto=format",
      status: "suspicious",
      date: "2023-04-22"
    },
    {
      id: "5",
      name: "project_presentation.mp4",
      type: "video",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&auto=format",
      status: "clean",
      date: "2023-04-21"
    },
    {
      id: "6",
      name: "business_audio.mp3",
      type: "audio",
      status: "malware",
      date: "2023-04-20"
    }
  ];

  const handleConnectWhatsapp = () => {
    setIsConnecting(true);
    // Simulate connection
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      setIsScanning(true);
      
      // Simulate fetching media
      setTimeout(() => {
        setMedia(mockMedia);
        setIsScanning(false);
      }, 1500);
    }, 2000);
  };

  const handleScanItem = (id: string) => {
    // Find the item and update its status
    const updatedMedia = media.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: item.status === "unknown" ? 
            (Math.random() > 0.7 ? "stego" : "clean") : 
            item.status
        };
      }
      return item;
    });
    
    setMedia(updatedMedia);
  };

  const getStatusIcon = (status: WhatsappMedia["status"]) => {
    switch (status) {
      case "clean":
        return <Check className="h-4 w-4 text-green-500" />;
      case "suspicious":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "stego":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "malware":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: WhatsappMedia["type"]) => {
    switch (type) {
      case "image":
        return <span className="text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-400 rounded">Image</span>;
      case "audio":
        return <span className="text-xs font-medium px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Audio</span>;
      case "video":
        return <span className="text-xs font-medium px-2 py-1 bg-pink-500/20 text-pink-400 rounded">Video</span>;
      default:
        return null;
    }
  };

  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-lg font-semibold text-stegoshield-light">WhatsApp Media Scanner</h2>
          <p className="text-sm text-stegoshield-light/70">
            Connect to WhatsApp and scan media files for threats
          </p>
        </div>
        
        {!isConnected && (
          <Button
            onClick={handleConnectWhatsapp}
            disabled={isConnecting}
            className="bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90"
          >
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              <>
                <MessageSquare className="mr-2 h-4 w-4" />
                Connect WhatsApp
              </>
            )}
          </Button>
        )}
      </div>
      
      {isScanning ? (
        <div className="flex flex-col items-center justify-center py-12">
          <Loader2 className="h-12 w-12 text-stegoshield-accent animate-spin mb-4" />
          <h3 className="text-lg font-medium text-stegoshield-light">Scanning WhatsApp Media</h3>
          <p className="text-sm text-stegoshield-light/70 mt-2">
            This might take a moment...
          </p>
        </div>
      ) : media.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {media.map((item) => (
            <div 
              key={item.id}
              className="glass-card rounded-lg p-4 hover:bg-stegoshield-light/5 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                {getTypeIcon(item.type)}
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs",
                    item.status === "clean" && "bg-green-500/20 text-green-400 border-green-500/20",
                    item.status === "suspicious" && "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
                    item.status === "stego" && "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
                    item.status === "malware" && "bg-red-500/20 text-red-400 border-red-500/20",
                    item.status === "unknown" && "bg-gray-500/20 text-gray-400 border-gray-500/20"
                  )}
                >
                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                </Badge>
              </div>
              
              <div className="mb-3">
                {item.thumbnail ? (
                  <div 
                    className="w-full h-32 bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${item.thumbnail})` }}
                  ></div>
                ) : (
                  <div className="w-full h-32 bg-stegoshield-light/5 rounded flex items-center justify-center">
                    {item.type === "audio" && (
                      <svg className="h-12 w-12 text-stegoshield-light/30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    )}
                    {item.type === "video" && (
                      <svg className="h-12 w-12 text-stegoshield-light/30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect width="15" height="14" x="1" y="5" rx="2" ry="2" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-stegoshield-light mb-1 truncate" title={item.name}>
                  {item.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stegoshield-light/70">{item.date}</span>
                  <div className="flex items-center gap-1">
                    {getStatusIcon(item.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : isConnected ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <MessageSquare className="h-12 w-12 text-stegoshield-accent/60 mb-4" />
          <h3 className="text-lg font-medium text-stegoshield-light mb-1">No Media Files Found</h3>
          <p className="text-sm text-stegoshield-light/70 max-w-md">
            Connect to WhatsApp and make sure you have permission to access media files
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <MessageSquare className="h-12 w-12 text-stegoshield-accent/60 mb-4" />
          <h3 className="text-lg font-medium text-stegoshield-light mb-1">Connect to WhatsApp</h3>
          <p className="text-sm text-stegoshield-light/70 max-w-md">
            Click the connect button above to link your WhatsApp account and scan media files
          </p>
        </div>
      )}
    </div>
  );
}
