'use client'

import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function PagesLandingJs() {
  return (
    (<div className="flex flex-col min-h-screen">
      <Head>
        <title>Readmeaker - Generate Awesome READMEs</title>
        <meta
          name="description"
          content="Readmeaker - The ultimate README generator for your projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-grow">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Readmeaker
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-100 md:text-xl">
                  Create professional and attractive READMEs for your projects in minutes. Boost your projects visibility and help others understand your work.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href="/generate"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/learn-more"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>)
  );
}