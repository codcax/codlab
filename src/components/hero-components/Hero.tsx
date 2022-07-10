import React from 'react';
import codeSnippet from '../../assets/home-hero.svg';

export const Hero = () => {
    return (
        <React.Fragment>
            <div className="flex justify-center py-16 px-4 sm:px-6 lg:px-16 lg:py-20 w-full">
                <div className="grid grid-cols-2 items-center justify-between w-full max-w-8xl">
                    <div className="order-last col-span-2 md:text-center lg:text-left lg:col-span-1 lg:order-first">
                        <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent leading-tight">
                            Code never sleeps.
                        </p>
                        <p className="mt-3 text-2xl tracking-tight text-slate-400 leading-relaxed">
                            A coding hub built by developers for developers to enhance skills and expand knowledge.
                        </p>
                        <div className="col-span-2 mt-8 flex gap-4  md:justify-center lg:justify-start lg:col-span-1">
                            <a
                                href="/"
                                className="rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500"
                            >
                                Get Started
                            </a>
                            <a
                                href="https://github.com/codcax/codlab"
                                target="_blank"
                                className="rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
                                rel="noreferrer"
                            >
                                View on Github
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-4 col-span-2 lg:col-span-1 lg:pl-8 lg:pb-0">
                        <div className="w-full sm:w-2/3 lg:w-full">
                            <img src={codeSnippet} className="object-center" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
