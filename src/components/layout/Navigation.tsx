import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 2rem 3rem;
  transition: all 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  background: ${props => props.isScrolled ? 'var(--color-overlay-nav)' : 'var(--color-background)'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Nav = styled.nav`
  max-width: var(--spacing-container);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-size: var(--font-size-subheading);
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  background: none !important;
  -webkit-background-clip: initial !important;
  background-clip: initial !important;
  transition: opacity 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    opacity: var(--color-hover);
  }
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 100;
  padding: 0;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-text);
    transition: all 300ms ease;

    &:first-child {
      top: 8px;
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:last-child {
      bottom: 8px;
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'};
    }
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-overlay-menu);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const MenuContent = styled.div`
  max-width: var(--spacing-container);
  width: 100%;
`;

const MenuItem = styled.a`
  display: block;
  font-size: var(--font-size-project);
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  padding: 1rem 0;
  transition: transform 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    transform: translateX(2rem);
    opacity: var(--color-hover);
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: var(--font-size-project);
  font-weight: 700;
  color: var(--color-text);
  text-decoration: none;
  padding: 1rem 0;
  transition: transform 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    transform: translateX(2rem);
    opacity: var(--color-hover);
  }
`;

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about-career' },
  { title: 'Contact', href: '/contact' }
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -40
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.17, 0.67, 0.83, 0.67]
    }
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <Header isScrolled={isScrolled}>
      <Nav>
        <LogoLink to="/">ATB</LogoLink>
        <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <span></span>
          <span></span>
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuContent>
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {menuItems.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    {item.href.startsWith('/#') ? (
                      <MenuItem
                        href={item.href.substring(1)}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </MenuItem>
                    ) : (
                      <StyledLink
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </StyledLink>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </MenuContent>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Header>
  );
};

export default Navigation; 