'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';

const STATS = [
    { label: 'Repositories', value: '48', icon: 'CodeBracketSquareIcon', color: '#00FF87' },
    { label: 'Contributions', value: '1,240', icon: 'ChartBarIcon', color: '#7B61FF' },
    { label: 'Pull Requests', value: '312', icon: 'ArrowPathIcon', color: '#00D4FF' },
    { label: 'Stars Earned', value: '2.1K', icon: 'StarIcon', color: '#FF6B6B' },
];

const CONTRIB_GRID = Array.from({ length: 52 * 7 }, (_, i) => ({
    active: Math.random() > 0.55,
    intensity: Math.floor(Math.random() * 4),
}));

const LANG_STATS = [
    { name: 'TypeScript', pct: 42, color: '#7B61FF' },
    { name: 'JavaScript', pct: 28, color: '#00FF87' },
    { name: 'HTML/CSS', pct: 18, color: '#FF6B6B' },
    { name: 'SCSS', pct: 12, color: '#00D4FF' },
];

export default function GitHubStatsSection() {
    return (
        <section
            id="github"
            className="relative py-28 bg-[#030303] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex items-center gap-4 mb-16 observe-me reveal-up">
                    <span className="section-label">04 / GitHub</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LEFT: Terminal stats widget */}
                    <div className="observe-me reveal-blur">
                        <div className="terminal-window crt-effect">
                            <div className="terminal-titlebar">
                                <div className="terminal-dot bg-[#FF5F57]" />
                                <div className="terminal-dot bg-[#FFBD2E]" />
                                <div className="terminal-dot bg-[#28C840]" />
                                <span className="ml-3 font-mono text-xs text-neutral-500">
                                    gh-stats — your-username
                                </span>
                            </div>
                            <div className="p-6 font-mono">
                                <div className="text-primary text-xs mb-4">
                                    $ gh api /users/your-username/stats
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {STATS.map((stat) => (
                                        <div
                                            key={stat.label}
                                            className="p-4 rounded-lg border border-white/5 bg-white/2 hover:border-primary/20 transition-all duration-200"
                                        >
                                            <Icon name={stat.icon as any} size={20} style={{ color: stat.color }} />
                                            <div
                                                className="text-2xl font-bold mt-2 mb-0.5"
                                                style={{ color: stat.color }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div className="text-[11px] text-neutral-500 uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Language bar */}
                                <div className="mt-6">
                                    <div className="text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                    // Top Languages
                                    </div>
                                    <div className="flex h-2 rounded-full overflow-hidden gap-0.5">
                                        {LANG_STATS.map((lang) => (
                                            <div
                                                key={lang.name}
                                                className="h-full rounded-sm transition-all duration-1000"
                                                style={{
                                                    width: `${lang.pct}%`,
                                                    background: lang.color,
                                                    boxShadow: `0 0 6px ${lang.color}60`,
                                                }}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-3">
                                        {LANG_STATS.map((lang) => (
                                            <div key={lang.name} className="flex items-center gap-1.5">
                                                <div
                                                    className="w-2 h-2 rounded-full"
                                                    style={{ background: lang.color }}
                                                />
                                                <span className="text-[11px] text-neutral-400">{lang.name}</span>
                                                <span className="text-[11px] text-neutral-600">{lang.pct}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Contribution graph */}
                    <div className="observe-me reveal-blur" style={{ transitionDelay: '0.2s' }}>
                        <div className="terminal-window h-full">
                            <div className="terminal-titlebar">
                                <div className="terminal-dot bg-[#FF5F57]" />
                                <div className="terminal-dot bg-[#FFBD2E]" />
                                <div className="terminal-dot bg-[#28C840]" />
                                <span className="ml-3 font-mono text-xs text-neutral-500">
                                    contributions — 2025
                                </span>
                            </div>
                            <div className="p-6">
                                <div className="font-mono text-xs text-neutral-500 mb-4">
                                    $ git log --since="1 year ago" --oneline | wc -l
                                </div>
                                {/* Contribution grid */}
                                <div
                                    className="grid gap-0.5"
                                    style={{
                                        gridTemplateColumns: 'repeat(52, 1fr)',
                                        gridTemplateRows: 'repeat(7, 1fr)',
                                    }}
                                >
                                    {CONTRIB_GRID.map((cell, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-sm transition-all duration-200 hover:scale-150"
                                            style={{
                                                background: cell.active
                                                    ? cell.intensity === 3
                                                        ? '#00FF87'
                                                        : cell.intensity === 2
                                                            ? '#00FF8799'
                                                            : cell.intensity === 1
                                                                ? '#00FF8755' : '#00FF8730' : '#1a1a1a',
                                                boxShadow: cell.active && cell.intensity === 3
                                                    ? '0 0 4px rgba(0,255,135,0.5)'
                                                    : 'none',
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="flex items-center justify-end gap-2 mt-3">
                                    <span className="font-mono text-[10px] text-neutral-600">Less</span>
                                    {[0.15, 0.3, 0.5, 0.7, 1].map((op) => (
                                        <div
                                            key={op}
                                            className="w-3 h-3 rounded-sm"
                                            style={{ background: `rgba(0, 255, 135, ${op})` }}
                                        />
                                    ))}
                                    <span className="font-mono text-[10px] text-neutral-600">More</span>
                                </div>

                                {/* Streak info */}
                                <div className="mt-5 pt-5 border-t border-white/5 grid grid-cols-3 gap-4">
                                    {[
                                        { label: 'Current Streak', value: '14 days' },
                                        { label: 'Longest Streak', value: '47 days' },
                                        { label: 'Total in 2025', value: '847' },
                                    ].map((s) => (
                                        <div key={s.label} className="text-center">
                                            <div className="font-mono text-sm text-primary font-semibold">{s.value}</div>
                                            <div className="font-mono text-[10px] text-neutral-600 mt-0.5">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}