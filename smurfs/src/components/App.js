import React from "react";
import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';


const App = () => {
  return (
    <div className="App">
      <SmurfForm />
      <SmurfList />
    </div>
  );
}

export default App;
