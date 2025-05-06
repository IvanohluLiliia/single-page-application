// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Instagram, Github, Send } from 'lucide-react';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.text};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  width: 100%; /* Забезпечує, що футер займатиме всю ширину екрану */
  box-sizing: border-box; /* Враховує паддінги в загальну ширину */
  position: relative;
`;

const Socials = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }
`;

const Copy = styled.div`
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Copy>© 2025 Мій Портфоліо — Всі права захищено</Copy>
      <Socials>
        <a href="https://t.me/Li_ngL" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <Send size={18} />
        </a>
        <a href="https://www.instagram.com/liliia.ivanohlu?igsh=dWRnZTAwejF2bno3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <Instagram size={18} />
        </a>
        <a href="https://github.com/IvanohluLiliia" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
      </Socials>
    </FooterWrapper>
  );
};

export default Footer;
