import React, { Component } from 'react';
import Image from 'next/image'
import lax from 'lax.js'
import cloud1 from '../../public/svg/cloud1.svg'
import cloud2 from '../../public/svg/cloud2.svg'
import cloud3 from '../../public/svg/cloud3.svg'
import title from '../../public/svg/title.svg'
import plane from '../../public/svg/plane.svg'

class Landing extends Component {
    state = {  }
    render() {
        return (
            <div id='landing' className="session">
                <Image
                    className={`floating-image cloud1`}
                    src={cloud1}
                    width={501.65}
                    height={308.26}
                    layout={"raw"}
                />
                <Image
                    className={`floating-image cloud2`}
                    src={cloud2}
                    width={786}
                    height={326}
                    layout={"raw"}
                />
                <Image
                    className={`floating-image cloud3`}
                    src={cloud3}
                    width={1202}
                    height={563}
                    layout={"raw"}
                />
                <Image
                    className={`floating-image plane`}
                    src={plane}
                    width={1344}
                    height={486}
                    priority={true}
                    layout={"raw"}

                />
                <Image
                    className={`floating-image title`}
                    src={title}
                    width={818.93}
                    height={944.66}
                    priority={true}
                    layout={"raw"}
                />

            </div>

        );
    }
}

export default Landing ;
