
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import EmailScanner from "@/components/scan/EmailScanner";

export default function GmailScan() {
  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Gmail Attachment Scanner</h1>
            
            <EmailScanner />
          </div>
        </main>
      </div>
    </div>
  );
}
