'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const TYPING_LINES = [
    '> Initializing portfolio...',
    '> Loading modules: [Angular, React, TypeScript]',
    '> Connecting to GitHub API...',
    '> Status: Available for hire ✓',
    '> Welcome to my portfolio.',
];

const TECH_TAGS = ['Angular', 'React', 'TypeScript', 'JavaScript', 'Node.js'];

export default function HeroSection() {
    const [typedLines, setTypedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentLine >= TYPING_LINES.length) return;

        const line = TYPING_LINES[currentLine];
        if (currentChar < line.length) {
            const t = setTimeout(() => {
                setCurrentChar((c) => c + 1);
            }, 28);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setTypedLines((prev) => [...prev, line]);
                setCurrentLine((l) => l + 1);
                setCurrentChar(0);
            }, 350);
            return () => clearTimeout(t);
        }
    }, [currentLine, currentChar]);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [typedLines, currentChar]);

    const currentDisplayLine =
        currentLine < TYPING_LINES.length
            ? TYPING_LINES[currentLine].slice(0, currentChar)
            : '';

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 is-visible"
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 grid-bg opacity-40 pointer-events-none"
                style={{
                    maskImage: 'radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)',
                }}
            />

            {/* Neon glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/3 blur-[100px] pointer-events-none" />

            {/* Scanline overlay */}
            <div className="scanline-overlay" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* LEFT: Content */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {/* Status badge */}
                        <div className="reveal-up flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-primary shadow-neon-sm animate-pulse" />
                            <span className="font-mono text-xs text-primary tracking-widest uppercase">
                                Available for hire · Open to remote
                            </span>
                        </div>

                        {/* Main headline */}
                        <div className="overflow-hidden">
                            <h1
                                className="font-display font-semibold leading-none tracking-tighter select-none"
                                style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
                            >
                                <div className="observe-me">
                                    <span className="char-reveal" style={{ transitionDelay: '0s' }}>S</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>E</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>N</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>I</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>O</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>R</span>
                                </div>
                                <div className="observe-me" style={{ paddingLeft: 'clamp(1.5rem, 4vw, 5rem)' }}>
                                    <span
                                        className="gradient-text-scan"
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontWeight: 700,
                                        }}
                                    >
                                        FRONTEND
                                    </span>
                                </div>
                                <div className="observe-me text-neutral-600">
                                    <span className="char-reveal" style={{ transitionDelay: '0.02s' }}>E</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.05s' }}>N</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.08s' }}>G</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.11s' }}>I</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.14s' }}>N</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.17s' }}>E</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.20s' }}>E</span>
                                    <span className="char-reveal" style={{ transitionDelay: '0.23s' }}>R</span>
                                </div>
                            </h1>
                        </div>

                        {/* Tagline */}
                        <p className="reveal-up font-body text-lg text-neutral-400 leading-relaxed max-w-xl" style={{ transitionDelay: '0.3s' }}>
                            Crafting pixel-perfect, performant web experiences with{' '}
                            <span className="text-primary font-mono">Angular</span>,{' '}
                            <span className="text-accent font-mono">React</span> &{' '}
                            <span className="text-accent-blue font-mono">TypeScript</span>.
                            Turning complex systems into elegant interfaces.
                        </p>

                        {/* Tech tags */}
                        <div className="reveal-up flex flex-wrap gap-2" style={{ transitionDelay: '0.4s' }}>
                            {TECH_TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full border border-white/8 bg-white/2 font-mono text-xs text-neutral-400 hover:border-primary/30 hover:text-primary transition-all duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="reveal-up flex flex-wrap gap-3 mt-2" style={{ transitionDelay: '0.5s' }}>
                            <a
                                href="https://github.com/your-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-mono text-neutral-300 hover:border-primary/40 hover:text-primary hover:bg-primary/3 transition-all duration-300"
                            >
                                <Icon name="CodeBracketIcon" size={16} />
                                GitHub
                                <Icon name="ArrowTopRightOnSquareIcon" size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a
                                href="https://linkedin.com/in/your-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-mono text-neutral-300 hover:border-accent/40 hover:text-accent hover:bg-accent/3 transition-all duration-300"
                            >
                                <Icon name="LinkIcon" size={16} />
                                LinkedIn
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="group flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-black text-sm font-mono font-semibold hover:shadow-neon transition-all duration-300 hover:scale-105"
                            >
                                <Icon name="ArrowDownTrayIcon" size={16} />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* RIGHT: Terminal */}
                    <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
                        <div className="terminal-window w-full max-w-md animate-float crt-effect">
                            {/* Title bar */}
                            <div className="terminal-titlebar">
                                <div className="terminal-dot bg-[#FF5F57]" />
                                <div className="terminal-dot bg-[#FFBD2E]" />
                                <div className="terminal-dot bg-[#28C840]" />
                                <span className="ml-3 font-mono text-xs text-neutral-500">
                                    terminal — portfolio.sh
                                </span>
                            </div>
                            {/* Terminal body */}
                            <div
                                ref={terminalRef}
                                className="p-5 font-mono text-sm min-h-[220px] max-h-[280px] overflow-y-auto space-y-1"
                            >
                                {typedLines.map((line, i) => (
                                    <div key={i} className="text-neutral-400 leading-relaxed">
                                        {line.startsWith('>') ? (
                                            <>
                                                <span className="text-primary">&gt;</span>
                                                <span className="text-neutral-300">{line.slice(1)}</span>
                                            </>
                                        ) : (
                                            <span>{line}</span>
                                        )}
                                    </div>
                                ))}
                                {currentLine < TYPING_LINES.length && (
                                    <div className="text-neutral-300 leading-relaxed">
                                        <span className="text-primary">&gt;</span>
                                        {currentDisplayLine.slice(1)}
                                        <span className="terminal-cursor" />
                                    </div>
                                )}
                                {currentLine >= TYPING_LINES.length && (
                                    <div className="mt-3 pt-3 border-t border-white/5">
                                        <span className="text-primary">$ </span>
                                        <span className="text-neutral-300">ls ./skills</span>
                                        <br />
                                        <span className="text-accent-blue text-xs">
                                            angular/ react/ typescript/ nodejs/ css/ git/
                                        </span>
                                        <br />
                                        <span className="text-primary">$ </span>
                                        <span className="terminal-cursor" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
                <span className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
        </section>
    );
}