import React, { Component } from 'react';
import Image from 'next/image'
import roundTitle from '../../public/images/roundtitle.png'
import roundLine from '../../public/images/lineround.png'
import roundItem from '../../public/images/roundItem.png'
import roundItem1 from '../../public/images/roundItem1.png'
import roundItem2 from '../../public/images/roundItem2.png'
import roundItem3 from '../../public/images/roundItem3.png'
import roundItem4 from '../../public/images/roundItem4.png'
import roundItem5 from '../../public/images/roundItem5.png'
import roundItem6 from '../../public/images/roundItem6.png'
import roundItem7 from '../../public/images/roundItem7.png'
import roundItem8 from '../../public/images/roundItem8.png'
import roundItem9 from '../../public/images/roundItem9.png'
import roundItem10 from '../../public/images/roundItem10.png'
import marketingArenaLogo from '../../public/images/marketingarenaIcon.png'
import congratChamp from '../../public/images/congratChamp.png'
import background from '../../public/images/roundbackground.png'
//
class Round extends Component {
    state = {  }
    render() {
        return (
            <div id="round" className="session">

                <Image
                    data-aos-duration="1000" data-aos='fade-up'
                    className={'round-title'}
                    src={roundTitle}
                    layout={'raw'}
                />
                <p data-aos-duration="1000" data-aos='fade-up' className={'round-structure-text'}>
                    Cuộc thi <span className={'yellow-span'}>MARKETING ARENA 2022</span> sẽ chính thức khởi
                    động từ ngày <span>02.05.2022</span> đến ngày <span>26.06.2022</span>. Các
                    đội thi sẽ được thử thách qua <span>3 chặng hành trình </span>
                    chính đa dạng và thách thức.
                </p>
                <div className={'round-structure'}>
                    <Image src={roundLine} layout={'raw'}  id={'line'}/>
                    <Image src={background} layout={'raw'} id={'background'}  className={'floating-image'}/>
                    <Image  priority={true} src={marketingArenaLogo} layout={'raw'} id={`logo`} className={'round-item'}/>

                    <Image data-aos-duration="1000" data-aos='fade-up' priority={true} src={roundItem} layout={'raw'} id={`r`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-left' priority={true} src={roundItem1} layout={'raw'} id={`r1`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-right' priority={true} src={roundItem2} layout={'raw'} id={`r2`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-up' priority={true} src={roundItem3} layout={'raw'} id={`r3`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-left' priority={true} src={roundItem4} layout={'raw'} id={`r4`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-right' priority={true} src={roundItem5} layout={'raw'} id={`r5`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-up' priority={true} src={roundItem6} layout={'raw'} id={`r6`}className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-left' priority={true} src={roundItem7} layout={'raw'} id={`r7`} className={'round-item'}/>
                    <Image data-aos-duration="1000" data-aos='fade-right' priority={true} src={roundItem8} layout={'raw'} id={`r8`}className={'round-item'}/>
                    <div className={'row-round'}>
                        <Image data-aos={"fade-left"} src={roundItem9} layout={'raw'} id={`r9`}className={'round-item'}/>
                        <Image data-aos={'fade-right'} src={roundItem10} layout={'raw'} id={`r10`}className={'round-item'}/>
                    </div>
                    <Image data-aos-duration="1000" data-aos='fade-down' src={congratChamp} layout={'raw'} id={`congrat-champ`} className={'round-item'}/>

                </div>
            </div>
        );
    }
}

export default Round;
