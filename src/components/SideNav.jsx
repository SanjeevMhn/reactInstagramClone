import React from 'react';

const SideNav = () => {

    let navItems = [
        {
            "id": "home",
            "name": "Home",
            "icon": "home-outline",
            "activeIcon": "home",
            "link": "#",
            "iconSource": "ionic",
        },
        {
            "id": "search",
            "name": "Search",
            "icon": "search-outline",
            "activeIcon": "search",
            "link": "#",
            "iconSource": "ionic",
        },
        {
            "id": "explore",
            "name": "Explore",
            "icon": "compass-outline",
            "activeIcon": "compass",
            "link": "#",
            "iconSource": "ionic",
        },
        {
            "id": "messages",
            "name": "Messages",
            "icon": "chatbubble-ellipses-outline",
            "activeIcon": "chatbubble-ellipses",
            "link": "#",
            "iconSource": "ionic",
        },
        {
            "id": "notifications",
            "name": "Notifications",
            "icon": "heart-outline",
            "activeIcon": "heart",
            "link": "#",
            "iconSource": "heart",
        },
        {
            "id": "create",
            "name": "Create",
            "icon": "duplicate-outline",
            "activeIcon": "duplicate",
            "link": "#",
            "iconSource": "ionic",
        },
    ]
    return (
        <nav className="main-nav p-3 w-[226px] fixed h-screen border-r-2 border-r-gray-300">
            <a href="#" className="home-link text-2xl text-black p-4 mb-2 block">
                Binstagram
            </a>
            <ul className="nav-list px-4 pt-0 pb-4">
                {
                    navItems.map((nav, index) => {
                        return (
                            <li className="nav-item" key={nav.id}>
                                <a href={nav.link} className="nav-link flex items-end">
                                    <span className="icon-container w-[20px] h-[20px] flex-[0_0_20px] inline-flex justify-center items-end">
                                        <ion-icon name={nav.icon}></ion-icon>
                                    </span>
                                    <span className="link-text pl-3 leading-3">{nav.name}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default SideNav;