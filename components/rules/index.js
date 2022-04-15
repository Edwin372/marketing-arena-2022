import React, { Component } from 'react';
import cloudBackground from '../../public/images/cloudBackground.png'
import ruleBoard from '../../public/images/ruleBoard.png'
import Image from 'next/image'
import cloud8 from '../../public/svg/cloud8.svg'
import cloud9 from '../../public/svg/cloud9.svg'
import cloud10 from '../../public/svg/cloud10.svg'
import pilot from '../../public/images/pilot.png'

class Rules extends Component {
    state = {  }
    render() {
        return (
            <div
                id="rules"
                className="session"
            >
                <Image
                    className={`floating-image rule-board`}
                    src={ruleBoard}
                    width={1074}
                    height={777}
                    priority={true}
                    quality={100}
                    layout={"raw"}
                />
                <Image
                    className={'floating-image cloud-background'}
                    src={cloudBackground}
                    layout={"raw"}
                    priority={true}
                />
                <div className={`floating-image cloud8`}>
                    <Image
                        src={cloud8}
                        layout={"raw"}
                        width={1468}
                        height={443}
                    />
                </div>
                <div className={'floating-image cloud9'}>
                    <Image
                        src={cloud9}
                        layout={"raw"}
                        width={516}
                        height={248}
                    />
                </div>
                <div className={'floating-image cloud10'} >
                    <Image
                        src={cloud10}
                        layout={"raw"}
                        width={859}
                        height={269}
                    />
                </div>
                <div className={'pilot'} >
                    <Image
                        src={pilot}
                        layout={"raw"}
                        width={1519}
                        height={853}
                    />
                </div>

            </div>

        );
    }
}

export default Rules;
