import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppIcon from '@/components/ui/AppIcon';

const features = [
    {
        icon: 'CommandLineIcon',
        title: 'OpenAPI 3.0 Parsing',
        description: 'Fully parses OpenAPI 3.0 specifications including complex schemas, nested objects, unions, and discriminated types.'
    },
    {
        icon: 'CodeBracketSquareIcon',
        title: 'Fully Typed Output',
        description: 'Generates TypeScript interfaces, enums, and generic response wrappers — zero any types, full IntelliSense support.'
    },
    {
        icon: 'ShieldCheckIcon',
        title: 'Auth Interceptors',
        description: 'Built-in support for Bearer tokens, API keys, and OAuth2 flows with automatic token refresh and retry logic.'
    },
    {
        icon: 'ArrowPathIcon',
        title: 'Automatic Retry',
        description: 'Configurable retry strategies with exponential backoff, jitter, and per-endpoint override options.'
    },
    {
        icon: 'CpuChipIcon',
        title: 'CLI Tool',
        description: 'Simple CLI with watch mode, config files, and CI/CD integration. Generates clients in seconds from local or remote specs.'
    },
    {
        icon: 'DocumentCheckIcon',
        title: 'Request Validation',
        description: 'Optional runtime request/response validation using Zod schemas auto-generated alongside the TypeScript types.'
    }];


const techStack = [
    { name: 'TypeScript', color: '#7B61FF', category: 'Language' },
    { name: 'Node.js', color: '#00FF87', category: 'Runtime' },
    { name: 'OpenAPI 3.0', color: '#7B61FF', category: 'Spec' },
    { name: 'Zod', color: '#00D4FF', category: 'Validation' },
    { name: 'Commander.js', color: '#7B61FF', category: 'CLI' },
    { name: 'Prettier', color: '#00FF87', category: 'Formatting' },
    { name: 'Jest', color: '#00D4FF', category: 'Testing' },
    { name: 'npm', color: '#7B61FF', category: 'Registry' }];


const stats = [
    { label: 'Weekly Downloads', value: '12k+' },
    { label: 'GitHub Stars', value: '800+' },
    { label: 'Test Coverage', value: '97%' },
    { label: 'API Endpoints', value: 'Unlimited' }];


export default function TypeSafeApiClientPage() {
    return (
        <main className="min-h-screen bg-[#030303] text-neutral-300 overflow-x-hidden">
            {/* Top nav bar */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link
                        href="/home"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#7B61FF] transition-colors tracking-wider uppercase">
                        <AppIcon name="ArrowLeftIcon" size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <span className="font-mono text-xs text-neutral-600 tracking-widest uppercase hidden sm:block">
                        projects / typesafe-api-client
                    </span>
                    <a
                        href="https://github.com/RahulSharmagtk1/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-[#7B61FF] transition-colors tracking-wider uppercase">
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
                        <div className="flex items-center gap-3 mb-6">
                            <span className="font-mono text-[10px] text-[#7B61FF] tracking-widest uppercase border border-[#7B61FF]/20 px-3 py-1 rounded-full">
                                Open Source
                            </span>
                            <span className="font-mono text-[10px] text-neutral-600 tracking-widest uppercase">
                                CLI Tool / npm Package
                            </span>
                        </div>

                        <h1 className="font-display text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-none mb-6">
                            Type<span className="text-[#7B61FF]">Safe</span>
                            <br />
                            <span className="text-neutral-600">API Client</span>
                        </h1>

                        <p className="font-body text-lg text-neutral-400 leading-relaxed mb-8 max-w-xl">
                            CLI tool that generates fully typed TypeScript API clients from OpenAPI 3.0 specifications. Supports authentication interceptors, automatic retry logic, and Zod runtime validation — zero configuration required.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/RahulSharmagtk1/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-[#7B61FF] text-white font-mono text-xs font-semibold tracking-wider uppercase hover:shadow-[0_0_20px_rgba(123,97,255,0.4)] transition-all duration-300 hover:scale-105">
                                <AppIcon name="CodeBracketIcon" size={14} />
                                View on GitHub
                                <AppIcon name="ArrowTopRightOnSquareIcon" size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://www.npmjs.com/package/typesafe-api-client"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-400 font-mono text-xs tracking-wider uppercase hover:border-[#7B61FF]/30 hover:text-[#7B61FF] transition-all duration-300">
                                <AppIcon name="CubeIcon" size={14} />
                                npm Package
                            </a>
                            <Link
                                href="/home#projects"
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-neutral-400 font-mono text-xs tracking-wider uppercase hover:border-[#7B61FF]/30 hover:text-[#7B61FF] transition-all duration-300">
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
                                className="bg-[#0a0a0a] border border-white/5 rounded-xl p-5 hover:border-[#7B61FF]/20 transition-colors">
                                <div className="font-mono text-2xl font-semibold text-[#7B61FF] mb-1">
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
                        src="https://img.rocket.new/generatedImages/rocket_gen_img_1f535a192-1772145140932.png"
                        alt="Code editor showing TypeScript API client generation from OpenAPI specification"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover" />

                    <div className="absolute inset-0 scanline-overlay pointer-events-none" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#030303]/80 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
                        <span className="w-2 h-2 rounded-full bg-[#7B61FF] animate-pulse" />
                        <span className="font-mono text-[10px] text-neutral-400 tracking-wider">LIVE PREVIEW</span>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="px-6 max-w-7xl mx-auto mb-24">
                <div className="mb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-mono text-[10px] text-[#7B61FF] tracking-widest uppercase">
                            01 / Features
                        </span>
                        <div className="h-px bg-gradient-to-r from-[#7B61FF]/20 to-transparent w-20" />
                    </div>
                    <h2 className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Core Capabilities
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature) =>
                        <div
                            key={feature.title}
                            className="group bg-[#0a0a0a] border border-white/5 rounded-xl p-6 hover:border-[#7B61FF]/20 hover:bg-[#0d0d0d] transition-all duration-300">
                            <div className="w-10 h-10 rounded-lg bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#7B61FF]/15 transition-colors">
                                <AppIcon name={feature.icon as any} size={18} className="text-[#7B61FF]" />
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
                        <span className="font-mono text-[10px] text-[#7B61FF] tracking-widest uppercase">
                            02 / Stack
                        </span>
                        <div className="h-px bg-gradient-to-r from-[#7B61FF]/20 to-transparent w-20" />
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
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
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
                    <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-[#080808]">
                        <span className="w-3 h-3 rounded-full bg-[#7B61FF]/60" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/40" />
                        <span className="w-3 h-3 rounded-full bg-[#00FF87]/40" />
                        <span className="font-mono text-[10px] text-neutral-600 ml-3 tracking-wider">
                            typesafe-api-client — project.info
                        </span>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-3">
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ repo</span>
                            <a
                                href="https://github.com/RahulSharmagtk1/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00D4FF] hover:underline break-all">
                                github.com/your-username/typesafe-api-client
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ npm</span>
                            <a
                                href="https://www.npmjs.com/package/typesafe-api-client"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#00D4FF] hover:underline break-all">
                                npmjs.com/package/typesafe-api-client
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ license</span>
                            <span className="text-neutral-400">MIT — Open Source</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ language</span>
                            <span className="text-neutral-400">TypeScript 5.x + Node.js</span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ status</span>
                            <span className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF] animate-pulse" />
                                <span className="text-[#7B61FF]">Active Development</span>
                            </span>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-[#7B61FF] w-32 shrink-0">$ install</span>
                            <span className="text-neutral-400">npm install -g typesafe-api-client</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 text-neutral-600 text-xs">
                            <span className="text-[#7B61FF]">▶</span> tsapi generate --spec openapi.yaml --out ./src/api
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
                        className="group flex items-center gap-3 text-neutral-400 hover:text-[#7B61FF] transition-colors">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7B61FF]/30 transition-colors">
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
                        className="group flex items-center gap-3 text-neutral-400 hover:text-[#7B61FF] transition-colors">
                        <div>
                            <div className="font-mono text-[10px] text-neutral-600 tracking-wider uppercase mb-0.5 text-right">Open Source</div>
                            <div className="font-display text-sm font-medium text-right">Star on GitHub</div>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#7B61FF]/30 transition-colors">
                            <AppIcon name="ArrowTopRightOnSquareIcon" size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </a>
                </div>
            </section>
        </main>);

}