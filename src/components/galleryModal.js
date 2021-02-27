import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";

import leftArrow from '../media/left-arrow.svg';
import rightArrow from '../media/right-arrow.svg';

const imgs = [
    "/assets/images/bolo0.jpg",
    "/assets/images/bolo1.jpg",
    "/assets/images/bolo2.jpg",
    "/assets/images/bolo3.jpg",
    "/assets/images/bolo4.jpg",
    "/assets/images/bolo5.jpg",
    "/assets/images/bolo6.jpg",
    "/assets/images/bolo7.jpg",
    "/assets/images/bolo8.jpg",
    "/assets/images/bolo9.jpg"
]

const Slide = ({ url, index, next, prev, ...props }) => {
    return (
      <div  className="slide-box">
        <div className="prev" onClick={prev}>
            <img src={leftArrow} alt="leftArrow" width={40} />
        </div>
        <img src={url} alt={`bolo${index}`} className="slide-img" />
        <div className="next" onClick={next}>
            <img src={rightArrow} alt="rightArrow" width={40} />
        </div>
      </div>
    );
}

const GalleryModal = ({ isOpen, closeModal }) => {

    useEffect(() => {
        if(isOpen) {
            imgRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isOpen]);

    let slider = useRef(null);
    let imgRef = useRef(null);

    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
    };

    const next = () => {
        slider.slickNext();
    }
    const previous = () => {
        slider.slickPrev();
    }

    if(isOpen) {
        return (
            <div className="gm-background">
                <div className="gm-shadow" onClick={closeModal} />
                <div className="gm-container" ref={imgRef}>
                    <Slider {...settings} ref={ref => (slider = ref)}>
                        {imgs.map((img, index) => (
                            <Slide key={index} index={index} url={img} next={next} prev={previous} />
                        ))}
                    </Slider>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default GalleryModal;