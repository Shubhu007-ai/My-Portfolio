import React, { useEffect } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ExperiencePreview } from '../components/home/ExperiencePreview';
import { EducationPreview } from '../components/home/EducationPreview';
import { SkillsPreview } from '../components/home/SkillsPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { CertificationsPreview } from '../components/home/CertificationsPreview';
import { ContactCTA } from '../components/home/ContactCTA';

export function Home() {
  useEffect(() => {
    document.title = 'Shubham Patel | MERN Stack Developer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Portfolio of Shubham Patel, a MERN Stack Developer based in New Delhi, India. Building responsive web applications with React, Node, Express, and MongoDB.');
    }
  }, []);

  return (
    <PageLayout>
      <Hero />
      <AboutPreview />
      <ExperiencePreview />
      <EducationPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <CertificationsPreview />
      <ContactCTA />
    </PageLayout>
  );
}
