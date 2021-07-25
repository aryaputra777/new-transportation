import React from 'react'
import Image from 'next/image'


export default function indexHeader() {
    return (
        <div className="relative flex h-screen max-h-860-px bg-gradient-to-r from-orange to-orange-tua items-center">
           <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
           <div className="flex w-full flex-row justify-between mx-20">
              <div className="max-w-md">
                <h2 className="font-semibold text-4xl text-white">
                    Transportasi Lintas Papua.
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white">
                Salam hangat dari PT. Transportasi Lintas Papua Rent Car terima kasih telah 
                mempercayakan PT. Transportasi Lintas Papua Rent Car sebagai solusi transportasi anda. 
                Kami berkomitmen menyediakan pelayanan transportasi..{" "}
                </p>
                {/* <div className="flex flex-row">
                    <a
                      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                      target="_blank"
                      className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    >
                      Buat Sekarang
                    </a>
                    <a
                      href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                      target="_blank"
                    >
                      Video 1:00
                    </a>
                </div> */}
              </div>
              <div>
                <Image
                  src="/assets/undraw_city_driver_re_0x5e.png"
                  alt="profile"
                  className={`absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px`}
                  width={500}
                  height={300}
                /> 
              </div>
           </div>
        </div>
    )
}
