import React from 'react'
import tastelogo from '../assets/taste_logo.png'
export const About = () => {
    return (

        <div name='About' className="bg-[url('/src/assets/about_bg.jpg')] bg-top bg-contain md:bg-cover md:-translate-y-28 h-screen  w-full flex justify-center">
            <div className=' flex flex-col  justify-center max-w-7xl h-[80%]  pt-10 mt-10 '>
                <div className='font-bold font-playfair text-xl md:text-4xl mb-4 text-center'>About</div>
                
                <div className='mx-10 text-center text-base sm:text-lg md:text-2xl items-center flex flex-col'>It's always snacks time with <span className='font-playfair '>BHOJAJI!</span>
                    <br />
                    KFB Bhojaji has over 45 to 56 products. Our product range includes traditional namkeens, snacks , wafers, fryums and sweets. The Company also produces gram flour (besan) and gram pulses(chana dal). KFB Bhojaji offers a wide range of healthy and fresh namkeens. Enjoy the taste of different flavours like spicy, khatta, tangy and tasty namkeens. Our taste your trust is our believe <br />
                    <br />
                    <img className="h-24 md:h-28 w-auto items-center justify-center flex" src={tastelogo}  alt="THE TRUST OF YOUR TASTE"></img>
                    </div>
            </div>
        </div>

    )
}
