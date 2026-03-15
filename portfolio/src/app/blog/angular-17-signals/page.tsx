import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const accentColor = '#FF6B6B';

const tags = ['Angular', 'Signals', 'RxJS', 'TypeScript', 'Performance', 'Migration'];

const sections = [
    {
        heading: 'Why Migrate to Signals?',
        body: `Angular 17 introduced Signals as a first-class reactive primitive, offering a simpler mental model than RxJS Observables for most UI state scenarios. After migrating a 50K-line enterprise application, we measured a 30% improvement in change detection cycles — the framework no longer needs to dirty-check the entire component tree on every async event.`
    },
    {
        heading: 'Understanding the Signal API',
        body: `A Signal is a wrapper around a value that notifies consumers when it changes. You create one with \`signal(initialValue)\`, read it by calling it like a function, and update it with \`.set()\` or \`.update()\`. Computed signals derive values lazily and only recompute when their dependencies change — similar to Vue's \`computed\` or MobX \`computed\`.`
    },
    {
        heading: 'Migration Strategy: Incremental Adoption',
        body: `The key insight is that Signals and RxJS can coexist. We used \`toSignal()\` to bridge existing Observables into the Signal graph, and \`toObservable()\` to go the other direction. This let us migrate component by component without a big-bang rewrite. Start with leaf components that have no children, validate the performance gains, then work upward.`
    },
    {
        heading: 'Effect vs Computed: Choosing the Right Tool',
        body: `Use \`computed()\` when you need a derived value — it is lazy, memoized, and tracked automatically. Use \`effect()\` for side effects like logging, analytics, or syncing to localStorage. Avoid putting DOM mutations inside effects; prefer template bindings instead. Effects run after rendering, so they are safe for external integrations.`
    },
    {
        heading: 'Performance Results',
        body: `After full migration, our Lighthouse performance score improved from 71 to 94. Change detection profiling in Chrome DevTools showed the number of component checks per interaction dropped by ~30%. Memory usage also decreased because we eliminated dozens of manual \`takeUntil\` subscription patterns that were occasionally leaking.`
    },
    {
        heading: 'Lessons Learned',
        body: `Signals shine for synchronous, component-local state. Keep RxJS for complex async workflows — HTTP, WebSockets, debounced search. Do not try to replace everything at once. Write unit tests for your Signals using \`TestBed\` and the new \`ComponentFixture\` signal helpers. The Angular team's migration schematic handles ~70% of the boilerplate automatically.`
    }
];

const stats = [
    { label: 'App Size', value: '50K+ lines' },
    { label: 'CD Improvement', value: '30%' },
    { label: 'Read Time', value: '8 min' },
    { label: 'Published', value: 'Feb 2026' }
];

export default function Angular17SignalsPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home#blog"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#FF6B6B] transition-colors tracking-wider uppercase">
                        <AppIcon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Blog
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase hidden sm:block">
                        blog / angular-17-signals
                    </span>
                    <span
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                        style={{ color: accentColor, borderColor: `${accentColor}40`, background: `${accentColor}15` }}>
                        Angular
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
                            Angular
                        </span>
                        <span className="font-mono text-xs text-neutral-600">Feb 14, 2026</span>
                        <span className="w-1 h-1 rounded-full bg-neutral-700" />
                        <span className="font-mono text-xs text-neutral-600">8 min read</span>
                    </div>
                    <h1 className="font-display text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                        Angular 17 Signals: A Complete Migration Guide
                    </h1>
                    <p className="font-body text-lg text-neutral-400 leading-relaxed max-w-3xl">
                        How I migrated a 50K-line Angular app from RxJS-heavy patterns to the new Signals API, achieving 30% better change detection performance.
                    </p>
                </div>
            </section>
            {/* Featured image */}
            <section className="px-6 mb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden border border-white/8 h-72 lg:h-96">
                        <AppImage
                            src="https://img.rocket.new/generatedImages/rocket_gen_img_1c281c2c8-1767428146525.png"
                            alt="Angular code on dark monitor showing component architecture"
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
