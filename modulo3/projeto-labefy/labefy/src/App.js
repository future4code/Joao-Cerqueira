import React from "react";
import Body from "./components/Body";
import Playlist from "./components/Playlist";
import AddPlaylist from "./components/AddPlaylist";
import styled from "styled-components";

const Main=styled.html`
background-color:Teal;
color:Gainsboro;
`



export default class App extends React.Component {
  state = {
    currentPage: "playlistManager",
  
  };

  mudaPagina = (pagina) => {
    this.setState({ currentPage: pagina });
  };

  render() {
    const renderPagina = () => {
      if (this.state.currentPage === "criaPlaylist") {
        return <Playlist />;
      } else if (this.state.currentPage === "playlistManager") {
        return <AddPlaylist />;
      }
    };
    return (
      <Main>
        <Body mudaPagina={this.mudaPagina} />

        {renderPagina()}
        
        
      </Main>
    );
  }
}
