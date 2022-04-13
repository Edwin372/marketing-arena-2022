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
                        <HeaderButton text="TRANG CHỦ"/>
                        <HeaderButton text="VỀ CHÚNG TÔI"/>
                        <DropDownButton text="MARKETING ARENA 2022"/>
                        <HeaderButton text="ĐĂNG KÝ"/>
                        <HeaderButton text="SỰ KIỆN"/>
                        <HeaderButton text="ĐỐI TÁC"/>
                        <HeaderButton text="LIÊN HỆ"/>
                    </ul>
                </div>
            </header>

        );
    }
}

export default NavBar;
