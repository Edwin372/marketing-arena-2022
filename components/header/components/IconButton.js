import React  from 'react'
import Image from 'next/image'
export function IconButton({iconPath, width, height}) {
    return (
            <Image
                style={{
                     cursor: "pointer",
                }}
                src={iconPath}
                layout={"fixed"}
                width={width}
                height={height}
                onClick={event => {location.href = '#landing'}}
            />
    )
}
