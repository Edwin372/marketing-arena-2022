import React, { Component } from 'react';
import Image from 'next/image'
import champion from '../../public/images/champion.png'
import trueRunnerUp from '../../public/images/truerunnerup.png'
import runnerUp from '../../public/images/runnerup.png'
import championAward from '../../public/images/champprize.png'
import trueRunnerUpAward from '../../public/images/truerunnerupprize.png'
import runnerUpAward from '../../public/images/runnerupprize.png'
import awardTitle from '../../public/images/awardtitle.png'
import circle4 from '../../public/images/circle4.png'
import circle5 from '../../public/images/circle5.png'
import circle6 from '../../public/images/circle6.png'
import circle7 from '../../public/images/circle7.png'
import circle8 from '../../public/images/circle8.png'

class Award extends Component {
    state = {}
    render() {
        return (
            <div id="award" className="session">
                <Image
                    data-aos-duration="1000" data-aos='fade-up'
                    className={'award-title'} src={awardTitle} layout={'raw'}/>
                <div
                    id={'first'}
                    className={'sub-session'}
                >
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'champion'}
                        src={champion}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'champion-award'}
                        src={championAward}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-left'
                        className={'floating-image circle4'}
                        src={circle4}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-right'
                        className={'floating-image circle5'}
                        src={circle5}
                        layout={'raw'}
                    />
                </div>
                <div
                    id={'second'}
                    className={'sub-session'}
                >
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'true-runner-up'}
                        src={trueRunnerUp}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'true-runner-up-award'}
                        src={trueRunnerUpAward}
                        layout={'raw'}
                    />
                    <Image
                        data-aos='fade-down'
                        className={'floating-image circle6'}
                        src={circle6}
                        layout={'raw'}
                    />

                </div>
                <div
                    id={'third'}
                    className={'sub-session'}
                >
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'runner-up'}
                        src={runnerUp}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-up'
                        className={'runner-up-award'}
                        src={runnerUpAward}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-right'
                        className={'floating-image circle7'}
                        src={circle7}
                        layout={'raw'}
                    />
                    <Image
                        data-aos-duration="1000" data-aos='fade-left'
                        className={'floating-image circle8'}
                        src={circle8}
                        layout={'raw'}
                    />
                </div>
            </div>
        );
    }
}

export default Award;
