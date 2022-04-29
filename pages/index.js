import styles from '../styles/Home.module.css'
import NavBar from '../components/header'
import {useEffect, useState} from "react";
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
import Loading from "../components/loading"
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        AOS.init();
        AOS.refresh();
    }, []);

    return (
    <div className={styles.container}>
        {loading
            ?  <Loading/>
            : null
        }
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
