import React, { Component } from 'react';

class MobileNavBar  extends Component {
    state = {}
    render() {
        return (
            <nav className="mobile-header navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#landing">TRANG CHỦ <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#about">VỀ CHÚNG TÔI</a>
                        <a className="nav-item nav-link" href="#round">THỂ LỆ VÒNG THI</a>
                        <a className="nav-item nav-link" href="#round">CƠ CẤU CUỘC THI</a>
                        <a className="nav-item nav-link" href="#award">CƠ CẤU GIẢI THƯỞNG</a>
                        <a className="nav-item nav-link" href="#notes">LƯU Ý DÀNH CHO THÍ SINH</a>
                        <a className="nav-item nav-link" href="#register">ĐĂNG KÝ</a>
                        <a className="nav-item nav-link" href="#event">SỰ KIỆN</a>
                        <a className="nav-item nav-link" href="#partner">ĐỐI TÁC</a>
                        <a className="nav-item nav-link" href="#footer">LIÊN HỆ</a>
                    </div>
                </div>
            </nav>

        );
    }
}

export default MobileNavBar;