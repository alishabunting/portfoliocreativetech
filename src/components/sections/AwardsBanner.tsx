import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background: var(--color-text);
  padding: 2rem 0;
  position: relative;

  [data-theme="light"] & {
    background: black;
  }
`;

const ScrollingContent = styled.div`
  display: flex;
  white-space: nowrap;
  animation: ${scroll} 40s linear infinite;
`;

const AwardItem = styled.span`
  color: var(--color-background);
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
  padding: 0 2rem;
  font-family: var(--font-family-base);

  [data-theme="light"] & {
    color: white;
  }

  &::after {
    content: "////";
    margin-left: 2rem;
    opacity: 0.5;
  }

  &:last-child::after {
    content: "";
  }
`;

const awards = [
  "2024 Webby Awards - Honoree title in AI, Metaverse, & Virtual Games for 'The Home Depot + Roblox'",
  "2024 Effie - Silver Experiential Commerce Marketing Award for 'The Home Depot + Roblox'",
  "2024 Webby Awards People's Voice Award for Best Community Engagement with 'Pedigree Fosterverse'",
  "2024 D&AD Shortlist: Gaming and Virtual Worlds - Brand Integration for 'Pedigree Fosterverse'"
];

const AwardsBanner: React.FC = () => {
  const duplicatedAwards = [...awards, ...awards]; // Duplicate for seamless scrolling

  return (
    <BannerContainer>
      <ScrollingContent>
        {duplicatedAwards.map((award, index) => (
          <AwardItem key={index}>{award}</AwardItem>
        ))}
      </ScrollingContent>
    </BannerContainer>
  );
};

export default AwardsBanner; 