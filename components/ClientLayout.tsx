"use client"

import Navigation from "./Navigation";
import Footer from "./Footer";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
} 