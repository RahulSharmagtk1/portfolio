import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const accentColor = '#7B61FF';

const tags = ['TypeScript', 'NoInfer', 'Template Literals', 'Conditional Types', 'Generics', 'Type Safety'];

const sections = [
    {
        heading: 'The NoInfer Utility Type',
        body: `TypeScript 5.4 introduced \`NoInfer<T>\`, a utility type that suppresses type inference for a specific type parameter. This is invaluable when you want callers to explicitly provide a type rather than having TypeScript infer it from usage. A classic use case is a \`createStore<State>()\` factory where you want the State type to be declared, not inferred from the initial value.`
    },
    {
        heading: 'Template Literal Type Improvements',
        body: `5.4 significantly improved how TypeScript narrows template literal types inside control flow. Previously, a variable typed as \`\`\`\`\${string}-id\`\`\`\` would lose its narrowing after an assignment. Now the compiler tracks these through branches correctly, enabling safer string-based discriminated unions — a pattern common in event systems and API response typing.`
    },
    {
        heading: 'Advanced Conditional Types with infer',
        body: `The \`infer\` keyword inside conditional types gained better support for multiple inference sites in 5.4. You can now write \`type UnpackPromise<T> = T extends Promise<infer U> ? U : T\` and chain it with other conditionals without hitting inference ambiguity errors. This unlocks cleaner utility types for deeply nested async data structures.`
    },
    {
        heading: 'Preserved Narrowing in Closures',
        body: `One of the most impactful changes: TypeScript 5.4 preserves type narrowing for variables that are not written to between the narrowing check and the closure creation. If you narrow \`user\` to \`AdminUser\` and then pass it into a callback without any intervening assignment, the callback now correctly sees \`AdminUser\` instead of the wider union type.`
    },
    {
        heading: 'Practical Patterns for Senior Devs',
        body: `Combine \`NoInfer\` with \`satisfies\` to build configuration objects that are both type-safe and auto-completed. Use the improved template literal narrowing to build type-safe event emitters without runtime overhead. Leverage preserved closure narrowing to eliminate redundant type assertions in React event handlers and async callbacks.`
    },
    {
        heading: 'Migration and Tooling',
        body: `Upgrading to TypeScript 5.4 is straightforward — run \`npm install typescript@5.4\` and check for any new strict errors. The most common breakage comes from the improved closure narrowing catching previously-hidden bugs. Treat each new error as a real bug, not a false positive. The TypeScript team's migration guide covers the handful of intentional breaking changes.`
    }
];

const stats = [
    { label: 'TS Version', value: '5.4' },
    { label: 'New Utilities', value: '3+' },
    { label: 'Read Time', value: '6 min' },
    { label: 'Published', value: 'Jan 2026' }
];

export default function TypeScript54PatternsPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home#blog"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#7B61FF] transition-colors tracking-wider uppercase">
                        <AppIcon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase hidden sm:block">
                        blog / typescript-5-4-patterns
                    </span>
                    <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                        style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
                        TypeScript
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
                            TypeScript
                        </span>
                        <span className="font-mono text-xs text-neutral-600">Jan 28, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                        <span className="font-mono text-xs text-neutral-600">6 min read</span>
                    </div>
                    <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                        TypeScript 5.4 Patterns Every Senior Dev Should Know
                    </h1>
                    <p className="font-body text-lg text-neutral-400 leading-relaxed max-w-3xl">
                        Exploring NoInfer utility type, template literal improvements, and advanced conditional types that will make your TypeScript code dramatically safer.
                    </p>
                </div>
            </section>
            {/* Featured image */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-white/8 h-72 lg:h-96">
                        <AppImage
                            src="https://img.rocket.new/generatedImages/rocket_gen_img_193200e9b-1768382631471.png"
                            alt="TypeScript code showing type definitions and interfaces"
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
