import React from 'react';

function ContactUs() {
  
  return (
      <section className="bg-primary bg-opacity-10" id="ContactUs">
            <div className="container px-4">
                <div className="row gx-4 justify-content-center">
                    <div className="col-md-7 col-lg-8">
                      <h2>Contact Us</h2>
                      <hr/>
                      <form className="needs-validation" noValidate="">
                        <div className="row g-3">
                          <div className="col-sm-6">
                            <label className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder=""  required="" />
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <label className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastName" placeholder=""  required="" />
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="text@gmail.com" required="" />
                            <div className="invalid-feedback">
                              Please enter your valid email address.
                            </div>
                          </div>
                          <div className="col-12">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" id="message" required=""></textarea><div className="invalid-feedback">
                              Please enter your content here.
                            </div>
                          </div>
                          <div className="col-12"><button className="btn btn-info">Submit</button></div>
                        </div>
                      </form>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ContactUs;