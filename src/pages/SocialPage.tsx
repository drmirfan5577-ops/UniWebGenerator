import React from 'react';
import SocialLinksManager from '@/components/features/SocialLinksManager';

interface SocialPageProps {
  translate: (k: string) => string;
  dir: 'ltr' | 'rtl';
}

const SocialPage: React.FC<SocialPageProps> = ({ translate, dir }) => {
  return (
    <div className="h-full flex flex-col">
      <SocialLinksManager translate={translate} dir={dir} />
    </div>
  );
};

export default SocialPage;
