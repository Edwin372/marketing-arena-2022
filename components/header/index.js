import React, { Component } from 'react';
import  {HeaderButton} from './components/HeaderButton'
import {IconButton} from "./components/IconButton";
import CreatioLogo from '../../public/svg/creatio.svg'
import Logo from '../../public/svg/logo.svg'
import {DropDownButton} from "./components/DropDownButton";

class NavBar extends Component {
    state = {}
    render() {
        return (
            <header className="header navbar navbar-expand-lg navbar-light bg-light">
                <div className="header-container container-fluid ">
                    <div className="nav justify-content-center align-items-center">
                        <IconButton iconPath={CreatioLogo} width={112} height={112}/>
                        <IconButton iconPath={Logo} width={93} height={79}/>
                    </div>
                    <ul className="nav justify-content-end m-5">
                        <HeaderButton section={'landing'} text="TRANG CHỦ"/>
                        <HeaderButton section={'about'} text="VỀ CHÚNG TÔI"/>
                        <DropDownButton text="MARKETING ARENA 2022"/>
                        <HeaderButton section={'register'} text="ĐĂNG KÝ"/>
                        <HeaderButton  section={'event'}text="SỰ KIỆN"/>
                        <HeaderButton  section={'partner'}text="ĐỐI TÁC"/>
                        <HeaderButton section={'footer'} text="LIÊN HỆ"/>
                    </ul>
                </div>
            </header>

        );
    }
}

export default NavBar;
