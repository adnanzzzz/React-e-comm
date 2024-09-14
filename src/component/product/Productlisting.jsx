import React, { useEffect, useState } from 'react'
import Filterproductsidebar from './Filterproductsidebar'
import axios from 'axios';
import Productfilter from './Productfilter'

export default function Productlisting() {
    let [products, setproducts] = useState([])
    let [Categories, setCategories] = useState([])
    let [cat, setcat] = useState([]);
    let [filter, setFilter] = useState(false);
    let [sort, setSORT] = useState('')
    let [pricee, setprice] = useState([])
    // let [trueprice,settrueprice]=useState(false)


    // console.log(cee[0])

    // console.log(sort)

    useEffect(() => {
        if (pricee[0] == undefined){
            let a='';
            pricee[0] =a;
            setprice(pricee)
        }
        if (pricee[1] == undefined){
            let b='';
            pricee[1] =b;
            setprice(pricee)
        }
       
        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=30&categories=${cat}&sorting=${sort}&price_from=${pricee[0]}&price_to=${pricee[1]}`)
       
            .then(function (response) {
            // handle success
            // console.log(response)
            setproducts(response.data.data);

            // setLoader(false)

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [filter, sort, pricee])

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then(function (response) {
                // handle success
                setCategories(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, [])


    // console.log(a)
    return (
        <>
            {/* <div className="overlay" ></div> */}
            <div className="search-section">
                <div className="container-fluid container-xl">
                    <div className="row main-content ml-md-0">
                        <Filterproductsidebar
                            // trueprice={trueprice} 
                            // settrueprice={settrueprice} 
                            pricee={pricee}
                            setprice={setprice} cat={cat} filter={filter} setFilter={setFilter} setcat={setcat} Categories={Categories} />

                        <Productfilter sort={sort} setSORT={setSORT} cat={cat} setcat={setcat} products={products} />
                    </div>
                </div>
            </div>
        </>
    )
}
