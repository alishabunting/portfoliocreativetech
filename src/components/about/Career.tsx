import React from 'react';
import { Section, Container } from '../../styles/common/Section.styles';
import { CareerInner, CareerTitle, CareerTimeline } from '../../styles/AboutSection.styles';
import CareerRole from './CareerRole';

const Career: React.FC = () => {
  return (
    <Section>
      <CareerInner>
        <CareerTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Professional Journey
        </CareerTitle>
        
        <CareerTimeline>
          <CareerRole
            role={{
              company: "BBDO New York",
              title: "Creative Technologist",
              duration: "July 2023 - Present",
              location: "New York City Metropolitan Area",
              responsibilities: [
                "Collaborate with creative teams to provide technical insights",
                "Research emerging technologies and trends",
                "Develop prototypes and experiment with new technologies",
                "Educate teams on technological possibilities",
                "Work with production teams on feasibility"
              ]
            }}
            clients={["Meta", "Bacardi", "Home Depot", "American Red Cross"]}
            tech={["AI/ML", "Web3", "React", "Three.js", "WebGL"]}
            achievements={[]}
          />

          <CareerRole
            role={{
              company: "BBDO New York",
              title: "Interactive Producer",
              duration: "September 2021 - July 2023",
              location: "New York City Metropolitan Area",
              responsibilities: [
                "Managed interactive production from concept to delivery for major clients including Meta, Bacardi, and The Home Depot",
                "Developed budgets and timelines for interactive experiences and custom projects",
                "Coordinated with internal teams and external partners",
                "Oversaw quality assurance and testing processes",
                "Managed project documentation and client communication"
              ]
            }}
            clients={["Meta", "Mars", "FedEx", "Home Depot"]}
            tech={["Project Management", "Agile", "Jira", "Confluence", "Microsoft Office"]}
            achievements={[]}
          />

          <CareerRole
            role={{
              company: "University of Southern California",
              title: "Webmaster",
              duration: "June 2020 - September 2021",
              location: "Los Angeles, California",
              responsibilities: [
                "Designed and implemented web-based information delivery systems",
                "Integrated multimedia content with databases and communication protocols",
                "Produced and edited enrollment services multimedia content",
                "Advised departments on technical and design techniques"
              ]
            }}
            clients={[]}
            tech={["HTML", "CSS", "JavaScript", "React", "Three.js"]}
            achievements={[
              "Designed and implemented web-based information delivery systems",
              "Integrated multimedia content effectively",
              "Produced and edited enrollment services multimedia content",
              "Advised departments on technical and design techniques"
            ]}
          />
        </CareerTimeline>
      </CareerInner>
    </Section>
  );
};

export default Career; 