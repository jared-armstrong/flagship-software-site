import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Flagship Software',
  description: 'Explore Flagship Software\'s innovative product suite including DataFlow Pro, ConnectHub, AI Insights, and more cutting-edge solutions.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 