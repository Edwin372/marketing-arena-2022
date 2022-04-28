
import React, { useEffect, useState } from "react";

const Counter = ({targetTime}) => {
    const [currentTime, setCurrentTime] = useState(Date.now());

    const timeBetween = targetTime - currentTime;
    const seconds = Math.floor((timeBetween / 1000) % 60);
    const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
    const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="counter">
                <div className={'time-container'}>
                    <p className={'time-value'}>{days}</p>
                    <p className={'time-unit'}>ngày</p>
                </div>
                <div className={'time-container'}>
                    <p className={'time-value'}>{hours}</p>
                    <p className={'time-unit'}>giờ</p>
                </div>
                <div className={'time-container'}>
                    <p className={'time-value'}>{minutes}</p>
                    <p className={'time-unit'}>phút</p>
                </div>
                <div className={'time-container'}>
                    <p className={'time-value'}>{seconds}</p>
                    <p className={'time-unit'}>giây</p>
                </div>
            </div>
        </>
    );
}
export default Counter;