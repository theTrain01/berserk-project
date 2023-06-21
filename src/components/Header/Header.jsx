import React from 'react'
import { NavLink } from 'react-router-dom';

import { ComponentUiClose, ComponentUiOpen } from '../../assets/ui component/ComponentUIOpen';
import './Header.scss'

export const Header = () => {
    const [openMenu, setOpenMenu] = React.useState(false)
    const [errorMessage] = React.useState(true)

    const openMenuBurger = () => {
        setOpenMenu(true)
    }
    const closeMenuBurger = () => {
        setOpenMenu(false)
    }
    
    return (
        <header>
            <div className='header_wrapper'>
                <div className='header_inner'>
                    <div className='header_item__logo'>
                        <NavLink to="/">
                            <svg
                                width="73"
                                height="127"
                                viewBox="0 0 73 127"
                                fill="none"
                                className='logo'
                                xmlns="http://www.w3.org/2000/svg">
                                
                                <path
                                    d="M40.5 109.5V73.5L60 90L40.5 109.5Z"
                                    stroke="#00C2FF" />
                                <path
                                    d="M32.5 110V73.5L12 89.5L32.5 110Z"
                                    stroke="#00C2FF" />
                                <path
                                    d="M45 15.5L36.5 1L27.5 15.5L32 20V52L12 33L22 20H25V8.5L14.5 13L15.5 15.5L1 33L32 63.5L1 89L36.5 125.5L71.5 89L40.5 63.5L71.5 33L57.5 15.5L58.5 13L48.5 8.5V20H51.5L61 33L40.5 51V20L45 15.5Z"
                                    stroke="#00C2FF" />
                            </svg>
                        </NavLink>
                    </div>

                    <div className="header_item__navigation">
                        <nav>
                            <NavLink to="/WatchAnime" className="nav__link">
                                Watch anime
                            </NavLink>
                            
                            <NavLink to="/AllAbout" className="nav__link">
                                All about Berserk
                            </NavLink>

                            <NavLink to="/MasterpieceCreator" className="nav__link">
                                Masterpiece Creator
                            </NavLink>
                        </nav>
                    </div>
                    

                    <div className='wrapper_burger_menu'>
                        {openMenu ? '' : <ComponentUiOpen onClickButton = {openMenuBurger}/>}
                        {openMenu &&
                            <div className='burger_menu'>
                                <ComponentUiClose onClickButton = {closeMenuBurger}/>
                                <nav>
                                    <NavLink to={errorMessage ? '/' : '/WatchAnime'} className="nav__link nav__link_burger">
                                        Watch anime
                                    </NavLink>

                                    <NavLink to="/AllAbout" className="nav__link nav__link_burger">
                                        All about Berserk
                                    </NavLink>

                                    <NavLink to="/MasterpieceCreator" className="nav__link nav__link_burger">
                                        Masterpiece Creator
                                    </NavLink>
                                </nav>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}