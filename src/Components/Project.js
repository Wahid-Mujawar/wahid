import React, { Component } from 'react';
import Resume from './Resume';
// import Project from './project';

class Project extends Component {
  render() {

    var resume = {
  
      "project" :[
      {
        "title":"Feedback System",
        "year":"November 2018",
        "description":"We have developed a stand alone software application, used to maintain the feedback record for staff "
        
      },

      {
        "title":"Graphical Robot",
        "year":"June 2019",
        "description":"Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
      },

      {
        "title":"e-governance",
        "year":"November 2019",
        "description":"We have develop  software application for e-Governance system to keep track of the ongoing projects using front end as HTML, Javascript and PHP as the backend."
      },

      {
        "title":"Cashew Grade Checker Using Arduino and Load Cell",
        "year":"September 2020",
        "description":"To design and develop an IoT based Cashew Grade Checker using Arduino and Load Cell to check whether the Grading process is done properly or not."
      }
    ]
  }

   

  // var skillmessage = resume.skillmessage;
  var projectDetails = resume.project.map(function(project){
    console.log("project",projectDetails)
    return <div key={project.title}><h3>{project.title}</h3>
    <p className="info">{project.year} <span>&bull;</span><em className="date"></em></p>
    <p>{project.description}</p></div>
  })

    return (
      <section id="project">

      <div className="row ">

         <div className="twelve columns collapsed">

           <center> <h2>Check Out Some of My Project Description.</h2></center>

            <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <h1>PROJECTS</h1>
                {projectDetails}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Project;
