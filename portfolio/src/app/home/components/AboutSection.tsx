'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const EXPERTISE = [
    { label: 'Angular', level: 92, color: '#FF6B6B' },
    { label: 'React / Next.js', level: 90, color: '#00D4FF' },
    { label: 'TypeScript', level: 95, color: '#7B61FF' },
    { label: 'JavaScript (ES2024)', level: 93, color: '#00FF87' },
    { label: 'REST APIs & GraphQL', level: 85, color: '#FF6B6B' },
    { label: 'Responsive UI / CSS', level: 88, color: '#00D4FF' }];


const HIGHLIGHTS = [
    { icon: 'BriefcaseIcon', label: '5+ Years Experience' },
    { icon: 'CodeBracketIcon', label: '40+ Projects Shipped' },
    { icon: 'UserGroupIcon', label: 'Agile / Scrum Teams' },
    { icon: 'StarIcon', label: 'Open Source Contributor' }];


export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative py-28 bg-[#050505] border-y border-white/5 overflow-hidden">

            {/* Decorative vertical lines */}
            <div className="absolute inset-0 flex justify-between px-6 lg:px-12 pointer-events-none opacity-5">
                {[...Array(5)].map((_, i) =>
                    <div key={i} className="w-px h-full bg-white" />
                )}
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Section label */}
                <div className="flex items-center gap-4 mb-12 observe-me reveal-up">
                    <span className="section-label">01 / About</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* LEFT: Photo + highlights */}
                    <div className="lg:col-span-4 flex flex-col gap-6 observe-me reveal-blur">
                        {/* Avatar placeholder */}
                        <div className="relative w-full aspect-square max-w-xs mx-auto lg:mx-0 rounded-xl overflow-hidden border border-white/8 neon-border">
                            <AppImage
                                src="/assets/images/profile.png"
                                alt="Senior Frontend Developer profile photo"
                                width={400}
                                height={400}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

                            {/* Scanline */}
                            <div className="scanline-overlay" />
                            {/* Name overlay */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                                <p className="font-mono text-sm text-primary font-semibold">
                                    &gt; Rahul Kumar Sharma
                                </p>
                                <p className="font-mono text-xs text-neutral-400">
                                    Senior Frontend Engineer
                                </p>
                            </div>
                        </div>

                        {/* Highlight chips */}
                        <div className="grid grid-cols-2 gap-3">
                            {HIGHLIGHTS.map((h) =>
                                <div
                                    key={h.label}
                                    className="flex flex-col gap-1.5 p-3 rounded-lg border border-white/6 bg-white/2 hover:border-primary/20 transition-all duration-200">

                                    <Icon name={h.icon as any} size={16} className="text-primary" />
                                    <span className="font-mono text-xs text-neutral-300 leading-tight">{h.label}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* RIGHT: Bio + skills */}
                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <div className="observe-me">
                            <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-6">
                                <span className="char-reveal" style={{ transitionDelay: '0s' }}>A</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>b</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>o</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>u</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>t</span>
                                <br />
                                <span className="text-neutral-600">
                                    <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>M</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.18s' }}>e</span>
                                </span>
                            </h2>
                        </div>

                        <div className="observe-me reveal-up space-y-4 font-body text-neutral-400 text-base leading-relaxed">
                            <p>
                                I'm a Senior Frontend Engineer with{' '}
                                <span className="text-white font-medium">5+ years of experience</span>{' '}
                                building scalable, accessible web applications. I specialize in{' '}
                                <span className="text-primary font-mono">Angular</span> and{' '}
                                <span className="text-accent-blue font-mono">React</span> ecosystems,
                                with deep expertise in{' '}
                                <span className="text-accent font-mono">TypeScript</span> and modern
                                JavaScript patterns.
                            </p>
                            <p>
                                My approach combines strong engineering fundamentals with pixel-perfect
                                design sensibility. I thrive in{' '}
                                <span className="text-white font-medium">Agile/Scrum teams</span>,
                                delivering high-quality code through test-driven development and
                                continuous integration practices.
                            </p>
                            <p>
                                When I'm not shipping features, I contribute to open source and write
                                technical articles on frontend architecture and performance optimization.
                            </p>
                        </div>

                        {/* Skill bars */}
                        <div className="observe-me reveal-up space-y-4" style={{ transitionDelay: '0.2s' }}>
                            <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase mb-4">
                // Core Expertise
                            </p>
                            {EXPERTISE.map((skill) =>
                                <div key={skill.label} className="flex items-center gap-4">
                                    <span className="font-mono text-xs text-neutral-400 w-40 shrink-0">
                                        {skill.label}
                                    </span>
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: `${skill.level}%`,
                                                background: `linear-gradient(to right, ${skill.color}80, ${skill.color})`,
                                                boxShadow: `0 0 8px ${skill.color}40`
                                            }} />

                                    </div>
                                    <span className="font-mono text-xs text-neutral-500 w-8 text-right">
                                        {skill.level}%
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>);

}