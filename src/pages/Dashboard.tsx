import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ActivityTable from "@/components/dashboard/ActivityTable";
import { dashboardStats, recentActivities } from "@/lib/mockData";
import { FileArchive, Database, AlertTriangle, Scan } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Dashboard() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (!isAuthenticated) {
      localStorage.setItem("authenticated", "true");
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StatCard
                title="Files Scanned"
                value={dashboardStats.filesScanned}
                icon={<Scan className="h-5 w-5" />}
              />
              <StatCard
                title="Threats Detected"
                value={dashboardStats.threatsDetected}
                icon={<AlertTriangle className="h-5 w-5" />}
              />
              <StatCard
                title="Logged to Blockchain"
                value={dashboardStats.loggedToBlockchain}
                icon={<Database className="h-5 w-5" />}
              />
            </div>
            
            <div className="glass-card rounded-xl p-6">
              <ActivityTable activities={recentActivities} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
