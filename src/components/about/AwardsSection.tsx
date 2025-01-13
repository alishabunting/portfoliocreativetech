import React from 'react';
import { awardsData } from '../../data/awardsData';
import {
  AwardsSectionContainer,
  AwardsContainer,
  SectionTitle,
  AwardsGrid,
  AwardIcon,
  AwardTooltip
} from '../../styles/about/Awards.styles';

const AwardsSection: React.FC = () => {
  return (
    <AwardsSectionContainer>
      <AwardsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Awards & Recognition
        </SectionTitle>
        
        <AwardsGrid>
          {awardsData.map((award, index) => (
            <AwardIcon
              key={award.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <span style={{ fontSize: '2.5rem' }}>{award.icon}</span>
              <h3>{award.title}</h3>
              <AwardTooltip className="award-tooltip">
                <p>{award.description}</p>
              </AwardTooltip>
            </AwardIcon>
          ))}
        </AwardsGrid>
      </AwardsContainer>
    </AwardsSectionContainer>
  );
};

export default AwardsSection; 