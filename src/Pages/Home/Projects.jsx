import React from 'react';
import Project from './Project';
 
const myProjects =[
{
        "name": "Parts-Master",
        "picture": "https://i.ibb.co/bvrH9fn/Fire-Shot-Capture-004-Parts-Master-parts-master-web-app.png",
        "desction": "This is a Full-Stack Manufacturer website. It has nice functionality. It is fully responsive.",
},
    {
        "name": "Electronics-Corner",
        "picture": "https://i.ibb.co/nspt080/Fire-Shot-Capture-005-Electronics-Corner-assignment-11-a4057-web-app.png",
        "desction": "This is a Full-Stack warehouse-management website. It looks awesome. It is fully responsive."
  },
    {
        "name": "Laptop-Corner",
        "picture": "https://i.ibb.co/XXDGQ4S/Fire-Shot-Capture-006-Laptop-Corner-laptopcorner-netlify-app.png",
        "desction": "This is a product-analysis website. It has nice functionality. It is fully responsive."
  }
]
const Projects = () => {
    return (
        <div id='projects'>
           <div className=''>
                <h5 className='text-3xl border-b-2 my-8 mx-1 inline-block'>My Projects</h5>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        myProjects.map(myProject => <Project myProject={myProject} />)
                    }
                </div>
           </div>
        </div>
    );
};

export default Projects;