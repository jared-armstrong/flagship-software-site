import type { Metadata } from 'next'
import Link from "next/link";
import { ArrowRight, Lightbulb, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: 'Flagship Software - Designing the Future',
  description: 'Flagship Software creates innovative, user-centric software solutions. Discover our cutting-edge products including DataFlow Pro, ConnectHub, and AI Insights.',
}

export default function Home() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="slide-up">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[hsl(0,0%,11.4%)] dark:text-white">
                  Designing the 
                  <span className="text-gradient dark:bg-gradient-to-r dark:from-[hsl(24,100%,48%)] dark:to-[hsl(28,100%,45%)] dark:bg-clip-text dark:text-transparent block">Future of Software</span>
                </h1>
                <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-8 leading-relaxed">
                  We craft exceptional software experiences that push boundaries and define tomorrow&apos;s digital landscape.
                </p>
                <Link href="/products">
                  <Button className="btn-primary px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl">
                    View Our Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="fade-in">
                <div className="relative">
                  <div className="w-full h-96 bg-gradient-to-br from-[hsl(24,100%,48%)]/10 to-[hsl(240,9%,96.1%)] rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full p-8">
                      {/* Animated background elements */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-8 left-8 w-16 h-16 bg-[hsl(24,100%,48%)]/30 rounded-2xl floating"></div>
                        <div className="absolute top-16 right-12 w-12 h-12 bg-[hsl(24,100%,48%)]/20 rounded-xl floating-delayed"></div>
                        <div className="absolute bottom-12 left-16 w-20 h-20 bg-[hsl(24,100%,48%)]/25 rounded-3xl floating"></div>
                        <div className="absolute bottom-8 right-8 w-14 h-14 bg-[hsl(24,100%,48%)]/35 rounded-2xl floating-delayed"></div>
                      </div>
                      
                      {/* Main content grid */}
                      <div className="relative z-10 grid grid-cols-3 gap-4 h-full">
                        <div className="h-16 bg-[hsl(24,100%,48%)]/20 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-12 bg-[hsl(24,100%,48%)]/30 rounded-xl mt-4 backdrop-blur-sm"></div>
                        <div className="h-20 bg-[hsl(24,100%,48%)]/10 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-12 bg-[hsl(24,100%,48%)]/40 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-16 bg-[hsl(24,100%,48%)]/20 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-14 bg-[hsl(24,100%,48%)]/30 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-18 bg-[hsl(24,100%,48%)]/10 rounded-xl backdrop-blur-sm"></div>
                        <div className="h-10 bg-[hsl(24,100%,48%)]/50 rounded-xl mt-2 backdrop-blur-sm"></div>
                        <div className="h-16 bg-[hsl(24,100%,48%)]/20 rounded-xl backdrop-blur-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[hsl(0,0%,11.4%)] dark:text-white">Who We Are</h2>
            <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300 leading-relaxed mb-12">
              Flagship Software is a cutting-edge software design company dedicated to creating innovative, user-centric solutions. Our team of experts combines technical excellence with creative vision to deliver products that not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(24,100%,48%)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="text-[hsl(24,100%,48%)] h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,11.4%)] dark:text-white">Innovation</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300">Pushing the boundaries of what&apos;s possible in software design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(24,100%,48%)]/10 dark:bg-[hsl(24,100%,48%)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[hsl(24,100%,48%)] h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,11.4%)] dark:text-white">User-Centric</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300">Every decision is made with the end user in mind</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[hsl(24,100%,48%)]/10 dark:bg-[hsl(24,100%,48%)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="text-[hsl(24,100%,48%)] h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[hsl(0,0%,11.4%)] dark:text-white">Excellence</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300">Delivering quality that exceeds expectations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20 bg-[hsl(240,9%,96.1%)] dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(0,0%,11.4%)] dark:text-white">Featured Products</h2>
              <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300">Discover our flagship solutions that are reshaping industries</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 card-hover border border-gray-100 dark:border-gray-600">
                <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
                    <div className="flex space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                      <div className="h-3 bg-[hsl(24,100%,48%)]/30 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">DataFlow Pro</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-6">An intuitive data visualization platform that transforms complex datasets into actionable insights.</p>
                <a href="#" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">Learn More →</a>
              </div>

              {/* Product 2 */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 card-hover border border-gray-100 dark:border-gray-600">
                <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-32 h-40 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-3">
                    <div className="w-6 h-1 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-3"></div>
                    <div className="space-y-3">
                      <div className="h-8 bg-[hsl(24,100%,48%)]/20 rounded"></div>
                      <div className="flex space-x-2">
                        <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-600 rounded"></div>
                        <div className="flex-1 h-6 bg-gray-100 dark:bg-gray-600 rounded"></div>
                      </div>
                      <div className="h-12 bg-gray-50 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">ConnectHub</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-6">A seamless collaboration platform that brings teams together with powerful communication tools.</p>
                <a href="#" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">Learn More →</a>
              </div>

              {/* Product 3 */}
              <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 card-hover md:col-span-2 lg:col-span-1 border border-gray-100 dark:border-gray-600">
                <div className="w-full h-48 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl mb-6 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-white dark:bg-gray-800 rounded-lg p-4 relative">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[hsl(24,100%,48%)]/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 text-[hsl(24,100%,48%)]">🧠</div>
                    </div>
                    <div className="mt-8 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded flex-1"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[hsl(24,100%,48%)] rounded-full"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">AI Insights</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-6">Advanced machine learning algorithms that predict trends and optimize business processes.</p>
                <a href="#" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Blog Posts Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(0,0%,11.4%)] dark:text-white">Latest from Our Blog</h2>
              <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300">Insights and perspectives from the world of software design</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog Post 1 */}
              <article className="bg-[hsl(240,9%,96.1%)] dark:bg-gray-800 rounded-2xl p-6 card-hover border border-gray-100 dark:border-gray-700">
                <div className="text-[hsl(0,0%,52.5%)] dark:text-gray-400 text-sm mb-2">December 15, 2024</div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">The Future of User Interface Design</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-4">Exploring emerging trends in UI design and how they&apos;re shaping the next generation of digital experiences...</p>
                <Link href="/blog" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">
                  Read More →
                </Link>
              </article>

              {/* Blog Post 2 */}
              <article className="bg-[hsl(240,9%,96.1%)] dark:bg-gray-800 rounded-2xl p-6 card-hover border border-gray-100 dark:border-gray-700">
                <div className="text-[hsl(0,0%,52.5%)] dark:text-gray-400 text-sm mb-2">December 12, 2024</div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">Building Accessible Software for Everyone</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-4">A comprehensive guide to creating inclusive digital products that work for users of all abilities...</p>
                <Link href="/blog" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">
                  Read More →
                </Link>
              </article>

              {/* Blog Post 3 */}
              <article className="bg-[hsl(240,9%,96.1%)] dark:bg-gray-800 rounded-2xl p-6 card-hover border border-gray-100 dark:border-gray-700">
                <div className="text-[hsl(0,0%,52.5%)] dark:text-gray-400 text-sm mb-2">December 8, 2024</div>
                <h3 className="text-xl font-bold mb-3 text-[hsl(0,0%,11.4%)] dark:text-white">AI-Powered Development Tools</h3>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 mb-4">How artificial intelligence is revolutionizing the software development process and increasing productivity...</p>
                <Link href="/blog" className="text-[hsl(24,100%,48%)] font-semibold hover:underline">
                  Read More →
                </Link>
              </article>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 