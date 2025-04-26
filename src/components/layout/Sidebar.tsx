
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Scan, 
  Mail, 
  MessageSquare, 
  Database, 
  Download, 
  Menu,
  LogOut
} from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  isActive?: boolean;
  isCollapsed?: boolean;
}

const SidebarLink = ({ 
  href, 
  icon: Icon, 
  title, 
  isActive, 
  isCollapsed 
}: SidebarLinkProps) => {
  return (
    <Link 
      to={href}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200",
        isActive 
          ? "bg-stegoshield-accent text-stegoshield-dark font-medium" 
          : "text-stegoshield-light hover:bg-stegoshield-accent/20",
        isCollapsed && "justify-center"
      )}
    >
      <Icon className={cn("h-5 w-5", isCollapsed ? "mx-auto" : "")} />
      {!isCollapsed && <span>{title}</span>}
    </Link>
  );
};

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const routes = [
    { path: "/dashboard", icon: LayoutDashboard, title: "Dashboard" },
    { path: "/manual-scan", icon: Scan, title: "Manual Scan" },
    { path: "/gmail-scan", icon: Mail, title: "Gmail Attachments" },
    { path: "/whatsapp-scan", icon: MessageSquare, title: "WhatsApp Media" },
    { path: "/blockchain-logs", icon: Database, title: "Blockchain Logs" },
    { path: "/reports", icon: Download, title: "Download Reports" },
  ];

  return (
    <div 
      className={cn(
        "h-screen bg-stegoshield-dark border-r border-white/10 flex flex-col transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-stegoshield-accent flex items-center justify-center">
              <span className="font-bold text-stegoshield-dark">S</span>
            </div>
            <span className="font-semibold text-stegoshield-light">StegoShield</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "h-8 w-8 text-stegoshield-light hover:bg-white/10",
            isCollapsed ? "mx-auto" : ""
          )}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-4 px-2 space-y-2">
        {routes.map((route) => (
          <SidebarLink
            key={route.path}
            href={route.path}
            icon={route.icon}
            title={route.title}
            isActive={location.pathname === route.path}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-white/10">
        <SidebarLink
          href="/auth"
          icon={LogOut}
          title="Log Out"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
}
