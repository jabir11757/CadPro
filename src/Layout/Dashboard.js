import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpTrayIcon, Cog8ToothIcon, ComputerDesktopIcon, PrinterIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
// import hill_bg from '../images/hill_bg.jpg'
import logo from '../images/cadpro-logo.png'
import './Dashboard.css'
const Dashboard = () => {
    const location = useLocation().pathname;

    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="background drawer-side bg-base-100 shadow-2xl" >
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <Link className='flex' to='/'>
                            <img src={logo} alt='logo' style={{ height: '4vh' }} />
                            <h1 className='text-xl mx-5]' style={{ marginTop: '-.1rem' }}>EPIN MANAGER</h1>
                        </Link>
                        <div className="divider"></div>
                        <Link to='/importPins'><button className={location === '/importPins' ? 'btn text-start normal-case w-full my-3 active' : 'btn btn-outline text-start normal-case w-full my-3'}><ArrowUpTrayIcon className="h-6 w-6 mx-2" /> Import Pins</button></Link>
                        <Link to='/printVouchers'><button className={location === '/printVouchers' ? 'btn text-start normal-case w-full my-3 active' : 'btn btn-outline text-start normal-case w-full my-3'}><PrinterIcon className="h-6 w-6 mx-2" /> Print Vouchers</button></Link>
                        <Link to='/settings'><button className={location === '/settings' ? 'btn text-start normal-case w-full my-3 active' : 'btn btn-outline text-start normal-case w-full my-3'}><Cog8ToothIcon className="h-6 w-6 mx-2" /> Settings</button></Link>
                        <Link to='/faqs'><button className={location === '/faqs' ? 'btn text-start normal-case w-full my-3 active' : 'btn btn-outline text-start normal-case w-full my-3'}><QuestionMarkCircleIcon className="h-6 w-6 mx-2" /> FAQs</button></Link>
                        <Link to='/downloadSoftware'><button className={location === '/downloadSoftware' ? 'btn text-start normal-case w-full my-3 active' : 'btn btn-outline text-start normal-case w-full my-3'}><ComputerDesktopIcon className="h-6 w-6 mx-2" /> Get Desktop software</button></Link>
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Dashboard;