import React from 'react'
import Navbar from './Navbar'
const ViewAll = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SL.NO</th>
      <th scope="col">BRAND NAME</th>
      <th scope="col">MANUFACTERING YEAR</th>
      <th scope="col">PRICE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>OPPO</td>
      <td>2333</td>
      <td>5666466</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>VIVO</td>
      <td>2332</td>
      <td>4465767</td>
    </tr>
    
  </tbody>
</table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAll
