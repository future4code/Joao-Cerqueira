import React from "react";
import Musicas from "./Musicas";
import VisualizarPlaylist from "./VisualizarPlaylist";

export default class AddPlaylist extends React.Component {
  
  state = {
    currentPage: "listaPlaylists",
    playlistId: "",
  };
  changePage = (pagina, playlistId) => {
    this.setState({
      currentPage: pagina,
      playlistId: playlistId,
    });
  };
  render() {
    const renderPagina = () => {
      if (this.state.currentPage === "listaPlaylists") {
        return (
          <VisualizarPlaylist
            changePage={this.changePage}
            playlistId={this.state.playlistId}
          />
        );
      } else if (this.state.currentPage === "musics") {
        return (

          <Musicas
            playlistId={this.state.playlistId}
            changePage={this.changePage}
          />
        );
      }
    };
    return <>{renderPagina()}</>;
  }
}
