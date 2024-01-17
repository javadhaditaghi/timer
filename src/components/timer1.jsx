import { useState } from "react";
import styles from "./timer1.module.css";


const TimerA = (props) => {

    const [time, setTime] = useState(props.time);
    const d = new Date();
    let second = d.getSeconds().toString();
    second = second < 10 ? "0" + second : second
    const minute = d.getMinutes().toString();
    const hour = d.getHours().toString();

    let timeHandler = () => {
        setTime(`${hour}:${minute}:${second}`)
    }

    return (
        <div className={styles.wrapper}>
            <h2>Exercise 1</h2>
            <h1>{time}</h1>
            <button onClick={timeHandler}>Get Time</button>
        </div>
    )
}

export default TimerA