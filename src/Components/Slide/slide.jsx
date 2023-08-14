import React, { Component } from 'react';
import { SlideData } from './slidedata';
import './slide.css';
import { useState } from 'react';

function SlideShow () {

        const [current, setCurrent] = useState(0);
        const length = SlideData.length

        const nextSlide = () => {

            setCurrent(current === length - 1 ? 0 : current + 1)

        }

        const prevSlide = () => {

            setCurrent(current === 0 ? length - 1 : current - 1)

        }

        console.log(current);

        if (!Array.isArray(SlideData) || SlideData.length <= 0) {
            return null;
        }

       
        return (
            <div className="slideshow-container">
                
               
                {SlideData.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active':'slide'} key={index}>
                        {index === current && (<img src={slide.image} className="slideshow-img" />)}
                        </div>
                    );       
        })}
    </div>
    );
    }

export default SlideShow;