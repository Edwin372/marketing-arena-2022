import React, { Component } from 'react';
import cloudBackground from '../../public/images/cloudBackground.png'
import ruleBoard from '../../public/images/ruleBoard.png'
import Image from 'next/image'
import cloud8 from '../../public/svg/cloud8.svg'
import cloud9 from '../../public/svg/cloud9.svg'
import cloud10 from '../../public/svg/cloud10.svg'
import cloud11 from '../../public/images/cloud11.png'
import rulesSession from '../../public/images/rulesession.png'

class Rules extends Component {
    state = {  }
    render() {
        return (
            <div
                id="rules"
                className="session"
            >
                <div
                    id="rules-board"
                    className="session"
                >
                    <Image
                        src={cloud11}
                        className={`floating-image cloud11`}
                        width={2456}
                        height={656}
                        layout={'raw'}
                    />
                    <Image
                        src={cloud11}
                        className={`floating-image cloud12`}
                        width={2456}
                        height={656}
                        layout={'raw'}
                    />
                    <Image
                        className={`rule-board`}
                        src={ruleBoard}
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


                </div>
                <Image
                    priority={true}
                    quality={100}
                    height={1461}
                    src={rulesSession}
                    className={'rule-session'}
                    layout={'raw'}
                />

            </div>

        );
    }
}

export default Rules;
