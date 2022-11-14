import React from "react";
import navModule from './Navigation.module.css';
const Nav = () => {
    return (
        <nav className={navModule.nav}>
            <div className={navModule.item}>
                <a href='/profile'>
                    Profile
                </a>
            </div>
            <div className={navModule.item}>
                <a href='/messages'>
                    Messages
                </a>
            </div>
            <div className={navModule.item}>
                <a href='/news'>
                    News
                </a>
            </div>
            <div className={navModule.item}>
                <a href='music'>
                    Music
                </a>
            </div>
            <div className={navModule.item}>
                <a href='settings'>
                    Settings
                </a>
            </div>
        </nav>
    )
}


export default Nav;