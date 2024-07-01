 import React from 'react'
import Navbar from './Navbar'
 
 const AddSmart = () => {
   return (
     <div>
         <Navbar/>
<div className="container">
    
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label"> Brand Name
            <input type="text" className="form-control" />
        </label>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form-label"> Model Name
            <input type="text" className="form-control" />
        </label>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form-label"> Manufacturing Year
            <input type="date" name="" id="" className="form-control" />
        </label>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form-label"> Price
            <input type="text" className="form-control" />
        </label>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <label htmlFor="" className="form-label"> Description
           <textarea name="" id="" className="form-control"></textarea>
        </label>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <label htmlFor="" className="form-label"> Image
            <input type="file" name="" id="" className="form-control" />
        </label>
    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<button className="btn btn-primary">Add Button</button>
    </div>
</div>

        </div>
    </div>
</div>

     </div>
   )
 }
 
 export default AddSmart
 