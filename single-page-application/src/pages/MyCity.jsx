import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaSun, FaCloudRain } from 'react-icons/fa';
import mariupol1 from '../assets/mariupol1.jpg';
import mariupol2 from '../assets/mariupol2.jpg';
import mariupol3 from '../assets/mariupol3.jpg';

const Container = styled.div`
  padding: 2rem;
  width: 90%;
  max-width: 900px;
  margin: 4rem auto;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.46);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
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

const Title = styled.h1`
  color: #893941;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Divider = styled.hr`
  border: none;
  height: 2px;
  width: 60%;
  margin: 0 auto 2rem;
  background-color: #cb7885;
  opacity: 0.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #2e2e2e;
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 2rem;
  animation: fadeInText 2s ease-in-out;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  @keyframes fadeInText {
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

const WeatherBlock = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${props => (props.isSunny ? 'rgba(242, 214, 74, 0.61)' : ' #5e6623')};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-out;
`;

const WeatherItem = styled.p`
  margin: 0.4rem 0;
  color:rgb(43, 42, 45) ;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const WeatherIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => (props.isSunny ? ' #f39c12' : ' #a4a4a4')};
`;

const MyCity = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Mariupol&appid=26cf2dd60d08a137637deb84533f118c&units=metric&lang=uk`
        );
        
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error('Помилка при отриманні погоди:', error);
      }
    };
  
    fetchWeather();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const isSunny = weather && weather.weather && weather.weather[0]?.main === 'Clear';

  return (
    <Container>
      <Title>Моє місто — Маріуполь</Title>

      <Divider />
      <Slider {...sliderSettings}>
        <div><CarouselImage src={mariupol1} alt="Маріуполь 1" /></div>
        <div><CarouselImage src={mariupol2} alt="Маріуполь 2" /></div>
        <div><CarouselImage src={mariupol3} alt="Маріуполь 3" /></div>
      </Slider>

      <Description>
        Маріу́поль — українське місто, розташоване на березі теплого Азовського моря, одне з найбільших портових міст в Україні.
        Історія Маріуполя сягає XVIII століття, і протягом століть місто стало важливим індустріальним, економічним та культурним осередком.
        Сьогодні воно відоме своїми металургійними підприємствами, у тому числі найбільшим комбінатом «Азовсталь», а також розвиненою інфраструктурою і туристичними принадами.
        <br /><br />
        Місто має стратегічне значення, оскільки є важливим транспортним вузлом на південному сході України, а також важливим портом для міжнародної торгівлі.
        Природа Маріуполя заворожує: тепле Азовське море, багаті на рибу водойми та красиві пляжі створюють атмосферу відпочинку і гармонії.
        <br /><br />
        Маріуполь також славиться своєю архітектурною спадщиною. Місто було побудоване у стилі неокласицизму та має безліч красивих будівель, таких як Театр ім. Шевченка, набережна та інші визначні місця.
        Тут збереглися пам'ятки, які свідчать про багатокультурну історію міста, адже у ньому переплелися українські, грецькі, тюркські та слов'янські традиції.
        <br /><br />
        Однією з основних переваг Маріуполя є його клімат. М'який морський клімат робить це місто комфортним для життя протягом більшої частини року.
        Зараз, після періоду складних випробувань, Маріуполь має великий потенціал для розвитку, відновлення туризму та культурних індустрій.
      </Description>

      {weather && weather.weather && (
        <WeatherBlock isSunny={isSunny}>
          <WeatherIcon isSunny={isSunny}>
            {isSunny ? <FaSun /> : <FaCloudRain />}
          </WeatherIcon>
          <WeatherItem>Температура: {weather.main?.temp}°C</WeatherItem>
          <WeatherItem>Опис: {weather.weather[0]?.description}</WeatherItem>
          <WeatherItem>Координати: {weather.coord?.lat}, {weather.coord?.lon}</WeatherItem>
          <WeatherItem>Місто: {weather.name}, {weather.sys?.country}</WeatherItem>
        </WeatherBlock>
      )}
    </Container>
  );
};

export default MyCity;
