import React, { Component } from 'react';
import Image from "next/image";
import partner from '../../public/images/partner.png'
import partnerTitle from '../../public/images/partnerTitle.png'
import diamond1 from '../../public/images/diamonPartner1.png'
import diamond2 from '../../public/images/diamonPartner2.png'
import diamondTitle from '../../public/images/diamonPartnerTitle.png'
import golden from '../../public/images/goldenPartner.png'
import bronze from '../../public/images/bronzePartner.png'
import bronze1 from '../../public/images/bronzePartner1.png'
import bronze2 from '../../public/images/bronzePartner2.png'
import bronze3 from '../../public/images/bronzePartner3.png'
import bronze4 from '../../public/images/bronzePartner4.png'
import bronzeTitle from '../../public/images/bronzePartnerTitle.png'
import partner1 from '../../public/images/partner1.png'
import partner2 from '../../public/images/partner2.png'
import media from '../../public/images/media.png'
import accompany from '../../public/images/accompanyPartner.png'

class Partner extends Component {
    state = {  }
    render() {
        return (
            <div id="partner" className="session">
                <Image data-aos-duration="1500" data-aos={'fade-down'} src={partnerTitle} layout={'raw'} id={'partner-title'}/>
                <div className={'top-partners-container'}>
                    <Image src={partner} layout={'raw'} id={'partner-0'}/>
                    <Image src={partner1} layout={'raw'} id={'partner-1'}/>
                </div>
                <div className={"diamond-container"}>
                    <div className={'diamond-logo'}>
                        <Image src={diamond1}
                               onClick={(e) => {location.href = 'https://obagimedical.com.vn/';}}
                               layout={'raw'}
                               id={'diamond-logo-1'}/>
                        <Image src={diamond2}
                               onClick={(e) => {location.href = 'https://careers.chotot.com/?fbclid=IwAR31MSfL-Qn0a_E-rKdsC1OXnfSdKxXSGfE17Q0EWz8-YTWQKAYPPEdRjlM';}}
                               layout={'raw'}
                               id={'diamond-logo-2'}/>
                    </div>
                    <Image src={diamondTitle} layout={'raw'} id={'diamond-title'}/>
                </div>
                <div className={'golden-bronze-container'}>
                    <Image src={golden}
                           onClick={(e) => {location.href = 'https://sammishop.com/?fbclid=IwAR1tYCQnXtI3o4kxQInl_UUW97DmJMfqmMo9bKgNXaRVOe6RjsvHi2OAhR4';}}
                           layout={'raw'}
                           id={'golden-logo'}/>
                    <div className={'bronze-container'}>
                        <div className={'bronze-logos'}>
                            <Image src={bronze}
                                   onClick={(e) => {location.href = 'https://www.facebook.com/VN.Halio';}}
                                   layout={'raw'}
                                   id={'bronze-logo'}/>
                            <Image src={bronze1}
                                   onClick={(e) => {location.href = 'https://www.bmg.edu.vn/bmg/?fbclid=IwAR31MSfL-Qn0a_E-rKdsC1OXnfSdKxXSGfE17Q0EWz8-YTWQKAYPPEdRjlM';}}
                                   layout={'raw'}
                                   id={'bronze-logo-1'}/>
                        </div>
                        <div className={'bronze-logos'}>
                            <Image src={bronze2}
                                   onClick={(e) => {location.href = 'https://sakos.vn/?fbclid=IwAR3ainQSRem38heyz4SVeDuc2hXCUZqnaF5ekvnF2pTW5NT1buVkLgx1Lu0';}}
                                   layout={'raw'}
                                   id={'bronze-logo-2'}/>
                            <Image src={bronze3}
                                   onClick={(e) => {location.href = 'https://www.facebook.com/tuyendungladipage';}}
                                   layout={'raw'}
                                   id={'bronze-logo-3'}/>
                            <Image src={bronze4}
                                   onClick={(e) => {location.href = 'https://thecoffeehouse.com/?fbclid=IwAR1MRY2XqOHc2naaE9YYGUr31rMJVSEvuuMuzVeN1bmuJpV7VYVHqOjfdxc';}}
                                   layout={'raw'}
                                   id={'bronze-logo-4'}/>
                        </div>

                        <Image src={bronzeTitle} layout={'raw'} id={'bronze-title'}/>
                    </div>
                </div>
                <div className={'top-partners-container'}>
                    <Image src={media} layout={'raw'} id={'media'}/>
                    <Image src={accompany} layout={'raw'} id={'accompany'}/>
                </div>
            </div>
        );
    }
}

export default Partner ;
