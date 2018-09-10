import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  // Load initial quote
  componentDidMount() {
    this.setState({ index: Math.floor(Math.random() * 7) });
    console.log(this.state.index);
  }

  // Generate random quotes after interval
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ index: Math.floor(Math.random() * 7) });
    }, 3000);
  }

  render() {
    const index = this.state.index;
    const colorPreset = [
      {
        bg: "#ffb3ba", // Red
        border: "#FF4848"
      },
      {
        bg: "#ffdfba", // Orange
        border: "#FF800D"
      },
      {
        bg: "#baffc9", //Green
        border: "#27DE55"
      },
      {
        bg: "#bae1ff", //Blue
        border: "#62D0FF"
      },
      {
        bg: "#ffb3ba", // Red
        border: "#FF4848"
      },
      {
        bg: "#ffdfba", // Orange
        border: "#FF800D"
      },
      {
        bg: "#bae1ff", //Blue
        border: "#62D0FF"
      }
    ];

    const quotes = [
      {
        author: "anonymous",
        quote:
          "The fact that you aren't where you want to be should be enough motivation."
      },
      {
        author: "anonymous",
        quote:
          "Find 3 hobbies. One to make you money. One to keep you in shape. One to keep you creative."
      },
      {
        author: "anonymous",
        quote:
          "If you aren't willing to work for it. Don't complain about not having it."
      },
      {
        author: "Nike",
        quote: "Just Don't Quit"
      },
      {
        author: "John Wooden",
        quote:
          "Worry about your character, not your reputation. Your character is who you are, and your reputation is who people think you are."
      },
      {
        author: "Ephesians 5:15-16",
        quote:
          "See then that ye walk circumspectly, not as fools, but as wise, Redeeming the time, because the days are evil."
      },
      {
        author: "Proverbs 19:8",
        quote:
          "He that getteth wisdom loveth his own soul he that keepeth understanding shall find good."
      }
    ];

    return (
      <React.Fragment>
        <div className="App" style={{ background: colorPreset[index].bg }}>
          <h1
            style={{ color: colorPreset[index].border, margin: 0, padding: 10 }}
          >
            Get up. Get out. Get it
          </h1>
          <small
            style={{ padding: 0, margin: 0, fontSize: 10, color: "white" }}
          >
            (or just sit down and code)
          </small>
          <div
            id="quote-box"
            style={{
              border: "2px solid" + colorPreset[index].border,
              background: "white"
            }}
          >
            <div id="text" style={{ color: colorPreset[index].border }}>
              {quotes[index].quote}
            </div>
            <div id="author" style={{ color: colorPreset[index].border }}>
              - {quotes[index].author}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
