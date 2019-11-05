import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Header = props => {
  const subHeaderText = props.subHeader
    ? props.subHeader
    : "default sub-header";
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{subHeaderText}</h2>
    </header>
  );
};

const ImageListItem = ({ imageLink }) => (
  <li>
    <img src={imageLink} alt="I don't know, something gave me this" />
  </li>
);

const ImageList = props => {
  return (
    <section>
      <ul>
        {props.imageLinks.map(imageLink => (
          <ImageListItem imageLink={imageLink} />
        ))}
      </ul>
    </section>
  );
};

function App() {
  return (
    <div className="App">
      <Header title="hello from props" />
      <Header title="hello2 from props" subHeader="subHeader from props" />
      <ImageList imageLinks={fetchGiphys("pc load letter")} />
    </div>
  );
}

function fetchGiphys(searchCriteria) {
  const gifSearchApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=vTDctUwdixKBz8tO3REnJC6QXi45yAmc&q=${searchCriteria}&limit=10&rating=g&lang=en`;

  //not sure where to go with this
  fetch(gifSearchApiUrl)
    .then(res => res.json())
    .then(({ data }) => {
      console.log(data.map(gifUrl => gifUrl.images.fixed_width.url));
      return data.map(gifUrl => gifUrl.images.fixed_width.url);
    });

  return [
    "http://giphygifs.s3.amazonaws.com/media/RhEvCHIeZAZ6E/giphy.gif",
    "https://media.giphy.com/media/3o85xGRWMlHdGB1vMs/giphy.gif"
  ];
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
