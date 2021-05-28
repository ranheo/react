import React, { Component } from 'react';
import Navbar from '../components/navbar';
import VideoList from '../components/videoList';

export default class Main extends Component {
    

    render() {
        
        return (
            <>
             <Navbar onSearch={this.props.onSearch}></Navbar> 
             <VideoList
                contents={this.props.contents}
                
                ></VideoList>  
            </>
        )
    }
}
