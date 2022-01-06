import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes";
import styled from "styled-components";

const Botao=styled.button`
border-radius:15px;
padding:0.5rem;
margin:10px;
border:none;
font-weight:100px;
cursor:pointer;

:hover{
  background-color:#fe7e02;
}
`
const Musicas = styled.ul`
list-style:none;
text-align:center;
`
const Musica=styled.li`
display:flex;
justify-content:space-around;
align-itens:center;
font-size:xx-large;
font-weight:700;
margin:50px;
`
const Delete=styled.button`
border-radius:15px;
padding:0.5rem;
margin:10px;
border:none;
font-weight:100px;
cursor:pointer;

:hover{
  background-color:red;
}
`
export default class VisualizarPlaylist extends React.Component {

  state = {
    playlists: [],
    telaViewPlaylists: true,
    
  };

  componentDidMount = () => {
    this.getPlaylists();
  };

  getPlaylists = async () => {
    try {
      const res = await axios.get(baseUrl, axiosConfig);
 
      this.setState({ playlists: res.data.result.list });

    } catch (err) {
      alert(err);
    }
  };
  deletePlaylist = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`, axiosConfig);

      this.getPlaylists();
    } catch (err) {
      alert(err);
    }
  };
  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <Musicas key={playlist.id}>
         
          <Musica >
         
            {" "}
            
            {playlist.name}
            <Botao
            onClick={() =>
              this.props.changePage("musics", playlist.id)
            }
          >
            Abrir Playlist
          </Botao>
            <Delete onClick={() => this.deletePlaylist(playlist.id)}>Deletar</Delete>
          </Musica>
        </Musicas>
      );
    });
    return <>{this.state.playlists.length? playlists : <p>Carregando...</p>}</>;
  }
}
