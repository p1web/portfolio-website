import React from 'react';
import Servicedata from './Servicedata';


function scard(val, i){

     let imgurl = require('../img/'+val.imageUrl );

    return(
          <div className="col-lg-4">
              
              <img src={imgurl} className="bd-placeholder-img rounded-circle" id={ val.id } width="140" height="140" />
              <h2>{ val.title }</h2>
              <p>{ val.imageText }</p>
              <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>

    );
} 

const Services = () => {

    return (
          
        <div className="container marketing">
        <section>
        <div className="row">
              { Servicedata.map(scard) }
        </div>
        </section>
        </div>
      );



}


export default Services;