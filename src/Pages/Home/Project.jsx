import React from 'react';

const Project = ({ myProject}) => {
    const { name, picture, desction} = myProject;
    return (
        <div class="card card-compact mx-6 md:mx-0 bg-base-100 shadow-xl">
            <figure><img className='h-40' src={picture} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{desction}</p>
            </div>
        </div>
    );
};

export default Project;