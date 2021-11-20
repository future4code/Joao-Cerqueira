import React from "react";
import './App.css';
import styled from "styled-components";



const Layout = styled.a`
  text-align: center;
  color: green;
`

const LayoutPrincipal = styled.a`
display:flex;
justify-content:center;
`

const Caixa = styled.header`
max-width: 600px;
height: 80vh;
border: 1px solid black;
flex: 1 1 0%;
display: flex;
flex-direction: column;
`




class App extends React.Component {
  state = {
    mensagem: "",
    usuario: ""

  }

  mudaMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  }

  mudaUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  }

  enviarMensagem = () => {
    const novaMensagem = {
      novaMensagem: this.state.mensagem
    }
  }



  render() {
    console.log(this.state.mensagem)
    return (
      <LayoutPrincipal>
      <Layout>
        <div>
        <h1>WhatsLAB</h1>
          <div>
          <Caixa></Caixa>
          </div>
          
          
          <span>Usuário:</span>
          <input value={this.state.usuario} onChange={this.mudaUsuario} />
          <span>Mensagem:</span>
          <input value={this.state.mensagem} onChange={this.mudaMensagem} />
          <button onClick={this.enviarMensagem}>Enviar</button>
         
        </div>
        </Layout>
        </LayoutPrincipal>
    )
  }
}

export default App;
