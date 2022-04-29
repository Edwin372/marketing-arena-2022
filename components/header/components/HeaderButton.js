import React  from 'react'
export function HeaderButton({text, section}) {
        return (
            <a href={`#${section}`} type="button" className='btn btn-outline-warning header-btn'>{text}</a>
        )
}


