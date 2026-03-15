'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tag: string;
    color: string;
    image: string;
    imageAlt: string;
    href: string;
    dateValue: number;
}

const ALL_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Angular 17 Signals: A Complete Migration Guide',
        excerpt:
            'How I migrated a 50K-line Angular app from RxJS-heavy patterns to the new Signals API, achieving 30% better change detection performance.',
        date: 'Feb 14, 2026',
        readTime: '8 min read',
        tag: 'Angular',
        color: '#FF6B6B',
        image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c281c2c8-1767428146525.png',
        imageAlt: 'Angular code on dark monitor showing component architecture',
        href: '/blog/angular-17-signals',
        dateValue: 20260214,
    },
    {
        id: 2,
        title: 'TypeScript 5.4 Patterns Every Senior Dev Should Know',
        excerpt:
            'Exploring NoInfer utility type, template literal improvements, and advanced conditional types that will make your TypeScript code dramatically safer.',
        date: 'Jan 28, 2026',
        readTime: '6 min read',
        tag: 'TypeScript',
        color: '#7B61FF',
        image: 'https://img.rocket.new/generatedImages/rocket_gen_img_193200e9b-1768382631471.png',
        imageAlt: 'TypeScript code showing type definitions and interfaces',
        href: '/blog/typescript-5-4-patterns',
        dateValue: 20260128,
    },
    {
        id: 3,
        title: 'React Server Components vs Client Components: When to Use Each',
        excerpt:
            'A practical decision framework I use daily to determine whether a component should live on the server or client, with real-world performance data.',
        date: 'Jan 10, 2026',
        readTime: '10 min read',
        tag: 'React',
        color: '#00D4FF',
        image: 'https://img.rocket.new/generatedImages/rocket_gen_img_133225f29-1772085684929.png',
        imageAlt: 'React component tree diagram with server and client boundaries',
        href: '/blog/react-server-components',
        dateValue: 20260110,
    },
];

const CATEGORIES = ['All', 'Angular', 'TypeScript', 'React'];
const SORT_OPTIONS = [
    { label: 'Newest First', value: 'newest' },
    { label: 'Oldest First', value: 'oldest' },
    { label: 'Shortest Read', value: 'shortest' },
    { label: 'Longest Read', value: 'longest' },
];

export default function BlogPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');
    const [sortBy, setSortBy] = useState('newest');

    const filtered = useMemo(() => {
        let posts = [...ALL_POSTS];

        // Filter by category
        if (activeCategory !== 'All') {
            posts = posts.filter((p) => p.tag === activeCategory);
        }

        // Filter by search
        if (search.trim()) {
            const q = search.toLowerCase();
            posts = posts.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    p.excerpt.toLowerCase().includes(q) ||
                    p.tag.toLowerCase().includes(q)
            );
        }

        // Sort
        posts.sort((a, b) => {
            if (sortBy === 'newest') return b.dateValue - a.dateValue;
            if (sortBy === 'oldest') return a.dateValue - b.dateValue;
            if (sortBy === 'shortest')
                return parseInt(a.readTime) - parseInt(b.readTime);
            if (sortBy === 'longest')
                return parseInt(b.readTime) - parseInt(a.readTime);
            return 0;
        });

        return posts;
    }, [search, activeCategory, sortBy]);

    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#00FF87] transition-colors"
                    >
                        <AppIcon
                            name="ArrowLeftIcon"
                            size={14}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        cd ~/home
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 hidden sm:block">
                        /blog — all posts
                    </span>
                    <span className="font-mono text-xs text-[#00FF87]">
                        {filtered.length} post{filtered.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </div>

            {/* Hero */}
            <section className="pt-28 pb-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full">
                            06 / Blog
                        </span>
                    </div>
                    <h1 className="font-mono text-5xl lg:text-7xl font-bold text-white leading-none mb-4">
                        All{' '}
                        <span
                            style={{
                                color: '#00FF87',
                                textShadow: '0 0 30px #00FF8760',
                            }}
                        >
                            Writings
                        </span>
                    </h1>
                    <p className="font-mono text-sm text-neutral-500 max-w-xl leading-relaxed">
                        Deep dives into Angular, TypeScript, React, and modern frontend
                        engineering. Practical guides from real production experience.
                    </p>
                </div>
            </section>

            {/* Controls */}
            <section className="px-6 pb-10">
                <div className="max-w-7xl mx-auto space-y-5">
                    {/* Search */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <AppIcon name="MagnifyingGlassIcon" size={16} className="text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search posts by title, tag, or keyword..."
                            className="w-full bg-[#080808] border border-white/8 rounded-xl pl-11 pr-4 py-3 font-mono text-sm text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-[#00FF87]/40 focus:shadow-[0_0_20px_#00FF8715] transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute inset-y-0 right-4 flex items-center text-neutral-500 hover:text-neutral-300 transition-colors"
                            >
                                <AppIcon name="XMarkIcon" size={16} />
                            </button>
                        )}
                    </div>

                    {/* Category filters + Sort */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        {/* Category pills */}
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map((cat) => {
                                const post = ALL_POSTS.find((p) => p.tag === cat);
                                const color =
                                    cat === 'All' ? '#00FF87' : post?.color ?? '#00FF87';
                                const isActive = activeCategory === cat;
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className="font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                                        style={
                                            isActive
                                                ? {
                                                    color,
                                                    borderColor: `${color}60`,
                                                    background: `${color}18`,
                                                    boxShadow: `0 0 12px ${color}25`,
                                                }
                                                : {
                                                    color: '#6b7280',
                                                    borderColor: 'rgba(255,255,255,0.08)',
                                                    background: 'transparent',
                                                }
                                        }
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Sort dropdown */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-[#080808] border border-white/8 rounded-xl pl-4 pr-9 py-2 font-mono text-xs text-neutral-400 focus:outline-none focus:border-[#00FF87]/40 transition-all cursor-pointer"
                            >
                                {SORT_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                                <AppIcon name="ChevronDownIcon" size={12} className="text-neutral-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    {filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-24 gap-4">
                            <div
                                className="w-16 h-16 rounded-full border flex items-center justify-center"
                                style={{
                                    borderColor: 'rgba(255,255,255,0.08)',
                                    background: '#080808',
                                }}
                            >
                                <AppIcon name="DocumentTextIcon" size={28} className="text-neutral-600" />
                            </div>
                            <p className="font-mono text-sm text-neutral-500">
                                No posts match your search.
                            </p>
                            <button
                                onClick={() => {
                                    setSearch('');
                                    setActiveCategory('All');
                                }}
                                className="font-mono text-xs text-[#00FF87] hover:underline transition-colors"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((post) => (
                                <Link
                                    key={post.id}
                                    href={post.href}
                                    className="group flex flex-col bg-[#080808] border border-white/6 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/12"
                                    style={{
                                        ['--hover-shadow' as string]: `0 0 30px ${post.color}18`,
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${post.color}18`;
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Image */}
                                    <div className="relative h-44 overflow-hidden">
                                        <AppImage
                                            src={post.image}
                                            alt={post.imageAlt}
                                            width={600}
                                            height={360}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                                        {/* Scanline overlay */}
                                        <div
                                            className="absolute inset-0 pointer-events-none"
                                            style={{
                                                backgroundImage:
                                                    'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
                                            }}
                                        />
                                        {/* Tag */}
                                        <div
                                            className="absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full border"
                                            style={{
                                                color: post.color,
                                                borderColor: `${post.color}40`,
                                                background: `${post.color}15`,
                                                backdropFilter: 'blur(8px)',
                                            }}
                                        >
                                            {post.tag}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-5 gap-3">
                                        <h2 className="font-mono text-sm font-semibold text-neutral-200 leading-snug group-hover:text-white transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="font-mono text-xs text-neutral-500 leading-relaxed flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-[10px] text-neutral-600">
                                                    {post.date}
                                                </span>
                                                <span className="w-1 h-1 rounded-full bg-neutral-700" />
                                                <span className="font-mono text-[10px] text-neutral-600">
                                                    {post.readTime}
                                                </span>
                                            </div>
                                            <span
                                                className="font-mono text-xs flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                                                style={{ color: post.color }}
                                            >
                                                Read
                                                <AppIcon name="ArrowRightIcon" size={12} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Footer nav */}
            <div className="border-t border-white/5 py-6 px-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/home"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-500 hover:text-[#00FF87] transition-colors"
                    >
                        <AppIcon
                            name="ArrowLeftIcon"
                            size={14}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Back to Home
                    </Link>
                    <Link
                        href="/home#blog"
                        className="font-mono text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
                    >
                        #blog section
                    </Link>
                </div>
            </div>
        </main>
    );
}
