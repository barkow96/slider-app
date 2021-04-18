import imgs from "./Images.js";

const Title = ( { number } ) => {

    return(
        <div className="imgTitle">
            {imgs[number].title}
        </div>
    );
}

export default Title;