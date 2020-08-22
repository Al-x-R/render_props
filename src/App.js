import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from "./components/UsersList";
import PhonesList from "./components/PhonesList";
import DataProvider from "./components/DataProvider";

function App() {
    return (
        <div className="App">
            <DataProvider getData={() => fetch('users.json').then(res => res.json())}>
                {value => {
                    const {error, isFetching, data} = value
                    if (error) {
                        return <div>{error.message}</div>
                    }
                    if (isFetching) {
                        return <div>Loading...</div>
                    }
                    return <UsersList users={data}/>
                }}
            </DataProvider>
            <DataProvider getData={() => fetch('phones.json').then(res => res.json())}>

                {value => {
                    const {error, isFetching, data} = value
                    if (error) {
                        return <div>{error.message}</div>
                    }
                    if (isFetching) {
                        return <div>Loading...</div>
                    }
                    return <PhonesList phones={data}/>
                }}
            </DataProvider>
        </div>
    );
}

export default App;
