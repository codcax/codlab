import React, { useState } from 'react';
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';

export const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const mobileMenu = (
        <React.Fragment>
            <div className="sm:hidden absolute w-screen h-screen z-50 bg-neutral">
                <div className="flex items-center justify-start w-full px-4 py-5">
                    <XIcon
                        className=" w-6 h-6 text-slate-400 mr-6"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    />
                    <h1 className="text-2xl flex flex-grow sm:flex-grow-0 sm:text-3xl">Codlab</h1>
                </div>
                <ul className="flex-row items-center w-full px-4 py-5 ml-12 text-xl font-light text-slate-400 space-y-3">
                    <li>
                        <a href="" className="">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="" className="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className="">
                            Courses
                        </a>
                    </li>
                    <li>
                        <a href="" className="">
                            Blogs
                        </a>
                    </li>
                    <li>
                        <a href="" className="">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="" className="">
                            Cookie Policy
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            {showMobileMenu ? mobileMenu : ''}
            <div className="sticky top-0 z-40 flex justify-center xl:pt-5 w-full">
                <div className="flex items-center justify-between px-4 py-5 w-full max-w-8xl">
                    <MenuIcon
                        className="w-6 h-6 text-slate-400 mr-6 sm:hidden"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    />
                    <div className="flex flex-grow sm:flex-grow-0 sm:text-3xl items-center">
                        <a href="" className="mr-4 pt-0.5">
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1066 902.99"
                                className="h-6 sm:h-8"
                            >
                                <path
                                    className="cls-1"
                                    d="M200.11,207.34C146.26,271.76,180.4,372.6,170,442.3,159.69,512,117.7,540,117.7,540s42,28,52.27,97.7c10.43,69.7-23.71,170.54,30.14,234.95,27.14,32.71,63.85,39.85,89,40.14v78.7C117.69,992.2,67,894.36,74.7,766.1,81.54,654.28,60,604.64,24,593.68a23.6,23.6,0,0,1-17-22.5V508.82a23.6,23.6,0,0,1,17-22.5c36.05-11,57.58-60.6,50.74-172.42C67,185.63,117.69,87.8,289.09,88.51v78.7C264,167.49,227.25,174.63,200.11,207.34Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <path
                                    className="cls-1"
                                    d="M879.89,207.34c53.85,64.42,19.71,165.26,30.14,235S962.3,540,962.3,540s-42,28-52.27,97.7,23.71,170.54-30.14,234.95c-27.14,32.71-63.85,39.85-89,40.14v78.7c171.4.71,222.1-97.13,214.39-225.39C998.46,654.28,1020,604.64,1056,593.68a23.6,23.6,0,0,0,17-22.5V508.82a23.6,23.6,0,0,0-17-22.5c-36-11-57.58-60.6-50.74-172.42,7.71-128.27-43-226.1-214.39-225.39v78.7C816,167.49,852.75,174.63,879.89,207.34Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <circle className="cls-2" cx="507.69" cy="743.8" r="54.1" />
                                <path
                                    className="cls-2"
                                    d="M236.82,700.57a77.63,77.63,0,1,1,77.62,77.63A77.62,77.62,0,0,1,236.82,700.57Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <path
                                    className="cls-2"
                                    d="M337.52,446.48A34.55,34.55,0,1,1,372.06,481,34.55,34.55,0,0,1,337.52,446.48Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <path
                                    className="cls-2"
                                    d="M460.58,588.4a22.26,22.26,0,1,1,22.26,22.26A22.26,22.26,0,0,1,460.58,588.4Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <circle className="cls-2" cx="557.99" cy="174.41" r="54.1" />
                                <path
                                    className="cls-2"
                                    d="M842.87,394.65A77.63,77.63,0,1,1,765.24,317,77.63,77.63,0,0,1,842.87,394.65Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <path
                                    className="cls-2"
                                    d="M742.16,648.74a34.54,34.54,0,1,1-34.54-34.54A34.54,34.54,0,0,1,742.16,648.74Z"
                                    transform="translate(-7 -88.51)"
                                />
                                <path
                                    className="cls-2"
                                    d="M619.1,506.82a22.26,22.26,0,1,1-22.25-22.25A22.25,22.25,0,0,1,619.1,506.82Z"
                                    transform="translate(-7 -88.51)"
                                />
                            </svg>
                        </a>
                        <h1 className="hidden logo-text sm:block">Codlab</h1>
                    </div>
                    <div className="flex items-center hidden sm:flex">
                        <button
                            className="flex items-center justify-start h-10 w-80 lg:w-96 py-2.5 px-4 rounded-lg bg-slate-800
                 ring-inset hover:ring-1 hover:ring-slate-500"
                        >
                            <SearchIcon className="w-5 h-5 mr-2 text-slate-400" />
                            <span className="font-light text-md text-slate-400">Search labs</span>
                        </button>
                    </div>
                    <div className="flex items-center">
                        <SearchIcon className="w-6 h-6 mr-6 text-slate-400 cursor-pointer sm:hidden" />
                        <a href="./" className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="justify-end fill-slate-400 hover:fill-slate-300 w-6 h-6 sm:w-9 h-9"
                            >
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207
                11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
                3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381
                1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404
                1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235
                1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0
                .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
