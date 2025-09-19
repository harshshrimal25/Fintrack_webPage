import { Apple, ChevronDown, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const DashboardHeader = () => {
  const navItems = [
    "Hierarchy",
    "Accounts",
    "Forecasts",
    "Budgets",
    "Reports",
    "Users",
    "Applications",
    "All Rates",
  ];

  return (
    <header className="bg-dashboard-header text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center justify-between w-full  px-8 ">
        <div className="flex items-center space-x-2">
          <Apple className="h-6 w-6" />
          <span className="text-xl font-semibold">FinTrack</span>
        </div>

        <nav className="flex items-center space-x-6 mx-auto">
          {navItems.map((item) => (
            <DropdownMenu key={item}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`text-white hover:bg-dashboard-nav ${
                    item === "Forecasts" ? "bg-dashboard-nav" : ""
                  }`}
                >
                  {item}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{item} Option 1</DropdownMenuItem>
                <DropdownMenuItem>{item} Option 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>
        <div className="w-20"></div>
      </div>

      <div className="flex items-center space-x-4">
        {/* <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-dashboard-nav"
        >
          <Bell className="h-4 w-4" />
        </Button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-white hover:bg-dashboard-nav"
            >
              Fintrack User
              <User className="h-4 w-4 mr-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
