import React from 'react'
import NavBarPatient from './NavBarPatient'

const SearchPatient = () => {
  return (
    <div>
<NavBarPatient/>
<div className="container-fluid bg-secondary">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Search</label>
<input type="text" className="form-control" />
        
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">  
        <button className="btn btn-success">Submit</button>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default SearchPatient