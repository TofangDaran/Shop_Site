import React , {useState} from 'react';

import './Navbar.css';

import Logo from '../Logo.png';
const Navbar = () => {

    const [mobileNav , setMobileNav] = useState(false);

    const hamburgerOnClickHandler = () => {
        setMobileNav(prevstate => !prevstate);
        console.log(mobileNav);
    }

    return (
        <div className='header-container'>
            <div className='c-header-container' >
                <div className='header-item header-left'>
                    <div className="hamburger-container mobile-header">
                        <a onClick={hamburgerOnClickHandler} className="hamburger"><i class="fas fa-bars"></i></a>
                    </div>
                    <div className='account-container'>
                        <a className='header-link'href="#account"><i class="fas fa-user"></i></a>
                    </div>
                    <div className='quick-search'>
                        <a className='header-link'href="#"><i class="fas fa-search"></i></a>
                    </div>
                </div>
                <div className='header-item header-center'>
                    <div className='header-center-item underline content-item'><a className='header-link' href="#Home">خانه</a></div>
                    <div className='header-center-item underline content-item'><a className='header-link' href="#Home">محصولات</a></div>
                    <div className='header-center-item logo-container'><a className='header-link' href="#Home"><img className='center-item-logo'src={Logo} alt="logo"/></a></div>
                    <div className='header-center-item underline content-item'><a className='header-link' href="#Home">درباره ما</a></div>
                    <div className='header-center-item underline content-item'><a className='header-link' href="#Home">ارتباط با ما</a></div>
                </div>
                <div className='header-item header-right'>
                    <div className='shopping-list'>
                        <a className='header-link'href="#shoppingList"><i class="fas fa-shopping-cart"></i></a>
                    </div>
                    <div className='like-list'>
                        <a className='header-link'href="likeList"><i class="fas fa-heart"></i></a>
                    </div>
                </div>
            </div>
            <div className={`mobile-header-container ${mobileNav ? '' : 'm-header-close'}`}>
                <div className='mobile-header m-first-header'>
                    <input placeholder=' جستجو برای محصول ...' type="text" name="search"/>
                </div>
                <div className='mobile-header m-second-header'>
                    <div className='m-account-container'>
                        <a className='header-link'href="#account"><i class="fas fa-user"></i></a>
                    </div>
                    <div className='m-like-list'>
                        <a className='header-link'href="likeList"><i class="fas fa-heart"></i></a>
                    </div>
                </div>
                <div className={`mobile-header m-third-header`}>
                    <div className='header-center-item m-header-item'>
                        <a className='header-link' href="#Home">خانه</a> 
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className='header-center-item m-header-item'>
                        <a className='header-link' href="#Home">محصولات</a> 
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className='header-center-item m-header-item'>
                        <a className='header-link' href="#Home">درباره ما</a> 
                        <i class="fas fa-angle-left"></i>
                    </div>
                    <div className='header-center-item m-header-item'>
                        <a className='header-link' href="#Home">ارتباط با ما</a>
                        <i class="fas fa-angle-left"></i>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Navbar;