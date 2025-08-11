import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => {
            setTime(new Date());
    }, 1000);

    return () => clearInterval(timerID);
    }, []);

    const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const merid = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${merid}`;
    };

    function padZero(num) {
    return num < 10 ? '0' + num : num;
    }

    return (
    <div className=' w-[350px] h-[200px] bg-[#2E2E2E] rounded-xl m-auto mt-[10%] flex align-center justify-center'>
        <h1 className='h-[2rem] my-auto bg-[#fff] px-[10px] pt-[4px] rounded-xl text-[30px] h-[50px] '>{formatTime(time)}</h1>
    </div>
    );
}

export default Clock;
