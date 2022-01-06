import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../constantes";
import styled from "styled-components";

const H1=styled.h1`
font-weight:700;
font-size:50px;`

const Content=styled.div`
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
margin-top:120px;
margin-bottom:163px;
`
const Input=styled.input`
border-radius:10px;
padding:0.5rem;
border:none;
height:25px;
width:300px
`
const Botao=styled.button`
border-radius:15px;
padding:0.5rem;
margin:10px;
border:none;
font-weight:100px;
cursor:pointer;
width:100px;
:hover{
  background-color:#fe7e02;
}
`
export default class Playlist extends React.Component {
  state = {
    telaPlaylists: true,
    valorInputPlaylist: "",
  };
  changeInputPlaylist = (e) => {
    this.setState({ valorInputPlaylist: e.target.value });
  };

  criaPlaylist = async () => {
    const body = {
      name: this.state.valorInputPlaylist,
    };

    try {
      await axios.post(baseUrl, body, axiosConfig);
      alert(`Playlist ${this.state.valorInputPlaylist} criada!`);
      this.setState({ valorInputPlaylist: "" });
    } catch (err) {
      alert(err);
    }
  };
  render() {
    return (
      <Content>
        <H1>Cadastrar Playlist</H1>
        <Input
          type="text"
          placeholder="Digite o nome da Playlist..."
          onChange={this.changeInputPlaylist}
          value={this.state.valorInputPlaylist}
        /><br/>
        <Botao onClick={this.criaPlaylist}>Criar</Botao>
      </Content>
    );
  }
}
