import React, { useEffect } from 'react';
import { FaChartLine, FaCog, FaDelicious, FaRegClock, FaShoppingCart, FaSignOutAlt, FaWallet } from "react-icons/fa";
import Logo from '../images/logo.png';
import './Menu.css';

function Menu() {
    useEffect(() => {
        const mainMenuLi = document.getElementById("main-menu").querySelectorAll('li');

        function changeActive() {
            mainMenuLi.forEach( listElement => listElement.classList.remove('active'));
            this.classList.add('active');
        }
        mainMenuLi.forEach( listElement => listElement.addEventListener('click', changeActive));
    }, []);
  return ( 
    <menu>
        <img src={Logo} alt="" />

        <ul id="main-menu">
            <Icon icon={<FaDelicious />}></Icon>
            <Icon icon={<FaShoppingCart />}></Icon>
            <Icon icon={<FaWallet />}></Icon>
            <Icon icon={<FaChartLine />}></Icon>
            <Icon icon={<FaRegClock />}></Icon>
        </ul>

        <ul className="bottom-Menu">
            <Icon icon={<FaCog />}></Icon>
            <Icon icon={<FaSignOutAlt />}></Icon>
        </ul>
    </menu>
  )
}

const Icon = ({icon}) => (
    <li>
        <a href="#">
            <a href="#">{icon}</a>
        </a>
    </li>
)

export default Menu