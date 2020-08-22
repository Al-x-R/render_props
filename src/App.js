import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from "./components/UsersList";
import PhonesList from "./components/PhonesList";
import DataProvider from "./components/DataProvider";

function App() {
  return (
    <div className="App">
      <DataProvider getData={() => fetch('users.json').then(res => res.json())}/>
      <DataProvider getData={() => fetch('phones.json').then(res => res.json())}/>
    </div>
  );
}

export default App;
