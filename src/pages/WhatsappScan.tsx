
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import WhatsappScanner from "@/components/scan/WhatsappScanner";

export default function WhatsappScan() {
  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">WhatsApp Media Scanner</h1>
            
            <WhatsappScanner />
          </div>
        </main>
      </div>
    </div>
  );
}
