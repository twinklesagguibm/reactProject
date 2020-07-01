import React, {useState, useEffect} from "react";
import "./App.css";
import Login from "./components/login";
import Home from "./components/Home";
import store from "./store/store";

function App() {
  const [appState, setAppState] = useState({isLogin: false});
 
  useEffect(()=>{
    store.subscribe(() => {
      const newState = store.getState();
      setAppState({isLogin: newState.loggingIn})
     });
  }, [])
  
  const {isLogin} = appState;
  return (
    isLogin ? <Home/> : <Login/>

  );
}

export default App;
