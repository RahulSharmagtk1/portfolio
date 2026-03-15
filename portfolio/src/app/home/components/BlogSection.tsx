'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

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
}

const POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Angular 17 Signals: A Complete Migration Guide',
        excerpt: 'How I migrated a 50K-line Angular app from RxJS-heavy patterns to the new Signals API, achieving 30% better change detection performance.',
        date: 'Feb 14, 2026',
        readTime: '8 min read',
        tag: 'Angular',
        color: '#FF6B6B',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c281c2c8-1767428146525.png",
        imageAlt: 'Angular code on dark monitor showing component architecture',
        href: '/blog/angular-17-signals'
    },
    {
        id: 2,
        title: 'TypeScript 5.4 Patterns Every Senior Dev Should Know',
        excerpt: 'Exploring NoInfer utility type, template literal improvements, and advanced conditional types that will make your TypeScript code dramatically safer.',
        date: 'Jan 28, 2026',
        readTime: '6 min read',
        tag: 'TypeScript',
        color: '#7B61FF',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_193200e9b-1768382631471.png",
        imageAlt: 'TypeScript code showing type definitions and interfaces',
        href: '/blog/typescript-5-4-patterns'
    },
    {
        id: 3,
        title: 'React Server Components vs Client Components: When to Use Each',
        excerpt: 'A practical decision framework I use daily to determine whether a component should live on the server or client, with real-world performance data.',
        date: 'Jan 10, 2026',
        readTime: '10 min read',
        tag: 'React',
        color: '#00D4FF',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_133225f29-1772085684929.png",
        imageAlt: 'React component tree diagram with server and client boundaries',
        href: '/blog/react-server-components'
    }];


export default function BlogSection() {
    return (
        <section
            id="blog"
            className="relative py-28 bg-[#030303] overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 observe-me">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="section-label">06 / Blog</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent w-20" />
                        </div>
                        <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none">
                            <div>
                                <span className="char-reveal" style={{ transitionDelay: '0s' }}>L</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>a</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>t</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>e</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>s</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>t</span>
                            </div>
                            <div className="text-neutral-600">
                                <span className="char-reveal" style={{ transitionDelay: '0.18s' }}>W</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.21s' }}>r</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.24s' }}>i</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.27s' }}>t</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.30s' }}>i</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.33s' }}>n</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.36s' }}>g</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.39s' }}>s</span>
                            </div>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-0.5 mt-6 md:mt-0">
                        View All Posts
                        <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Blog grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 observe-me stagger-children">
                    {POSTS.map((post) =>
                        <Link
                            key={post.id}
                            href={post.href}
                            className="blog-card group flex flex-col bg-[#080808] border border-white/6 rounded-xl overflow-hidden hover-shine reveal-up">

                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <AppImage
                                    src={post.image}
                                    alt={post.imageAlt}
                                    width={600}
                                    height={360}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                                <div className="absolute inset-0 scanline-overlay" />
                                {/* Tag */}
                                <div
                                    className="absolute top-3 left-3 font-mono text-[10px] px-2.5 py-1 rounded-full border"
                                    style={{
                                        color: post.color,
                                        borderColor: `${post.color}40`,
                                        background: `${post.color}15`,
                                        backdropFilter: 'blur(8px)'
                                    }}>

                                    {post.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5 gap-3">
                                <h3 className="font-display text-base font-semibold text-neutral-200 leading-snug group-hover:text-white transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-body text-sm text-neutral-500 leading-relaxed flex-1">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-[10px] text-neutral-600">{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                                        <span className="font-mono text-[10px] text-neutral-600">{post.readTime}</span>
                                    </div>
                                    <span
                                        className="font-mono text-xs flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                                        style={{ color: post.color }}>

                                        Read
                                        <Icon name="ArrowRightIcon" size={12} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </section>);

}