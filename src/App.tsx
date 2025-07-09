import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';

import Index from './pages/Index';
import About from './pages/About';
import Chapters from './pages/Chapters';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/chapters" element={<Chapters />} />

        {/* Clerk auth flows */}
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />

        {/* Protected dashboard */}
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SignedOut>
              <Navigate to="/login" replace />
            </SignedOut>
          }
        />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
