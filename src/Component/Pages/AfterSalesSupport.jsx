import React, { useState } from 'react';
import { motion } from 'framer-motion';

const endUser = "End User";
const systemIntegrator = "System Integrator";
const consultant = "Consultant";
const other = "Other";

const product1 = "Keyer 44 – 4Input x 4Output (non-dante)";
const product2 = "Keyer 88 – 8Input x 8Output (non-dante)";
const product3 = "Keyer 88(dante)";
const product4 = "Keyer 1616(non-dante)";
const product5 = "Keyer 1616(dante)";
const product6 = "PC-1";
const product7 = "Novo Conference System";


const AfterSalesSupport = () => {
    const [selectedProduct, setSelectedProduct] = useState("")
    const [selectedGrade, setSelectedGrade] = useState('');
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        productSerialNo: "",
        date: "",
        bill: "",
        file: "",
        contact: "",


    })

    const handleProductChange = (e) => {
        const selectedProduct = e.target.value;
        setSelectedProduct(selectedProduct);
        setFormData({ ...formData, product: [selectedProduct] });
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form data", formData)
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            productSerialNo: "",
            date: "",
            bill: "",
            file: "",
            contact: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })

    }


    const handleGradeChange = (e) => {
        const selectedGrade = e.target.value;
        setSelectedGrade(selectedGrade);
        setFormData({ ...formData, grade: [selectedGrade] });
    };
    const handleFileChange = (event) => {
        // Handle file changes here
        const selectedFile = event.target.files[0];
        console.log('Selected File:', selectedFile);
    };

    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="bg-black min-h-screen py-20"
        >
            {/* Banner Section */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-cover bg-center h-64 relative"
                style={{ backgroundImage: "url(https://www.erthpot.com/wp-content/uploads/2022/11/sales-support-trouble.png)" }}

            >


                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <div className="text-4xl font-bold text-gray-100 ">
                        After Sales Support & Troubleshooting
                    </div>
                    <div className="mt-5  text-gray-100  text-xs  font-semibold text-center uppercase">
                        HOME /  After Sales Support & Troubleshooting
                    </div>
                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="mt-2 text-center"

            >

                <div>
                    <div className="w-full  p-6 bg-black rounded-md shadow-md md:mt-4">

                        <div className='mx-auto w-[80%]'>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


                                    <div className="mb-4">
                                        <label htmlFor="firstName" className="block   text-gray-100 text-sm font-medium mb-2 text-justify">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="FirstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify"
                                            placeholder="First Name"
                                            required
                                        />
                                    </div>
                                    <div className='mb-4'>
                                        <label htmlFor='lastname' className='block    text-gray-100 text-sm font-medium mb-2 text-justify'>LastName </label>
                                        <input type="text"
                                            id="lastname"
                                            name="lastname"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            required
                                            placeholder='last Name'
                                        />
                                    </div>


                                    <div className="mb-4">
                                        <label htmlFor="email" className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            name="email"
                                            // className="mt-1 p-2 w-full border  outline-none  "
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="phone"  className="block  text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            id="Phone"
                                            name="phone"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            // className="mt-1 p-2 w-full border  outline-none  "
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            placeholder="Phone No.."
                                        />
                                    </div>
                                    {/* Product Line Enrolment * */}
                                    <div className="mb-2">
                                        <label htmlFor="" className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            You are a
                                        </label>
                                        <select
                                            // className="mt-1 p-2 w-full border  outline-none  "
                                            className='w-full p-[8.5px] border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            value={selectedGrade}
                                            onChange={handleGradeChange}
                                        >


                                            <option value={endUser}>End User</option>
                                            <option value={systemIntegrator}>Sysytem Inetigrator</option>
                                            <option value={consultant}>Consultant</option>
                                            <option vlaue={other}>Other</option>


                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor=""  className="block  text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Please Product Your Product
                                        </label>
                                        <select
                                            // className="mt-1 p-2 w-full border  outline-none  "
                                            className='w-full p-[8.5px] border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            value={selectedProduct}
                                            onChange={handleProductChange}
                                        >


                                            <option value={product1}>Keyer 44 – 4Input x 4Output (non-dante)</option>
                                            <option value={product2}>Keyer 88 – 8Input x 8Output (non-dante)</option>
                                            <option value={product3}>Keyer 88(dante)</option>
                                            <option vlaue={product4}>Keyer 1616(non-dante)</option>
                                            <option vlaue={product5}>Keyer 1616(dante)</option>
                                            <option vlaue={product6}>PC-1</option>
                                            <option vlaue={product7}>Novo Conference System </option>

                                        </select>
                                    </div>



                                    <div className="mb-2">
                                        <label htmlFor="location" className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Your Location
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="yourLocation"
                                            onChange={handleChange}
                                            value={formData.location}
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            placeholder="Location.."
                                        />
                                    </div>


                                    <div className="mb-2">
                                        <label htmlFor="productSerialNo"  className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Product Serial No
                                        </label>
                                        <input
                                            type="text"
                                            id="Product Serial No"
                                            name="productSerialNo"
                                            onChange={handleChange}
                                            value={formData.productSerialNo}
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            placeholder="Serial No.."
                                        />
                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="file"  className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            Any invoice or bill you can share
                                        </label>
                                        <input
                                            type="file"
                                            id="file"
                                            name="file"
                                            value={formData.file}
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className='w-full p-[5.2px] border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                        />
                                    </div>

                                    <div class="max-w-md mx-auto">
                                        <h1 class="text-xl font-bold mb-4  text-gray-100">Type of Fault</h1>


                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">No Power in the Unit</span>
                                        </label>
                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">Misbehaving Unit</span>
                                        </label>


                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">Physically Damaged</span>
                                        </label>
                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">Overheating</span>
                                        </label>
                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">Networking Issue</span>
                                        </label>
                                        <label class="flex items-center mb-2">
                                            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-500" />
                                            <span class="ml-2 text-gray-100">Other</span>
                                        </label>



                                    </div>

                                    <div className="mb-2">
                                        <label htmlFor="contact"  className="block    text-gray-100 text-sm font-medium mb-2 text-justify">
                                            How do we contact you ?
                                        </label>
                                        <input
                                            type="text"
                                            id="Contact"
                                            name="contact"
                                            onChange={handleChange}
                                            value={formData.contact}
                                            className='w-full p-2 border border-gray-300  focus:outline-none focus:border-[#00AFAC]  text-justify'
                                            placeholder=""
                                        />
                                    </div>






                                </div>



                                <div className='mt-2'>
                                    {/* <button
                                        type="submit"
                                        className="bg-[#00B0EA]  text-gray-100 px-4 py-2 rounded-md hover:bg-[#2d9f9d] "
                                    >
                                        Submit
                                    </button> */}
                                    <button className='hover:bg-[#00b0ea] hover:duration-700 duration-700 uppercase text-center border-2 border-[#00b0ea] rounded-md px-5  pb-[1px]  mt-6 text-gray-100 font-semibold md:text-xl sm:text-xl'
                                        onClick={handleSubmit}>
                                        Submit</button>


                                </div>

                            </form>


                        </div>

                    </div>
                </div>

            </motion.div>

            <div className="w-[90%] mx-auto">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className=""
                >
                    <p className="mb-4 font-bold text-2xl text-gray-100 text-center">
                        We have got your back.
                    </p>
                    <p className='px-10 text-gray-100'>Erthpot takes complete responsibility for its products and parts-related issues. Let us know how can we make your experience better with us.</p>



                </motion.section>




            </div>
        </motion.div>


    );
};

export default AfterSalesSupport;