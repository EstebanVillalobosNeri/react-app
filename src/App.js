/*import './App.css';
//Chapter 5.1 useRef - Uncontrolled component
import {useRef} from "react";

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };
  
  return (
    <form onSubmit = {submit}>
      <input
        ref={txtTitle} 
        type='text'
        placeholder='color title...'
      />
      <input ref={hexColor} type='color'/>
      <button>Add</button>
    </form>
  );
}*/

/*import './App.css';
//Chapter 5.2 useState - Controlled component
import {useState} from "react";

function App() {

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000000");
  };
  
  return (
    <form onSubmit = {submit}>
      <input
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        type='text'
        placeholder='color title...'
      />
      <input
        value={color}
        type='color' 
        onChange={(event) => 
          setColor(event.target.value)
        }
      />
      <button>Add</button>
    </form>
  );
}*/

/*import './App.css';
//Chapter 5.3 Custom Hook - Controlled component
//Custom Hooks are functions that have the word "use"
import {useState} from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  return [
    {
      value, 
      onChange: e => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}

function App() {

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("");

  const submit = (e) => {
    e.preventDefault();
    alert(
      `${titleProps.value}, ${colorProps.value}`
    );
    resetTitle();
    resetColor();
  };
  
  return (
    <form onSubmit = {submit}>
      <input
        {...titleProps}
        type='text'
        placeholder='color title...'
      />
      <input
        {...colorProps}
        type='color'
      />
      <button>Add</button>
    </form>
  );
}*/

/*Chapter 6.1 Fetching data with Hooks
//Chapter 6.2 Displaying data from an API
import './App.css';
import {useState, useEffect} from "react";

function GithubUser({ login, id, avatar }) {
  return (
    <div>
      <h1>{login}</h1>
      <p>{id}</p>
      <img src={avatar} height={150} alt={login}/>
    </div>
  );
}

function App() {  
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/EstebanVillalobosNeri`
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  /*Is really important to set the dependency array [] 
  to make sure this API runs only once
  
  if (data)
  return (
    /*<pre>{JSON.stringify(data, null, 2)}</pre> 
    This shows all info in the API
    <GithubUser 
      login={data.login}
      id={data.id} 
      avatar={data.avatar_url}
    />
  );

  return (
    <h1>Data</h1> 
  );
}*/



/*Chapter 6.3 Handling loading states
import './App.css';
import {useState, useEffect} from "react";

function GithubUser({ login, id, avatar }) {
  return (
    <div>
      <h1>{login}</h1>
      <p>{id}</p>
      <img src={avatar} height={150} alt={login}/>
    </div>
  );
}

function App() {  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/EstebanVillalobosNeri`
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  /*Is really important to set the dependency array [] 
  to make sure this API runs only once
  
  if(loading) return <h1>Loading...</h1>;

  if(error)
    return <pre>{JSON.stringify(error)}</pre>;

  if(!data) return null;

  return (
    <GithubUser 
      login={data.login}
      id={data.id} 
      avatar={data.avatar_url}
    />
  );
  
}*/

/*Chapter 6.4 Fetching data with GraphQL
import './App.css';
import {useState, useEffect} from "react";

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: {"Content-Type": "application/json"},
  body: JSON.stringify({query})
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}

function App() {  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`, opts
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  /*Is really important to set the dependency array [] 
  to make sure this API runs only once
  
  if(loading) return <h1>Loading...</h1>;

  if(error)
    return <pre>{JSON.stringify(error)}</pre>;

  if(!data) return null;

  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift 
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
  
}*/

//Chapter 6.5 Working with render props
import './App.css';

const tahoe_peaks = [
  {name: "Freel", elevation: 10891},
  {name: "Monument", elevation: 10067},
  {name: "Pyramid", elevation: 9983},
  {name: "Tallac", elevation: 9735}
];

function List ({data, renderItem, renderEmpty}) {
  return !data.length ? (
      renderEmpty
    ) : (
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    );
}

function App() {    
  return (
    <List 
      data={tahoe_peaks} 
      renderEmpty={<p>This is empty!</p>} 
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation} ft.
        </>
      )}
    />
  );
}

export default App;

