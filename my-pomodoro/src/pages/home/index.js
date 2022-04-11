import Header from '../../components/header';
import Task from '../../components/task';
import Timer from '../../components/timer';
import './index.css';

export default function Home() {
    return (
        <>
            <Header></Header>
            <Timer></Timer>
            <Task></Task>
        </>
    );
}