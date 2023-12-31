import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App, About, Contact, History } from './App';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

//This Syntax provided by course is not accepted by DOM 
/*ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);*/

//The syntax provide by create-react-app is the one that works.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} >
        <Route path='history' element={<History />} />
      </Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
