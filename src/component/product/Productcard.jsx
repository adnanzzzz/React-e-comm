import React from 'react'

export default function Productcard({v}) {
  return (
    <>
     <div className="col-md-6 col-lg-4 col-xl-4">
            <img src={v.image} />
            <h5>{v.slug}</h5>
            <p className='p-0 m-0'>Price : {v.price}</p>
            <p className='p-0 m-0 mb-4' >Rating : {v.rating}</p>
            <p>Discount : {v.discount_percentage }</p>
          </div>
    </>
  )
}
