import React from 'react'

export default function Filterproductsidebar({ Categories,
                                                setbrand,
                                                brand,
                                                 cat,
                                                  setcat,
                                                   setFilter,
                                                    settrueprice,
                                                      setprice,
                                                       filter,
                                                        setLoader,
                                                        SETBRAND,
                                                        BRAND,
                                                        filbrand,
                                                        setfilbrand,
                                                        setdiscount,
                                                        setrating }) {                                                           
   let b=(slug)=>{
    console.log(slug)
    if(BRAND.includes(slug)){
        var category = BRAND.filter((v,i)=>{
            if(v!=slug){
                return v;
            }
        })
        console.log(category)
        SETBRAND(category)
    }
    else{
        BRAND.push(slug)
        // SETBRAND(BRAND)
    }
    console.log(BRAND)
    setfilbrand(!filbrand);
   }
    let cc = (slug) => {
        if (cat.includes(slug)) {
            var category = cat.filter((v, i) => {
                if (v != slug) {
                    return v; //value store in category variable 
                }
            })
            console.log(category)
            setcat(category)
        }
        else {
            cat.push(slug)
            setcat(cat)
        }
        setFilter(!filter);
        setLoader(true);

    }
    let price = (c) => {
        console.log(c.target.value)
        if (c.target.value == '1') {
            let a = [10, 250];
            setprice(a)
        }
        else if (c.target.value == '2') {
            let a = [250, 500];
            setprice(a)
        }
        else if (c.target.value == '3') {
            let a = [500, 1000];
            setprice(a)
        }
        else if (c.target.value == '4') {
            let a = [1000, 'above'];
            setprice(a)
        }
        else {
            let a = ['', ''];
            setprice(a)
        }
        //  settrueprice(!trueprice)
    }
    let dis =(d)=>{
        if (d.target.value == '1') {
            let e = [5, 10];
            setdiscount(e)
        }
        else if (d.target.value == '2') {
            let e = [10, 15];
            setdiscount(e)
        }
        else if (d.target.value == '3') {
            let e = [15, 20];
            setdiscount(e)
        }
        else if (d.target.value == '4') {
            let e = [20, 'above'];
            setdiscount(e)
        }
        else {
            let e = ['', ''];
            setdiscount(e)
        }
    }
    return (
        <>
            <div className="sidebar col-md-3 px-0">
                <h1 className="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                    <span className="mr-2 filter-close-btn">
                        X
                    </span>
                    Filters
                    <span className="ml-auto text-uppercase">Reset Filters</span>
                </h1>
                <div className="sidebar__inner ">
                    <div className="filter-body">
                        <div>
                            <h2 className="border-bottom filter-title">Products Categories</h2>
                            <div className="mb-30 filter-options">
                                {
                                    Categories.map((v, i) => {
                                        return (
                                            <div className="custom-control custom-checkbox mb-3" key={i}>
                                                <input type="checkbox" id={v.slug} onClick={() => cc(v.slug)} className="custom-control-input" />
                                                <label className="custom-control-label" for={v.slug}>{v.name}</label>
                                            </div>
                                        )
                                    })
                                }


                            </div>
                            {/* <!--seating option end--> */}
                            <h2 className="font-xbold body-font border-bottom filter-title">Price</h2>
                            <div className="mb-3 filter-options" id="cusine-options" onClick={price}>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='1' id="Chinese" />
                                    <label className="custom-control-label" for="Chinese">Rs. 10 to Rs. 250</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='2' id="Italian" />
                                    <label className="custom-control-label" for="Italian">Rs. 250 to Rs. 500    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='3' id="Mexican" />
                                    <label className="custom-control-label" for="Mexican">Rs. 500 to Rs. 1000</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='4' id="Thai" />
                                    <label className="custom-control-label" for="Thai">Rs. 1000 to Above</label>
                                </div>

                            </div>

                            {/* <!-- cusine filters end --> */}
                            <h2 className="font-xbold body-font border-bottom filter-title">Price Range</h2>
                            <div className="mb-3 theme-clr xs2-font d-flex justify-content-between">
                                <span id="slider-range-value1">$100</span>
                                <span id="slider-range-value2">$10,000</span>
                            </div>
                            <div className="mb-30 filter-options">
                                <div>
                                    <div id="slider-range">
                                        <form>
                                            <div className="form-group">
                                                <input type="range" className="form-control-range" id="" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <h2 className="border-bottom filter-title">Brands</h2>
                            <div className="mb-3 filter-options" id="services-options">
                                {
                                    brand.map((v,i)=>{
                                        return(
                                            <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" onClick={()=>b(v.slug)} id={v.slug} />
                                           <label className="custom-control-label" for={v.slug}>{v.slug}</label>
                                       </div>
                                        )
                                    })
                                }
                                
                               
                            </div>
                            <h2 className="font-xbold body-font border-bottom filter-title">DISCOUNT RANGE</h2>
                            <div className="mb-3 filter-options" id="cusine-options" onClick={dis} >
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='discount' className="custom-control-input" value='1' id="Chinese" />
                                    <label className="custom-control-label" for="Chinese">5% and above</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='discount' className="custom-control-input" value='2' id="Italian" />
                                    <label className="custom-control-label" for="Italian">10% and above   </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='discount' className="custom-control-input" value='3' id="Mexican" />
                                    <label className="custom-control-label" for="Mexican">15% and above</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='discount' className="custom-control-input" value='4' id="Thai" />
                                    <label className="custom-control-label" for="Thai">20% and above</label>
                                </div>

                            </div>
                            <h2 className="font-xbold body-font border-bottom filter-title">Rating</h2>
                            <div className="mb-3 filter-options" id="cusine-options" onClick={(a)=>{setrating(a.target.value)}}  >
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='ratings' className="custom-control-input" value='4' id="Chinese" />
                                    <label className="custom-control-label" for="Chinese">4★ & above</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='ratings' className="custom-control-input" value='3' id="Italian" />
                                    <label className="custom-control-label" for="Italian">3★ & above  </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='ratings' className="custom-control-input" value='2' id="Mexican" />
                                    <label className="custom-control-label" for="Mexican">2★ & above</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='ratings' className="custom-control-input" value='1' id="Thai" />
                                    <label className="custom-control-label" for="Thai">1★ & above</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
