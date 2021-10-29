import React , {useState , useEffect} from 'react';

//Source image
import { imageSource } from '../ImgaeSliderSource';

//Style
import './Banner.css';

const Banner = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [isHoverBanner , setHoverBanner] = useState(false);

    const innerType = [
        "inner-left","inner-right","inner-top","inner-bottom"
    ]
    

    const length = imageSource.length;

    useEffect(()=>{
        const timeout = setTimeout(() => {
            nextSlide();
        }, 5000);
        return() => {
            clearTimeout(timeout);
        }
    },[slideIndex])    

    const nextSlide = () => {
        setSlideIndex(slideIndex === length  ? 1 : slideIndex + 1);
    }

    const prevSlide = () => {
        setSlideIndex(slideIndex === 1 ? length : slideIndex - 1);
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const bannerOnFocuseHandler = () => {
        setHoverBanner(!isHoverBanner);
    }

    const innerNumber = Math.floor(Math.random() * (4));

    return (
        <div className="container-slider" onMouseEnter={bannerOnFocuseHandler} onMouseLeave={bannerOnFocuseHandler}>
            {imageSource.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    style={{backgroundImage:`url(${obj.image})`}}>
                        {/* <img 
                        src={obj.image} 
                        /> */}
                        <h1 className={`banner-header inner-left`}>
                            {
                                obj.title
                            }
                        </h1>
                        <p>
                            {
                                obj.detail
                            }
                        </p>
                        <a href="#">
                            {
                                obj.link
                            }
                        </a>
                    </div>
                )
            })}
            
            <button className={`btn-slide prev ${isHoverBanner ? 'banner-hover' : ''}`} type="button" onClick={prevSlide}><i class="fas fa-angle-left"></i></button>
            <button className={`btn-slide next ${isHoverBanner ? 'banner-hover' : ''}`} type="button" onClick={nextSlide}><i class="fas fa-angle-right"></i></button>


            <div className="container-dots">
                {Array.from({length: length}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
};

export default Banner;