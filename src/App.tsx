import React from 'react';
import { Navbar } from './components/Navbar';

export const App = () => {
    return (
        <React.Fragment>
            <div className="w-screen h-screen">
                <Navbar />
            </div>
        </React.Fragment>
    );
};
