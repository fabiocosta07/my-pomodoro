import './index.css';

export default function Timer() {
    return (
        <div className="timer">
            <div className="timerTab">
                <a className="tabButton" onclick="activateTab('Pomodoro')" >Pomodoro</a>
                <a className="tabButton" onclick="activateTab('Short Break')">Short Break</a>
                <a className="tabButton" onclick="activateTab('Long Break')">Long Break</a>
            </div>
            <label>25:00</label>
            <a className="timerButton">START</a>
        </div>
    )
}