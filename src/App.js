import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';

// switch is removed from latest version of react use routes instead of switches, in new version we have to
// write a little different syntax , have to write components in element = {} in this . and a little change more as well

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


// we want to control our dark mode from  app.js as we want it to act to whole body;

function App() {
  const [mode, setmode] = useState('light');
  // made one more state for alert
  const [alert, setalert] = useState(null);

  // we just made a method
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
  }

  const togglemode = () => {
    if (mode == 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#00008b'
      showalert("dark mode has been enabled", "success")
      document.title = 'textutils-DarkMode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showalert("dark mode has been disabled", "success")
      document.title = 'textutils-LightMode'
    }
  }
  // but when we apply classes the class once set doesn't get removed we want ki jb jis color pe kre click vo aaje.
  // for that we have to make a remove function.
  const classremove=()=>{
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-primary')
  }
  const togglemode2=(cls)=>{
    classremove();
   document.body.classList.add('bg-'+cls);
  }
  return (
    <>


      {/* //  <h1>hello</h1> wrong as we can only return one tag in JSX
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with Rahul
    //     </a>
    //   </header>
    // </div>

    //  we can write whole jsx on our own , it is just a html
    // <div className="blank">
    //   <h1> LOVELY</h1>
    // </div> */}

      {/* we have written our component like this  and this will automatically import the navbar from our
      folder components or whatever we made and we could see that path upside. */}

      {/* props are passed as this here , whatever we pass the value in prop it will be displayed there */}
      {/* this will print great at that value */}


      <Router>
        <Navbar title="TextUtils" abouttext="ABOUT" mode={mode} togglemode={togglemode} togglemode2={togglemode2} />
        <Alert alert={alert} />
        {/* this is also good but try to write exact before path to match exact file , because sometimes, if file
        has /user and /user/home and you want to go in second one , then react may take you to first one so therefore
        write exact before path as it is a good practise */}
        <Routes>
          <Route exact path="/"
            element=<div className='container my-3'> {<Text heading="Enter The Text Below To Analyze" mode={mode} />}</div> >
          </Route>
          <Route exact path="/"
            element={<Navbar title="TextUtils" abouttext="ABOUT" mode={mode} togglemode={togglemode} />}>
          </Route>
          <Route exact path="/about"
            element={<About mode={mode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
