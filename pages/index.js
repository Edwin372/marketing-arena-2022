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
import Event from "../components/event";
import Partner from "../components/partners/partner";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);



    return (
    <div className={styles.container}>
        <NavBar/>
        <Landing/>
        <About/>
        <Round/>
        <Award/>
        <Notes/>
        <Rules/>
        <Register/>
        <Event/>
        <Partner/>
        <Footer/>
    </div>
  )
}
