import { useState, useEffect } from "react";
import imgs from "./components/Images.js";
import Title from "./components/Title.js";
import Image from "./components/Image.js";
import Footer from "./components/Footer.js";
import OptionsBox from "./components/OptionsBox.js";

const getRandomInt = (min,max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random()*(max-min)+min);
}

function App() {
  const imgQuantity = imgs.length;
  const [imageNumber, setImageNumber] = useState(getRandomInt(0,imgQuantity));
  const [isPlaying, setIsPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      let timeout = setTimeout(() => {
        setImageNumber((imageNumber+1) % imgQuantity);
      }, 2000);

      return () => clearTimeout(timeout);  
    };
  }, [imageNumber,isPlaying,imgQuantity]);

  const changePlaying = () => {
    setIsPlaying(!isPlaying);
  }

  const changeSlide = (change) => {
    setIsPlaying(false);

    let newImageNumber;
    switch (change) {
      case "PREVIOUS":
        newImageNumber = imageNumber === 0 ? (imgQuantity-1) : (imageNumber-1);
        setImageNumber(newImageNumber);
        break;

      case "NEXT":
        newImageNumber = imageNumber === (imgQuantity-1) ? 0 : (imageNumber+1);
        setImageNumber(newImageNumber);
        break;

      default: break;
    }
  }

  const randomSlide = () => {
    let randomNb = getRandomInt(0,imgQuantity);

    while (getRandomInt(0,imgQuantity) === imageNumber) {randomNb = getRandomInt(0,imgQuantity);}

    setImageNumber(randomNb);
  }

  const rotateSlide = (side) => {
    const deltaRotation = 2;

    switch (side) {
        case "LEFT": setRotation(prevRotation => prevRotation-deltaRotation); break;
        case "RIGHT": setRotation(prevRotation => prevRotation+deltaRotation); break;
        default: break;
    }
  }

  return (
    <div className="container">
      <header>
        <Title number={imageNumber}/>
      </header>
      <main>
        <Image number={imageNumber} rotation={rotation}/>
        <OptionsBox isPlaying={isPlaying} changePlaying={changePlaying} changeSlide={changeSlide} randomSlide={randomSlide} rotateSlide={rotateSlide}/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;