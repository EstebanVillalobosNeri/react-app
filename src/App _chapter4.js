import './App.css';
//Chapter 4.4 useState
//Chapter 4.5 useEffect
//Chapter 4.6 UseReducer
import {/*useState, useEffect*/ useReducer} from "react";

function App() {
  /*const [emotion, setEmotion] =  useState("happy");
  const [secondary, setSecondary] = useState("tired");*/

  /*useEffect accepts two arguments one is the function that will execute
  and second is the dependency array that will tell when to run or assing 
  a property to listen if there are changes to the array.
  If no value is passed on the array the function only executes once at
  page load.
  If one value us passed function would execute every time that effect is applied.
  if two values are passed the function would run twice if emotion and secondary change.*/
  
  /*useEffect(() => {
    console.log(`It's ${emotion} right now!`);
  }, [emotion, secondary]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);*/  

  const [checked, setChecked] = useReducer(
    (checked) => !checked,
    false
  );
  
  return (
    /*<div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button onClick={() => setEmotion("01101")}>
        Number
      </button>
      <button onClick={() => setEmotion(true)}>
        Boolean
      </button>
      <h2>
        Current secondary emotion is {secondary}.      
      </h2>
      <button onClick={() => setSecondary("grateful")}>
        Grateful
      </button>
    </div>*/
    <div className="App">
      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "Checked" : "Not checked"}
      </label>
    </div>
  );
}

export default App;
