import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const features = [
    {
        icon: 'ChartBarIcon',
        title: 'Real-time Analytics',
        description: 'Live data visualization with D3.js charts, updating dashboards, and streaming metrics for 100k+ daily active users.'
    },
    {
        icon: 'ShieldCheckIcon',
        title: 'Role-Based Access Control',
        description: 'Granular permission system with admin, manager, and viewer roles. JWT-based auth with refresh token rotation.'
    },
    {
        icon: 'CpuChipIcon',
        title: 'NgRx State Management',
        description: 'Predictable state container with effects, selectors, and entity adapters for complex data flows.'
    },
    {
        icon: 'CircleStackIcon',
        title: 'REST API Integration',
        description: 'Typed HTTP client with interceptors, automatic retry logic, and request caching via NgRx.'
    },
    {
        icon: 'WindowIcon',
        title: 'Responsive Dashboard',
        description: 'Fully responsive grid layout with drag-and-drop widget customization and persistent user preferences.'
    },
    {
        icon: 'BoltIcon',
        title: 'Performance Optimized',
        description: 'OnPush change detection, lazy-loaded modules, and virtual scrolling for large data sets.'
    }];


const techStack = [
    { name: 'Angular 17', color: '#FF6B6B', category: 'Framework' },
    { name: 'NgRx', color: '#FF6B6B', category: 'State' },
    { name: 'TypeScript', color: '#00D4FF', category: 'Language' },
    { name: 'D3.js', color: '#00FF87', category: 'Visualization' },
    { name: 'RxJS', color: '#FF6B6B', category: 'Reactive' },
    { name: 'REST API', color: '#7B61FF', category: 'Backend' },
    { name: 'SCSS', color: '#00D4FF', category: 'Styling' },
    { name: 'Jest', color: '#00FF87', category: 'Testing' }];


const stats = [
    { label: 'Daily Active Users', value: '100k+' },
    { label: 'Components', value: '80+' },
    { label: 'Test Coverage', value: '94%' },
    { label: 'Lighthouse Score', value: '98' }];


export default function AngularDashProPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#00FF87] transition-colors tracking-wider uppercase">

                        <AppIcon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase hidden sm:block">
                        projects / angulardash-pro
                    </span>
                    <a
                        href="https://github.com/RahulSharmagtk1/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#00FF87] transition-colors tracking-wider uppercase">

                        <AppIcon name="CodeBracketIcon" size={14} />
                        GitHub
                        <AppIcon name="ArrowTopRightOnSquareIcon" size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </div>

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="flex-1">
                        {/* Label */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] text-[#00FF87] tracking-widest uppercase border border-[#00FF87]/20 px-3 py-1 rounded-full">
                                Open Source
                            </span>
                            <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                                Enterprise Dashboard
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="font-display text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-none mb-6">
                            Angular<span className="text-[#FF6B6B]">Dash</span>
                            <br />
                            <span className="text-neutral-600">Pro</span>
                        </h1>

                        <p className="font-body text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
                            Enterprise-grade analytics dashboard built with Angular 17 and NgRx. A full-featured platform with real-time data visualization, role-based access control, and complex state management.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/RahulSharmagtk1/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#00FF87] text-black font-mono text-xs font-semibold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300 hover:scale-105">

                                <AppIcon name="CodeBracketIcon" size={14} />
                                View on GitHub
                                <AppIcon name="ArrowTopRightOnSquareIcon" size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <Link
                                href="/home#projects"
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-400 font-mono text-xs tracking-wider uppercase hover:border-[#00FF87]/30 hover:text-[#00FF87] transition-all duration-300">

                                <AppIcon name="ArrowLeftIcon" size={14} />
                                All Projects
                            </Link>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:w-80 w-full grid grid-cols-2 gap-3">
                        {stats.map((stat) =>
                            <div
                                key={stat.label}
                                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:border-[#FF6B6B]/20 transition-colors">

                                <div className="font-mono text-2xl font-semibold text-[#FF6B6B] mb-1">
                                    {stat.value}
                                </div>
                                <div className="font-mono text-[10px] text-neutral-600 tracking-wider uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Project image */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="relative rounded-2xl overflow-hidden border border-white/5 group">
                    <AppImage
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_131dd5c6e-1772145146186.png"
                        alt="AngularDash Pro enterprise analytics dashboard showing charts, data tables, and real-time metrics"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover" />

                    <div className="absolute inset-0 scanline-overlay pointer-events-none" />
                    {/* Terminal overlay badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#030303]/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                        <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
                        <span className="font-mono text-[10px] text-neutral-400 tracking-wider">LIVE PREVIEW</span>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-[10px] text-[#00FF87] tracking-widest uppercase">
                            01 / Features
                        </span>
                        <div className="h-px bg-gradient-to-r from-[#00FF87]/20 to-transparent w-20" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Core Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) =>
                        <div
                            key={feature.title}
                            className="group bg-[#0a0a0a] border border-white/5 rounded-xl p-6 hover:border-[#FF6B6B]/20 hover:bg-[#0d0d0d] transition-all duration-300">

                            <div className="w-10 h-10 rounded-lg bg-[#FF6B6B]/10 border border-[#FF6B6B]/20 flex items-center justify-center mb-4 group-hover:bg-[#FF6B6B]/15 transition-colors">
                                <AppIcon name={feature.icon as any} size={18} className="text-[#FF6B6B]" />
                            </div>
                            <h3 className="font-display text-base font-semibold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="font-body text-sm text-neutral-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-[10px] text-[#00FF87] tracking-widest uppercase">
                            02 / Stack
                        </span>
                        <div className="h-px bg-gradient-to-r from-[#00FF87]/20 to-transparent w-20" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Tech Stack
                    </h2>
                </div>

                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) =>
                        <div
                            key={tech.name}
                            className="flex items-center gap-2 bg-[#0a0a0a] border border-white/5 rounded-full px-4 py-2 hover:border-white/10 transition-colors">

                            <span
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: tech.color }} />

                            <span className="font-mono text-xs text-neutral-300">{tech.name}</span>
                            <span className="font-mono text-[9px] text-neutral-600 tracking-wider uppercase">
                                {tech.category}
                            </span>
                        </div>
                    )}
                </div>
            </section>

            {/* Terminal-style project info block */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden">
                    {/* Terminal title bar */}
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#080808]">
                        <span className="w-3 h-3 rounded-full bg-[#FF6B6B]/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                        <span className="w-3 h-3 rounded-full bg-[#00FF87]/40" />
                        <span className="font-mono text-[10px] text-neutral-600 ml-3 tracking-wider">
                            angulardash-pro — project.info
                        </span>
                    </div>
                    {/* Terminal content */}
                    <div className="p-6 font-mono text-sm space-y-3">
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ repo</span>
                            <a
                                href="https://github.com/RahulSharmagtk1/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00D4FF] hover:underline break-all">

                                github.com/your-username/angulardash-pro
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ license</span>
                            <span className="text-neutral-400">MIT — Open Source</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ framework</span>
                            <span className="text-neutral-400">Angular 17 + NgRx</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ language</span>
                            <span className="text-neutral-400">TypeScript 5.x</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ status</span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse" />
                                <span className="text-[#00FF87]">Active Development</span>
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#00FF87] w-32 shrink-0">$ install</span>
                            <span className="text-neutral-400">
                                git clone https://github.com/RahulSharmagtk1/portfolio
                            </span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 text-neutral-600 text-xs">
                            <span className="text-[#00FF87]">▶</span> npm install &amp;&amp; ng serve
                            <span className="terminal-cursor ml-1" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer nav */}
            <section className="px-6 max-w-7xl mx-auto pb-20 border-t border-white/5 pt-12">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link
                        href="/home"
                        className="group flex items-center gap-3 text-neutral-400 hover:text-[#00FF87] transition-colors">

                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00FF87]/30 transition-colors">
                            <AppIcon name="ArrowLeftIcon" size={16} className="group-hover:-translate-x-0.5 transition-transform" />
                        </div>
                        <div>
                            <div className="font-mono text-[10px] text-neutral-600 tracking-wider uppercase mb-0.5">Navigate</div>
                            <div className="font-display text-sm font-medium">Back to Portfolio</div>
                        </div>
                    </Link>

                    <a
                        href="https://github.com/RahulSharmagtk1/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-neutral-400 hover:text-[#00FF87] transition-colors">

                        <div>
                            <div className="font-mono text-[10px] text-neutral-600 tracking-wider uppercase mb-0.5 text-right">Open Source</div>
                            <div className="font-display text-sm font-medium text-right">Star on GitHub</div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00FF87]/30 transition-colors">
                            <AppIcon name="ArrowTopRightOnSquareIcon" size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </a>
                </div>
            </section>
        </main>);

}