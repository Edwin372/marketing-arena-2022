import React, { Component } from 'react';
import Image from "next/image";
import partner from '../../public/images/partner.png'
import partnerTitle from '../../public/images/partnerTitle.png'


class Partner extends Component {
    state = {  }
    render() {
        return (
            <div id="partner" className="session">
                <Image data-aos-duration="1500" data-aos={'fade-down'} src={partnerTitle} layout={'raw'} id={'partner-title'}/>
                <Image data-aos-duration="1500" data-aos={'fade-up'} src={partner} layout={'raw'} id={'partner-content'}/>
            </div>

        );
    }
}

export default Partner ;
