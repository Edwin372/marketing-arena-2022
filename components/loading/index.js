import React, { Component } from 'react';
import Image from "next/image";
import loaderIcon from '../../public/svg/loader.svg'
import creatio from '../../public/svg/creatio.svg'

class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id="loading" className="floating-image">
                <Image width={400} height={400}  data-aos={"fade-up"} priority={true} src={creatio} layout={'raw'} className={'loader-logo'}/>
                <Image data-aos={"fade-down"} priority={true} src={loaderIcon} layout={'raw'} className={'loader-icon'}/>

            </div>

        );
    }
}

export default Footer ;
