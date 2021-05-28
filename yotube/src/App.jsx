import './app.css';
import React, { Component } from 'react';
import Main from './pages/main'; 
import axios from 'axios';

export default class App extends Component {
  state = {
    contents : [],
  };

  componentDidMount() {
    this.loadItem();  // loadItem 호출
  }

 loadItem = async () => {
  const url = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyC9kiHQ3GUXlFNZr8bUvJta5O5946v2-ZU&part=snippet&chart=mostPopular&maxResults=25";
  
  axios.get(url)
  .then((response)  => {
      
      const contents = response.data.items.map(item => {
        return {
          img : item.snippet.thumbnails.default.url,
          title : item.snippet.title,
          author : item.snippet.channelTitle
        };
      });
      console.log(contents);
      
      this.setState({contents});
  })
  .catch((error) => {
      console.log(error);
  });
  }

  handleSearch = (query) => {
    console.log(query);
    const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyC9kiHQ3GUXlFNZr8bUvJta5O5946v2-ZU&part=snippet&maxResults=25&q="+query;
  
    axios.get(url)
    .then((response)  => {
        
        const contents = response.data.items.map(item => {
          return {
            img : item.snippet.thumbnails.default.url,
            title : item.snippet.title,
            author : item.snippet.channelTitle
          };
        });
        console.log(contents);
        
        this.setState({contents});
    })
    .catch((error) => {
        console.log(error);
    });
  }


  render() {
    return (
      <div>
        <Main 
          contents={this.state.contents}
          onSearch={this.handleSearch}
          ></Main>
        
      </div>
    )
  }
}
