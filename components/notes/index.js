import React, { Component } from 'react';
import circle1 from '../../public/svg/circle1.svg'
import circle2 from '../../public/images/circle2.png'
import circle3 from '../../public/svg/circle3.svg'
import dot from '../../public/svg/dot.svg'
import planeEngine from '../../public/images/planeEngine.png'
import noteBoard from '../../public/images/noteBoard.png'
import cross from '../../public/images/cross.png'
import Image from 'next/image'
class Notes extends Component {
    state = {  }
    render() {
        return (
            <div id="notes" className="session">
                <div data-aos={'fade-up'} className={`floating-image circle1`}>
                    <Image
                        src={circle1}
                        width={387}
                        height={387}
                        layout={'raw'}
                    />
                </div>
                <div data-aos={'fade-right'} className={`floating-image circle2 `}>
                    <Image
                        src={circle2}
                        width={520}
                        height={522}
                        layout={'raw'}
                    />
                </div>
                <div data-aos={'fade-left'} className={`floating-image circle3 lax `}>
                    <Image
                        src={circle3}
                        width={215}
                        height={219}
                        layout={'raw'}
                    />
                </div>
                <div data-aos={'fade-down'}  className={`floating-image dot`}>
                    <Image
                        src={dot}
                        width={217}
                        height={83}
                        layout={'raw'}
                        quality={100}
                    />
                </div>
                <div className={`floating-image plane-engine`}>
                    <Image
                        src={planeEngine}
                        width={394}
                        height={275}
                        layout={'raw'}
                    />
                </div>
                <div className={`floating-image cross lax  lax_preset_zigzag:970:200`}>
                    <Image
                        src={cross}
                        layout={'raw'}
                        width={350}
                        height={600}
                        quality={100}
                    />
                </div>
                <div data-aos={'fade-up'} className={'note-content'}>
                    <Image
                        className={'note-board'}
                        src={noteBoard}
                        priority={true}
                        quality={100}
                    />
                </div>
            </div>

        );
    }
}

export default Notes ;
