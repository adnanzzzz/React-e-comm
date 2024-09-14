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
    let [brand,setbrand]=useState([])
    let [BRAND,SETBRAND]=useState([])
    let [filbrand,setfilbrand]=useState(false)
    let [discount,setdiscount]=useState([])
    let [rating,setrating]=useState('')

        useEffect(()=>{
            axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then(function(response){
                setbrand(response.data.data)
            })
            .catch(function(error){
                    console.log(error)
            })
        },[])

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
        if(discount[0]==undefined){
            let a=''
            discount[0]=a;
            setdiscount(discount)
        }
        if(discount[1]==undefined){
            let a=''
            discount[1]=a;
            setdiscount(discount)
        }
       
        axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=30&categories=${cat}&sorting=${sort}&price_from=${pricee[0]}&price_to=${pricee[1]}&brands=${BRAND}&discount_from=${discount[0]}&discount_to=${discount[1]}&rating=${rating}`)
       
            .then(function (response) {
            // handle succes
            setproducts(response.data.data);

            // setLoader(false)

        })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }, [filter,filbrand, sort, pricee,discount,rating])

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

    console.log(rating)

    return (
        <>
           
            <div className="search-section">
                <div className="container-fluid container-xl">
                    <div className="row main-content ml-md-0">
                        <Filterproductsidebar
                            // trueprice={trueprice} 
                            // settrueprice={settrueprice} 
                            pricee={pricee}
                            setprice={setprice}
                            cat={cat} 
                            filter={filter}
                             setFilter={setFilter} 
                             setcat={setcat}
                              Categories={Categories}
                              brand={brand}
                              setbrand={setbrand}
                              BRAND={BRAND}
                              SETBRAND={SETBRAND}
                              filbrand={filbrand}
                              setfilbrand={setfilbrand}
                              discount={discount}
                              setdiscount={setdiscount} 
                              setrating={setrating}/>

                        <Productfilter 
                        sort={sort} 
                        setSORT={setSORT} 
                        cat={cat} 
                        setcat={setcat} 
                        products={products} />
                    </div>
                </div>
            </div>
        </>
    )
}
