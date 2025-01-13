import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Cursor = styled.div<{ x: number; y: number; isHovering: boolean }>`
  position: fixed;
  width: ${props => props.isHovering ? '32px' : '16px'};
  height: ${props => props.isHovering ? '32px' : '16px'};
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  transform: translate(${props => props.x}px, ${props => props.y}px) scale(${props => props.isHovering ? 1.5 : 1});
  transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [data-hoverable]');
      setIsHovering(!!isHoverable);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, []);

  return (
    <Cursor
      x={position.x}
      y={position.y}
      isHovering={isHovering}
    />
  );
};

export default CustomCursor; 