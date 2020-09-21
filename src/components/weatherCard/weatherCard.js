import React from 'react';
import styled  from '@emotion/styled';
import Location from'./Location'
import Icon from'./Icon'
import Condition from './Condition'
import { motion } from 'framer-motion';


const WeatherCard = ({ temp, condition,country,city ,getWeather}) => {
  let highColor = 0; // temp is between 12-60, 255 -0 (green)
  let lowColor = 0;
  let bg = null;

  if (temp >= 40 && temp <= 70)
  {
      highColor = (1 - (temp - 40) / (70 - 40)) * 255;
      lowColor = Math.abs(highColor - 200);
      bg = ` linear-gradient(
        to top,
        rgb(225, ${highColor},0),
        rgb(225, ${lowColor}, 0)
      ); `
  }
  else if (temp >= 12 &&temp <= 40)
  {
       highColor = (1 - (temp - 12) / (60 - 12)) * 255;
        lowColor = Math.abs(highColor - 200);
       bg = ` linear-gradient(
        to top,
        rgb(225, ${highColor},50),
        rgb(225, ${lowColor}, 150)
      ); `
  }
  else //if (temp >=-2 && temp <=12);
  {
    highColor = (1 - (temp + 2) / (12 + 2)) * 255;//12 to -90 degrees
    lowColor = Math.abs(highColor - 200);
    bg = `  linear-gradient(
        to top,
        rgb(0, ${highColor}, 255),
        rgb(0, ${lowColor}, 255)
      ); `
  }

    const Card = styled.div`
      margin: 0 auto;
      background: ${bg};
      width: 200px;
      height: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      border-radius: 15px;
    `;
  return (
    <motion.div
      initial={{  opacity: 0.2 ,scale: 0, y: 100, x: 10 }}
      animate={{ opacity: 1 ,scale: 1, y: 10, x: 20 }}
    >
      <Card>
        <Location getWeather={getWeather} city={city} country={country} />
        <Icon Condition={Condition} />
        <Condition temp={temp} condition={condition} />
      </Card>
    </motion.div>
  );
  }
  
  export default WeatherCard;