import React, { Component } from "react";

class QuoteApp extends Component {
  state = {
    quote: "Click the button to get a new quote!",
    author: "",
    colorIndex: 0,
  };

  colorPalettes = [
    {
      mainBackground: "#F0F4C3",
      quoteBackground: "#FFECB3",
      buttonColor: "#FFA726",
      textColor: "#37474F",
    },
    {
      mainBackground: "#E1F5FE",
      quoteBackground: "#FFF9C4",
      buttonColor: "#4CAF50",
      textColor: "#212121",
    },
    {
      mainBackground: "#FFEBEE",
      quoteBackground: "#E1BEE7",
      buttonColor: "#F44336",
      textColor: "#3E2723",
    },
    {
      mainBackground: "#FFF3E0",
      quoteBackground: "#C8E6C9",
      buttonColor: "#FF9800",
      textColor: "#1B5E20",
    },
    {
      mainBackground: "#ECEFF1",
      quoteBackground: "#D1C4E9",
      buttonColor: "#9C27B0",
      textColor: "#263238",
    },
    {
      mainBackground: "#F3E5F5",
      quoteBackground: "#FFCDD2",
      buttonColor: "#E91E63",
      textColor: "#4A148C",
    },
    {
      mainBackground: "#B2EBF2",
      quoteBackground: "#FFCCBC",
      buttonColor: "#FF5722",
      textColor: "#00796B",
    },
    {
      mainBackground: "#DCEDC8",
      quoteBackground: "#FFE082",
      buttonColor: "#FFC107",
      textColor: "#33691E",
    },
    {
      mainBackground: "#FFCCBC",
      quoteBackground: "#C5CAE9",
      buttonColor: "#3F51B5",
      textColor: "#BF360C",
    },
    {
      mainBackground: "#D7CCC8",
      quoteBackground: "#FFF176",
      buttonColor: "#FFEB3B",
      textColor: "#3E2723",
    },
    {
      mainBackground: "#C8E6C9",
      quoteBackground: "#B3E5FC",
      buttonColor: "#03A9F4",
      textColor: "#1B5E20",
    },
    {
      mainBackground: "#E0F7FA",
      quoteBackground: "#FFEBEE",
      buttonColor: "#F44336",
      textColor: "#004D40",
    },
    {
      mainBackground: "#FFFDE7",
      quoteBackground: "#C8E6C9",
      buttonColor: "#8BC34A",
      textColor: "#F57F17",
    },
    {
      mainBackground: "#E1BEE7",
      quoteBackground: "#FFECB3",
      buttonColor: "#FFC107",
      textColor: "#4A148C",
    },
    {
      mainBackground: "#FFCDD2",
      quoteBackground: "#D1C4E9",
      buttonColor: "#673AB7",
      textColor: "#B71C1C",
    },
    {
      mainBackground: "#C5CAE9",
      quoteBackground: "#FFCCBC",
      buttonColor: "#FF9800",
      textColor: "#1A237E",
    },
    {
      mainBackground: "#F8BBD0",
      quoteBackground: "#B2EBF2",
      buttonColor: "#00BCD4",
      textColor: "#880E4F",
    },
    {
      mainBackground: "#D1C4E9",
      quoteBackground: "#FFCDD2",
      buttonColor: "#E91E63",
      textColor: "#311B92",
    },
    {
      mainBackground: "#B3E5FC",
      quoteBackground: "#FFFDE7",
      buttonColor: "#CDDC39",
      textColor: "#01579B",
    },
    {
      mainBackground: "#DCEDC8",
      quoteBackground: "#FFCCBC",
      buttonColor: "#FF5722",
      textColor: "#558B2F",
    },
  ];

  handleFetch = async () => {
    const url = "https://api.api-ninjas.com/v1/quotes";
    const apiKey = "GAQZDOc5Tw2o2LDricXGUQ==bDSSXoq5r9M4HnYh";

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const quotes = await response.json();
      const { quote, author } = quotes[0];

      // Select a random color index
      const randomColorIndex = Math.floor(
        Math.random() * this.colorPalettes.length
      );

      // Update state with new quote and random color index
      this.setState({
        quote,
        author,
        colorIndex: randomColorIndex,
      });
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  render() {
    const { quote, author, colorIndex } = this.state;
    const currentPalette = this.colorPalettes[colorIndex];

    const appStyle = {
      backgroundColor: currentPalette.mainBackground,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: currentPalette.textColor,
    };

    const quoteSectionStyle = {
      backgroundColor: currentPalette.quoteBackground,
      padding: "20px",
      borderRadius: "5px",
      color: currentPalette.textColor,
    };

    const buttonStyle = {
      backgroundColor: currentPalette.buttonColor,
      color: "#FFF",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    };

    return (
      <div style={appStyle}>
        <div style={quoteSectionStyle} className="container p-5 rounded-3">
          <h2>
            <i className="fa-solid fa-quote-left pe-3"></i>
            {quote}
          </h2>
          {author && <p className="text-end py"> - {author}</p>}
          <div className="row justify-content-between">
            <div className="col-4">
              <button style={buttonStyle} className="btn me-2">
                <i class="fa-brands fa-twitter"></i>
              </button>
              <button style={buttonStyle} className="btn me-2">
                <i class="fa-brands fa-tumblr"></i>
              </button>
            </div>
            <div className="col-4 text-end">
              <button onClick={this.handleFetch} style={buttonStyle}>
                New Quote
              </button>
            </div>
          </div>
        </div>
        <div className="text-center pt-2">
          <p>by Hamed</p>
        </div>
      </div>
    );
  }
}

export default QuoteApp;
