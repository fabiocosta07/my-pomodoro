import './App.css';
import Header from './components/header';
import Timer from './components/timer';
import Task from './components/task';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Timer></Timer>
      <Task></Task>
    </div>
  );
}

export default App;
