'use client';
import React from 'react';

interface Tech {
    name: string;
    category: string;
    color: string;
    icon: string;
    desc: string;
}

const TECH_STACK: Tech[] = [
    { name: 'Angular', category: 'Framework', color: '#FF6B6B', icon: 'A', desc: 'Enterprise SPA development with RxJS, NgRx state management' },
    { name: 'React', category: 'Library', color: '#00D4FF', icon: 'R', desc: 'Component architecture, hooks, context, performance optimization' },
    { name: 'TypeScript', category: 'Language', color: '#7B61FF', icon: 'TS', desc: 'Strict typing, generics, decorators, advanced type utilities' },
    { name: 'JavaScript', category: 'Language', color: '#00FF87', icon: 'JS', desc: 'ES2024+, async/await, closures, functional patterns' },
    { name: 'HTML5', category: 'Markup', color: '#FF6B6B', icon: 'H', desc: 'Semantic markup, accessibility, SEO best practices' },
    { name: 'CSS3 / SCSS', category: 'Styling', color: '#00D4FF', icon: 'C', desc: 'Grid, Flexbox, animations, design systems, CSS variables' },
    { name: 'Bootstrap', category: 'UI Library', color: '#7B61FF', icon: 'B', desc: 'Responsive layouts, component customization, theming' },
    { name: 'Git / GitHub', category: 'Version Control', color: '#00FF87', icon: 'G', desc: 'Branching strategies, PR workflows, CI/CD integration' },
    { name: 'REST APIs', category: 'Integration', color: '#FF6B6B', icon: 'API', desc: 'HTTP clients, interceptors, error handling, caching strategies' },
];

const LARGE_CARDS = [0, 1]; // Angular and React get large cards

export default function TechStackSection() {
    return (
        <section
            id="stack"
            className="relative py-28 bg-[#030303] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 observe-me">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="section-label">02 / Stack</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent w-20" />
                        </div>
                        <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none">
                            <div>
                                <span className="char-reveal" style={{ transitionDelay: '0s' }}>T</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>e</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>c</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>h</span>
                            </div>
                            <div className="text-neutral-600">
                                <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>S</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>t</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.18s' }}>a</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.21s' }}>c</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.24s' }}>k</span>
                            </div>
                        </h2>
                    </div>
                    <p className="font-mono text-xs text-neutral-500 max-w-xs text-right mt-4 md:mt-0">
            // FRAMEWORKS // LANGUAGES // TOOLS
                    </p>
                </div>

                {/* Bento grid - asymmetric */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 observe-me stagger-children">
                    {TECH_STACK.map((tech, i) => (
                        <div
                            key={tech.name}
                            className={`group tech-badge hover-shine bg-[#030303] p-7 flex flex-col justify-between overflow-hidden reveal-up cursor-default ${i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
                                }`}
                            style={{ minHeight: i < 2 ? '200px' : '160px' }}
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between mb-4">
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center font-mono text-xs font-bold text-black"
                                    style={{ background: tech.color, boxShadow: `0 0 15px ${tech.color}40` }}
                                >
                                    {tech.icon}
                                </div>
                                <span
                                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border"
                                    style={{
                                        color: tech.color,
                                        borderColor: `${tech.color}30`,
                                        background: `${tech.color}08`,
                                    }}
                                >
                                    {tech.category}
                                </span>
                            </div>

                            {/* Name */}
                            <h3
                                className="font-display text-xl font-semibold text-white mb-2 group-hover:transition-colors duration-300"
                                style={{ '--hover-color': tech.color } as React.CSSProperties}
                            >
                                {tech.name}
                            </h3>

                            {/* Desc */}
                            <p className="font-body text-xs text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                                {tech.desc}
                            </p>

                            {/* Bottom accent line */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                                style={{ background: tech.color }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}