import {useState} from 'react'
import '../index.css'
import Information from "./information.jsx";
import Form from "./form.jsx";
import Lists from "./list.jsx";
import Filter from "./filter.jsx";

function App() {

    return (
        <>
            <div className="app">
                <div className="wrapper">
                    <div className="card">
                            <Information />
                            <Form />
                            <Lists />
                            <Filter />
                    </div>
                    <img src="/images/earth.svg" alt="earth"/>
                </div>
            </div>
        </>
    )
}

export default App
