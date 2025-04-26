import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import FileUpload from "@/components/scan/FileUpload";
import ScanResult from "@/components/scan/ScanResult";

export default function ManualScan() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    filename: string;
    status: "clean" | "malware" | "stego";
    hash: string;
    source: string;
    date: string;
    details?: string;
    confidence?: number;
  } | null>(null);

  const handleFileSelect = (file: File, category: string) => {
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      // Generate random scan result for demo
      const statusOptions: ("clean" | "malware" | "stego")[] = ["clean", "malware", "stego"];
      const status = Math.random() > 0.7 
        ? (Math.random() > 0.5 ? "malware" : "stego") 
        : "clean" as "clean" | "malware" | "stego";
      
      const confidence = Math.floor(Math.random() * 20) + 80; // 80-99%
      
      const result = {
        filename: file.name,
        status,
        hash: `sha256_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
        source: "Manual Upload",
        date: new Date().toLocaleString(),
        details: status !== "clean" 
          ? `Our AI detected ${status === "malware" ? "potential malware" : "hidden data"} in this file.` 
          : undefined,
        confidence: status !== "clean" ? confidence : undefined
      };
      
      setScanResult(result);
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Manual File Scanner</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-12rem)]">
              <FileUpload onFileSelect={handleFileSelect} />
              
              {isScanning ? (
                <div className="glass-card rounded-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-stegoshield-accent/30 border-t-stegoshield-accent rounded-full animate-spin mb-4"></div>
                  <h2 className="text-lg font-semibold text-stegoshield-light mb-2">Scanning File</h2>
                  <p className="text-sm text-stegoshield-light/80 text-center max-w-xs">
                    Our AI is analyzing the file for hidden malware and steganography
                  </p>
                </div>
              ) : scanResult && (
                <ScanResult result={scanResult} />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
