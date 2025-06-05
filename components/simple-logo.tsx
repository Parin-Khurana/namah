"use client"

import Image from "next/image"

export function SimpleLogo() {
  return (
    <div className="flex items-center">
      <Image
        src="aintno.png" // Ensure this image is placed in the /public directory
        alt="Namah Logo"
        width={70} // Adjust size as needed
        height={70}
        className="object-contain"
      />
    </div>
  )
}
