import React, { Component } from 'react'

export default class Video extends Component {

    render() {
        const {img, title, author} = this.props.contents;
        return (
            <span className="video-item" >
                <img src={img} className="video-img"></img>
                <div className="video-description">
                    <span className="video-title">{title}</span>
                    <span className="video-author">{author}</span>  
                </div>
            </span>
        )
    }
}
