// pages/MyFuture.jsx
import styled from 'styled-components';
import meme1 from '../assets/meme1.jpg';
import meme2 from '../assets/meme2.jpg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background}; /* фон змінюється за темою */
  margin: 2rem auto;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.46); /* фон для основного контенту */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  justify-content: space-between;
  animation: slideFadeIn 1.2s ease-out;


  @keyframes slideFadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LeftContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const RightContent = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #893941; /* зміна кольору заголовка */
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  animation: fadeIn 1s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Step = styled.div`
  position: relative;
  padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  background: linear-gradient(135deg,rgba(203, 120, 132, 0.42) 10%,rgba(41, 54, 77, 0.44) 100%);
  color:rgb(30, 30, 30);
  margin-bottom: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: slideIn 0.8s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 15%;
    bottom: 15%;
    width: 6px;
    background-color: #893941;
    border-radius: 4px;
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const StepTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.4rem;
  color: #29364d; /* колір заголовка кроку */
`;

const Text = styled.p`
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #29364d; /* колір тексту */
`;

const Quote = styled.blockquote`
  margin: 2.5rem 0;
  padding: 1.5rem 2rem;
  font-style: italic;
  font-size: 1rem;
  line-height: 1.7;
  position: relative;
  background: ${({ theme }) => theme.blockquoteBackground}; /* фон для цитати */
  border-left: 6px solid #893941; /* лінія зліва */
  color: #29364d; /* колір тексту цитати */
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.2s ease-in-out;

  &::before {
    content: "❝";
    font-size: 3rem;
    position: absolute;
    left: 10px;
    top: -10px;
    color: #893941; /* колір лапок */
    opacity: 0.3;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const DreamJob = styled.p`
  font-weight: 700;
  margin-top: 1.6rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: 'Segoe UI', 'Roboto', sans-serif;
  background: linear-gradient(90deg, #29364d, rgb(180, 80, 95));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 3s infinite ease-in-out;
  color: ${({ theme }) => theme.text}; /* колір тексту для роботи мрії */
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.9;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const MemeGallery = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
`;

const Meme = styled.img`
  width: 100%;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.memeShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.memeHoverShadow};
  }
`;

const MyFuture = () => {
  return (
    <Container>
      <Content>
        <LeftContent>
          <Title>Мій розвиток</Title>
          <Step>
            <StepTitle>1. Отримати досвід у командній розробці</StepTitle>
            <Text>
              Працювати в команді над реальними проєктами, використовувати Git, Agile та кращі практики.
            </Text>
          </Step>

          <Step>
            <StepTitle>2. Вивчити поглиблено TypeScript та Node.js</StepTitle>
            <Text>
              Щоб стати повноцінним full-stack розробником і розширити можливості в бекенді.
            </Text>
          </Step>

          <Step>
            <StepTitle>3. Отримати першу роботу в ІТ-компанії</StepTitle>
            <Text>
              Відчути себе частиною індустрії, розвиватися в оточенні професіоналів та навчатись у менторів.
            </Text>
          </Step>

          <Quote>
            “Щоб досягти мети, треба перш за все йти.” — Оноре де Бальзак
          </Quote>

          <DreamJob>
            Робота мрії — Frontend Developer у компанії, яка створює корисні продукти, де я можу зростати
            як фахівець і людина.
          </DreamJob>
        </LeftContent>

        <RightContent>
          <MemeGallery>
            <Meme src={meme1} alt="Мем 1" />
            <Meme src={meme2} alt="Мем 2" />
          </MemeGallery>
        </RightContent>
      </Content>
    </Container>
  );
};

export default MyFuture;
