import React from 'react'
import Image from 'next/image'

export default function section2() {
    return (
        <div className="h-screen max-h-96 items-center flex justify-center">
          <div className="flex w-10/12 flex-row justify-between">
             
            <div>
                  <h2 className="font-semibold text-4xl text-gray-700">
                  Buat Kenangan dalam Bentuk Website
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-gray-700">
                  Sesuaikan desain website dengan konsep pernikahanmu. Pilih warna, gaya, foto, semua bisa dilakukan online.
                  </p>
            </div>

            <div>
              <Image
                  src="/gambar1.png"
                  alt="profile"
                  className={`absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px`}
                  width={300}
                  height={200}
                /> 
            </div>

          </div>
        </div>
    )
}
