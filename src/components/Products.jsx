import React, { useState } from 'react'
import product_img_1 from '../assets/product1.png'
import product_img_2 from '../assets/product2.png'
import product_img_3 from '../assets/product3.png'
import product_img_4 from '../assets/product4.png'
import product_img_5 from '../assets/product5.png'
import prod_img_1 from '../assets/prod_1.png'
import prod_img_2 from '../assets/prod_2.png'
import prodt_img_1 from '../assets/prodt_1.png'
import prodt_img_2 from '../assets/prodt_2.png'
import prodt_img_3 from '../assets/prodt_3.png'
import produ_img_1 from '../assets/produ_1.png'
import produ_img_2 from '../assets/produ_2.png'
import produ_img_3 from '../assets/produ_3.png'
import produ_img_4 from '../assets/produ_4.png'
import produ_img_5 from '../assets/produ_5.png'


const Products = () => {

    const [allCat, setallCat] = useState(true)
    const [prodNamkeen, setprodNamkeen] = useState(true)
    const [prodWafer, setprodWafer] = useState(true)
    const [prodFryrum, setprodFryrum] = useState(true)
    const [prodOther, setprodOther] = useState(true)

    const allcategory = () => {
        setallCat(true)
        setprodNamkeen(true)
        setprodFryrum(true)
        setprodWafer(true)
        setprodOther(true)
    }
    const namkeen = () => {
        setallCat(true)
        setprodNamkeen(true)
        setprodFryrum(false)
        setprodWafer(false)
        setprodOther(false)
    }
    const wafers = () => {
        setallCat(true)
        setprodNamkeen(false)
        setprodFryrum(false)
        setprodWafer(true)
        setprodOther(false)
    }
    const fryrum = () => {
        setallCat(true)
        setprodNamkeen(false)
        setprodFryrum(true)
        setprodWafer(false)
        setprodOther(false)
    }
    const other = () => {
        setallCat(true)
        setprodNamkeen(false)
        setprodFryrum(false)
        setprodWafer(false)
        setprodOther(true)
    }

    const product1 = [
        {
            id: 1,
            title: 'Aloo Bhujia',
            src: product_img_1,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 2,
            title: 'Bikaneri Bhujia',
            src: product_img_2,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 3,
            title: 'Falari Chiwda',
            src: product_img_3,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 4,
            title: 'Khatta Mittha',
            src: product_img_4,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 5,
            title: 'Nylon Sev',
            src: product_img_5,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
    ]

    const product2 = [
        {
            id: 1,
            title: 'Wheels',
            src: prod_img_1,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 2,
            title: 'Pasta',
            src: prod_img_2,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
    ]
    const product3 = [
        {
            id: 1,
            title: 'Classic Salted',
            src: prodt_img_1,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 2,
            title: 'Tangy Tomato',
            src: prodt_img_2,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
        {
            id: 3,
            title: 'Tangy Tomato',
            src: prodt_img_3,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '₹ 10/-',
            weight2: '45gm',
            price3: '₹ 45/-',
            weight3: '250gm',
        },
    ]
    const product4 = [
        {
            id: 1,
            title: 'Gathiya',
            src: produ_img_1,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '',
            weight2: '',
            price3: '',
            weight3: '',
        },
        {
            id: 2,
            title: 'Papdi',
            src: produ_img_2,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '',
            weight2: '',
            price3: '',
            weight3: '',
        },
        {
            id: 3,
            title: 'Masala Sev Murmura',
            src: produ_img_3,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '',
            weight2: '',
            price3: '',
            weight3: '',
        },
        {
            id: 4,
            title: 'Jeera Papad',
            src: produ_img_4,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '',
            weight2: '',
            price3: '',
            weight3: '',
        },
        {
            id: 5,
            title: 'Moong Dal',
            src: produ_img_5,
            price1: '₹ 5/-',
            weight1: '20gm',
            price2: '20% EXTRA',
            weight2: '',
            price3: '',
            weight3: '',
        },
    ]

    // console.log(allCat, prodNamkeen, prodWafer, prodFryrum, prodOther);
    return (
        <div name='Products' className="bg-[url('/src/assets/about_bg.jpg')] bg-center bg-contain md:bg-cover md:-translate-y-28 h-fit sm:h-screen w-full ">
            <div className='max-w-screen-xl mx-auto h-full'>

                <div className="text-center pt-24 mt-4 md:pt-28 pb-8">
                    <h1 className="font-bold font-playfair text-xl md:text-3xl mb-4">"Fuel Your Day with Bhojaji Snacks!"</h1>

                </div>
                <div className="flex items-center justify-center flex-wrap">
                    <button onClick={allcategory} type="button" className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-xs sm:text-sm  font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500">All Products</button>

                    <button onClick={namkeen} type="button" className="text-gray-900 border border-white hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 ">Namkeen</button>
                    <button onClick={wafers} type="button" className="text-gray-900 border border-white hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 ">Wafers</button>
                    <button onClick={fryrum} type="button" className="text-gray-900 border border-white hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 ">Fryums</button>
                    <button onClick={other} type="button" className="text-gray-900 border border-white hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xs sm:text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 ">Other</button>

                </div>

                <section className="w-[80%] h-[100%] mx-auto flex flex-cols-2 lg:flex-cols-4 md:flex-cols-3 gap-y-20 gap-x-14  z-10 flex-nowrap bg-blend-overlay scrolling-touch  overflow-x-scroll items-start snap-mandatory">

                    {allCat && (<>

                        {prodFryrum && (<>
                            {product2.map(({ src, title, id, price1, weight1, price2, weight2, price3, weight3 }) => (
                                <div key={id} className="w-52 sm:w-72 bg-transparent shadow-md rounded-xl duration-500 hover:shadow-gray-500 hover:scale-105 hover:shadow-xl">
                                    <img src={src} alt="Product" class="h-60 md:h-64 w-52 sm:w-72 object-contain rounded-t-xl" />
                                    <div className="px-4 py-3 w-52 sm:w-72 bg-white">
                                        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                                        <div className="flex items-center mx-auto">
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price1}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight1}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price2}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight2}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price3}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2">{weight3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </>
                        )}
                        {prodNamkeen && (<>
                            {product1.map(({ src, title, id, price1, weight1, price2, weight2, price3, weight3 }) => (
                                <div key={id} className="w-52 sm:w-72 bg-transparent shadow-md rounded-xl duration-500 hover:shadow-gray-500 hover:scale-105 hover:shadow-xl">
                                    <img src={src} alt="Product" class="h-60 md:h-64 w-52 sm:w-72 object-contain rounded-t-xl" />
                                    <div className="px-4 py-3 w-52 sm:w-72 bg-white">
                                        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                                        <div className="flex items-center mx-auto">
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price1}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight1}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price2}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight2}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price3}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2">{weight3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>)}

                        {prodWafer && (<>
                            {product3.map(({ src, title, id, price1, weight1, price2, weight2, price3, weight3 }) => (
                                <div key={id} className="w-52 sm:w-72 bg-transparent shadow-md rounded-xl duration-500 hover:shadow-gray-500 hover:scale-105 hover:shadow-xl">
                                    <img src={src} alt="Product" class="h-60 md:h-64 w-52 sm:w-72 object-contain rounded-t-xl" />
                                    <div className="px-4 py-3 w-52 sm:w-72 bg-white">
                                        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                                        <div className="flex items-center mx-auto">
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price1}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight1}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price2}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight2}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price3}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2">{weight3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </>
                        )}


                        {prodOther && (<>
                            {product4.map(({ src, title, id, price1, weight1, price2, weight2, price3, weight3 }) => (
                                <div key={id} className=" w-52 sm:w-72 bg-transparent shadow-md rounded-xl duration-500 hover:shadow-gray-500 hover:scale-105 hover:shadow-xl">
                                    <img src={src} alt="Product" class="h-60 md:h-64 w-52 sm:w-72 object-contain rounded-t-xl" />
                                    <div className="px-4 py-3 w-52 sm:w-72 bg-white">
                                        <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
                                        <div className="flex items-center mx-auto">
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price1}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight1}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price2}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2 pr-2">{weight2}</p>
                                            </div>
                                            <div className=' mx-auto'>
                                                <p className="text-lg font-semibold text-black cursor-auto my-auto">{price3}</p>
                                                <p className="text-base text-gray-600 cursor-auto ml-2">{weight3}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </>
                        )}

                    </>
                    )}
                </section>
            </div>
        </div>
    )
}

export default Products