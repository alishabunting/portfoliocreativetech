import React, { useState } from 'react';
import styled from 'styled-components';
import { WebSite } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WebsiteCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  overflow: hidden;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  aspect-ratio: ${props => props.expanded ? 'auto' : '16/9'};
  padding: 2rem;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: ${props => props.expanded ? 'none' : 'translateY(-8px)'};
    border-color: var(--color-accent);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const WebsiteName = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  margin: 0;
  color: var(--color-text);
  font-weight: 700;
  text-align: center;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 2;
`;

const ExpandedContent = styled(motion.div)`
  width: 100%;
  margin-top: 2rem;
`;

const Description = styled.p`
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  text-align: center;
  margin: 1.5rem 0;
  line-height: 1.6;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin: 1rem 0;
`;

const Tag = styled.span`
  font-size: var(--font-size-caption);
  color: var(--color-text);
  background: var(--color-border);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const VisitButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--color-accent);
  color: var(--color-text);
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: '↗';
    margin-left: 8px;
    font-size: 1.2em;
  }
`;

interface WebGridProps {
  websites: WebSite[];
}

const WebGrid: React.FC<WebGridProps> = ({ websites }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleCardClick = (url: string) => {
    setExpandedId(expandedId === url ? null : url);
  };

  // Example tags for each website (you might want to add these to your WebSite interface)
  const websiteTags = {
    'www.bbdola.com': ['Agency', 'Creative', 'Portfolio'],
    'admission.usc.edu': ['Education', 'University', 'Interactive'],
    'letsbreakthrough.org': ['Non-profit', 'Social Impact', 'Community'],
    'www.hemob.org': ['Healthcare', 'Medical', 'Non-profit']
  };

  return (
    <Grid>
      {websites.map((site) => {
        const isExpanded = expandedId === site.url;
        const hostname = new URL(site.url).hostname;
        const tags = websiteTags[hostname] || [];

        return (
          <WebsiteCard 
            key={site.url}
            expanded={isExpanded}
            onClick={() => handleCardClick(site.url)}
          >
            <WebsiteName>{site.name}</WebsiteName>
            
            <AnimatePresence>
              {isExpanded && (
                <ExpandedContent
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Description>{site.description}</Description>
                  <Tags>
                    {tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                  <VisitButton
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website
                  </VisitButton>
                </ExpandedContent>
              )}
            </AnimatePresence>
          </WebsiteCard>
        )
      })}
    </Grid>
  );
};

export default WebGrid; 