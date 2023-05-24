import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term,
      },
      headers: {
        Authorization: "Client-ID 4Qzv0lz-Gu8p9Vc3Wlud4u469HevDqdawBP2bjbNGT8",
      },
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.searchImages} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
