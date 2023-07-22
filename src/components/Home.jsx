import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img0 from '../assets/1.png'
import img1 from '../assets/2.png'
import img2 from '../assets/3.png'
import imgm0 from '../assets/main1.png'
import imgm1 from '../assets/main2.png'
import imgm2 from '../assets/main3.png'

const Home = () => {


    return (

        <div  className='h-auto w-full md:-translate-y-32 '>
            <Carousel showArrows={true} showThumbs={false}  showStatus={false} emulateTouch={true} autoFocus={true} autoPlay={true} infiniteLoop={true} interval={2500} className='lg:block hidden'>
                <div>
                    <img src={img2} alt='' />
                </div>
                <div>
                    <img src={img1} alt='' />
                </div>
                <div>
                    <img src={img0} alt='' />
                </div>

            </Carousel>
            <Carousel showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} autoFocus={true} emulateTouch={true} infiniteLoop={true} interval={2500} className='block lg:hidden'>
                <div >
                    <img src={imgm0} alt='' />
                </div>
                <div >
                    <img src={imgm1} alt='' />
                </div>
                <div >
                    <img src={imgm2} alt='' />
                </div>
            </Carousel>

        </div>
    )
}

export default Home