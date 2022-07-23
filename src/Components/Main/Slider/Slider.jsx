import { Carousel } from 'antd';
import React from 'react';
import './Slider.css'


const contentStyle = {
    minHeight: '764px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
};


export const Slider = () => (
    <Carousel autoplay>
        <div>
            <img src="/images/slider-img/slide1.jpg" alt="slide" className="slider-img"/>
        </div>
        <div>
            <img src="/images/slider-img/slide2.jpg" alt="slide" className="slider-img"/>
        </div>
        <div>
            <img src="/images/slider-img/slide3.jpg" alt="slide" className="slider-img"/>
        </div>
    </Carousel>
);
