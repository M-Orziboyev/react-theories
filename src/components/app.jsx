import {Component} from 'react'
import '../index.css'
import Information from "./information.jsx";
import Form from "./form.jsx";
import Filter from "./filter.jsx";
import List from "./list.jsx";
import {arr} from "./constants/index.js";
import {v4 as uuidv4} from 'uuid';
import SearchPanel from "./searchPanel.jsx";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: arr,
            search: ""
        }
    }

    onDelete = (id) => {
        const newArr = this.state.data.filter(item => item.id !== id)
        this.setState({
            data: newArr
        })
    }

    onToggleActive = (id) => {
        const newArr = this.state.data.map(item => {
            if (item.id === id) {
                return {...item, active: !item.active}
            }
            return item
        })
        this.setState({
            data: newArr
        })
    }

    onAdd = (item) => {
        const {title, number} = item
        const newData = {title, number, active: false, id: uuidv4()}
        const newArr = [...this.state.data, newData]
        this.setState({
            data: newArr
        })
    }

    searchData = (arr, term) => {
        if (term.length === 0){
            return arr
        }

        return arr.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }

    onUpdateSearch = (search) => {
        this.setState({search})
    }


    render() {
        const {data, search} = this.state
        const allData = this.searchData(data, search)

        return (
            <div className="app">
                <div className="wrapper">
                    <div className="card">
                        <Information length={data.length}/>
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                        <Form onAdd={this.onAdd}/>
                        <List data={allData} onDelete={this.onDelete} onToggleItem={this.onToggleActive}/>
                        <Filter/>
                    </div>
                    <img src="/images/earth.svg" alt="earth"/>
                </div>
            </div>
        )
    }
}

export default App