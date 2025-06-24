import Link from "next/link";
import { Github, Linkedin, MessageSquare, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,11.4%)] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Flagship Software</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Designing the future of software with innovative solutions that push boundaries and define tomorrow&apos;s digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[hsl(24,100%,48%)] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(24,100%,48%)] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(24,100%,48%)] transition-colors duration-200">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[hsl(24,100%,48%)] transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">DataFlow Pro</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">ConnectHub</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">AI Insights</a></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">CloudSync</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">About Us</Link></li>
              <li><a href="#" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">Careers</a></li>
              <li><Link href="/blog" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[hsl(24,100%,48%)] transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Flagship Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 