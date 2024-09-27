import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.svg";

const navbarTitle = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Experience",
    path: "/experience",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Interest",
    path: "/interest",
  },
  {
    title: "Awards",
    path: "/awards",
  },
];

const Navbar = () => {
  return (
    <div className="flex w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-24">
        <nav className="hidden flex-col gap-6 md:flex md:flex-row md:items-center md:gap-5 md:text-sm md:w-full lg:gap-6">
          <NavLink
            to="/"
            className="flex mr-auto items-center gap-2 text-lg font-semibold md:text-base"
          >
            <img src={Logo} alt="Logo" className="w-12" />
            <span className="sr-only">Moh Lutfi Fauzi</span>
          </NavLink>
          {navbarTitle.map((title) => (
            <NavLink
              key={title.title}
              to={title.path}
              className={({ isActive }) =>
                isActive
                  ? "text-foreground transition-colors hover:text-foreground"
                  : "text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {title.title}
            </NavLink>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6">
              <NavLink
                to="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <img src={Logo} alt="Logo" className="w-12" />
                <span className="sr-only">Moh Lutfi Fauzi</span>
              </NavLink>
              {navbarTitle.map((title) => (
                <NavLink
                  key={title.title}
                  to={title.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-foreground  hover:text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {title.title}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
};

export default Navbar;
