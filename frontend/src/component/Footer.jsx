const Footer = () => {

    return(
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br/>
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fab fa-fw fa-facebook-f"></i> Font Awesome fontawesome.com</a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fab fa-fw fa-twitter"></i> Font Awesome fontawesome.com</a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fab fa-fw fa-linkedin-in"></i> Font Awesome fontawesome.com</a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"> <i className="fab fa-fw fa-dribbble"></i> Font Awesome fontawesome.com</a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Awesomeapp</h4>
                        <p className="lead mb-0">
                        This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! <a href="http://startbootstrap.com">Read more</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
        </>
        
    )

}


export default Footer;