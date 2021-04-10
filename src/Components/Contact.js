import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            
            <div className="ten columns">
                  <p className="lead">
                 Feel free to contact. Available on receiver side.
                  </p>
            </div>

         </div>
         <div className="row"> 
         <div className="eight columns">

            <form action="" method="post" id="contactForm" name="contactForm">
				</form>
           </div>
            
               <p className="address"><br/>
					      Address and Phone< br/>
						   AbdulWahid Mujawar<br/>
						   Masajid Galli Halasi (591120)< br/> 
                     Taluk Khanapur<br/>
                     District Belagavi (590001)<br />
						   State Karnataka <br/>
                     Country India<br/>
						   <span>8088686729 </span>
					   </p>
				   </div>

   </section>
    );
  }
}

export default Contact;
