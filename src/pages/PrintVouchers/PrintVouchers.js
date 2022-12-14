import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const PrintVouchers = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        form.reset()
    }
    return (
        <div>
            <div className="p-6 mt-6">
                <div className="card w-1/2 bg-base-100 shadow-2xl">
                    <div className='bg-fuchsia-700 text-white p-5 -mt-4 flex' style={{ width: '93%', borderRadius: '.2rem', marginLeft: '1.2rem' }}>
                        <ArrowRightOnRectangleIcon className='h-4 mt-1' />   Log in to Use CadPro ePin Manager - Universal Portal
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <TextField sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginTop: '1rem'
                            }} id="standard-basic" name='email' label="Your password" variant="standard" />
                        </div>
                        <div className="form-control">
                            <TextField sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginTop: '1rem'
                            }} id="standard-basic" name='password' label="Your password" variant="standard" />
                        </div>
                        <div className="flex mt-6">
                            <button className="login-btn text-white">LOGIN</button>
                            <button className="activate-btn text-white">GET ACTIVATED</button>
                        </div>
                        <div className='flex justify-start mt-6'>
                            <div>
                                <p className='text-black mb-3'><small>Have some questions ? <Link className='text-fuchsia-700' to='/faqs'>Read these FAQs</Link> for answers!</small></p>
                                <p className='text-black text-start'><small>Contact <span className='text-red-600' to='/faqs'>000010101001</span> for activation!</small></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PrintVouchers;