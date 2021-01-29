import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die face={'five'}/>
      <Die face={'two'}/>
      <Die face={'six'}/>
      <Die face={'two'}/>
    </div>
  );
}

export default App;
