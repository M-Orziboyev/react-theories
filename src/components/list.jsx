import {Component} from "react";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increase = this.increase.bind(this)
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        })
    }


    render() {
        const {number, title, id, active} = this.props;
        const {counter} = this.state;
        return (
            <div className='shopping-list'>
                <div key={id} className={`list-item ${active && 'active'}`}>
                    <div className='item-info'>
                        <span>{number}</span>
                        <p>{title}</p>
                    </div>
                    <div className='item-actions'>
                        <span className='check'>{counter}</span>
                        <span className='times'>&times;</span>
                        <button onClick={this.increase}> Increase</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default List