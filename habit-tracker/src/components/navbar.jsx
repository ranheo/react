import React, { PureComponent } from 'react'

export default class Navigationbar extends PureComponent {
    render() {
        console.log("total",this.props.total);
        return (
            <header className="navbar">
                <i class="navbar__logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar__count">{this.props.total}</span>
            </header>
        )
    }
}
