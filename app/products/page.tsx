"use client"

import { ArrowRight, BarChart3, Users, Brain, FolderSync, Code, Shield } from "lucide-react";
import ClientLayout from "@/components/ClientLayout";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "DataFlow Pro",
      description: "Transform complex datasets into beautiful, actionable insights with our intuitive data visualization platform.",
      icon: BarChart3,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      name: "ConnectHub",
      description: "Bring your team together with powerful collaboration tools designed for the modern workplace.",
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      id: 3,
      name: "AI Insights",
      description: "Harness the power of machine learning to predict trends and optimize your business processes.",
      icon: Brain,
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 4,
      name: "FolderSync",
      description: "Seamlessly synchronize and manage your data across multiple platforms with enterprise-grade security.",
      icon: FolderSync,
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      id: 5,
      name: "DevTools Suite",
      description: "Comprehensive development toolkit that accelerates coding, testing, and deployment processes.",
      icon: Code,
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      id: 6,
      name: "SecureVault",
      description: "Advanced cybersecurity solution that protects your digital assets with military-grade encryption.",
      icon: Shield,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <ClientLayout>
      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(0,0%,11.4%)] dark:text-white">Our Products</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300 leading-relaxed">
                At Flagship Software, we believe in creating products that don&apos;t just solve problems—they anticipate needs and create opportunities. Our development philosophy centers on user-centric design, cutting-edge technology, and sustainable innovation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 card-hover border border-gray-100 dark:border-gray-700">
                  <div className={`w-16 h-16 ${product.iconBg} dark:opacity-80 rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`${product.iconColor} h-8 w-8`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[hsl(0,0%,11.4%)] dark:text-white">{product.name}</h3>
                  <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-6">{product.description}</p>
                  <a href="#" className="inline-flex items-center text-[hsl(24,100%,48%)] font-semibold hover:underline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 