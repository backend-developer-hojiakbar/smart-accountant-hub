
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  FileText, 
  Users, 
  Clock, 
  MessageSquare, 
  Settings, 
  LogOut, 
  User, 
  CreditCard,
  Bell,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// Define a type for the user role to ensure type safety
type UserRole = "client" | "accountant" | "admin";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void; // Add the onClick prop to the interface
}

const SidebarItem = ({ icon: Icon, label, href, isActive, onClick }: SidebarItemProps) => (
  <Link to={href} onClick={onClick}>
    <div
      className={cn(
        "flex items-center py-2 px-3 rounded-md text-sm font-medium transition-colors",
        isActive 
          ? "bg-accountblue-100 text-accountblue-700" 
          : "text-accountgray-600 hover:bg-accountblue-50 hover:text-accountblue-600"
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </div>
  </Link>
);

export function DashboardLayout() {
  const location = useLocation();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  // This would come from auth context in a real app
  const userRole: UserRole = "client"; // could be "client", "accountant" or "admin"
  
  const clientMenuItems = [
    { icon: Home, label: "Asosiy", href: "/dashboard" },
    { icon: FileText, label: "Buyurtmalarim", href: "/dashboard/orders" },
    { icon: Users, label: "Buxgalterlar", href: "/dashboard/accountants" },
    { icon: MessageSquare, label: "Chat", href: "/dashboard/chat" },
    { icon: CreditCard, label: "To'lovlar", href: "/dashboard/payments" },
    { icon: Settings, label: "Sozlamalar", href: "/dashboard/settings" }
  ];
  
  const accountantMenuItems = [
    { icon: Home, label: "Asosiy", href: "/dashboard" },
    { icon: FileText, label: "Topshiriqlarim", href: "/dashboard/tasks" },
    { icon: Users, label: "Mijozlarim", href: "/dashboard/clients" },
    { icon: MessageSquare, label: "Chat", href: "/dashboard/chat" },
    { icon: CreditCard, label: "Daromadlarim", href: "/dashboard/income" },
    { icon: Settings, label: "Sozlamalar", href: "/dashboard/settings" }
  ];
  
  const adminMenuItems = [
    { icon: Home, label: "Asosiy", href: "/dashboard" },
    { icon: Users, label: "Foydalanuvchilar", href: "/dashboard/users" },
    { icon: FileText, label: "Buyurtmalar", href: "/dashboard/orders" },
    { icon: CreditCard, label: "Moliya", href: "/dashboard/finance" },
    { icon: Settings, label: "Sozlamalar", href: "/dashboard/settings" }
  ];
  
  // Fixed type comparison issues by ensuring we're comparing values of the same UserRole type
  let menuItems;
  if (userRole === "accountant" as UserRole) {
    menuItems = accountantMenuItems;
  } else if (userRole === "admin" as UserRole) {
    menuItems = adminMenuItems;
  } else {
    menuItems = clientMenuItems;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-white shadow-lg"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        >
          {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-white border-r">
        <div className="flex flex-col h-full">
          <div className="flex items-center h-16 px-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accountblue-600 text-white">
                <FileText size={16} />
              </div>
              <span className="text-lg font-bold text-accountblue-800">AccountHub</span>
            </Link>
          </div>
          
          <div className="flex flex-col flex-grow overflow-y-auto p-4">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <SidebarItem 
                  key={item.href} 
                  icon={item.icon} 
                  label={item.label} 
                  href={item.href} 
                  isActive={location.pathname === item.href} 
                />
              ))}
            </nav>
            
            <div className="mt-auto">
              <Separator className="my-4" />
              <Link to="/logout">
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" />
                  Chiqish
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar */}
      {mobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={() => setMobileSidebarOpen(false)}
          ></div>
          
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="flex items-center h-16 px-4 border-b">
              <Link to="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accountblue-600 text-white">
                  <FileText size={16} />
                </div>
                <span className="text-lg font-bold text-accountblue-800">AccountHub</span>
              </Link>
            </div>
            
            <div className="flex-1 h-0 overflow-y-auto p-4">
              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <SidebarItem 
                    key={item.href} 
                    icon={item.icon} 
                    label={item.label} 
                    href={item.href} 
                    isActive={location.pathname === item.href} 
                    onClick={() => setMobileSidebarOpen(false)}
                  />
                ))}
              </nav>
              
              <div className="mt-auto pt-4">
                <Separator className="my-4" />
                <Link to="/logout" onClick={() => setMobileSidebarOpen(false)}>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Chiqish
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main content */}
      <div className="flex flex-col flex-1 md:pl-64">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-end h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell size={20} />
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
                </Button>
                
                <div className="flex items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="ml-2 hidden md:flex flex-col">
                    <span className="text-sm font-medium">Aziz Ismoilov</span>
                    <span className="text-xs text-gray-500">
                      {userRole === "client" as UserRole && "Mijoz"}
                      {userRole === "accountant" as UserRole && "Buxgalter"}
                      {userRole === "admin" as UserRole && "Administrator"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
