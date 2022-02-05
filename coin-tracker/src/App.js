import './App.css';
import {useEffect, useState} from "react"

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    })
  }, [])


  return (
    <div>
      <h1>The Coin! {loading ? "" : `(${coins.length})`}</h1> 
      {loading ? (
        <strong>Loading...</strong>
          ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.name}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;


/* todolist react app

import {useState} from "react";
import './App.css';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([])

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    };
    setToDos((current) => [toDo, ...current]) // js에서 array 앞에 '...'은 array 안의 값들만 반환하는 것임. 
    setToDo("");    
  }

  
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..." />  
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index) => 
        <li key={index}>
          {item}
        </li>)}
      </ul>
      
    </div>
    );
}

export default App;

*/