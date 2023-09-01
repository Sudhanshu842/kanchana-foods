import React from 'react'

const Contact = () => {
    const states = [
        { st: "Andaman and Nicobar Islands",value:"Andaman and Nicobar Islands" },
        { st: "Andhra Pradesh",value:"Andhra Pradesh" },
        { st: "Arunachal Pradesh", value:"Arunachal Pradesh" },
        { st: "Assam", value:"Assam" },
        { st: "Bihar", value:"Bihar" },
        { st: "Chandigarh", value:"Chandigarh" },
        { st: "Chhattisgarh", value:"Chhattisgarh" },
        { st: "Dadra and Nagar Haveli", value:"Dadra and Nagar Haveli" },
        { st: "Daman and Diu", value:"Daman and Diu" },
        { st: "Delhi", value:"Delhi" },
        { st: "Goa", value:"Goa" },
        { st: "Gujarat", value:"Gujarat" },
        { st: "Haryana", value:"Haryana" },
        { st: "Himachal Pradesh", value:"Himachal Pradesh" },
        { st: "Jammu and Kashmir", value:"Jammu and Kashmir" },
        { st: "Jharkhand", value:"Jharkhand" },
        { st: "Karnataka", value:"Karnataka" },
        { st: "Kerala", value:"Kerala" },
        { st: "Ladakh", value:"Ladakh" },
        { st: "Lakshadweep", value:"Lakshadweep" },
        { st: "Madhya Pradesh", value:"Madhya Pradesh" },
        { st: "Maharashtra", value:"Maharashtra" },
        { st: "Manipur", value:"Manipur" },
        { st: "Meghalaya", value:"Meghalaya" },
        { st: "Mizoram", value:"Mizoram" },
        { st: "Nagaland", value:"Nagaland" },
        { st: "Odisha", value:"Odisha" },
        { st: "Puducherry", value:"Puducherry" },
        { st: "Punjab", value:"Punjab" },
        { st: "Rajasthan", value:"Rajasthan" },
        { st: "Sikkim", value:"Sikkim" },
        { st: "Tamil Nadu", value:"Tamil Nadu" },
        { st: "Telangana", value:"Telangana" },
        { st: "Tripura", value:"Tripura" },
        { st: "Uttar Pradesh", value:"Uttar Pradesh" },
        { st: "Uttarakhand", value:"Uttarakhand" },
        { st: "West Bengal", value:"West Bengal" }

    ]
    const bussiness = [
        { type: 'Marketing', value:'Marketing' },
        { type: 'Trading', value:'Trading' },
        { type: 'Distributor', value:'Distributor' },
        { type: 'Other', value:'Other' },

    ]
    const power = [
        { range: '1-10' },
        { range: '10-20' },
        { range: '20-30' },
        { range: '30-40' },
        { range: '40-50' },
        { range: '> 50' },


    ]
    return (
        <div name='Contact' className="h-screen  w-full flex justify-center ">
            <div className=' flex flex-col  justify-center h-[100%] pt-24 mt-40 w-full mx-8 md:mx-16 '>
                <div className='font-bold font-playfair text-xl md:text-3xl mb-4 text-center'>DISTRIBUTORS ENQUIRY FORM <br />
                    <p className="mb-2 text-gray-800 text-lg font-medium font-serif">Looking forward to becoming a distributor?. Share your details here.</p></div>

                <div className=" my-10 flex flex-wrap">

                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-3/12 md:px-3 lg:px-4 bg-gray-100">
                        <h2 className="mb-6 text-2xl font-bold text-center border-b-2">Contact us</h2>
                        <h3 className="mb-6 text-2xl font-bold text-blue-700 font-playfair text-center">KFB Bhojaji Namkeens</h3>
                        <p className="mb-2 text-gray-800">
                            <span className='font-semibold'>Address:</span> Survey No. 569/1, Plot No. A/2, Mouza Bhidi, Tal. Deoli, Wardha. (MH.)-442101.
                        </p>
                        <p className="mb-2 text-gray-800">
                            <span className='font-semibold'>Phone:</span> +91-7768949668
                        </p>
                        <p className="mb-2 text-gray-800">
                            <span className='font-semibold'>Email:</span> info.kanchanfoods@gmail.com
                        </p>

                    </div>
                    <div className="mb-20 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-9/12 md:px-3 lg:px-6  h-[400px] md:h-[500px] overflow-y-scroll flex flex-nowrap shadow-md">
                        <form 
                        action="https://getform.io/f/f843d3d7-3e86-4a96-8f88-5c534172f2be"
                        method='POST'
                        class="w-full max-w-5xl">
                            <p className="mb-2 text-gray-800 font-serif font-semibold">
                                PERSONAL DETAIL
                            </p>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Full-Name*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
                                    name='full-name'
                                    placeholder="Name-Surname " required></input>
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div class="w-[95%] md:w-1/4 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Age*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" 
                                    name='age'
                                    placeholder="xx" required></input>
                                </div>
                                <div class="w-[95%] md:w-1/4 px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Mobile*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" 
                                    name='mobile'
                                    placeholder="+91-xxxxxxxxxx" required></input>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        City/Town/District/Village*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" 
                                    name='city/town/district/village'
                                    placeholder="Nagpur" required></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        State
                                    </label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='client-state' required>

                                            {states.map(({ st, value }) => (
                                                <option value={value}>{st}</option>
                                            ))}
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Pin Code
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="number"
                                    name='pin-code'
                                    placeholder="440001" required></input>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Email id*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" name='email' placeholder="" required></input>
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                            </div>

                            {/* <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Password
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"></input>
                                    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                                </div>
                            </div> */}

                            <p className="mb-2 text-gray-800 font-serif font-semibold">
                                BUSINESS DETAIL
                            </p>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Name Of the Firm*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='name-of-firm' placeholder="" required></input>
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                                <div class="w-[95%] md:w-2/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        Full Address Of the Firm*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name='address-of-firm' placeholder="" required></input>
                                    {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Current Nature Of Business
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text"
                                    name='current-nature-of-business' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        No.of Year Experience in current Business*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="business-experience54772005252" name='age' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Business Type*
                                    </label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='client-business-type' >

                                            {bussiness.map(({ type, value }) => (
                                                <option value={value}>{type}</option>
                                            ))}
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        Annual Turnover
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" name='annual-turnover' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Your Current Business Brief Description of*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='business-description' placeholder=""></input>
                                </div>

                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Infrastructure (Storage Space ,Etc.)
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='infrastructure' placeholder=""></input>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">

                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Vehicle (Type, Model, How Many)
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='vehicale-info' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                        Capacity to Invest*
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" name='investment-capacity' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/3 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                        Existing Manpower/Salesman*
                                    </label>
                                    <div class="relative">
                                        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" name='client-manpower'>

                                            {power.map(({ range, value }) => (
                                                <option value={value}>{range}</option>
                                            ))}
                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-[95%] md:w-1/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Reference By : Name / Agency Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='ref-by-name' placeholder=""></input>
                                </div>
                                <div class="w-[95%] md:w-1/4 px-3 mb-6 md:mb-0">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                                        Reference By : City Name
                                    </label>
                                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" name='ref-by-city' placeholder=""></input>
                                </div>

                            </div>

                            <div class="md:flex md:items-center pb-6">
                                <div class="md:w-1/3"></div>
                                <div class="md:w-2/3">
                                    <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    
                </div>
                <hr class="sm:mx-auto border-gray-700 lg:my-8" />
                <span class="block text-base text-black sm:text-center">© 2023 <a href="kanchanafoods.com" class="hover:underline">KFB-Bhojaji™</a>. All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Contact