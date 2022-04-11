import useTimer from "easytimer-react-hook";

const TimerDisplay = (props) => {
    const [timer, isTargetAchieved] = useTimer({ countdown: true, startValues: { minutes: 25 } });

    return <p>TimerDisplay</p>
}

export default TimerDisplay