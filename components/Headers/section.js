import React from 'react'
import Image from 'next/image'

export default function section() {
    return (
        <div className="h-screen max-h-96 items-center flex justify-center">
          <div className="flex w-10/12 flex-row justify-between">
              <div>
              <Image
                  src="/gambar1.png"
                  alt="profile"
                  className={`absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px`}
                  width={300}
                  height={200}
                /> 
              </div>
              <div>
                  <h2 className="font-semibold text-4xl text-gray-700">
                    Integrasi dengan Undangan Fisik
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Tersedia berbagai fitur seperti cetak label stiker undagan, kartu QR, dan daftar tamu untuk memudahkan persiapan acara. 
                  </p>
              </div>

          </div>
        </div>
    )
}
