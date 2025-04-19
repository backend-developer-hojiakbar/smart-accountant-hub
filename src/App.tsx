
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AppLayout } from "./components/AppLayout";
import { DashboardLayout } from "./components/DashboardLayout";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceCatalog from "./pages/ServiceCatalog";
import ServiceDetail from "./pages/ServiceDetail";
import AccountantListing from "./pages/AccountantListing";
import AccountantDetail from "./pages/Accountants";
import Dashboard from "./pages/Dashboard";

// Import client dashboard pages
import Orders from "./pages/dashboard/Orders";
import NewOrder from "./pages/dashboard/NewOrder";
import Accountants from "./pages/dashboard/Accountants";
import Chat from "./pages/dashboard/Chat";
import Payments from "./pages/dashboard/Payments";
import Settings from "./pages/dashboard/Settings";

// Import accountant dashboard pages
import Tasks from "./pages/dashboard/Tasks";
import Clients from "./pages/dashboard/Clients";
import Income from "./pages/dashboard/Income";

// Import admin dashboard pages
import UsersAdmin from "./pages/dashboard/Users";

// Import service category pages
import TaxReports from "./pages/services/TaxReports";
import FinancialStatements from "./pages/services/FinancialStatements";
import Bookkeeping from "./pages/services/Bookkeeping";
import Payroll from "./pages/services/Payroll";
import Consultation from "./pages/services/Consultation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServiceCatalog />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/services/tax-reports" element={<TaxReports />} />
            <Route path="/services/financial-statements" element={<FinancialStatements />} />
            <Route path="/services/bookkeeping" element={<Bookkeeping />} />
            <Route path="/services/payroll" element={<Payroll />} />
            <Route path="/services/consultation" element={<Consultation />} />
            <Route path="/accountants" element={<AccountantListing />} />
            <Route path="/accountants/:id" element={<AccountantDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          
          {/* Dashboard routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            
            {/* Client routes */}
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<Orders />} />
            <Route path="new-order" element={<NewOrder />} />
            <Route path="accountants" element={<Accountants />} />
            
            {/* Accountant routes */}
            <Route path="tasks" element={<Tasks />} />
            <Route path="clients" element={<Clients />} />
            <Route path="income" element={<Income />} />
            
            {/* Admin routes */}
            <Route path="users" element={<UsersAdmin />} />
            <Route path="finance" element={<Income />} /> {/* Reusing Income component for admin */}
            
            {/* Common routes */}
            <Route path="chat" element={<Chat />} />
            <Route path="chat/:id" element={<Chat />} />
            <Route path="payments" element={<Payments />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          
          {/* Catch all other routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
