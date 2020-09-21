import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
    
  const Icon = styled.img `
    width: 40%;
    height: 30%;
  `
     var icon = "";
     switch (props.condition) {
       case "Clouds":
         icon = `./img/clouds.png`;
        break;
       case "Clear":
         icon = `./img/clear.png`;
         break;
       case "Haze":
         icon = `./img/haze.png`;
         break;
       case "Hail":
         icon = `./img/hail.png`;
         break;
       case "Fog":
         icon = `./img/fog.png`;
         break;
       case "Tornado":
         icon = `./img/tornado.png`;
         break;
       case "Dust":
         icon = `./img/Dust.png`;
         break;
       case "Mist":
         icon = `./img/mist.png`;
         break;
       case "Snow":
         icon = `./img/snow.png`;
         break;
       case "Rain":
         icon = `./img/rain.png`;
         break;
       case "Drizzle":
         icon = `./img/rain.png`;
         break;
       case "Thunderstorm":
         icon = `./img/thunderstrom.png`;
         break;
       default:
         icon = ` ./img/default.png`;
         break;
         
     }
    
    return (
      <Icon
            src={icon}
            alt="weather image"
        width="100"
        height="100"
      ></Icon>
    );
};
 export default Icon;
