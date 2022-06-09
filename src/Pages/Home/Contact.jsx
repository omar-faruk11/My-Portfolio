import React, { useContext, useRef } from 'react';
import { context } from '../../App';
import emailjs from '@emailjs/browser';
import location from '../../Asstes/location.png'
import call from '../../Asstes/call-center.png'
import mail from '../../Asstes/mail.png'
import timezone from '../../Asstes/time-zone.png'


const Contact = () => {
    const form = useRef();
    const {light} = useContext(context)
    const handaleSendMessage=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_9ilj0h6', 'template_9a2v05g', form.current, 'p3NkFKKyBN6HmaKhM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }
    return (
        <div className='mt-24' id='contact'>
            <h5 className='text-3xl border-b-2 inline-block my-8 mx-1'>Contact Me</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 text-center md:text-left'>
                <div>
                    <h3 className='text-4xl my-4'>Postal Information</h3>
                    <div className="grid grid-rows-1 md:grid-rows-4 gap-8 ">
                        <div className='grid grid-cols-1 md:grid-cols-7 '>
                            <div className='col-span-1 flex justify-center'>
                                <img className='text-primary  h-16 w-16  ' src={location} alt="" />
                            </div>
                            <div className='col-span-5'>
                                <h4 className='text-2xl'>Postal Address</h4>
                                <p>Dhampti, debidwer, cumilla</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-7'>
                            <div className='col-span-1 flex justify-center'>
                                <img className='text-primary  h-16 w-16' src={call} alt="" />
                            </div>
                            <div className='col-span-5'>
                                <h4 className='text-2xl'>Call Now</h4>
                                <p>+8801798642262</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-7'>
                            <div className='col-span-1 flex justify-center'>
                                <img className='text-primary  h-16 w-16' src={mail} alt="" />
                            </div>
                            <div className='col-span-5'>
                                <h4 className='text-2xl'>Mail</h4>
                                <p>omarabdullah1811@gmail.com</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-7'>
                            <div className='col-span-1 flex justify-center'>
                                <img className='text-primary h-16 w-16' src={timezone} alt="" />
                            </div>
                            <div className='col-span-5'>
                                <h4 className='text-2xl'>Time Zone</h4>
                                <p>UTC +6 Asia/Dhaka</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`p-8 m-4 rounded-3xl shadow-lg border-[1px]  ${!light ? 'border-gray-600' : "border-gray-100"} `}>
                        <h3 className='text-4xl'>Lets Talk With Me</h3>
                        <form ref={form} onSubmit={handaleSendMessage}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name:</span>
                                </label>
                                <input type="text" name="from_name" required placeholder="Enter your name" class="input input-bordered rounded-md" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email:</span>
                                </label>
                                <input type="email" name="from_email"  required placeholder="Enter your email" class="input input-bordered rounded-md" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message:</span>
                                </label>
                                <textarea type="text" name="message" required placeholder="message" class="textarea textarea-bordered rounded-md w-full" />
                            </div>
                            <input type="submit" value="Send message" className='btn btn-primary rounded-md my-4' />
                        </form>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;