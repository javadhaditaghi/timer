import { useEffect, useState } from "react";
import styles from "./timer2.module.css";


const TimerB = (props) => {



    const [time, setTime] = useState("");


    useEffect(() => {
        const d = new Date();
        let second = d.getSeconds().toString();
        second = second < 10 ? "0" + second : second
        const minute = d.getMinutes().toString();
        const hour = d.getHours().toString();
        const intervalId = setInterval(() => {
            setTime(`${hour}:${minute}:${second}`)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    })
    return (
        <div>
            <h1>{time}</h1>
        </div>
    )
}

export default TimerB