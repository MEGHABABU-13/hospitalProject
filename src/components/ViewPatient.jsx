import React from 'react'
import NavBarPatient from './NavBarPatient'
import OtherBranche from './OtherBranche'

const ViewPatient = () => {
  return (
    <div>
<NavBarPatient/>
        <table class="table table-striped-columns">
  <thead>
 <div className="container-fluid bg-secondary">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
 <nav class="navbar bg-secondary">
  <div class="container-fluid bg-secondary">
    <span class="navbar-brand mb-0 h1">PATIENT DETAILS</span>
  </div>
</nav>
        </div>
    </div>
 </div>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Patient Name</th>
      <th scope="col">Age</th>
      <th scope="col">Illness</th>
      <th scope="col">Doctor</th>
      <th scope="col">Adm no</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>45</td>
      <td>Dibetics</td>
       <td>Dr.SAM</td>
      <td>23454</td>
    </tr>
    <tr>
        <th scope="row">2</th>
      <td>Joe</td>
      <td>55</td>
      <td>Pneumonia</td>
       <td>Dr.JAIN</td>
      <td>23674</td>
    </tr>
    <tr>
      <th scope="row">3</th>
     <td>Tom</td>
      <td>34</td>
      <td>BP</td>
       <td>Dr.aenya</td>
      <td>22254</td>
    </tr>
  </tbody>
</table>
    </div>

  )
}

export default ViewPatient