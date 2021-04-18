import { useEffect, useRef } from "react";
import imgs from "./Images.js";



const Image = ( {number, rotation} ) => {
    const rendersCount = useRef(1);

    useEffect(() => {
        rendersCount.current = rendersCount.current+1;
    }
    );

    let rotationClass = {
        transform: "rotate("+rotation+"deg)"
    }
    
    return (
        <div className="imgContainer">
            <img src={imgs[number].img}  style={rotationClass} alt=""/>
        </div>
    );
}

export default Image;