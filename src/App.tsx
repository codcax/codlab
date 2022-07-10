import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/hero-components/Hero';

export const App = () => {
    return (
        <React.Fragment>
            <div className="w-screen h-screen">
                <Navbar />
                <Hero />
            </div>
        </React.Fragment>
    );
};
