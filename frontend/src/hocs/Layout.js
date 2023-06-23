import React from 'react';
import Navbar from '../components/Navbar'


const Layout = (props) => (
    <div>
        <Navbar />
        <div>
            {props.children}
        </div>
    </div>
);

export default Layout;