import React from 'react';
import { useParams } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { ProjectCaseStudy } from '../components/ui/ProjectCaseStudy';
import { NotFound } from './NotFound';
import { getProjectBySlug } from '../data/projects';

export function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <PageLayout>
      <ProjectCaseStudy project={project} />
    </PageLayout>
  );
}
