
import { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileArchive, Download, Calendar } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Reports() {
  const [reportType, setReportType] = useState("threats");
  const [timeframe, setTimeframe] = useState("week");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      toast({
        title: "Report Generated",
        description: `Your ${reportType} report has been downloaded.`,
      });
    }, 2000);
  };

  const reports = [
    {
      title: "Threats Summary",
      description: "Comprehensive overview of all detected threats",
      icon: <AlertIcon className="w-8 h-8 text-red-500" />,
      value: "threats"
    },
    {
      title: "Steganography Analysis",
      description: "Detailed analysis of steganography detections",
      icon: <FileIcon className="w-8 h-8 text-yellow-500" />,
      value: "stego"
    },
    {
      title: "Blockchain Audit Log",
      description: "Complete blockchain transaction history",
      icon: <BlockchainIcon className="w-8 h-8 text-blue-500" />,
      value: "blockchain"
    },
    {
      title: "Activity Summary",
      description: "Summary of all scanning activities",
      icon: <ActivityIcon className="w-8 h-8 text-green-500" />,
      value: "activity"
    }
  ];

  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Download Reports</h1>
            
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-lg font-semibold text-stegoshield-light mb-4">Generate Report</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stegoshield-light">
                      Report Type
                    </label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger className="bg-stegoshield-light/5 border-stegoshield-light/10 text-stegoshield-light">
                        <SelectValue placeholder="Select Report Type" />
                      </SelectTrigger>
                      <SelectContent className="bg-stegoshield-dark border-stegoshield-light/10">
                        <SelectItem value="threats">Threats Summary</SelectItem>
                        <SelectItem value="stego">Steganography Analysis</SelectItem>
                        <SelectItem value="blockchain">Blockchain Audit Log</SelectItem>
                        <SelectItem value="activity">Activity Summary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stegoshield-light">
                      Time Period
                    </label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger className="bg-stegoshield-light/5 border-stegoshield-light/10 text-stegoshield-light">
                        <SelectValue placeholder="Select Time Period" />
                      </SelectTrigger>
                      <SelectContent className="bg-stegoshield-dark border-stegoshield-light/10">
                        <SelectItem value="day">Last 24 Hours</SelectItem>
                        <SelectItem value="week">Last 7 Days</SelectItem>
                        <SelectItem value="month">Last 30 Days</SelectItem>
                        <SelectItem value="quarter">Last 3 Months</SelectItem>
                        <SelectItem value="year">Last Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button
                  onClick={handleDownload}
                  disabled={isGenerating}
                  className="bg-stegoshield-accent text-stegoshield-dark hover:bg-stegoshield-accent/90"
                >
                  {isGenerating ? (
                    <>
                      <div className="mr-2 h-4 w-4 border-2 border-stegoshield-dark/30 border-t-stegoshield-dark rounded-full animate-spin"></div>
                      Generating Report...
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Generate & Download Report
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {reports.map((report) => (
                <Card key={report.value} className="glass-card border-none p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">{report.icon}</div>
                    <h3 className="text-lg font-medium text-stegoshield-light mb-2">{report.title}</h3>
                    <p className="text-sm text-stegoshield-light/70 mb-4">{report.description}</p>
                    <div className="mt-auto">
                      <Button 
                        variant="outline" 
                        className="w-full border-stegoshield-light/20 text-stegoshield-light hover:bg-stegoshield-light/10"
                        onClick={() => {
                          setReportType(report.value);
                          handleDownload();
                        }}
                      >
                        <FileArchive className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Custom icons
const AlertIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const FileIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <circle cx="10" cy="13" r="2" />
    <path d="M10 15v4" />
    <path d="M14 15v2" />
    <path d="M6 15v2" />
  </svg>
);

const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <path d="M6 11l4-4 4 4 4-4" />
  </svg>
);

const ActivityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
