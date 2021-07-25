import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition";

function PresenterWanted() {
    const [tab, setTab] = useState(1);

    const tabs = useRef(null);

    const heightFix = () => {
        if (tabs.current.children[tab]) {
            tabs.current.style.height =
                tabs.current.children[tab - 1].offsetHeight + "px";
        }
    };

    useEffect(() => {
        heightFix();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tab]);

    return (
        <section className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div
                className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
                aria-hidden="true"
            ></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4 text-4xl">Information</h1>
                        <p className="text-xl text-gray-600">
                            “Penawaran”
                        </p>
                    </div>

                    {/* Section content */}
                    <div className="md:grid md:grid-cols-12 md:gap-6">
                        {/* Content */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
                            data-aos="fade-right"
                        >
                            <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                                <h3 className="h3 mb-3 font-semibold text-2xl">Penawaran</h3>
                                <p className="text-xl text-gray-600">
                                    Bersama surat ini kami lampirkan penawaran biaya untuk pekerjaan pelayanan
                                    transportasi pada Event PON XX Tahun 2021 di Papua dengan perincian harga sebagai
                                    berikut :

                                </p>
                            </div>
                            {/* Tabs buttons */}
                            <div className="mb-8 md:mb-0">
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(1);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Alphard
                                        </div>
                                        {/* <div className="text-gray-600">
                        <p> Type Pelayanan : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p>
                    </div> */}
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(2);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Fortuner / Pajero
                                        </div>
                                        <div className="text-gray-600">
                                            {/* <p> Harga Dasar : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p> */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </div>
                                </a>
                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(3);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Innova
                                        </div>
                                        <div className="text-gray-600">
                                            {/* <p> Harga Dasar : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p> */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z"
                                                fill="#191919"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(4);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            Lainnya
                                        </div>
                                        <div className="text-gray-600">
                                            {/* <p> Harga Dasar : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p> */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(5);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            DOUBLE CABIN
                                        </div>
                                        <div className="text-gray-600">
                                            {/* <p> Harga Dasar : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p> */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </a>

                                <a
                                    className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 6
                                        ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                                        : "bg-gray-200 border-transparent"
                                        }`}
                                    href="#0"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTab(6);
                                    }}
                                >
                                    <div>
                                        <div className="font-bold leading-snug tracking-tight mb-1">
                                            TRUCK
                                        </div>
                                        <div className="text-gray-600">
                                            {/* <p> Harga Dasar : Rp. 5.000.000</p>
                        <p> Asuransi    : Rp. 150.000</p>
                        <p> Pajak 12%   : Rp. 800.000</p>
                        <p> Cadangan    : Rp. 100.000</p>
                        <p> Laba        : Rp. 650.000</p>
                        <p>Total        : Rp. 6.700.000</p> */}
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                                        <svg
                                            className="w-3 h-3 fill-current"
                                            viewBox="0 0 12 12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                                        </svg>
                                    </div>
                                </a>


                            </div>
                        </div>

                        {/* Tabs items */}
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="zoom-y-out"
                            ref={tabs}
                        >
                            <div className="relative flex flex-col text-center lg:text-right  mt-20">
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/alphard.jpg"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />
                                        <h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300">T1/MPV Premium</td>
                                                    <td className="border border-gray-300">Toyota Alpard</td>
                                                    <td className="border border-gray-300">2500-3500 cc</td>
                                                    <td className="border border-gray-300">2011-2014</td>
                                                    <td className="border border-gray-300">Rp. 5.500.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1/MPV Premium</td>
                                                    <td className="border border-gray-300">Toyota Alpard</td>
                                                    <td className="border border-gray-300">2500-3500 cc</td>
                                                    <td className="border border-gray-300">2015-2021</td>
                                                    <td className="border border-gray-300">Rp. 6.000.000</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Transition>
                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/pajero.png"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />

                                        <h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Toyota Fortuner </td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2010-2014</td>
                                                    <td className="border border-gray-300">Rp. 2.150.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Toyota Fortuner</td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2015-2018</td>
                                                    <td className="border border-gray-300">Rp. 2.400.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Toyota Fortuner</td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2019-2021</td>
                                                    <td className="border border-gray-300">Rp. 3.000.000
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Mitsubishi Pajero</td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2010-2014</td>
                                                    <td className="border border-gray-300">Rp. 2.150.000</td>

                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Mitsubishi Pajero</td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2015-2018</td>
                                                    <td className="border border-gray-300">Rp. 2.400.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T1 / MEDIUM SUV</td>
                                                    <td className="border border-gray-300">Mitsubishi Pajero</td>
                                                    <td className="border border-gray-300">2500 cc</td>
                                                    <td className="border border-gray-300">2019-2021</td>
                                                    <td className="border border-gray-300">Rp. 3.000.000</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </Transition>
                                {/* Item 3 */}
                                <Transition
                                    show={tab === 3}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/innova.png"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />

                                        <h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300"> T1 / MPV</td>
                                                    <td className="border border-gray-300">Toyota Innova Reborn </td>
                                                    <td className="border border-gray-300">2000-2500 cc</td>
                                                    <td className="border border-gray-300">2016-2021 </td>
                                                    <td className="border border-gray-300">Rp. 1.800.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300"> T2 / MPV</td>
                                                    <td className="border border-gray-300">Toyota Innova </td>
                                                    <td className="border border-gray-300">2000 cc</td>
                                                    <td className="border border-gray-300">2010-2014</td>
                                                    <td className="border border-gray-300">Rp. 1.500.000</td>
                                                </tr>


                                            </tbody>
                                        </table>

                                    </div>
                                </Transition>
                                <Transition
                                    show={tab === 4}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/avanza.jpeg"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />

                                        <h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300"> T2 / MINI SUV</td>
                                                    <td className="border border-gray-300">Daihatsu New Terrios</td>
                                                    <td className="border border-gray-300">1500 cc</td>
                                                    <td className="border border-gray-300">2017-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.500.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T2 / MINI SUV</td>
                                                    <td className="border border-gray-300">Toyota New Rush  </td>
                                                    <td className="border border-gray-300">1500 cc</td>
                                                    <td className="border border-gray-300">2017-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.500.000</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-gray-300">T3 / LOW MPV </td>
                                                    <td className="border border-gray-300">Toyota Avanza </td>
                                                    <td className="border border-gray-300">1500 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.200.000</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-gray-300">T3 / LOW MPV </td>
                                                    <td className="border border-gray-300">Daihatsu Xenia  </td>
                                                    <td className="border border-gray-300">1500 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.200.000</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-gray-300">T3 / LOW MPV</td>
                                                    <td className="border border-gray-300">Daihatsu Sigra</td>
                                                    <td className="border border-gray-300">1000 cc</td>
                                                    <td className="border border-gray-300">2017-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.200.000</td>
                                                </tr>



                                            </tbody>
                                        </table>

                                    </div>
                                </Transition>
                                <Transition
                                    show={tab === 5}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/doublecabin.jpeg"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />

<h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300">  T4 / MEDIUM BUS </td>
                                                    <td className="border border-gray-300">Mitsubishi, Isuzu</td>
                                                    <td className="border border-gray-300">4000-4500 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 2.500.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300">T4 / MICRO BUS</td>
                                                    <td className="border border-gray-300">Mitsubishi, Isuzu </td>
                                                    <td className="border border-gray-300">4000-4500 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 2.000.000</td>
                                                </tr>


                                            </tbody>
                                        </table>

                                    </div>
                                </Transition>
                                <Transition
                                    show={tab === 6}
                                    appear={true}
                                    className="w-full"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterStart="opacity-0 translate-y-16"
                                    enterEnd="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveStart="opacity-100 translate-y-0"
                                    leaveEnd="opacity-0 -translate-y-16"
                                >
                                    <div className="relative inline-flex flex-col">
                                        <img
                                            className="md:max-w-none mx-auto rounded"
                                            src="/assets/truck.png"
                                            width="500"
                                            height="375"
                                            alt="Features bg"
                                        />
                                    </div>

                                    <h1 className=" font-semibold text-4xl mt-3 text-orange items-center text-center"> Detail Varian</h1>
                                        <table className=" overflow-x-auto border border-black text-center rounded-md">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300">TYPE PELAYANAN</th>
                                                    <th className="border border-gray-300">MEREK/TYPE</th>
                                                    <th className="border border-gray-300">CC</th>
                                                    <th className="border border-gray-300">Tahun</th>
                                                    <th className="border border-gray-300">Harga</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300">  T5 / MOBIL BARANG  </td>
                                                    <td className="border border-gray-300">Truck Box (Modifikasi)
</td>
                                                    <td className="border border-gray-300">4000 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 2.500.000</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300"> T5 / MOBIL BARANG</td>
                                                    <td className="border border-gray-300">Mobil Box Kecil (Grand Max Mofikasi) </td>
                                                    <td className="border border-gray-300">1500 cc</td>
                                                    <td className="border border-gray-300">2014-2021</td>
                                                    <td className="border border-gray-300">Rp. 1.500.000</td>
                                                </tr>
                                                

                                            </tbody>
                                        </table>

                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold font-sans">Keterangan</h1>
                <ul className="list-disc ml-4">
                    <li>
                    Harga tersebut sudah termasuk mobil, sopir, dan BBM 
                    </li>
                    <li>
                    Harga tersebut sudah termasuk PPh 2%
                    </li>
                    <li>
                    Harga tersebut belum termasuk PPn 10%
                    </li>
                    <li>
                    Harga tersebut belum termasuk akomodasi, konsumsi dan seragam sopir
                    </li>
                    <li>
                    Pelayanan selama 16 jam
 
                    </li>
                    <li>
                    Asuransi Rp. 500.000 selama pelaksanaan Event 
                    </li>
                </ul>
            </div>
          
        </section>
    );
}

export default PresenterWanted;
