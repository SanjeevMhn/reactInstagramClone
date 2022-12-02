import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {

    let navItem = [
        {
            "id": 0,
            "name": "Home",
        }
    ]
    return (
        <nav className="main-nav p-3 w-[226px] fixed h-screen border-r-2 border-r-gray-300">
            <a href="#" className="home-link text-2xl text-black p-4 mb-2 block">
                Binstagram
            </a>
            <ul className="nav-list px-4 pt-0 pb-4">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <span className="icon-container w-[20px] h-[20px] flex-[0_0_20px] inline-flex justify-center items-center">
                            <FontAwesomeIcon icon={faHouse} className="w-full h-auto"/>
                        </span>
                       <span className="link-text pl-3">Home</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Search</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Explore</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Messages</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Notifications</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Create</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">More</a>
                </li>
            </ul>
        </nav>
    )
}

export default SideNav;