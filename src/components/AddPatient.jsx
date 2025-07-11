import React from 'react'
import NavBarPatient from './NavBarPatient'

const AddPatient = () => {
    return (
        <div>
            <NavBarPatient />
            <div className="container-fluid bg-secondary">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMtZ6oAZw7xJPGpom0vGxsashSPl1y0kKKg&s" class="d-block w-100" alt="..."></img>
                                </div>
                                <div class="carousel-item">
                                    <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..."></img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>



                        <div className="row">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Age</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Gender</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1">
                                    </input><label class="form-check-label" for="radioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" checked>
                                    </input><label class="form-check-label" for="radioDefault2">
                                        Female
                                    </label>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Illness</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Doctor</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Room No</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Adm Date</label>
                                <input type="date" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPatient