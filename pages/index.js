import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/header'
import lax from 'lax.js'
import {useEffect} from "react";
import Landing from "../components/landing";
import About from "../components/about";
import Register from "../components/register";
import Rules from "../components/rules";
import Notes from "../components/notes";
import Award from "../components/award";
import Round from "../components/round";
import Structure from "../components/structure";
import Event from "../components/event";
import Partner from "../components/partners/partner";
export default function Home() {
    useEffect(() => {
        // Setup lax
        lax.init();

        lax.addDriver("scrollY", function () {
            return window.scrollY;
        });

        // Add your elements
        lax.addElements(
            ".fly-left",
            {
                scrollY: {
                    translateX: [
                        ["elInY", "elCenterY", "elOutY"],
                        [0, 'screenWidth/2', 'screenWidth'],
                    ]
                }
            },
            []
        );
    }, []);
  return (
    <div className={styles.container}>
        <NavBar/>
        <Landing/>
        <About/>
        <Round/>
        <Structure/>
        <Award/>
        <Notes/>
        <Rules/>
        <Register/>
        <Event/>
        <Partner/>
    </div>
  )
}
