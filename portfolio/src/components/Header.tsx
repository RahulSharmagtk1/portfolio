'use client';
import React, { useState, useEffect } from 'react';

import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#030303]/90 backdrop-blur-xl border-b border-white/5 py-3'
                : 'py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
                    <span className="font-mono text-sm text-primary font-semibold tracking-tight hidden sm:block">
                        dev<span className="text-white">portfolio</span>
                        <span className="terminal-cursor" />
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-[#0a0a0a]/80 border border-white/5 rounded-full px-2 py-1.5 backdrop-blur-xl">
                    {navLinks?.map((link) => (
                        <a
                            key={link?.href}
                            href={link?.href}
                            className="px-4 py-1.5 rounded-full text-xs font-mono text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wider uppercase"
                        >
                            {link?.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-[#0a0a0a]/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase">
                            Available for hire
                        </span>
                    </div>
                    <a
                        href="#contact"
                        className="px-5 py-2 rounded-full bg-primary text-black text-xs font-mono font-semibold tracking-wider uppercase hover:shadow-neon transition-all duration-300 hover:scale-105"
                    >
                        Hire Me
                    </a>
                    {/* Mobile menu */}
                    <button
                        className="md:hidden w-9 h-9 rounded-full border border-white/10 flex items-center justify-center"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col gap-1 w-4">
                            <span className={`h-px bg-white rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                            <span className={`h-px bg-white rounded transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3/4'}`} />
                            <span className={`h-px bg-white rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : 'w-1/2'}`} />
                        </div>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-xl border-b border-white/5 py-4 px-6">
                    {navLinks?.map((link) => (
                        <a
                            key={link?.href}
                            href={link?.href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-sm font-mono text-neutral-400 hover:text-primary border-b border-white/5 tracking-wider uppercase transition-colors"
                        >
                            {link?.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}