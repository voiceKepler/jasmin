import React from 'react'
import "./ConfierCard.css"

const ConfierCard = ({title,paragraph,image_icon}) => {
  return (
    <div className='confier_card'>
        <div className='circle_portion_icon'>
            <h1>v</h1>
            {/* <img src={image_icon} alt='' className='image_icon_'/> */}
        </div>
        <h1 className='font-20-res-16 weight-500 mt-20'>{title}</h1>
        <p className='font-16-res-14 weight-300 mt-40'>{paragraph}</p>
    </div>
  )
}

export default ConfierCard