import { FaStopCircle } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaRandom } from "react-icons/fa";
import { FaCircleNotch } from "react-icons/fa";

const OptionsBox = ( {isPlaying, changePlaying, changeSlide, randomSlide, rotateSlide} ) => {

    const size = 75;
    let DynamicImage = isPlaying ? FaStopCircle : FaArrowAltCircleRight;

    return (
        <div className="optionsContainer">
            <div className="option" onClick={()=>rotateSlide("LEFT")}><FaCircleNotch size={size}/></div>
            <div className="option" onClick={()=>changeSlide("PREVIOUS")}><FaAngleDoubleLeft size={size}/></div>
            <div className="option" onClick={changePlaying}><DynamicImage size={size}/></div>
            <div className="option" onClick={()=>changeSlide("NEXT")}><FaAngleDoubleRight size={size}/></div>
            <div className="option" onClick={()=>rotateSlide("RIGHT")}><FaCircleNotch size={size}/></div>
            <div className="option" onClick={()=>randomSlide()}><FaRandom size={size}/></div>
        </div>
    );
}

export default OptionsBox;