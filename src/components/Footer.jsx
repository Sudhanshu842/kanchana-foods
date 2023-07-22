import React from 'react'
// import { Link } from 'react-scroll'


const Footer = () => {
    return (
        <footer class="bg-white rounded-lg shadow m-4 h-60">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                {/* <div class="sm:flex sm:items-center sm:justify-between">

                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 ">
                        <li>
                            <Link to='Home' class="mr-4 hover:underline md:mr-6 cursor-pointer "> Home</Link>
                        </li>
                        <li>
                            <Link to='About' class="mr-4 hover:underline md:mr-6 cursor-pointer "> About</Link>
                        </li>
                        <li>
                            <a href="/" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <Link to='Contact' class="mr-4 hover:underline md:mr-6 cursor-pointer "> Contact</Link>
                        </li>
                    </ul>
                </div> */}
                <hr class="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span class="block text-base text-black sm:text-center">© 2023 <a href="kanchanafoods.com" class="hover:underline">KFB-Bhojaji™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer