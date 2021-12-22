import './index.css';
import useTimer from 'easytimer-react-hook';


export default function Timer() {
    const [timer, isTargetAchieved] = useTimer({ countdown: true, startValues: { minutes: 25 } });

    timer.start();
    return (
        <div className="timer">
            <div className="timerTab">
                <a className="tabButton" onclick="activateTab('Pomodoro')" >Pomodoro</a>
                <a className="tabButton" onclick="activateTab('Short Break')">Short Break</a>
                <a className="tabButton" onclick="activateTab('Long Break')">Long Break</a>
            </div>
            <label>{timer.getTimeValues().toString()}</label>
            <a className="timerButton">START</a>
        </div>
    )
}