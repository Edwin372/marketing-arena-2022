import React, { Component } from 'react';
import Image from 'next/image'
import { useLax, useLaxElement } from 'use-lax';
import lax from 'lax.js'
import cloud1 from '../../public/svg/cloud1.svg'
import cloud2 from '../../public/svg/cloud2.svg'
import cloud3 from '../../public/svg/cloud3.svg'
import title from '../../public/svg/title.svg'
import plane from '../../public/svg/plane.svg'

function Landing() {
    useLax({
        drivers: [
            {
                name: 'scrollY',
                getValueFn: () => window.scrollY,
            },
        ],
    });
        return (
            <div id='landing' className="session">

                    <Image
                        className={`floating-image cloud1`}
                        src={cloud1}
                        width={501.65}
                        height={308.26}
                        layout={"raw"}
                    />
                 <div className={`lax lax_preset_slideX:852:150 floating-image cloud2`}>
                    <Image
                        src={cloud2}
                        width={786}
                        height={326}
                        layout={"raw"}
                     />
                </div>
                <div className={`lax lax_preset_slideX:852:100 floating-image cloud3 `}>
                    <Image
                        src={cloud3}
                        width={1202}
                        height={563}
                        layout={"raw"}
                    />
                </div>

                <div className={`lax lax_preset_slideX:852:-250 floating-image plane`}>
                    <Image
                        src={plane}
                        width={1344}
                        height={486}
                        priority={true}
                        layout={"raw"}

                    />
                </div>
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

export default Landing ;
