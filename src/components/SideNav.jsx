import React from 'react';
import { NavLink } from "react-router-dom";

const SideNav = () => {

    let navItems = [
        {
            "id": "home",
            "name": "Home",
            "icon": "home-outline",
            "activeIcon": "home",
            "link": "/",
        },
        {
            "id": "search",
            "name": "Search",
            "icon": "search-outline",
            "activeIcon": "search",
            "link": "/search",
        },
        {
            "id": "explore",
            "name": "Explore",
            "icon": "compass-outline",
            "activeIcon": "compass",
            "link": "#",
        },
        {
            "id": "messages",
            "name": "Messages",
            "icon": "chatbubble-ellipses-outline",
            "activeIcon": "chatbubble-ellipses",
            "link": "#",
        },
        {
            "id": "notifications",
            "name": "Notifications",
            "icon": "heart-outline",
            "activeIcon": "heart",
            "link": "#",
        },
        {
            "id": "create",
            "name": "Create",
            "icon": "duplicate-outline",
            "activeIcon": "duplicate",
            "link": "#",
        },
        {
            "id": "profile",
            "name": "Profile",
            "img": "",
            "link": "#"
        },
        {
            "id": "more",
            "name": "More",
            "icon": "menu-outline",
            "activeIcon": "menu",
            "link": "#",
        }

    ];
    let navItemsSp = [
        {
            "id": "home",
            "name": "Home",
            "icon": "home-outline",
            "activeIcon": "home",
            "link": "/",
        },
        {
            "id": "explore",
            "name": "Explore",
            "icon": "compass-outline",
            "activeIcon": "compass",
            "link": "/search",
        },
        {
            "id": "create",
            "name": "Create",
            "icon": "duplicate-outline",
            "activeIcon": "duplicate",
            "link": "#",
        },
        {
            "id": "messages",
            "name": "Messages",
            "icon": "chatbubble-ellipses-outline",
            "activeIcon": "chatbubble-ellipses",
            "link": "#",
        },
        {
            "id": "profile",
            "name": "Profile",
            "img": "",
            "link": "#"
        },

    ];

    const SideNavItem = ({ link, icon, name, img }) => {
        {
            return (
                name === "Profile" ? (
                    <li className="nav-item py-4 flex justify-center md:justify-between flex-grow md:flex-grow-0">
                        <NavLink to={link} className="nav-link flex items-center">
                            <span className="img-container w-[25px] h-[25px] flex-[0_0_25px] rounded-full overflow-hidden flex items-center justify-center">
                                {
                                    img ? (
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    ) : (
                                        <img src="../src/assets/images/default.png" alt="" className="w-full h-full object-cover" />
                                    )
                                }
                            </span>
                            <span className="link-text pl-3 leading-none text-md font-light hidden lg:inline-block">{name}</span>
                        </NavLink>
                    </li>
                ) : (
                    <li className="nav-item py-4 flex justify-center md:justify-between flex-grow md:flex-grow-0">
                        <NavLink to={link} className="nav-link flex items-center">
                            <span className="icon-container w-[25px] h-[25px] flex-[0_0_25px] inline-flex justify-center items-end text-3xl">
                                <ion-icon name={icon}></ion-icon>
                            </span>
                            <span className="link-text pl-3 leading-none text-md font-light hidden lg:inline-block">{name}</span>
                        </NavLink>
                    </li>
                )

            )

        }
    }
    return (
        <>
            <nav className="main-nav-sp flex items-center justify-center md:hidden w-screen h-[50px] fixed bottom-0 border-t-2 border-t-gray-300 bg-white z-50">
                <ul className="nav-list flex w-full">
                    {
                        navItemsSp.map((nav, index) => {
                            return (
                                <SideNavItem
                                    link={nav.link}
                                    icon={nav.icon}
                                    activeIcon={nav.activeIcon}
                                    name={nav.name}
                                    key={nav.id}
                                    img={nav.img} />
                            )
                        })
                    }
                </ul>
            </nav>
            <nav className="main-nav py-5 px-3 w-[80px] lg:w-[226px] fixed h-screen border-r-2 border-r-gray-300 hidden md:block">
                <a href="#" className="home-link text-2xl text-black p-4 mb-2 block">
                    <span className="hidden lg:block">
                        Binstagram
                    </span>
                    <span className="icon-container flex justify-center items-center w-[25px] h-[25px] flex-[0_0_25px] text-3xl lg:hidden">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                </a>
                <ul className="nav-list px-4 pt-0 pb-4 h-[90%] flex flex-col">
                    {
                        navItems.map((nav, index) => {
                            return (
                                <SideNavItem
                                    link={nav.link}
                                    icon={nav.icon}
                                    name={nav.name}
                                    key={nav.id}
                                    img={nav.img}
                                    activeIcon={nav.activeIcon}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </>

    )
}

export default SideNav;