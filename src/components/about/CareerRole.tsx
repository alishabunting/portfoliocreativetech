import React from 'react';
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

interface CareerRoleProps {
  role: {
    company: string;
    title: string;
    duration: string;
    location: string;
    responsibilities: string[];
  };
  clients: string[];
  tech: string[];
  achievements: string[];
}

const CareerRole: React.FC<CareerRoleProps> = ({ role, clients, tech, achievements }) => {
  const formatTitle = (title: string) => {
    if (title === "Creative Technologist") {
      return "Creative\nTechnologist";
    }
    if (title === "Webmaster and Editor-In-Chief") {
      return "Webmaster and\nEditor-In-Chief";
    }
    if (title === "Digital Media Tutor & Teaching Assistant") {
      return "Digital Media\nTutor & Teaching\nAssistant";
    }
    return title;
  };

  return (
    <StyledCareerRole
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ModuleRow>
        <RoleHeader>
          <div className="role-container">
            <h3>{role.company}</h3>
            <h4>{formatTitle(role.title)}</h4>
          </div>
          
          <div className="meta-info">
            <div className="duration-container">
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
              <li key={index}>{item}</li>
            ))}
          </ResponsibilitiesList>
        </ResponsibilitiesModule>

        <TechClientColumn>
          {clients.length > 0 ? (
            <ClientsModule>
              <h5>Key Clients</h5>
              <TagsList>
                {clients.map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
              </TagsList>
            </ClientsModule>
          ) : (
            <AchievementsModule>
              <h5>Key Achievements</h5>
              <AchievementsList>
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </AchievementsList>
            </AchievementsModule>
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
      </ModuleRow>
    </StyledCareerRole>
  );
};

export default CareerRole; 