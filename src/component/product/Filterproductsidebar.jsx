import React from 'react'

export default function Filterproductsidebar({Categories ,cat,setcat,setFilter,settrueprice,trueprice,pricee,setprice ,filter ,setLoader}) {
    // setprice([0]='asdf')
    let cc =(slug)=>{
        if(cat.includes(slug)){ 
           var category = cat.filter((v,i)=>{
            if(v!=slug){
                return v ; //value store in category variable 
             }
           })
           setcat(category)
        }
          else{
            cat.push(slug)
            setcat(cat)
        }
        setFilter(!filter);
        setLoader(true);

    }








    

    let price =(c)=>{
        console.log(c.target.value)
        if(c.target.value=='1'){
         let  a= [10,250];
           setprice(a)
         }
         else if(c.target.value=='2'){
           let a= [250,500];
            setprice(a)
            }
         else if(c.target.value=='3'){
           let a= [500,1000];
            setprice(a)
         }
         else if(c.target.value=='4'){
          let  a= [1000,'above'];
            setprice(a)
         }
         else{
         let  a= ['',''];
          setprice(a)
         }
        //  settrueprice(!trueprice)
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
                                Categories.map((v,i)=>{
                                    return(
                                        <div className="custom-control custom-checkbox mb-3" key={i}>
                                        <input type="checkbox" id={v.slug} onClick={ ()=>cc(v.slug) } className="custom-control-input"   />
                                        <label className="custom-control-label" for={v.slug}>{v.name}</label>
                                    </div> 
                                    )
                                })
                              }
                                
                               
                            </div>
                            {/* <!--seating option end--> */}
                            <h2 className="font-xbold body-font border-bottom filter-title">Price</h2>
                            <div className="mb-3 filter-options" id="cusine-options"onClick={price}>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='1'  id="Chinese"  />
                                    <label className="custom-control-label" for="Chinese">Rs. 10 to Rs. 250</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='2'  id="Italian" />
                                    <label className="custom-control-label" for="Italian">Rs. 250 to Rs. 500    </label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='3'  id="Mexican" />
                                    <label className="custom-control-label" for="Mexican">Rs. 500 to Rs. 1000</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="radio" name='price' className="custom-control-input" value='4'  id="Thai" />
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
                            <h2 className="border-bottom filter-title">Services</h2>
                            <div className="mb-3 filter-options" id="services-options">
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="Breakfast" checked />
                                    <label className="custom-control-label" for="Breakfast">Breakfast</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="Lunch" />
                                    <label className="custom-control-label" for="Lunch">Lunch</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="Donner" />
                                    <label className="custom-control-label" for="Donner">Donner</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="Cafe" />
                                    <label className="custom-control-label" for="Cafe">Cafe</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="Brunch" />
                                    <label className="custom-control-label" for="Brunch">Brunch</label>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input" id="other" />
                                    <label className="custom-control-label" for="other">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
