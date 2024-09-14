import React from 'react'
import Productcard from './Productcard'

export default function Productfilter({ products, sort, setSORT, cat, setcat }) {
    console.log(sort)

    return (
        <>
            <div className="content col-md-9">
                <div className="d-flex justify-content-between border-bottom align-items-center">
                    <h2 className="title">Products</h2>
                    <div className="filters-actions">
                        <div>
                            <button className="btn filter-btn d-md-none"><svg xmlns="http://www.w3.org/2000/svg" className="mr-2" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" /></svg>
                                Filter</button>
                        </div>
                        <div className="d-flex align-items-center">


                            <label for="cars">Choose a car : </label>
                            <select onChange={(a) => {
                                setSORT(a.target.value)


                            }} name="cars" id="cars">
                                <option value="soting">soring </option>
                                <option value="1">Accending</option>
                                <option value="2">Decending</option>
                                <option value="3">Price Low to high</option>
                                <option value="4">Price high to Low</option>
                                <option value="5"> Discounted Price Low to high</option>
                                <option value="6">Discounted Price high to Low</option>
                                <option value="7">Rating Low to high</option>
                                <option value="8">Rating high to Low</option>
                            </select>



                        </div>
                    </div>
                </div>
                <div className="row row-grid">
                    {
                        products.map((v, i) => {
                            // aa(v)
                            return (
                                <Productcard v={v} />
                            )
                        })
                    }

                    {/* /<!--col-end-->       */}
                </div>
            </div></>
    )
}
