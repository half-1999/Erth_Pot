import React, { useState } from 'react';
import { motion } from 'framer-motion';

const endUser = "End User";
const systemIntegrator = "System Integrator";
const consultant = "Consultant";
const other = "Other";

const appliction1 = "Conference Room";
const appliction2 = "Auditorium";
const appliction3 = "Classroom";
const appliction4 = "Restaurant";



const DesignSolution = () => {
const [selectedApplication, setSelectedAppliction] = useState('');

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        location:"",
        phone: "",
        file: "",
    })

    const handleFileChange = (event) => {
        // Handle file changes here
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data", formData)
        setFormData({
        firstName: "",
        lastName: "",
        location:"",
        phone: "",
        file: "",
        })
    }
    const [selectedYouAre, setSelectedYouAre] = useState('')
    const handleYouAreChange = (e) => {
        const selectedYouAre = e.target.value;
        setSelectedYouAre(selectedYouAre);
        setFormData({ ...formData, youAre : [selectedYouAre] });
    };

    const handleApplictionChange = (e) => {
        const selectedAppliction = e.target.value;
        setSelectedAppliction(selectedAppliction);
        setFormData({ ...formData, appliction : [selectedAppliction] });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <motion.div

            initial="hidden"
            animate="visible"
            className="bg-black min-h-screen py-20">

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-cover bg-center h-64 relative"
                style={{ backgroundImage: `url("https://www.erthpot.com/wp-content/uploads/2022/11/hand-man-with-light-bulb-graphics-virtual-screen-concept-idea-education-innovation.jpg") `}}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl font-bold text-gray-100">
                        Design & Solution
                    </div>
                    <div className="mt-5  text-gray-100  text-xs  font-semibold text-center">
                        HOME / DESIGN SOLUTION
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className='mt-2 text-center'
            >

                <div className="w-full p-6 bg-black rounded-md shadow-md md:mt-4 ">
                    <div className="mx-auto w-[80%]">

                        <form onSubmit={handleSubmit}>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify">
                                        First Name 
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="FirstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full p-2 border  border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify"
                                        placeholder='First Name..'
                                        required

                                    />
                                </div>
                                <div className='mb-4'>
                                    <label htmlFor='lastname' className='block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify'>
                                        Last Name 
                                    </label>
                                    <input type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full p-2 border  border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify"
                                        placeholder='Last Name..'
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className="block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify">
                                        You are a 
                                    </label>
                                    <select
                                        className="w-full p-2 border  border-gray-300  outline-none  "
                                        value={selectedYouAre}
                                        onChange={handleYouAreChange}
                                    >


                                        <option value={endUser}>End User</option>
                                        <option value={systemIntegrator}>Sysytem Inetigrator</option>
                                        <option value={consultant}>Consultant</option>
                                        <option vlaue={other}>Other</option>


                                    </select>
                                </div>
                                

                                <div className="mb-2">
                                    <label htmlFor="" className="block font-sans text-gray-100 text-sm font-medium mb-2 text-justify">
                                        Application 
                                    </label>
                                    <select
                                        className="mt-1 p-2 w-full border  outline-none "
                                        value={selectedApplication}
                                        onChange={handleApplictionChange}
                                    >


                                        <option value={appliction1}>Conference Room</option>
                                        <option value={appliction2}>Auditorium</option>
                                        <option value={appliction3}>Classroom</option>
                                        <option vlaue={appliction4}>Restaurant</option>
                                        <option value={other}>Other</option>


                                    </select>
                                </div>
                           

                                <div className='mb-2'>
                                    <label htmlFor="phone" className='block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify'>Location </label>
                                    <input type="text"
                                        id="location"
                                        name="Location"
                                        onChange={handleChange}
                                        value={formData.location}
                                        className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                        placeholder='Location..'
                                        required
                                    />
                                </div>
                              
                                <div className='mb-2'>
                                    <label htmlFor="phone" className='block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify'>Phone </label>
                                    <input type="number"
                                        id="phone"
                                        name="Phone"
                                        onChange={handleChange}
                                        value={formData.phone}
                                        className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                        placeholder='Phone No..'
                                        required
                                    />
                                </div>
                               
                                <div className="mb-2">
                                    <label htmlFor="file" className="block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify">
                                        Any drawing you would like to share with us 
                                    </label>
                                    <input
                                        type="file"
                                        id="file"
                                        name="file"
                                        value={formData.file}
                                        accept=".pdf"
                                        onChange={handleFileChange}
                                        className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00B0EA]  text-justify'
                                    />
                                </div>




                                <div className="mb-4">
                                    <label htmlFor="message" className="block font-sans  text-gray-100 text-sm font-medium mb-2 text-justify">
                                        Please elaborate your requirement 
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="1"
                                        className="w-full p-2 border border-gray-300   focus:outline-none focus:border-blue-500"
                                        required
                                    ></textarea>
                                </div>




                            </div>
                            <div className='mt-2'>

                              
                                <button className='hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'
                                onClick={handleSubmit}>
                                Submit</button>
                            </div>

                        </form>

                    </div>

                    <motion.div>
                        <div className='w-full bg-black p-2'>
                            <div className="w-[90%] mx-auto py-8 ">
                                <p className='mb-4 font-bold text-2xl text-gray-100 text-center '>We assure you that we commit as much as you do for your customers.</p>
                                <p className=' text-lg text-justify text-gray-100'>We know how important it is to be correct right at the design stage.
                                    Clearly understanding and laying down the client’s requirements is the first and foremost requirement in any technical solution. We assure you that we commit as much as you do for your customers to ensure that the final results are more than satisfactory.
                                    We would love to help you design the right solution for your client. Would you like to give some information about the project you are working on?</p>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

        </motion.div>
    )

}
export default DesignSolution;