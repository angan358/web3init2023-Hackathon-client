import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub } from "react-icons/ai";
import { MdCampaign } from "react-icons/md";
import { logo } from '../assets';


const Start = () => {
    return (
        <div className="h-3/4 w-full flex flex-col items-center justify-center gap-y-6">
            <div className="flex flex-row gap-x-3 gap-y-5">
                <img src={logo} alt="logo" width="60px" height="60px" />
                <h1 className='text-7xl text-slate-50 font-medium'>RaiseHQ</h1>
            </div>
            <span className='w-3/4 h-1/4 text-5xl text-green-200 text-center pt-3'>Grow your businesses with us by crowdfunding your campaigns.</span>
            <div className="flex flex-row h-11 w-2/6 justify-between">
                <div className="flex flex-row w-40 h-3/9 bg-[#8c6dfd] rounded-lg pl-2">
                    <NavLink to="/campaigns" className="flex flex-row items-center justify-center">
                        <MdCampaign size="25px" />
                        <span className='text-slate-100 text-lg pl-2'>CAMPAIGNS</span>
                    </NavLink>
                </div>
                <div className="flex flex-row w-56 h-3/9 bg-[#1dc071] rounded-lg pl-2">
                    <a href="https://github.com/angan358/web3init2023-Hackathon-client" target="_blank" className="flex flex-row items-center justify-center">
                        <AiFillGithub size="25px" />
                        <span className='text-slate-100 text-lg pl-2'>STAR US ON GITHUB</span>
                    </a>
                </div>
            </div>
            <span className='text-xl text-slate-100'>
                Build with ❤️ by
                <a href="https://github.com/mrinnnmoy" target="_blank" className='text-amber-300 px-1.5'>Mrinmoy</a>
                &#38;
                <a href="https://github.com/angan358" target="_blank" className='text-amber-300 px-1.5'>Angan</a>
            </span>
        </div>
    )
};

export default Start;