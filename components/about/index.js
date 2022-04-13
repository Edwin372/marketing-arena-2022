import React, { Component } from 'react';
import Image from 'next/image'
import Helmet from '../../public/svg/helmet.svg'
import Picture from '../../public/svg/picture.svg'
import AboutTitle from '../../public/svg/about.svg'
import Cloud4 from '../../public/svg/cloud4.svg'
import lax from 'lax.js'
class About extends Component {
    state = {  }
    render() {
        return (
            <div id="about" className="session">
                <div className={`lax lax_preset_slideY:852:210 lax_preset_fadeIn:284:0 floating-image about-title`}>
                    <Image
                        src={AboutTitle}
                        width={340}
                        height={78}
                        layout={'raw'}
                    />
                </div>

                <div className={` about-content-container`}>
                    <div className={`about-content-picture`}>
                        <Image
                            className={`floating-image helmet`}
                            src={Helmet}
                            width={383}
                            height={403.65}
                            layout={"raw"}
                        />
                        <Image
                            className={`floating-image picture`}
                            src={Picture}
                            width={331}
                            height={368}
                            layout={"raw"}
                        />

                    </div>

                    <p id={"about-text"}><span>
                        <span>Sự đột phá </span>
                    </span>(Breakthrough)
                        không chỉ mang ý nghĩa như một thành tựu, một sự thành công hay khám phá ra một giải pháp mới.
                        <span>Sự đột phá </span> còn được miêu tả như sự xuyên qua, vượt khỏi những rào cản giới hạn
                        trong tư tưởng và khả năng. Tựa như con người tự tạo nên đôi cánh của riêng mình, thoát khỏi
                        giới hạn của mặt đất và chinh phục bầu trời, <span className='yellow-span' >
                            MARKETING ARENA 2022 </span> mang đến thông điệp
                        <span >“The Wildest Idea Stuns The World” </span>.
                        Tiếp nối sự thành công của 06 mùa thi trước, <span className='yellow-span' >MARKETING ARENA
                            2022 </span> chính là cơ hội để các Marketers được thử sức một
                        lần vượt qua giới hạn của bản thân, đột phá vươn đến tầm cao mới.
                    </p>

                </div>
                <Image
                    className={`floating-image cloud4`}
                    src={Cloud4}
                    layout={'raw'}
                />

            </div>

        );
    }
}

export default About ;

