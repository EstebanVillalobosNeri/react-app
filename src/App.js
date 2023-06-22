//Chapter 7.1 Working with render props
//install reactRouter version 6 command: npm install react-router-dom@6
import './App.css';
//Outlet is used to disply nested Routes in the Routes list
import { Link, Outlet } from "react-router-dom";

function Home() {    
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>    
  );
}

export function About() {    
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Us</h1>
      <Outlet />
    </div>    
  );
}

//Child page for "About"
export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  )
}

export function Contact() {    
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/about">About</Link>        
      </nav>
      <h1>Contact Us</h1>
    </div>    
  );
}

export function App() {    
  return <Home />;   
}

