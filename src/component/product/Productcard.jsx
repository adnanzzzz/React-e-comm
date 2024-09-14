import React from 'react'

export default function Productcard({v}) {
  return (
    <>
     <div className="col-md-6 col-lg-4 col-xl-4">
            <img src={v.image} />
            <h5>{v.slug}</h5>
            <p>Price : {v.price}</p>
            <p>Rating : {v.rating}</p>
          </div>
    </>
  )
}
