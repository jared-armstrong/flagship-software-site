import type { Metadata } from 'next'
import ClientLayout from "@/components/ClientLayout";


export const metadata: Metadata = {
  title: 'Blog - Flagship Software',
  description: 'Read the latest insights, tutorials, and perspectives from Flagship Software on software design, development, and technology trends.',
}

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of User Interface Design",
      date: "December 15, 2024",
      readTime: "5 min read",
      excerpt: "As we step into 2025, the landscape of user interface design continues to evolve at an unprecedented pace. From voice interfaces to augmented reality experiences, designers are pushing the boundaries of what's possible. In this comprehensive guide, we explore the emerging trends that will shape the next generation of digital experiences..."
    },
    {
      id: 2,
      title: "Building Accessible Software for Everyone",
      date: "December 12, 2024",
      readTime: "8 min read",
      excerpt: "Accessibility isn't just a nice-to-have feature—it's a fundamental requirement for creating inclusive digital products. With over 1 billion people worldwide living with disabilities, designing accessible software opens your product to a massive audience while creating better experiences for everyone. Here's our comprehensive guide to accessibility best practices..."
    },
    {
      id: 3,
      title: "AI-Powered Development Tools: A Game Changer",
      date: "December 8, 2024",
      readTime: "6 min read",
      excerpt: "Artificial intelligence is revolutionizing every aspect of software development, from code generation to automated testing. These AI-powered tools are not just increasing productivity—they're fundamentally changing how we approach problem-solving in software engineering. Let's explore the most impactful AI development tools available today..."
    },
    {
      id: 4,
      title: "The Psychology of Color in Software Design",
      date: "December 5, 2024",
      readTime: "4 min read",
      excerpt: "Color isn't just about aesthetics—it's a powerful tool that can influence user behavior, convey meaning, and create emotional connections. Understanding color psychology is crucial for creating effective user interfaces that not only look great but also guide users toward desired actions..."
    },
    {
      id: 5,
      title: "Microinteractions: The Details That Make a Difference",
      date: "December 1, 2024",
      readTime: "7 min read",
      excerpt: "Microinteractions are the small, often overlooked design elements that can make or break a user experience. From the satisfying click of a button to the smooth transition between screens, these tiny details create the difference between a good product and a great one. Here's how to master the art of microinteractions..."
    }
  ];

  return (
    <ClientLayout>
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(0,0%,11.4%)] dark:text-white">Our Blog</h1>
            <p className="text-xl text-[hsl(0,0%,52.5%)] dark:text-gray-300">
              Insights, tutorials, and perspectives from the world of software design and development.
            </p>
          </div>

          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center text-[hsl(0,0%,52.5%)] dark:text-gray-400 text-sm mb-4">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[hsl(0,0%,11.4%)] dark:text-white hover:text-[hsl(24,100%,48%)] transition-colors duration-200">
                  <a href="#" className="cursor-pointer">{post.title}</a>
                </h2>
                <p className="text-[hsl(0,0%,52.5%)] dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-[hsl(24,100%,48%)] font-semibold hover:underline">
                  Read More <span className="ml-2">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </ClientLayout>
  );
} 