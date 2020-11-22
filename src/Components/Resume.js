import React, { Component } from 'react'

class Resume extends Component {
  
  render() {
    var resume = {
    "skillmessage":"Here you can create a short write-up of your skills to show off to employers",
    "education":[
      {
        "school":"Maratha Mandal Engineering College Belagavi",
        "degree":"Bachelor of Engineering",
        "graduated":"August 2016- September 2020",
        "description":"Studied C and C++ languages,Microprocessor,Algorithm design,Java,J2EE and Web technologies like HTML,PHP,CSS One day workshop on PCB circuits and boards Activities:Played inter-departement Football tournament and won for the CS Dept in 2019 and have been part of college Fest(OJAS) for 2017,2018,2019."
      },

      {
        "school":"Govindram Seksaria Science College Belagavi",
        "degree":"PUC 1/2",
        "graduated":"July 2014 - June 2016",
        "description":"Completed my higher secondary schooling in Science. Major subjects opted were Physics, Chemistry, Maths & Biology."
      },
  
      {
        "school":"Swami Vivekanand English Medium High School Khanapur Belagavi",
        "degree":"High School",
        "graduated":" June 2004 - June 2014",
        "description":"Completed my schooling in following subjects English, Science, Maths, Hindi, Kannada, Social Studies. Major achievements apart form studies were winning the General Championship (Thrice).Represented school at District Level Soprts for track and field events."
      }
  
    ]
  }
  
  var skills = [
    {
      "name":"Git",
      "level":"40%"
    },

    {
      "name":"ReactJs",
      "level":"50%"
    },
    {
      "name":"CSS",
      "level":"90%"
    },
    {
      "name":"HTML5",
      "level":"10%"
    },
    
    
    {
      "name":"Python",
      "level":"40%"
    },

    {
      "name":"Javascript",
      "level":"60%"
    }
  ]


    

    if(resume){
      var skillmessage = resume.skillmessage;
      var education = resume.education.map(function(education){
        console.log("education",education)
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p className="newline">{work.description}</p>
      //   </div>
      // })
      var skills = skills.map(function(skills){
      // var projectImage = 'images/tech/'+skills.image;
        return <div key={skills.name} className="columns feature-item">
             {/* <img className='skill' alt={skills.name} src={projectImage} /> */}
           <h5>{skills.name}</h5>
       <p>{skills.description}</p>
       </div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>






      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Favorite Tech</span></h1>
         </div>

         <div>
           {/* <div className="nine columns main-col"><p className="lead center">{skillmessage}</p></div> */}
				   <ul className="bgrid-quarters s-bgrid-thirds cf">
					  {skills}
					 </ul>
			  </div>
      </div>
   </section>
    );
  }
}

export default Resume;
