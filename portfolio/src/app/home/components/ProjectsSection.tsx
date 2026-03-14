'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Project {
    id: number;
    title: string;
    description: string;
    longDesc: string;
    tags: string[];
    github: string;
    demo: string;
    image: string;
    imageAlt: string;
    featured: boolean;
    color: string;
}

const PROJECTS: Project[] = [
    {
        id: 1,
        title: 'AngularDash Pro',
        description: 'Enterprise analytics dashboard built with Angular 17 and NgRx',
        longDesc: 'A full-featured analytics platform with real-time data visualization, role-based access control, and complex state management using NgRx. Handles 100k+ daily active users.',
        tags: ['Angular', 'NgRx', 'TypeScript', 'D3.js', 'REST API'],
        github: 'https://github.com/your-username/angulardash-pro',
        demo: 'https://angulardash-pro.vercel.app',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3b2a1bc-1772157079748.png",
        imageAlt: 'Angular analytics dashboard with charts and data visualizations',
        featured: true,
        color: '#FF6B6B'
    },
    {
        id: 2,
        title: 'ReactFlow Studio',
        description: 'Visual workflow builder using React and TypeScript',
        longDesc: 'Drag-and-drop workflow automation tool built with React Flow and TypeScript. Features custom node types, conditional logic, and real-time collaboration.',
        tags: ['React', 'TypeScript', 'React Flow', 'WebSocket'],
        github: 'https://github.com/your-username/reactflow-studio',
        demo: 'https://reactflow-studio.vercel.app',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_1490eda19-1772191448885.png",
        imageAlt: 'React workflow builder with drag and drop nodes on dark canvas',
        featured: true,
        color: '#00D4FF'
    },
    {
        id: 3,
        title: 'TypeSafe API Client',
        description: 'Type-safe REST API client generator from OpenAPI specs',
        longDesc: 'CLI tool that generates fully typed TypeScript API clients from OpenAPI 3.0 specifications. Supports authentication, interceptors, and automatic retry logic.',
        tags: ['TypeScript', 'Node.js', 'OpenAPI', 'CLI'],
        github: 'https://github.com/your-username/typesafe-api-client',
        demo: 'https://www.npmjs.com/package/typesafe-api-client',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_12f532032-1772570811163.png",
        imageAlt: 'Code editor showing TypeScript API client generation',
        featured: false,
        color: '#7B61FF'
    },
    {
        id: 4,
        title: 'DevUI Component Library',
        description: 'Accessible React component library with 50+ components',
        longDesc: 'Production-ready component library built with React, TypeScript, and Storybook. Achieves WCAG 2.1 AA compliance, with full keyboard navigation and screen reader support.',
        tags: ['React', 'TypeScript', 'Storybook', 'WCAG', 'SCSS'],
        github: 'https://github.com/your-username/devui-components',
        demo: 'https://devui-storybook.vercel.app',
        image: "https://img.rocket.new/generatedImages/rocket_gen_img_102b9d6ca-1772304746624.png",
        imageAlt: 'Component library showcase with UI components on dark background',
        featured: false,
        color: '#00FF87'
    }];


export default function ProjectsSection() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section
            id="projects"
            className="relative py-28 bg-[#050505] border-y border-white/5 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 observe-me">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="section-label">03 / Projects</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent w-20" />
                        </div>
                        <h2 className="font-display text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none">
                            <div>
                                <span className="char-reveal" style={{ transitionDelay: '0s' }}>O</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.03s' }}>p</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.06s' }}>e</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.09s' }}>n</span>
                            </div>
                            <div className="text-neutral-600">
                                <span className="char-reveal" style={{ transitionDelay: '0.12s' }}>S</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.15s' }}>o</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.18s' }}>u</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.21s' }}>r</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.24s' }}>c</span>
                                <span className="char-reveal" style={{ transitionDelay: '0.27s' }}>e</span>
                            </div>
                        </h2>
                    </div>
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-0.5 mt-6 md:mt-0">

                        View All on GitHub
                        <Icon name="ArrowRightIcon" size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Projects list */}
                <div className="flex flex-col w-full">
                    {PROJECTS.map((project, i) =>
                        <div
                            key={project.id}
                            className="group relative border-t border-white/8 hover:bg-white/[0.015] transition-colors duration-300"
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}>

                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col md:flex-row md:items-center justify-between z-10 w-full py-10 px-4 relative">

                                <div className="flex items-center gap-6 md:w-1/2">
                                    <span
                                        className="font-mono text-xs transition-colors"
                                        style={{ color: hoveredId === project.id ? project.color : '#444' }}>

                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="font-display text-2xl lg:text-4xl font-light text-neutral-300 group-hover:text-white transition-all duration-500 group-hover:translate-x-3 tracking-tight">
                                            {project.title}
                                        </h3>
                                        <p className="font-body text-sm text-neutral-500 mt-1 group-hover:text-neutral-400 transition-colors">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 md:w-1/2 md:justify-end mt-4 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag) =>
                                            <span
                                                key={tag}
                                                className="font-mono text-[10px] px-2 py-0.5 rounded border border-white/8 text-neutral-500">

                                                {tag}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2 ml-2">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-primary/40 hover:text-primary transition-all">

                                            <Icon name="CodeBracketIcon" size={14} />
                                        </a>
                                        <Icon
                                            name="ArrowTopRightOnSquareIcon"
                                            size={18}
                                            className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />

                                    </div>
                                </div>
                            </a>

                            {/* Hover image preview */}
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-48 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 z-20 overflow-hidden border border-white/10 shadow-2xl hidden lg:block"
                                style={{ transform: hoveredId === project.id ? 'translate(-50%, -50%) scale(1) rotate(2deg)' : 'translate(-50%, -50%) scale(0.9)' }}>

                                <AppImage
                                    src={project.image}
                                    alt={project.imageAlt}
                                    width={320}
                                    height={192}
                                    className="w-full h-full object-cover" />

                                <div className="absolute inset-0 scanline-overlay" />
                            </div>
                        </div>
                    )}
                    <div className="border-t border-white/8" />
                </div>
            </div>
        </section>);

}