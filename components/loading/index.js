import React, { Component } from 'react';
import Image from "next/image";
import loaderIcon from '../../public/svg/loader.svg'
class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id="loading" className="floating-image">
                <Image priority={true} src={loaderIcon} layout={'raw'} className={'loader-icon'}/>

            </div>

        );
    }
}

export default Footer ;
