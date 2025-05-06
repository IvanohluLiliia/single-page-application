import React from 'react';
import styled from 'styled-components';
import myPhoto from '../assets/myphoto.jpg';
import Logo from '../assets/Logo.jpg'; // Ваше нове фото

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 90%;
  max-width: 1000px;
  margin: 4rem auto;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.46);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideFadeIn 1.2s ease-out;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-right: 2rem;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 24px;
  border: 3px solid ${({ theme }) => theme.accent};
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  margin-bottom: 430px;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const SecondaryImageLink = styled.a`
  display: block;
  position: absolute;
  bottom: -100px; /* Підняти фото */
  left: 0;
  width: 100%;
  text-align: center;
`;

const SecondaryImage = styled.img`
  width: 230px; /* Збільшуємо розмір фото */
  height: 230px; /* Збільшуємо розмір фото */
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.accent};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
   margin-bottom: 220px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  flex: 1;
  min-width: 260px;
  color: #2e2e2e;
`;

const Title = styled.h1`
  color: #893941;
  font-size: 2.4rem;
  margin-bottom: 0.8rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #2e2e2e;
  line-height: 1.6;
`;

const Section = styled.section`
  margin-top: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #893941;
  margin-bottom: 1rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.71);
  padding: 1rem;
  border-left: 4px solid #29364d;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  color: #29364d;
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.4rem 0.8rem;
  background-color:rgba(41, 54, 77, 0.87); /* новий колір кнопки */
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #c25360;
    color: white;
    transform: scale(1.05);
  }
`;


const AboutMe = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={myPhoto} alt="Моє фото" />
        <SecondaryImageLink href="http://karmyros.github.io/teamwork-ecommerce/" target="_blank">
          <SecondaryImage src={Logo} alt="Додаткове фото" />
        </SecondaryImageLink>
      </ImageContainer>
      <Content>
        <Title>Про мене</Title>
        <Description>
          Привіт! Мене звати <strong>Іваноглу Лілія</strong>, я — фронтенд-розробниця з пристрастю до коду, дизайну та технологій.
          Люблю створювати зручні та естетичні інтерфейси. Захоплююсь React, JavaScript та розвитком у сфері UI/UX.
        </Description>

        <Section>
          <SectionTitle>Мої проєкти</SectionTitle>
          <ProjectList>
            <ProjectCard>
              <ProjectTitle>Проєкт 1 — HTML + CSS</ProjectTitle>
              <p>Адаптивний лендінг зі зручним дизайном.</p>
              <ProjectLink href="https://github.com/IvanohluLiliia/Soul-Light.git" target="_blank">Переглянути</ProjectLink>
            </ProjectCard>
            <ProjectCard>
              <ProjectTitle>Проєкт 2 — JavaScript</ProjectTitle>
              <p>Інтерактивний ToDo список з фільтрами та збереженням.</p>
              <ProjectLink href="https://github.com/IvanohluLiliia/js-DOM2.git" target="_blank">Переглянути</ProjectLink>
            </ProjectCard>
            <ProjectCard>
              <ProjectTitle>Проєкт 3 — React SPA</ProjectTitle>
              <p>Односторінковий застосунок із роутингом, API та темами.</p>
              <ProjectLink href="https://github.com/IvanohluLiliia/react-router-dom.git" target="_blank">Переглянути</ProjectLink>
            </ProjectCard>
          </ProjectList>
        </Section>
      </Content>
    </Container>
  );
};

export default AboutMe;
