import React, { Component } from 'react'
import Habbit from './habit';
import Add from './add';

export default class Habits extends Component {
    
    handleAdd = name => {
        this.props.onAdd(name);
    }
    
    render() {
        console.log(this.props.habits);
        console.log(this.props.onDecrement);
        return (
            <>
            <Add onAdd={this.handleAdd}/>
            <ul>
                {this.props.habits.map(habit=>(
                    <Habbit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                    />
                ))} 
            </ul>
            <button className="reset__button" onClick={this.props.onReset}>Reset All</button>
            </>
        )
    }
}
