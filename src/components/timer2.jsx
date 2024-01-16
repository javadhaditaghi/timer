import { useState } from "react";
import styles from "./timer1.module.css";


const TimerB = (props) => {

    const [time, setTime] = useState(props.time);
    const d = new Date();
    const second = d.getSeconds().toString();
    const minute = d.getMinutes().toString();
    const hour = d.getHours().toString();

    let timeHandler = () => {

        // let day = d.getDate();
        setTime(`${hour}:${minute}:${second}`)
    }

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={timeHandler}>Get Time</button>
        </div>
    )
}

export default TimerB