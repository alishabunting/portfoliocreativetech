import React from 'react';
import { motion } from 'framer-motion';
import { SpeakingSection, SpeakingTitle, SpeakingList, SpeakingItem } from '../../styles/about/Speaking.styles';

interface SpeakingProps {
  speakingEngagements: {
    title: string;
    description: string;
  }[];
}

const Speaking: React.FC<SpeakingProps> = ({ speakingEngagements }) => {
  return (
    <SpeakingSection>
      <SpeakingTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Speaking & Thought Leadership
      </SpeakingTitle>

      <SpeakingList>
        {speakingEngagements.map((engagement, index) => (
          <SpeakingItem
            key={engagement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <h4>{engagement.title}</h4>
            <p>{engagement.description}</p>
          </SpeakingItem>
        ))}
      </SpeakingList>
    </SpeakingSection>
  );
};

export default Speaking; 