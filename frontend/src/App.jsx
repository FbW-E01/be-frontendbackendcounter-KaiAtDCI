import './App.scss';
import {useState} from "react";

export default function App() {

  const [counter, setCounter] = useState(0);

  const increaseValue = async () => await fetch(`/counter`, { method: 'post' });
  const getValue = async () => {
    const response = await fetch(`/counter`, { method: 'get' });
    const body = await response.json();
    setCounter(body.counter);
  }

  return (
    <div className="App">
      <input type="button"
             value="increaseValue"
             onClick={() => increaseValue()}/>
      <input type="button"
             value="getValue"
             onClick={() => getValue()}/>
      <span>
        Counter: {counter} (To receive counter value click 'getValue'-Button.
      </span>
    </div>
  );
}
