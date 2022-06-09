import React from 'react';
import bannerImg from '../../Asstes/BannerImage.png'
const Banner = () => {
    return (
        <div className=''>
            <div className='h-3/5 grid grid-cols-1 md:grid-cols-2 gap-10  pt-20'>
                <div className='flex items-center'>
                    <div className='mx-8 md:mx-0'>
                        <p>Hello, I'm</p>
                        <h2 className='text-7xl my-2'>Omar faruk</h2>
                        {/* <p>Front end developer</p> */}
                        <p>I am a front end web developer. I always try to learn something new. And I love to use my creativity and make something new. My
                            ultimate goal is to become an awesome full-stack web developer.</p>
                    </div>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;