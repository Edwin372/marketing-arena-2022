import React, { Component } from 'react';
import Image from "next/image";
import footer from '../../public/images/footer.png'
class Footer extends Component {
    state = {  }
    render() {
        return (
            <div id="footer" className="session">
                <Image priority={true} id={'footer-content'} src={footer} layout={'raw'}/>
            </div>

        );
    }
}

export default Footer ;
