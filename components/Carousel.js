import React from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'


export default function Carouselgaleri() {

    return (

        <div className="flex justify-center items-center w-1/2 mx-auto">
            <Carousel>
                <div>
                    <img src="/assets/16.jpeg" />

                </div>
                <div>
                    <img src="/assets/1.jpeg" />

                </div>
                <div>
                    <img src="/assets/2.jpeg" />

                </div>
                <div>
                    <img src="/assets/3.jpeg" />

                </div>
                <div>
                    <img src="/assets/4.jpeg" />

                </div>

                <div>
                    <img src="/assets/5.jpeg" />

                </div>
                <div>
                    <img src="/assets/6.jpeg" />

                </div>
                <div>
                    <img src="/assets/7.jpeg" />

                </div>
                <div>
                    <img src="/assets/8.jpeg" />

                </div>
                <div>
                    <img src="/assets/9.jpeg" />

                </div>
                <div>
                    <img src="/assets/10.jpeg" />

                </div>
                <div>
                    <img src="/assets/11.jpeg" />

                </div>
                <div>
                    <img src="/assets/12.jpeg" />

                </div>
                <div>
                    <img src="/assets/13.jpeg" />

                </div>
                <div>
                    <img src="/assets/14.jpeg" />

                </div>
                <div>
                    <img src="/assets/15.jpeg" />

                </div>

            </Carousel>
            {/* <Carousel images={images} style={{ height: 500, width: 800 }} /> */}
        </div>

    )
}
