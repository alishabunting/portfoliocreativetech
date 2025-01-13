import React from 'react';
import { motion } from 'framer-motion';
import { Section, Container } from '../../styles/common/Section.styles';
import {
  EducationContainer,
  EducationCard,
  CardHeader,
  CardContent,
  CourseList
} from '../../styles/about/Education.styles';

interface EducationProps {
  education: {
    institution: string;
    degree: string;
    period: string;
    location: string;
    courses?: string[];
    achievements?: string[];
  }[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section>
      <Container>
        <EducationContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <CardHeader>
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
                <div>
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>
              </CardHeader>

              <CardContent>
                {edu.courses && (
                  <div>
                    <h4>Key Courses</h4>
                    <CourseList>
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </CourseList>
                  </div>
                )}

                {edu.achievements && (
                  <div>
                    <h4>Achievements</h4>
                    <CourseList>
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </CourseList>
                  </div>
                )}
              </CardContent>
            </EducationCard>
          ))}
        </EducationContainer>
      </Container>
    </Section>
  );
};

export default Education; 