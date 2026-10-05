import React, { useEffect } from 'react';
import { Home } from 'lucide-react';
import { PageLayout } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';

export function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found | Shubham Patel';
  }, []);

  return (
    <PageLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <span className="text-6xl sm:text-8xl font-extrabold font-mono text-[#4F46E5]/30 mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold font-heading text-[#171717] mb-2">
          Page Not Found
        </h1>
        <p className="text-[#666666] text-sm sm:text-base max-w-md mb-6 font-sans">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button to="/" variant="primary" size="md" icon={Home}>
          Return to Home
        </Button>
      </div>
    </PageLayout>
  );
}
