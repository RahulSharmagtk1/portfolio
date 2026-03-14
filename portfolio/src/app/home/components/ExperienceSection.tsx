'use client';
import React from 'react';

interface Experience {
    id: number;
    company: string;
    role: string;
    period: string;
    years: string;
    description: string;
    achievements: string[];
    tags: string[];
    color: string;
}

const EXPERIENCES: Experience[] = [
    {
        id: 1,
        company: 'TechCorp Solutions',
        role: 'Senior Frontend Engineer',
        period: 'Jan 2023 – Present',
        years: '2023–Now',
        description: 'Leading frontend architecture for enterprise SaaS platform serving 200K+ users. Migrated legacy Angular app to Angular 17 with 40% performance improvement.',
        achievements: [
            'Reduced bundle size by 35% through code splitting and lazy loading',
            'Established component library used across 4 product teams',
            'Mentored 3 junior developers in Angular and TypeScript best practices',
        ],
        tags: ['Angular 17', 'NgRx', 'TypeScript', 'Jest', 'CI/CD'],
        color: '#00FF87',
    },
    {
        id: 2,
        company: 'StartupXYZ',
        role: 'Frontend Developer',
        period: 'Mar 2021 – Dec 2022',
        years: '2021–2022',
        description: 'Built React-based customer dashboard from ground up. Implemented real-time features with WebSockets and optimized Core Web Vitals to achieve 98 Lighthouse score.',
        achievements: [
            'Shipped 12 major features in 18 months using Agile sprints',
            'Achieved 98 Lighthouse performance score on production app',
            'Integrated 8+ third-party APIs with TypeScript-safe wrappers',
        ],
        tags: ['React', 'TypeScript', 'WebSocket', 'Redux', 'Tailwind'],
        color: '#00D4FF',
    },
    {
        id: 3,
        company: 'Digital Agency Co.',
        role: 'Junior Frontend Developer',
        period: 'Jun 2019 – Feb 2021',
        years: '2019–2021',
        description: 'Developed responsive web applications for 15+ clients across e-commerce, healthcare, and fintech sectors. Specialized in Angular and Bootstrap-based UIs.',
        achievements: [
            'Delivered 15+ client projects on time and within budget',
            'Introduced TypeScript adoption across the frontend team',
            'Built reusable component library reducing development time by 30%',
        ],
        tags: ['Angular', 'JavaScript', 'Bootstrap', 'SCSS', 'REST APIs'],
        color: '#7B61FF',
    },
];

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="relative py-28 bg-[#050505] border-y border-white/5 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 observe-me">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="section-label">05 / Experience</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent w-20" />
                        </div>
                        <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none">
                            <div>
                                <span className="char-reveal" style={{ transitionDelay: '0s' }}>W</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>o</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>r</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>k</span>
                            </div>
                            <div className="text-neutral-600">
                                <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>H</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>i</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.18s' }}>s</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.21s' }}>t</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.24s' }}>o</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.27s' }}>r</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.30s' }}>y</span>
                            </div>
                        </h2>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden lg:block">
                        <div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/60 to-transparent"
                            style={{ height: '60%' }}
                        />
                    </div>

                    <div className="space-y-0">
                        {EXPERIENCES.map((exp, i) => (
                            <div
                                key={exp.id}
                                className="relative lg:pl-16 border-t border-white/8 group observe-me reveal-up"
                                style={{ transitionDelay: `${i * 0.15}s` }}
                            >
                                {/* Timeline dot */}
                                <div
                                    className="absolute left-0 top-8 w-3 h-3 rounded-full -translate-x-1/2 border-2 border-[#050505] hidden lg:block transition-all duration-300 group-hover:scale-150"
                                    style={{
                                        background: exp.color,
                                        boxShadow: `0 0 10px ${exp.color}60`,
                                    }}
                                />

                                <div className="py-10 lg:py-12">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-display text-xl font-semibold text-white">
                                                    {exp.role}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className="font-mono text-sm font-medium"
                                                    style={{ color: exp.color }}
                                                >
                                                    {exp.company}
                                                </span>
                                                <span className="text-neutral-600">·</span>
                                                <span className="font-mono text-xs text-neutral-500">{exp.period}</span>
                                            </div>
                                        </div>
                                        <div
                                            className="font-mono text-xs px-3 py-1.5 rounded-full border shrink-0"
                                            style={{
                                                color: exp.color,
                                                borderColor: `${exp.color}30`,
                                                background: `${exp.color}08`,
                                            }}
                                        >
                                            {exp.years}
                                        </div>
                                    </div>

                                    <p className="font-body text-sm text-neutral-400 leading-relaxed mb-5 max-w-2xl">
                                        {exp.description}
                                    </p>

                                    <ul className="space-y-2 mb-5">
                                        {exp.achievements.map((ach, j) => (
                                            <li key={j} className="flex items-start gap-2 font-body text-sm text-neutral-500">
                                                <span style={{ color: exp.color }} className="mt-0.5 shrink-0 font-mono text-xs">▸</span>
                                                {ach}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 text-neutral-500 hover:border-white/20 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}