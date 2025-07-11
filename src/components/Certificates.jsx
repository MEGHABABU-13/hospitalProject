import React from 'react'
import ViewPatient from './ViewPatient'
import OtherBranche from './OtherBranche'

const Certificates = () => {
  return (
    <div>
<ViewPatient/>
<OtherBranche/>
<div className="container-fluid">
    <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="row">
  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
</div>
<div class="card  mb-3">
  <div class="card-body">
    <h5 class="card-title">ACCREDITIONS AND CERTIFICATIONS</h5>
  </div>
  </div>




<div className="row g-5">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<div class="card">
  <img src="https://www.caritashospital.org/static/img/NABH-1.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">NABH
Accreditation</p>
  </div>
</div>


    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<div class="card">
  <img src="https://www.caritashospital.org/static/img/NABH-2.png" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <p class="card-text">NABH Nursing Excellence
Certification</p>
  </div>
</div>


    </div>
</div>


    </div>

    </div>
</div>


    </div>
  )
}

export default Certificates