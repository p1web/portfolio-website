import React from 'react';


function Features(){

  let featureImg = require('../img/670-600x420-blur_5.jpg');
  
    return (
        <div className="row featurette">
          <div className="col-md-6 order-md-2">
            <h2 className="featurette-heading">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-6 order-md-1">
       
             <img className="img-fluid mx-auto" src={featureImg} alt="Test Image1" />

          </div>
        </div>
       
    )
}

export default Features;