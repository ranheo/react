import React, { Component } from 'react'
import Video from "./video"

export default class VideoList extends Component {
    
    render() {
        console.log(this.props.contents);
        return (
            <div className="videos">
            {this.props.contents.map(items=>(
                <Video
                    contents={items}
                    
                    ></Video>
            )
              )}
                
            </div>
        )
    }
}
