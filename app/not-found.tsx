"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ClientLayout from "@/components/ClientLayout";

export default function NotFound() {
  return (
    <ClientLayout>
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-[hsl(24,100%,48%)] mb-4">404</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(0,0%,11.4%)] dark:text-white">
              Page Not Found
            </h2>
            <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link href="/">
              <Button className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                Go Back Home
              </Button>
            </Link>
            <div className="text-[hsl(0,0%,52.5%)] dark:text-gray-300">
              <p>Or try one of these pages:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <Link href="/products" className="text-[hsl(24,100%,48%)] hover:underline">
                  Products
                </Link>
                <Link href="/blog" className="text-[hsl(24,100%,48%)] hover:underline">
                  Blog
                </Link>
                <Link href="/contact" className="text-[hsl(24,100%,48%)] hover:underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 