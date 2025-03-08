import {useState} from 'react'
import '../index.css'
import Information from "./information.jsx";
import Form from "./form.jsx";
import Lists from "./list.jsx";
import Filter from "./filter.jsx";
import List from "./list.jsx";

function App() {

    const data = [
        {
            number: 14,
            title: 'Buy Bananas',
            id: 1,
            active: false
        },
        {
            number: 13,
            title: 'Buy pineapples',
            id: 2,
            active: true
        },
        {
            number: 12,
            title: 'Buy pancakes',
            id: 3,
            active: false
        },
        {
            number: 11,
            title: 'Buy Graces',
            id: 4,
            active: false,
        },
    ]

    return (
        <>
            <div className="app">
                <div className="wrapper">
                    <div className="card">
                        <Information/>
                        <Form/>
                        {data.map(({number, title, id}) => (
                            <List number={number} title={title} key={id}/>
                        ))}
                        <Filter/>
                    </div>
                    <img src="/images/earth.svg" alt="earth"/>
                </div>
            </div>
        </>
    )
}

export default App