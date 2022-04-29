import React, {useState, useEffect, useRef} from 'react'
import header from "../index";



export function DropDownButton({text}) {
    const [toggle, setToggle] = useState(false)

    return (
        <div className="dropdown">
            <button className="header-btn btn btn-outline-warning header-dropdown  dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-expanded="false" onClick={e => {setToggle(!toggle)}}>
                {text}
            </button>
            <ul className={`header-dropdown-menu dropdown-menu ${toggle ? 'visible' : 'hidden'}`} aria-labelledby="dropdownMenuButton">
                <li><a className="header-dropdown-item dropdown-item" href="#round" onClick={e => {setToggle(!toggle)}}>Thể lệ vòng thi</a></li>
                <li><a className="header-dropdown-item dropdown-item" href="#round" onClick={e => {setToggle(!toggle)}}>Cơ cấu cuộc thi</a></li>
                <li><a className="header-dropdown-item dropdown-item" href="#award" onClick={e => {setToggle(!toggle)}}>Cơ cấu giải thưởng</a></li>
                <li><a className="header-dropdown-item dropdown-item" href="#notes" onClick={e => {setToggle(!toggle)}}>Lưu ý dành cho thí sinh</a></li>
            </ul>
        </div>
    )
}


