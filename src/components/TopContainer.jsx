import React, { useEffect } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FaBell, FaChevronDown } from 'react-icons/fa'
import ProfileImage from '../images/woman.jpg'

function TopContainer() {
    useEffect(() => {
        const menuTarget = document.getElementById('menu-chevron');
        const menuContainer = document.getElementById('menu-container');

        menuTarget.addEventListener('mouseenter', () => {
            menuTarget.style.transform = 'rotate(180deg)';
            menuContainer.style.transform = 'translateX(0px)';
        });

        menuContainer.addEventListener('mouseleave', () => {
            menuTarget.style.transform = 'rotate(0deg)';
            menuContainer.style.transform = 'translateX(300px)';
        });
    }, [])
    return (
        <div className='top-container'>
            <div className="search-bar">
                <input type="text" placeholder="Search items & collections"/>
                <i><BiSearchAlt/></i>
            </div>

            <div className="profile-container">
                <i className="profile-icon">
                    <FaBell />
                </i>
                <div className="profile-image">
                    <img src={ProfileImage} alt="" />
                </div>
                <p className="profile-name">
                    Olivia Dunham
                </p>
                <i className="menu-chevron" id='menu-chevron'>
                    <FaChevronDown />
                </i>
                <div className="menu-container" id='menu-container'>
                    <ul>
                        <li>Web Design</li>
                        <li>UX Designs</li>
                        <li>Frontend development</li>
                        <li>Backend Development</li>
                        <li>Services</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopContainer