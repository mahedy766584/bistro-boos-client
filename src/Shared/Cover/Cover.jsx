import { Parallax } from 'react-parallax';

// eslint-disable-next-line react/prop-types
const Cover = ({ menuImg, title }) => {
    return (
        <div>

            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={menuImg}
                bgImageAlt="the menu"
                strength={-200}
            >
                <div className="hero h-[500px]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;