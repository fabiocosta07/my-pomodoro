import './index.css'

export default function Task() {
    return (
        <div className="task">
            <div className="taskComponent taskHeader">
                <label>Tasks</label>
                <a><span className="material-icons">menu</span></a>
            </div>
            <div className="taskComponent taskList">
                <div className="taskComponent taskItem">
                    <span className="material-icons icon-white">task_alt</span>
                    <a> Task item</a>
                    <span className="material-icons icon-white">menu</span>
                </div>
            </div>
            <div className="taskComponent taskButton">
                <a>Add Task</a>
            </div>
            <div className="taskComponent taskSummary">
                <label>Task summary</label>
            </div>
        </div>
    )
}