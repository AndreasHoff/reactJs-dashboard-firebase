import React from 'react';
import { FaChartLine, FaCog, FaDelicious, FaRegClock, FaShoppingCart, FaSignOutAlt, FaWallet } from "react-icons/fa";
import Logo from '../images/logo.png';
import './Menu.css';

function Menu() {
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

        <ul className="last-menu">
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