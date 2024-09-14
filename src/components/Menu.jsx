'use client'

import React, { useLayoutEffect, useRef, useState } from 'react'
import './css/menu.css'
import { gsap } from 'gsap'
import Link from 'next/link'

function Menu() {
    const container = useRef();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const menuLinks = [
        { path: '/', label: "Home" },
        { path: '/projects', label: "Projects" },
        { path: '/about', label: "About" },
        { path: '/contact', label: "Contact" },
        { path: '/', label: "Lab" },
    ];

    const t1 = useRef();

    useLayoutEffect(() => {
        if (isMenuOpen) {
            gsap.set('.menu-links-item-holder', { y: 75 });
            t1.current = gsap.timeline({ paused: true })
                .to(".menu-overlay", {
                    duration: 1.25,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    ease: "power4.inOut"
                })
                .to(".menu-links-item-holder", {
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.inOut",
                    delay: -0.75,
                }).play();
        } else {
            t1.current && t1.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <div className='menu-container' ref={container}>
            <div className='menu-bar'>
                <div className="menu-logo">
                    <Link href='/'>Arif Rahman</Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            {isMenuOpen && (
                <div className="menu-overlay">
                    <div className="menu-overly-bar">
                        <div className="menu-logo">
                            <Link href='/'>Arif</Link>
                        </div>
                        <div className="menu-close" onClick={toggleMenu}>
                            <p>Close</p>
                        </div>
                    </div>
                    <div className="menu-close-icon" onClick={toggleMenu}>
                        <p>&#x2715;</p>
                    </div>
                    <div className="menu-copy">
                        <div className="menu-links">
                            {menuLinks.map((link, index) => (
                                <div className="menu-link-item" key={index}>
                                    <div className="menu-links-item-holder" onClick={toggleMenu}>
                                        <Link href={link.path} className='menu-link'>
                                            {link.label}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="menu-info">
                            <div className="menu-info-col">
                                <a href="#">X &#8599;</a>
                            </div>
                            <div className="menu-info-col">
                                <p>test123@gmail.com</p>
                                <p>02380283s</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-preview">
                        <p>View Show Reel</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu
