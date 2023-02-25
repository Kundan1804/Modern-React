import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term)
    axios.get('https://api.unsplash.com/search/photos',{
      params: { query: term},
      headers: {
        Authorization: 'Client-ID Ds8ILwMH0TPaIT6tBrojBr3RZc6FPtPAXby3IPqIwUQ'
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;
