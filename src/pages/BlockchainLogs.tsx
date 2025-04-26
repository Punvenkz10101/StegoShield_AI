
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import BlockchainLogs from "@/components/blockchain/BlockchainLogs";

export default function BlockchainLogsPage() {
  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Blockchain Log Viewer</h1>
            
            <BlockchainLogs />
          </div>
        </main>
      </div>
    </div>
  );
}
