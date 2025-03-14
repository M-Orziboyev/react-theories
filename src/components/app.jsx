import {Component} from 'react'
import '../index.css'
import Information from "./information.jsx";
import Form from "./form.jsx";
import Filter from "./filter.jsx";
import List from "./list.jsx";
import {arr} from "./constants/index.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: arr
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
                return{...item, active: !item.active}
            }
            return item
        })
        this.setState({
            data: newArr
        })
    }

    render() {
        const {data} = this.state
        return(
            <div className="app">
                <div className="wrapper">
                    <div className="card">
                        <Information/>
                        <Form/>
                        <List data={data} onDelete={this.onDelete} onToggleItem={this.onToggleActive}/>
                        <Filter/>
                    </div>
                    <img src="/images/earth.svg" alt="earth"/>
                </div>
            </div>
        )
    }
}

export default App