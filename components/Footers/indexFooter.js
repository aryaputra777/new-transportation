import React from 'react'
import { Message, Call, Chat } from 'react-iconly';

export default function indexFooter() {
  return (
    <>
      <footer className="relative bg-gray-600 text-white py-10">  
        <div className="flex flex-col md:flex-row mx-20 items-center md:justify-center ">
          <div className="w-full md:w-1/3">
            <h1 className="font-sans  text-xl font-bold my-4">Alamat Perusahaan</h1>
            <p>Jl. Garuda Arso II RT. 025/RW.002 Yuwanain Arso Kabupaten Keerom</p>

            <h1 className="font-sans  text-xl font-bold my-4">Alamat Kantor Cabang </h1>
            <p>Jl. Abepura - Entrop Tikung Jaya Asri No.59 B, Kota Jayapura, Papua</p>
          </div>

          <div className="w-full md:w-1/3 md:ml-6">
            <h1 className="font-sans  text-xl font-bold my-4">Kontak Kami</h1>
            <ul className="list-disc space-y-2">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <Message set="bold" />
                </span>
                <p className="ml-2">
                  <a href="mailto:tlp.transportasilintaspapua.gmail.com"> tlp.transportasilintaspapua.gmail.com </a>
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <Chat set="bold" />
                </span>
                <p className="ml-2">
                  <a href="tel:081281930031">081281930031</a>  
                </p>
                <p className="ml-2">
                <a href="tel:+6282199360122">+6282199360122</a>  

                </p>
              </li>
            </ul>
          </div>

        </div>
      </footer>
      <footer className="bg-gray-700 text-center py-1">
        <a href="https://arya-dun.vercel.app"  className="text-white text-center">©Arsan Tech</a>
      </footer>
    </>
  )
}
