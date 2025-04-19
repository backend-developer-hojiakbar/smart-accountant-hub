
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-accountblue-500">Accountant.uz</span>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/services">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Xizmatlar
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/accountants">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Buxgalterlar
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Biz haqimizda
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Aloqa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        {isMobile ? (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-64 sm:w-64" side="left">
              <div className="mt-6 flex flex-col space-y-2">
                <Link to="/services" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Xizmatlar
                  </Button>
                </Link>
                <Link to="/accountants" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Buxgalterlar
                  </Button>
                </Link>
                <Link to="/about" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Biz haqimizda
                  </Button>
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Aloqa
                  </Button>
                </Link>
                <div className="h-px w-full bg-border my-2"></div>
                <Link to="/login" onClick={closeMenu}>
                  <Button variant="ghost" className="w-full justify-start">
                    Kirish
                  </Button>
                </Link>
                <Link to="/register" onClick={closeMenu}>
                  <Button variant="default" className="w-full justify-start">
                    Ro'yxatdan o'tish
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Kirish</Button>
            </Link>
            <Link to="/register">
              <Button>Ro'yxatdan o'tish</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
