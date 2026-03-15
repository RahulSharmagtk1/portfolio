'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

const SOCIAL_LINKS = [
    { name: 'GitHub', href: 'https://github.com/RahulSharmagtk1', icon: 'CodeBracketIcon', color: '#00FF87' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/your-profile', icon: 'LinkIcon', color: '#00D4FF' },
    { name: 'Twitter', href: 'https://twitter.com/your-handle', icon: 'ChatBubbleBottomCenterTextIcon', color: '#7B61FF' },
    { name: 'Email', href: 'mailto:your@email.com', icon: 'EnvelopeIcon', color: '#FF6B6B' },
];

export default function ContactSection() {
    const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const validate = (): boolean => {
        const errs: FormErrors = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) errs.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format';
        if (!form.message.trim()) errs.message = 'Message is required';
        else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setStatus('sending');
        setErrorMsg('');
        try {
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
            const res = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to send message');
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
        } catch (err: any) {
            setStatus('error');
            setErrorMsg(err.message || 'Something went wrong. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section
            id="contact"
            className="relative py-28 bg-[#050505] border-t border-white/5 overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-16 observe-me reveal-up">
                    <span className="section-label">07 / Contact</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* LEFT: CTA + social */}
                    <div className="lg:col-span-5 observe-me reveal-blur">
                        <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-6">
                            Let's Build
                            <br />
                            <span className="text-neutral-600">Something</span>
                            <br />
                            <span className="gradient-text-green">Together.</span>
                        </h2>
                        <p className="font-body text-neutral-400 text-base leading-relaxed mb-8 max-w-sm">
                            Available for freelance projects, full-time roles, and technical consulting.
                            Response within 24 hours.
                        </p>

                        {/* Status */}
                        <div className="flex items-center gap-3 mb-10 p-4 rounded-lg border border-primary/15 bg-primary/3">
                            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-neon-sm" />
                            <div>
                                <p className="font-mono text-xs text-primary font-semibold">Available for hire</p>
                                <p className="font-mono text-[10px] text-neutral-500 mt-0.5">Open to remote & hybrid roles</p>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="grid grid-cols-2 gap-3">
                            {SOCIAL_LINKS.map((s) => (
                                <a
                                    key={s.name}
                                    href={s.href}
                                    target={s.name !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-3.5 rounded-lg border border-white/6 bg-white/2 hover:bg-white/4 transition-all duration-200 hover:border-white/15"
                                >
                                    <Icon name={s.icon as any} size={16} style={{ color: s.color }} />
                                    <span className="font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">
                                        {s.name}
                                    </span>
                                    <Icon name="ArrowTopRightOnSquareIcon" size={10} className="ml-auto opacity-0 group-hover:opacity-40 transition-opacity" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="lg:col-span-7 observe-me reveal-blur" style={{ transitionDelay: '0.2s' }}>
                        <div className="terminal-window">
                            <div className="terminal-titlebar">
                                <div className="terminal-dot bg-[#FF5F57]" />
                                <div className="terminal-dot bg-[#FFBD2E]" />
                                <div className="terminal-dot bg-[#28C840]" />
                                <span className="ml-3 font-mono text-xs text-neutral-500">
                                    contact.sh — new message
                                </span>
                            </div>

                            <div className="p-6">
                                {status === 'sent' ? (
                                    <div className="py-12 text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                                            <Icon name="CheckIcon" size={20} className="text-primary" />
                                        </div>
                                        <p className="font-mono text-primary text-sm mb-2">Message sent successfully!</p>
                                        <p className="font-mono text-xs text-neutral-500">I'll get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-6 font-mono text-xs text-neutral-400 hover:text-primary transition-colors border border-white/8 px-4 py-2 rounded-lg hover:border-primary/30"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        {/* Terminal prompt */}
                                        <div className="font-mono text-xs text-primary mb-5">
                                            $ compose --to your@email.com
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Name */}
                                            <div>
                                                <label className="block font-mono text-[10px] text-neutral-500 mb-1.5 uppercase tracking-wider">
                          // name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={`form-input w-full px-4 py-2.5 rounded-lg text-sm ${errors.name ? 'border-red-500/50' : ''
                                                        }`}
                                                />
                                                {errors.name && (
                                                    <p className="font-mono text-[10px] text-red-400 mt-1">{errors.name}</p>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block font-mono text-[10px] text-neutral-500 mb-1.5 uppercase tracking-wider">
                          // email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    placeholder="john@company.com"
                                                    className={`form-input w-full px-4 py-2.5 rounded-lg text-sm ${errors.email ? 'border-red-500/50' : ''
                                                        }`}
                                                />
                                                {errors.email && (
                                                    <p className="font-mono text-[10px] text-red-400 mt-1">{errors.email}</p>
                                                )}
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block font-mono text-[10px] text-neutral-500 mb-1.5 uppercase tracking-wider">
                        // message
                                            </label>
                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Tell me about your project or opportunity..."
                                                className={`form-input w-full px-4 py-2.5 rounded-lg text-sm resize-none ${errors.message ? 'border-red-500/50' : ''
                                                    }`}
                                            />
                                            {errors.message && (
                                                <p className="font-mono text-[10px] text-red-400 mt-1">{errors.message}</p>
                                            )}
                                        </div>

                                        {/* Error message */}
                                        {status === 'error' && (
                                            <div className="p-3 rounded-lg border border-red-500/30 bg-red-500/5">
                                                <p className="font-mono text-xs text-red-400">{errorMsg}</p>
                                            </div>
                                        )}

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={status === 'sending'}
                                            className="group w-full flex items-center justify-center gap-3 py-3 rounded-lg bg-primary text-black font-mono text-sm font-semibold hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                                        >
                                            {status === 'sending' ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Icon name="PaperAirplaneIcon" size={16} />
                                                    Send Message
                                                    <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                        <p className="font-mono text-[10px] text-neutral-600 text-center">
                                            {/* Replace with actual API endpoint */}
                                            {/* POST /api/contact — form data sent as JSON */}
                                            Your message is encrypted and sent securely.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}