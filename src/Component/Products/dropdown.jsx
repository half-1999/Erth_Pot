// import React, { useState } from 'react';
// import './drop.css'
// // const race = ['Azure Female', 'Iron Dwarf','Highborn Human', 'Lowland Human', 'Mountain Dwarf', 'Scythian Elf', 'Woodland Elf'];
// const race = ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugiat delectus vitae ea. Nobis temporibus iste vel, voluptate placeat aspernatur, nulla libero facilis eius pariatur ducimus vero quam neque doloribus, deserunt blanditiis alias dignissimos odio repudiandae illo dolorem sequi laboriosam! Nisi ullam beatae corrupti fugit non voluptatem quos perferendis tenetur veritatis, dolore aut, maxime ad officiis? Veniam sit recusandae consequuntur, perspiciatis esse nostrum, porro facere deleniti, dolorem debitis ab? Sequi porro possimus amet soluta a reiciendis nam, animi recusandae rerum fugit ut temporibus voluptates quo dignissimos doloribus aliquid nesciunt voluptatibus, commodi sint consequuntur repellat mollitia. Maiores ratione architecto asperiores voluptas!"
// ];

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [haveText, setHaveText] = useState('');

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleText = (ev) => {
//     setHaveText(ev.currentTarget.textContent);
//   };

//   const itemList = race.map((item) => (
//     <div
//       onClick={handleText}
//       className="dropdown__item"
//       key={item.toString()}
//     >
//       {item}
//     </div>
//   ));

//   return (
//     <div className={isOpen ? 'dropdown active' : 'dropdown'} onClick={handleClick}>
//       <div className="dropdown__text w-full b-red-500">
//         {!haveText ? 'Select Race' : haveText}
//       </div>
//       <div className="dropdown__items">{itemList}</div>
//     </div>
//   );
// };

// export default Dropdown;

// import React, { useState } from 'react';
// import './drop.css';

// const Dropdown = ({ options }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [haveText, setHaveText] = useState('');

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleText = (ev) => {
//     // setHaveText(ev.currentTarget.textContent);
//   };

//   const itemList = options.map((item) => (
//     <div
//       onClick={handleText}
//       className="dropdown__item"
//       key={item.toString()}
//     >
//       {item}
//     </div>
//   ));

//   return (
//     <div className={isOpen ? 'dropdown active' : 'dropdown'} onClick={handleClick}>
//       <div className="dropdown__text w-full b-red-500">
//         {!haveText ? 'Select Race' : haveText}
//       </div>
//       <div className="dropdown__items">{itemList}</div>
//     </div>
//   );
// };

// const dropdown = () => {
//   const raceOptions1 = ['Azure Female', 'Iron Dwarf', 'Highborn Human'];
//   const raceOptions2 = ['Lowland Human', 'Mountain Dwarf', 'Scythian Elf'];
//   const raceOptions3 = ['Woodland Elf', 'Another Option1', 'Another Option2'];

//   return (
//     <div>
//       <Dropdown options={raceOptions1} />
//       <Dropdown options={raceOptions2} />
//       <Dropdown options={raceOptions3} />
//     </div>
//   );
// };

// export default dropdown;

// import React, { useState } from 'react';
// import './drop.css';

// const Dropdown = ({ options, defaultText }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [haveText, setHaveText] = useState('');

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleText = (ev) => {
//     // setHaveText(ev.currentTarget.textContent);
//   };

//   const itemList = options.map((item) => (
//     <div
//       onClick={handleText}
//       className="dropdown__item"
//       key={item.toString()}
//     >
//       {item}
//     </div>
//   ));

//   return (
//     <div className={isOpen ? 'dropdown active' : 'dropdown'} onClick={handleClick}>
//       <div className="dropdown__text w-full b-red-500">
//         {!haveText ? defaultText : haveText}
//       </div>
//       <div className="dropdown__items text-gray-100 ">{itemList}</div>
//     </div>
//   );
// };

// const App = () => {
//   const raceOptions1 = ['NCS110-CU is the central controller unit of Novo Conference System which powers, manages and controls the whole conference system. The latest microprocessor chip automatically detects the number of units connected, current conference mode, controls cameras connected to it and many other functions which are required in a modern-day conference room. It’s built in Audio Gain Processing circuit prevents unnecessary feedback and improves the vocal intelligibility of the room. Everything functions and parameter in this unit can be easily accessed through the front OLED display which shows the microphone status, operating mode, number of active speakers etc. Housed in a pressed steel body with 1RU size NCS110-CU is designed based on “everything built into hardware” where the complete system is made to run like an appliance without much technical support required.'];
//   const raceOptions2 = [
//     '4 kinds of conference mode selection: FIFO, Automatic (with limiting time), Request and Sound activated.',
//    'The central controller can select the number of speakers, and active 2/3/4 microphones simultaneously',
//    'Support camera tracking, through the serial port RS-232 or RS-422 communication protocol, controls up to 4 cameras, compatible with VISCA, PELCO-D, and PELCO-P 3 kinds of camera control code protocol.',
// 'With 4 Video inputs and 1 output port, SD and HD SDI video inputs and outputs are supported.',
// 'Supports Dante digital output, flexible to connect with various Dante enabled solutions.',
// 'With automatic gain audio processing circuit, prevent feedback effectively and improve the clarity of the whole system.',
// 'It is easy to expand and change the configuration. the central controller connects upto 40 microphones units. If connect the NEB-124W can connect upto 110 microphone units.',
// 'With aux input and output you can plug external audio sources to add multiple functionality like recording, PA/Music inclusion etc.',

// ];
//   const raceOptions3 = [
//     'Number of microphones supported: 110',
//      'Maximum Power consumption:100W/24V',
//      'XLR balances carnon maximum output level:14.6dBu'];

//   return (
//     <div>
//       <Dropdown options={raceOptions1} defaultText="Description" />
//       <Dropdown options={raceOptions2} defaultText="Key Features" />
//       <Dropdown options={raceOptions3} defaultText="Technical Specifications" />
//     </div>
//   );
// };

// export default App;

import React, {useState} from "react";
import "./drop.css";
const Dropdown = () => {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

    return (
        <>
            <div
                className={isOpen1 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen1(!isOpen1);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Description</div>
                <div className="dropdown__items group-focus:block text-gray-100 px-4">
                    The NCS-5C is a desktop base discussion microphone unit designed as a chairman microphone for Novo
                    Conference System. The microphone unit is engineered in high-quality aluminum alloy die cast
                    housing. The chairman microphone connects to the NCS-110 central control unit via network category 5
                    cable. The unit includes a shotgun Gooseneck microphone with a cardioid unidirectional pickup
                    capsule. The microphone comes with an illuminating ring at the bottom which indicates the active
                    status. The chairman unit prioritizes itself over all other delegate units via override button.
                </div>
            </div>
            <div
                className={isOpen2 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen2(!isOpen2);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Key Features</div>
                <div className="dropdown__items text-gray-100 px-4">
                    <ul className="px-4">
                        <li className="list-disc">
                            Wire Integrated Gooseneck microphone with cardioid pickup capsule which provides clear and
                            full sound quality, high sensitivity, and a good long-distance pick-up effect.
                        </li>
                        <li className="list-disc">Speaking status indicator: red when mute, green when speaking.</li>
                        <li className="list-disc">Convenient loop through cabling via standard cat5 category.</li>
                        <li className="list-disc">In-built mute button with status led.</li>
                        <li className="list-disc">Aluminum finished metallic die-cast body.</li>
                    </ul>
                </div>
            </div>
            <div
                className={isOpen3 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen3(!isOpen3);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Technical Specifications</div>
                <div className="dropdown__items group-focus:block text-gray-100 px-4">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-gray-100 dark:bg-gray-800">
                                        Polar pattern:
                                    </th>
                                    <th scope="col" class="px-6 py-3 text-gray-100">
                                        Cardioid Condenser
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium  whitespace-nowrap text-gray-100 dark:text-white dark:bg-gray-800"
                                    >
                                        Polar pattern:
                                    </th>
                                    <td class="px-6 py-4">Cardioid Condenser</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium  whitespace-nowrap  text-gray-100 dark:text-white dark:bg-gray-800"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Google Pixel Phone
                                    </th>
                                    <td class="px-6 py-4">Gray</td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Apple Watch 5
                                    </th>
                                    <td class="px-6 py-4">Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div
                className={isOpen4 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen4(!isOpen4);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Download</div>
                <div className="dropdown__items text-gray-100">
                    <ul className="px-4">
                        <li className="">NCS 110CU Datasheet</li>
                        <li className="">NCS Quick Installation Guide</li>
                    </ul>
                </div>
            </div>
            <div
                className={isOpen5 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen5(!isOpen5);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Key features</div>
                <div className="dropdown__items group-focus:block text-gray-100">
                    <li className="list-disc">
                        4 kinds of conference mode selection: FIFO, Automatic (with limiting time), Request and Sound
                        activated.
                    </li>
                    <li className="list-disc">
                        The central controller can select the number of speakers, and active 2/3/4 microphones
                        simultaneously.
                    </li>
                </div>
            </div>
            <div
                className={isOpen6 ? "dropdown active" : "dropdown"}
                onClick={() => {
                    setIsOpen6(!isOpen6);
                }}
            >
                <div className="dropdown__text w-full b-red-500 uppercase">Technical Specifications</div>
                <div className="dropdown__items text-gray-100">
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            {/* <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-gray-100 dark:bg-gray-800">
                Polar pattern:
                </th>
                <th scope="col" class="px-6 py-3 text-gray-100">
                Cardioid Condenser
                </th>
               
            </tr>
        </thead> */}
                            <tbody>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium  whitespace-nowrap text-gray-100 dark:text-white dark:bg-gray-800"
                                    >
                                        Polar pattern:
                                    </th>
                                    <td class="px-6 py-4">Cardioid Condenser</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium  whitespace-nowrap  text-gray-100 dark:text-white dark:bg-gray-800"
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">White</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">Black</td>
                                </tr>
                                <tr class="border-b border-gray-200 dark:border-gray-700">
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Google Pixel Phone
                                    </th>
                                    <td class="px-6 py-4">Gray</td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        class="px-6 py-4 font-medium text-gray-100 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                                    >
                                        Apple Watch 5
                                    </th>
                                    <td class="px-6 py-4">Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
