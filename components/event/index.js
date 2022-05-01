import React, { Component } from 'react';
import eventTitle from '../../public/images/eventTitle.png'
import helmet from '../../public/images/eventHelmet.png';
import informationDay from '../../public/images/informationDay.png';
import Image from "next/image";
import machine from '../../public/images/eventMachine.png';
import briefDay from '../../public/images/briefDay.png';
import trophy from '../../public/images/eventTrophy.png';
import galaNight from '../../public/images/galaNight.png';
import roundElement from '../../public/images/eventRoundElement.png';

class Event extends Component {
    state = {  }
    render() {
        return (
            <div id="event" className="session">
                <Image data-aos-duration="1000" data-aos={'fade-up'} src={eventTitle} className={'event-title'} layout={'raw'}/>
                <div className={'event-session'}>
                    <div className={'text-container'}>
                        <Image data-aos-duration="1000" data-aos={'fade-up'} src={informationDay} className={'information-day'} width={210} height={106} layout={'raw'}/>
                        <p data-aos-duration="1000" data-aos={'fade-up'} className={'text-size'} id={'info-text'}>Nhằm giúp những thí sinh nắm được thông tin chi tiết về cuộc thi cũng như hình thức thi trắc nghiệm Creatio sẽ tổ chức một buổi <span>Information Day</span> dưới hình thức online ngay sau khi bài phát động đăng ký tham gia . Với sự góp mặt của các chuyên gia đầu ngành dày dặn kinh nghiệm trong lĩnh vực Marketing, buổi <span>Information Day</span> hứa hẹn sẽ gửi đến các thí sinh những lời khuyên mang tính chuyên môn về cách tiếp cận với <span>ngành Marketing</span> nói chung và <span>ngành hàng của đề bài năm nay</span> nói riêng.
                        </p>
                        <a href={'https://vlrl8wq6g5f.typeform.com/InfoDay-DANG-KI '} className={'event-btn'}>Đăng ký tham dự Information Day</a>
                    </div>
                    <Image data-aos-duration="1000" data-aos={'fade-left'} src={helmet} className={'helmet2'} width={508} height={474} layout={'raw'}/>
                </div>
                <div className={'event-session'}>
                    <Image data-aos-duration="1000" data-aos={'fade-up'} src={machine} className={'machine'} width={496} height={460} layout={'raw'}/>
                    <div className={'text-container'}>
                        <Image data-aos-duration="1000" data-aos={'fade-down'} src={briefDay} className={'brief-day'} width={210} height={106} layout={'raw'}/>
                        <p data-aos-duration="1000" data-aos={'fade-right'} className={'text-size'} id={"brief-text"}>Bắt đầu vòng đề xuất kế hoạch truyền thông tích hợp, buổi <span>Brief Day</span> sẽ tạo cho thí sinh cơ hội thấu hiểu hơn về <span>ngành hàng</span> cùng <span>thách thức Marketing</span> của đề bài. Thông qua sự kiện, các đội thi sẽ được trò chuyện trực tiếp cùng các đại diện đến từ doanh nghiệp ra đề và nhận được những kiến thức chuyên môn bổ ích. Đây hứa hẹn sẽ là một trải nghiệm bổ ích, không thể bỏ qua của top 200.
                        </p>
                    </div>
                </div>
                <div className={'gala-night-container'}>
                    <Image data-aos-duration="1000" data-aos={'fade-left'} src={trophy} className={'floating-image trophy'} layout={'raw'}/>
                    <Image data-aos-duration="1000" data-aos={'fade-right'} src={roundElement} className={'floating-image round-element'}  layout={'raw'}/>
                    <Image data-aos-duration="1000" data-aos={'fade-down'} src={galaNight} className={'image gala-night'} layout={'raw'}/>
                    <p data-aos-duration="1000" data-aos={'fade-up'} id={'gala-night-text'}>Tham gia đêm Gala, khán giả sẽ có cơ hội chứng kiến màn tranh tài gây cấn từ <span>04 đội chơi </span>
                        Những phần trình bày bùng nổ, các kế hoạch thực thi đột phá, tác phẩm sáng tạo nổi bật, những lập
                        luận sắc xảo cùng hàng loạt chất vấn “căng não” đến từ các vị chuyên gia “ cầm cân nẩy mực” cho Đêm
                        Chung kết,... Tất cả đều là những trải nghiệm vô cùng đáng giá cho quá trình học hỏi và phát triển
                        bản thân của các Marketers tương lai.
                    </p>
                    <a href={'https://vlrl8wq6g5f.typeform.com/GALA-DANG-KY'} className={'event-btn'}>Đăng ký tham dự Gala Night</a>
                </div>
            </div>
        );
    }
}

export default Event ;
