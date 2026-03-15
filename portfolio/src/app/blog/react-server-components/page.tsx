import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const accentColor = '#00D4FF';

const tags = ['React', 'Next.js', 'Server Components', 'Client Components', 'Performance', 'App Router'];

const sections = [
    {
        heading: 'The Mental Model: Where Does the Code Run?',
        body: `The fundamental question for every component is: does this need to run in the browser? Server Components execute exclusively on the server — they can read databases, access the filesystem, and import heavy libraries without shipping any JavaScript to the client. Client Components run in both environments (SSR on server, hydration on client) and are the only place you can use hooks, event listeners, or browser APIs.`
    },
    {
        heading: 'My Decision Framework',
        body: `I use a simple three-question test. First: does the component use useState, useEffect, or any other hook? If yes → Client Component. Second: does it need onClick, onChange, or any event handler? If yes → Client Component. Third: does it fetch data or access server-only resources? If yes → Server Component. If none of the above, default to Server Component — you get smaller bundles for free.`
    },
    {
        heading: 'The Boundary Pattern',
        body: `The most powerful pattern is pushing the "use client" boundary as far down the tree as possible. A page can be a Server Component that fetches data and passes it as props to a small Client Component that handles interactivity. This means only the interactive leaf nodes ship JavaScript, while the static shell is pure HTML from the server — dramatically improving Time to Interactive.`
    },
    {
        heading: 'Real-World Performance Data',
        body: `After refactoring a Next.js e-commerce product page from all-client to the boundary pattern, JavaScript bundle size dropped from 340KB to 89KB. First Contentful Paint improved by 1.2 seconds on a 4G connection. The product grid, breadcrumbs, and description are all Server Components. Only the add-to-cart button and quantity selector are Client Components.`
    },
    {
        heading: 'Common Pitfalls',
        body: `The most common mistake is importing a Client Component into a Server Component and accidentally pulling in the entire client bundle. Use dynamic imports with \`{ ssr: false }\` for components that genuinely cannot run on the server (e.g., canvas-based libraries). Also watch out for context providers — they must be Client Components, but you can wrap them around Server Component children without making those children client-side.`
    },
    {
        heading: 'Streaming and Suspense Integration',
        body: `Server Components compose beautifully with Suspense. Wrap slow data-fetching Server Components in \`<Suspense fallback={<Skeleton />}>\` to stream the page progressively. The shell renders immediately, and each suspended section streams in as its data resolves. This gives you the UX of client-side loading states with the performance of server rendering — the best of both worlds.`
    }
];

const stats = [
    { label: 'Bundle Reduction', value: '74%' },
    { label: 'FCP Improvement', value: '1.2s' },
    { label: 'Read Time', value: '10 min' },
    { label: 'Published', value: 'Jan 2026' }
];

export default function ReactServerComponentsPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home#blog"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#00D4FF] transition-colors tracking-wider uppercase">
                        <AppIcon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase hidden sm:block">
                        blog / react-server-components
                    </span>
                    <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                        style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
                        React
                    </span>
                </div>
            </div>
            {/* Hero */}
            <section className="pt-28 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <span
                            className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                            style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
                            React
                        </span>
                        <span className="font-mono text-xs text-neutral-600">Jan 10, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                        <span className="font-mono text-xs text-neutral-600">10 min read</span>
                    </div>
                    <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                        React Server Components vs Client Components: When to Use Each
                    </h1>
                    <p className="font-body text-lg text-neutral-400 leading-relaxed max-w-3xl">
                        A practical decision framework I use daily to determine whether a component should live on the server or client, with real-world performance data.
                    </p>
                </div>
            </section>
            {/* Featured image */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-white/8 h-72 lg:h-96">
                        <AppImage
                            src="https://img.rocket.new/generatedImages/rocket_gen_img_133225f29-1772085684929.png"
                            alt="React component tree diagram with server and client boundaries"
                            width={1200}
                            height={600}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent" />
                        <div className="absolute inset-0 scanline-overlay opacity-30" />
                    </div>
                </div>
            </section>
            {/* Stats */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {stats?.map((stat) => (
                            <div
                                key={stat?.label}
                                className="bg-[#080808] border border-white/6 rounded-xl p-5 text-center">
                                <div className="font-display text-2xl font-semibold mb-1" style={{ color: accentColor }}>
                                    {stat?.value}
                                </div>
                                <div className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider">{stat?.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Article content */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto space-y-10">
                    {sections?.map((section) => (
                        <div key={section?.heading} className="bg-[#080808] border border-white/6 rounded-xl p-8">
                            <h2 className="font-display text-xl font-semibold text-white mb-4" style={{ borderLeft: `3px solid ${accentColor}`, paddingLeft: '1rem' }}>
                                {section?.heading}
                            </h2>
                            <p className="font-body text-neutral-400 leading-relaxed">{section?.body}</p>
                        </div>
                    ))}
                </div>
            </section>
            {/* Tech tags */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#080808] border border-white/6 rounded-xl p-8">
                        <h2 className="font-mono text-xs text-neutral-600 uppercase tracking-widest mb-5">Topics Covered</h2>
                        <div className="flex flex-wrap gap-3">
                            {tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="font-mono text-xs px-3 py-1.5 rounded-full border transition-colors"
                                    style={{ color: accentColor, borderColor: `${accentColor}30`, background: `${accentColor}10` }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Back navigation footer */}
            <section className="px-6 pb-20">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-[#080808] border border-white/6 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <p className="font-mono text-xs text-neutral-600 uppercase tracking-wider mb-1">Finished reading?</p>
                            <p className="font-body text-neutral-400 text-sm">Head back to explore more articles and projects.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href="/home#blog"
                                className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 transition-all">
                                <AppIcon name="ArrowLeftIcon" size={13} className="group-hover:-translate-x-1 transition-transform" />
                                All Posts
                            </Link>
                            <Link
                                href="/home"
                                className="group flex items-center gap-2 font-mono text-xs px-4 py-2.5 rounded-lg border transition-all"
                                style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}10` }}>
                                Portfolio
                                <AppIcon name="ArrowRightIcon" size={13} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
