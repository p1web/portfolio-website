import React from 'react';

function Banner() {

	const img1 = require('../img/h-1.jpg');
	const img2 = require('../img/h-2.jpg');
	const img3 = require('../img/h-3.jpg');

	return (
	    <div className="row">
	    	<section id="header">
		    <h1 className="heading" style={{ color:"green", textTransform:"capitalize"}}>Welcome to my first react app </h1>
		    		   
		    <div className="imgdiv">
			    <img src={img1} alt="Test Image1" title="Test Image1" />
			    <img src={img2} alt="Test Image2" title="Test Image2" />
			    <img src={img3} alt="Test Image3" title="Test Image3" />   
		    </div>  
		    </section>
	    </div> 
  	)
}

export default Banner;