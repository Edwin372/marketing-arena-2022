import React, { Component } from 'react';
import Image from 'next/image'
import registerTitle from '../../public/images/registerTitle.png'
import registerCloud from '../../public/images/registerCloud.png'
import individualRegister from '../../public/images/individualRegister.png'
import groupRegister from '../../public/images/groupRegister.png'
import dynamic from "next/dynamic";
const Counter = dynamic(
    () => import('./Counter.js'),
    { ssr: false }
)
class Register extends Component {
    state = {
        targetTime: new Date("May 13 2022 09:00:00 GMT+0700 (Indochina Time)").getTime()
    }
    render() { 
        return (
            <div id="register" className="session">
                <Image
                    data-aos={'zoom-in'}
                    id={'register-title'}
                    src={registerTitle}
                    layout={'raw'}
                />
                <div>
                    <Image
                        data-aos-duration="1000" data-aos={"fade-left"}
                        className={'floating-image register-cloud'}
                        src={registerCloud}
                        layout={'raw'}
                    />
                    <div  data-aos-duration="1500" data-aos={"fade-up"} id={'register-container'}>
                        <div className={'register-link'}>
                            <Image
                                width={383}
                                height={383}
                                onClick={(e) => {location.href = 'https://vlrl8wq6g5f.typeform.com/MA22-DANG-KI';}}
                                id={'group-register'}
                                src={groupRegister}
                                layout={'raw'}
                                className={'register-image'}
                            />
                            <Counter targetTime={this.state.targetTime}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Register;
