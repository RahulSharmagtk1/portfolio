import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/home/components/HeroSection';
import AboutSection from '@/app/home/components/AboutSection';
import TechStackSection from '@/app/home/components/TechStackSection';
import ProjectsSection from '@/app/home/components/ProjectsSection';
import GitHubStatsSection from '@/app/home/components/GitHubStatsSection';
import ExperienceSection from '@/app/home/components/ExperienceSection';
import BlogSection from '@/app/home/components/BlogSection';
import ContactSection from '@/app/home/components/ContactSection';
import ScrollObserver from '@/app/home/components/ScrollObserver';

export default function HomePage() {
    return (
        <main className="bg-[#030303] min-h-screen overflow-x-hidden">
            <Header />
            <ScrollObserver />
            <HeroSection />
            <AboutSection />
            <TechStackSection />
            <ProjectsSection />
            <GitHubStatsSection />
            <ExperienceSection />
            <BlogSection />
            <ContactSection />
            <Footer />
        </main>
    );
}