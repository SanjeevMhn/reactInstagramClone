import React from 'react';
import SideNav from './SideNav';

const Layout = ({children}) => {

    return(
        <div className="page-wrapper">
            <SideNav />
            <main className='lg:ml-[225px]'>
                {children}
            </main>
        </div>
    )
}

export default Layout;