import React, { Component } from 'react';
import './style.css'

export default class Navbar extends Component {

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const query = this.inputRef.current.value;
        query && this.props.onSearch(query);
        console.log(query);
        // inputRef.current.value = '';
        this.formRef.current.reset();
    }

    render() {
        return (
            <header className="navbar-body">
                <img className="navbar-img"></img> 
                <span className="navbar-logo"> Youtube</span>
                <form ref={this.formRef} onSubmit={this.onSubmit} className="navbar-search">
                    <input ref={this.inputRef} type="text" placeholder="Search" className="navbar-input"></input>
                    <button className="navbar-btn" ></button>
                </form>
            </header>
        )
    }
}
