import React from 'react'
import placeholderImg from '../images/placeholder.jpg'

const PlaceHolder = () => (
  <div className="h-100 w-100 pl-5 pr-4 py-5">
    <div
      className="h-100 w-100"
      style={{
        backgroundImage: `url('${placeholderImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
      }}
    />
  </div>

)

export default PlaceHolder
