import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";
import image6 from "../img/6.jpg";

const Test = weath => {
  if (weath === "Rain") {
    return image3;
  } else if (weath === "Clouds") {
    return image2;
  } else if (weath === "Clear") {
    return image6;
  } else if (weath === "Thunderstorm") {
    return image4;
  } else if (weath === "Snow") {
    return image5;
  } else {
    return image2;
  }
};

export default Test;
