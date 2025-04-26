
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import StatCard from "@/components/dashboard/StatCard";
import ActivityTable from "@/components/dashboard/ActivityTable";
import ThreatDistribution from "@/components/dashboard/ThreatDistribution";
import { dashboardStats, recentActivities, threatDistribution } from "@/lib/mockData";
import { FileArchive, Database, AlertTriangle, Scan } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Dashboard() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Redirect to auth page if not authenticated (for demo)
  useEffect(() => {
    // This would be replaced with actual auth check in a real application
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (!isAuthenticated) {
      localStorage.setItem("authenticated", "true"); // Set for demo
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-stegoshield-dark overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-stegoshield-light mb-6">Dashboard</h1>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Files Scanned"
                value={dashboardStats.filesScanned}
                icon={<Scan className="h-5 w-5" />}
                trend={{ value: 8, isPositive: true }}
              />
              <StatCard
                title="Threats Detected"
                value={dashboardStats.threatsDetected}
                icon={<AlertTriangle className="h-5 w-5" />}
                trend={{ value: 12, isPositive: true }}
              />
              <StatCard
                title="Stego Files"
                value={dashboardStats.stegoFiles}
                icon={<FileArchive className="h-5 w-5" />}
                trend={{ value: 5, isPositive: true }}
              />
              <StatCard
                title="Logged to Blockchain"
                value={dashboardStats.loggedToBlockchain}
                icon={<Database className="h-5 w-5" />}
                trend={{ value: 15, isPositive: true }}
              />
            </div>
            
            {/* Charts & Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <ThreatDistribution data={threatDistribution} className="lg:col-span-1" />
              <ActivityTable activities={recentActivities} className="lg:col-span-2" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
