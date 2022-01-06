import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes"
import styled from "styled-components";

const Label=styled.label`
font-weight:700;
font-size:20px`

const Input=styled.input`
border-radius:10px;
padding:0.5rem;
border:none;
margin-left:10px;

`
const Form=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px;
gap:70px;
`
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
const Title=styled.p`
font-weight:500;
font-size:20px;
display:flex;
align-items:center;
gap:20px;
`

export default class Musicas extends React.Component {
    state = {
      tracks: [],
      trackName: "",
      artist: "",
      url: "",
     
    };
    changeInputValues = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    componentDidMount = () => {
  
      this.listaMusicas();
    };
   
    listaMusicas = async () => {
  
      try {
        const res = await axios.get(
          `${baseUrl}/${this.props.playlistId}/tracks`,
          axiosConfig
        );
        this.setState({ tracks: res.data.result.tracks });
      } catch (err) {
        alert(err);
      }
    };
    deletaMusica = async (id) => {
      try {
        await axios.delete(
          `${baseUrl}/${this.props.playlistId}/tracks/${id}`,
          axiosConfig
        );
  
        this.listaMusicas();
      } catch (err) {
        alert(err);
      }
    };
    addMusica = async (e) => {
      e.preventDefault()
      try {
        const body = {
          name: this.state.trackName,
          artist: this.state.artist,
          url: this.state.url,
        };
        await axios.post(
          `${baseUrl}/${this.props.playlistId}/tracks`,
          body,
          axiosConfig
        );
  
        this.listaMusicas();
        this.setState({
          trackName: "",
          artist: "",
          url: "",
        });
      } catch (err) {
        alert(err);
      }
    };
    render() {
      const tracks = this.state.tracks.map((track) => {
        return (
          <Title key={track.id}>
            {track.name} - {track.artist}<br/>
            <audio controls='controls'><source src={track.url} type="audio/mp3"/></audio><br/>
            <Delete onClick={() => this.deletaMusica(track.id)}>Deletar</Delete>
            
          </Title>
        );
      });
      return (
        <Form onSubmit={this.addTrackToPlaylist}>
          <div>
            <Label>Música:</Label>
            <Input
              placeholder="Digite o nome da música..."
              name="trackName"
              value={this.state.trackName}
              onChange={this.changeInputValues}
            />
          </div>
          <div>
            <Label>Artista:</Label>
            <Input
              placeholder="Digite o nome do artista..."
              name="artist"
              value={this.state.artist}
              onChange={this.changeInputValues}
            />
          </div>
          <div>
            <Label>URL:</Label>
            <Input
              placeholder="Insira o link da música..."
              name="url"
              value={this.state.url}
              onChange={this.changeInputValues}
            />
          </div>
          <Botao type="submit" onClick={this.addMusica}>
            Adicionar música
          </Botao>
          {tracks}
          <Botao onClick={()=>this.props.changePage("listaPlaylists")}>Voltar para as Playlists</Botao>
        </Form>
      );
    }
  }
  