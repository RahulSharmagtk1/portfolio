import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/RahulSharmagtk1', icon: 'CodeBracketIcon' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'LinkIcon' },
    { name: 'Twitter', href: 'https://twitter.com/your-handle', icon: 'ChatBubbleBottomCenterTextIcon' },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#030303] py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    {/* Logo + name */}
                    <div className="flex items-center gap-2">
                        <AppLogo size={28} />
                        <span className="font-mono text-xs text-neutral-500">
                            dev<span className="text-neutral-300">portfolio</span>
                        </span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {['About', 'Projects', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-xs font-mono text-neutral-500 hover:text-primary transition-colors tracking-wider uppercase"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Social + copyright */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((s) => (
                            <a
                                key={s.name}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary/30 transition-all duration-200"
                                aria-label={s.name}
                            >
                                <Icon name={s.icon as any} size={14} />
                            </a>
                        ))}
                        <span className="text-[10px] font-mono text-neutral-600 ml-2">
                            © 2026 DevPortfolio
                        </span>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-[10px] font-mono text-neutral-700">
                        <span className="text-primary/50">{'// '}</span>
                        Built with Next.js · TypeScript · Tailwind CSS
                        <span className="text-primary/50">{' //'}</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}