
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { 
  Bell, 
  Menu, 
  User, 
  LogIn, 
  UserPlus, 
  FileText, 
  Search 
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-accountblue-600 text-white">
              <FileText size={20} />
            </div>
            <span className="text-xl font-bold text-accountblue-800">AccountHub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-accountgray-700 hover:text-accountblue-600 transition-colors">
            Xizmatlar
          </Link>
          <Link to="/accountants" className="text-accountgray-700 hover:text-accountblue-600 transition-colors">
            Buxgalterlar
          </Link>
          <Link to="/about" className="text-accountgray-700 hover:text-accountblue-600 transition-colors">
            Biz haqimizda
          </Link>
          <Link to="/contact" className="text-accountgray-700 hover:text-accountblue-600 transition-colors">
            Aloqa
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="rounded-full text-accountgray-600">
            <Search size={20} />
          </Button>

          {/* Auth buttons - show these when user is not logged in */}
          <Link to="/login">
            <Button variant="outline" className="border-accountblue-300 text-accountblue-700">
              <LogIn className="mr-2 h-4 w-4" />
              Kirish
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-accountblue-600 hover:bg-accountblue-700">
              <UserPlus className="mr-2 h-4 w-4" />
              Ro'yxatdan o'tish
            </Button>
          </Link>

          {/* Show these buttons when user is logged in */}
          {/* 
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-4">
                <h3 className="font-medium text-sm">Bildirishnomalar</h3>
                <p className="text-xs text-muted-foreground">Hozircha bildirishnomalar yo'q</p>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User size={20} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/dashboard">Mening kabineтim</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/profile">Profil sozlamalari</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/logout">Chiqish</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          */}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/services" 
              className="text-accountgray-700 hover:text-accountblue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Xizmatlar
            </Link>
            <Link 
              to="/accountants" 
              className="text-accountgray-700 hover:text-accountblue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Buxgalterlar
            </Link>
            <Link 
              to="/about" 
              className="text-accountgray-700 hover:text-accountblue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Biz haqimizda
            </Link>
            <Link 
              to="/contact" 
              className="text-accountgray-700 hover:text-accountblue-600 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Aloqa
            </Link>
            <div className="pt-2">
              <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full mb-2 border-accountblue-300 text-accountblue-700">
                  <LogIn className="mr-2 h-4 w-4" />
                  Kirish
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-accountblue-600 hover:bg-accountblue-700">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Ro'yxatdan o'tish
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
