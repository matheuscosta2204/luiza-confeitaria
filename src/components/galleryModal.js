import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";

import leftArrow from '../media/left-arrow.svg';
import rightArrow from '../media/right-arrow.svg';

const imgs = [
    "https://lh3.google.com/u/0/d/14dnLDyZ9yLX6cZj2l_-xfipyVyPeLstu=w1920-h969-iv1",
    "https://lh3.google.com/u/0/d/1WKDCcKxmqjzb-vTIZr2KMU023nMCoktd=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1SY2ERsol8-wYAmnwoqqe-sq6jbfdeKff=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1Ij6lnFpVUZVO0GMm6FyjCkd8znXCT3ds=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1N-ddPv42VYfWyloVJi_mR0MKDM8jPk17=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1XuGc8qdL5gGqE9AGtAfJfbmOW05HA885=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1x4mAXJZaerwjjBLGg3inRfbO2Rj4R_sE=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1Ecvj4Kt0QDTVyFHZ4vODvUNCLDcY-OYU=w1249-h969-iv1",
    "https://lh3.google.com/u/0/d/1pBCNL8T3jALDkF0Z9SEIQCU-lJ1QAAQ4=w1249-h969-iv1"
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