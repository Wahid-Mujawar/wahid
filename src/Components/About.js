import React, { Component } from 'react';
import imageP from './displaypicture.jpg'

class About extends Component {
  render() {
    return (
      <section id="about">
      
      <div className="row">
         <div className="three columns">
         <img className="profile-pic" src={imageP} alt="Wahids Display Picture" />
         
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>To work in a firm with a professional work driven environment where I can utilize and apply my knowledge, skills and enhance my experience through continuous learning which would enable me as a fresh graduate to grow while fulfilling organizational goals.</p>
            <br/>
            <br/>
               <div className="row">
                  <div className="columns contact-details">
                     <h2>Contact Details</h2>
                  <p className="info">
						   <span>Masajid Galli Halasi Khanapur</span><br />
						   <span>Belagavi<br />
						   <span>Karnataka</span>
                   </span><br />
						   <span>8088686729</span><br />
                     <span>abdulwahid0218@gmail.com</span>
					   </p>
               </div>
               
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
