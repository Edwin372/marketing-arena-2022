import React, { Component } from 'react';
import {IconButton} from "../header/components/IconButton";
import CreatioLogo from "../../public/svg/creatio.svg";
import Logo from "../../public/svg/logo.svg";

class MobileNavBar  extends Component {
    state = {
        show: false
    }

    render() {
        return (

            // </nav>
            <nav style={{position: 'fixed', padding: 0}}  className="mobile-header navbar navbar-expand-lg navbar-light bg-light">
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between' ,
                    alignItems: 'center',
                    width: '100%',
                    paddingLeft: 20,
                    paddingRight: 20,
                    background: 'white',
                    border: 'none',
                    boxShadow: '0px 4px 14px -3px rgba(0, 0, 0, 0.3)'
                }}>
                    <div style={{
                       display: 'flex',
                       flexDirection: "row",
                       alignItems: 'center'
                    }}>
                        <IconButton iconPath={CreatioLogo} width={93} height={93}/>
                        <IconButton iconPath={Logo} width={73} height={79}/>
                    </div>
                    <button style={{
                        border: "none",
                        width: 70,
                        height: 70,

                    }} type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation" onClick={e => {this.setState({show: !this.state.show})}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div style={{
                    display: `${this.state.show ? 'flex' : 'none'}`,
                    flexDirection: 'column',
                    paddingTop: 50
                }} className={`${this.state.show ? 'visible' : 'hidden'}`} id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{flexDirection: 'column', height: '1024px' }}>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link " href="#landing"><span>TRANG CHỦ</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#about"><span>VỀ CHÚNG TÔI</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#round"><span>THỂ LỆ VÒNG THI</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#round"><span>CƠ CẤU CUỘC THI</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#award"><span>CƠ CẤU GIẢI THƯỞNG</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#notes"><span>LƯU Ý DÀNH CHO THÍ SINH</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#register"><span>ĐĂNG KÝ</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#event"><span>SỰ KIỆN</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#partner"><span>ĐỐI TÁC</span></a>
                        <a  onClick={e => {this.setState({show: !this.state.show})}} className="nav-item nav-link" href="#footer"><span>LIÊN HỆ</span></a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MobileNavBar;