import loadingAnimation from "../../../public/loadingAnimation.json" 
import Lottie from "lottie-react";

const LoadingAnimation = () => {
    return (
        <div className="h-screen mx-auto bg-white flex justify-center items-center">
            <Lottie style={{
                width: "200px",
                height: "200px"
            }} animationData={loadingAnimation}/>
        </div>
    );
};

export default LoadingAnimation;