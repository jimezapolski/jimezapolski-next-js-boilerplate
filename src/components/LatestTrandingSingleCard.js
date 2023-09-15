import React from 'react'
import Image from 'next/image'

const LatestTrandingSingleCard = ({theShow}) => {
     return (
    <div className='z-40'>
       
      <Image
        src={theShow?.image?.medium}
        width={138}
        height={178}
        alt={theShow?.name}
      />
        
  </div>
)}

export default LatestTrandingSingleCard