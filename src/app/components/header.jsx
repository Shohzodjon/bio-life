"use client";
import { useState, useEffect } from "react";
import { gsap } from "gsap";


const HeaderComp = () => {

    useEffect(() => {
        gsap.fromTo('.header',
            { scale: 1.3, opacity: 0 },
            { scale: 1, opacity: 1, duration: 2 ,delay:1})
    }, [])

    return (
        <header className="header">
            <div className="container">
                <div className="header__flex">
                    <h3 className="header__sub-title">Linus Kigai</h3>
                    <h1 className="header__title">Bringing
                        Concept to Life</h1>
                    <p className="header__desc">Lörem ipsum ditijybel beras fassade. Prel munira. Transperson bere då heterovalens. Kiling intraktig. Plasm ång refunde krobåling. </p>
                </div>
            </div>
        </header>
    )
}
export default HeaderComp;