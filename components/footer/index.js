import React, { Component } from 'react';
import Image from "next/image";
import footerPilot from '../../public/images/footerPilot.png'
import contactTitle from '../../public/images/contactTitle.png'
class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id="footer" className="session">
                <div id={"black-background"}></div>
                <div id={"footer-text"}>
                    <Image src={contactTitle} layout={'raw'} className={'contact-title'}/>
                    <p className={'footer-p'}><span>HOTLINE: </span>0914481131</p>
                    <p className={'footer-p'}><span>EMAIl: </span>marketingarena2022@gmail.com</p>
                    <p className={'footer-p'}><span>FANPAGE: </span><a className={'footer-a'} href={'https://www.facebook.com/creatioftu2'}>https://www.facebook.com/creatioftu2</a></p>
                    <p className={'footer-p'}><span>WEBSITE: </span><a className={'footer-a'} href={'https://marketingarena2022.com'}>marketingarena2022.com</a></p>

                </div>
                    <Image width={815} height={555} id={'footer-pilot'} src={footerPilot}/>
            </div>

        );
    }
}

export default Footer ;
