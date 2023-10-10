import React from "react";
import navModule from './Navigation.module.css';
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <nav className={navModule.nav}>
            <div className={navModule.item}>
                <NavLink className={({ isActive }) =>(isActive ? `${navModule.active}`: "")} to='/profile'>
                    Profile
                </NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink className={({ isActive }) =>(isActive ? `${navModule.active}`: "")} to='/messages'>
                    Messages
                </NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink className={({ isActive }) =>(isActive ? `${navModule.active}`: "")} to='/news'>
                    News
                </NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink className={({ isActive }) =>(isActive ? `${navModule.active}`: "")} to='music'>
                    Music
                </NavLink>
            </div>
            <div className={navModule.item}>
                <NavLink className={({ isActive }) =>(isActive ? `${navModule.active}`: "")} to='settings'>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}


export default Nav;