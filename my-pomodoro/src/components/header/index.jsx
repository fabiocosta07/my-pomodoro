
import './index.css';

export default function Header() {
    return (
        <div className="header">
            <span className="material-icons iconTask">task_alt</span>
            <a className="logo" href="#0">My Pomodoro</a>
            <a className="headerButton" href="#1">
                <span className="material-icons inconReport">insert_chart</span>
                <span>Report</span>
            </a>
            <a className="headerButton" href="#2">
                <span className="material-icons inconReport">settings</span>
                <span>Setting</span>
            </a>
            <a className="headerButton" href="#3">
                <span className="material-icons inconReport">account_circle</span>
                <span>Login</span></a>
        </div>
    )
}

