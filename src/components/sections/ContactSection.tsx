import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Section = styled.section`
  padding: var(--spacing-section) 0;
  background: var(--color-text);
  color: var(--color-background);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: var(--spacing-container);
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Title = styled(motion.h2)`
  font-size: var(--font-size-section);
  font-weight: 700;
  opacity: 0.2;
  margin-bottom: 6rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-grid);

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: var(--font-size-subheading);
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: var(--font-size-body);
  transition: opacity 300ms ease;
  
  &:hover {
    opacity: 0.6;
  }

  svg {
    width: 24px;
    height: 24px;
    opacity: 0.4;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: var(--font-size-caption);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.4;
`;

const Input = styled.input`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: var(--color-background);
  font-size: var(--font-size-body);
  transition: all 300ms ease;

  &:focus {
    outline: none;
    border-color: var(--color-background);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  color: var(--color-background);
  font-size: var(--font-size-body);
  min-height: 150px;
  resize: vertical;
  transition: all 300ms ease;

  &:focus {
    outline: none;
    border-color: var(--color-background);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  background: var(--color-background);
  color: var(--color-text);
  border: none;
  padding: 1rem 2rem;
  font-size: var(--font-size-body);
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms ease;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  &:hover {
    opacity: 0.8;
  }
`;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY'
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </Title>

        <ContactGrid>
          <ContactInfo>
            <h3>Let's Connect</h3>
            <SocialLinks>
              <SocialLink href="mailto:me@alishabunting.com">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                me@alishabunting.com
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/alisha-bunting" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            
            {submitStatus === 'success' && (
              <div style={{ color: '#4CAF50', marginTop: '1rem' }}>
                Message sent successfully!
              </div>
            )}
            {submitStatus === 'error' && (
              <div style={{ color: '#f44336', marginTop: '1rem' }}>
                Failed to send message. Please try again.
              </div>
            )}
          </Form>
        </ContactGrid>
      </Container>
    </Section>
  );
};

export default ContactSection; 