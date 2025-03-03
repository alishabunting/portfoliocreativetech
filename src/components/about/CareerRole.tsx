import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CareerRole as StyledCareerRole,
  ModuleRow,
  RoleHeader,
  ResponsibilitiesModule,
  TechModule,
  ClientsModule,
  AchievementsModule,
  ResponsibilitiesList,
  TagsList,
  AchievementsList,
  TechClientColumn
} from '../../styles/AboutSection.styles';

interface Role {
  company: string;
  title: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

interface CareerRoleProps {
  role: Role;
  clients: string[];
  tech: string[];
  achievements: string[];
  index: number;
  isActive: boolean;
  onToggle: () => void;
  totalCards: number;
}

const CareerRole: React.FC<CareerRoleProps> = ({ 
  role, 
  clients, 
  tech, 
  achievements,
  index,
  isActive,
  onToggle,
  totalCards
}) => {
  const formatTitle = (title: string) => {
    // Format titles to maintain consistent card proportions
    switch (title) {
      case "Creative Technologist":
        return "Creative\nTechnologist";
      case "Webmaster and Editor-In-Chief":
        return "Webmaster &\nEditor-In-Chief";
      case "Digital Media Tutor & Teaching Assistant":
        return "Digital Media\nTutor & Assistant";
      case "Communications Director":
        return "Communications\nDirector";
      default:
        // For any new titles, ensure they fit within card dimensions
        const words = title.split(' ');
        if (words.length > 2) {
          const midpoint = Math.ceil(words.length / 2);
          return `${words.slice(0, midpoint).join(' ')}\n${words.slice(midpoint).join(' ')}`;
        }
        return title;
    }
  };

  // Calculate grid position based on if card is active
  const getGridPosition = () => {
    if (!isActive) {
      return {
        scale: 0.85,
        x: 0,
        y: 0,
        zIndex: 1,
        rotateX: 0,
        rotateY: 0
      };
    }
    return {
      scale: 1,
      x: 0,
      y: -20,
      zIndex: 10,
      rotateX: 0,
      rotateY: 0
    };
  };

  return (
    <StyledCareerRole
      as={motion.div}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{
        opacity: 1,
        ...getGridPosition(),
      }}
      transition={{
        duration: 0.6,
        ease: [0.19, 1, 0.22, 1],
        layout: { duration: 0.6 }
      }}
      onClick={onToggle}
      $isActive={isActive}
      $index={index}
      layout
      whileHover={!isActive ? {
        scale: 0.9,
        rotateY: 5,
        rotateX: -5,
        transition: { duration: 0.4 }
      } : {}}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isActive ? "expanded" : "collapsed"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          style={{ height: '100%', width: '100%' }}
        >
          {!isActive ? (
            <RoleHeader>
              <div className="role-container">
                <div className="title-section">
                  <h3>{role.company}</h3>
                  <h4>{formatTitle(role.title)}</h4>
                </div>
                <div className="meta-info">
                  <div className="duration">{role.duration}</div>
                  <div className="location">{role.location}</div>
                </div>
              </div>
              <div className="corner-accent" />
            </RoleHeader>
          ) : (
            <ModuleRow>
              <motion.div 
                className="expanded-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <RoleHeader className="expanded">
                  <div className="role-container">
                    <div className="title-section">
                      <h3>{role.company}</h3>
                      <h4>{formatTitle(role.title)}</h4>
                    </div>
                    <div className="meta-info">
                      <div className="divider" />
                      <div className="duration">{role.duration}</div>
                      <div className="location">{role.location}</div>
                    </div>
                  </div>
                  <div className="corner-accent" />
                </RoleHeader>

                <ResponsibilitiesModule>
                  <h5>Responsibilities</h5>
                  <ResponsibilitiesList>
                    {role.responsibilities.map((item, index) => (
                      <li 
                        key={index}
                        data-index={`[${String(index + 1).padStart(2, '0')}]`}
                      >
                        {item}
                      </li>
                    ))}
                  </ResponsibilitiesList>
                </ResponsibilitiesModule>

                <TechClientColumn>
                  {achievements.length > 0 && (
                    <AchievementsModule>
                      <h5>Key Achievements</h5>
                      <AchievementsList>
                        {achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </AchievementsList>
                    </AchievementsModule>
                  )}

                  {clients.length > 0 && (
                    <ClientsModule>
                      <h5>Key Clients</h5>
                      <TagsList>
                        {clients.map((client, index) => (
                          <li key={index}>{client}</li>
                        ))}
                      </TagsList>
                    </ClientsModule>
                  )}

                  <TechModule>
                    <h5>Technologies & Tools</h5>
                    <TagsList>
                      {tech.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </TagsList>
                  </TechModule>
                </TechClientColumn>
              </motion.div>
            </ModuleRow>
          )}
        </motion.div>
      </AnimatePresence>
    </StyledCareerRole>
  );
};

export default CareerRole; 