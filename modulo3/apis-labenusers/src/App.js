import React from 'react';
import Adicionar from './components/Adicionar'
import Usuarios from './components/Usuarios'
import styled from 'styled-components';
import axios from 'axios';
import Deletar from './components/Deletar'

export class App extends React.Component {
  state = {
    cont: false,
    listaUsuarios: [],
    inputEmail: '',
    inputNome: '',
    inputId: ''
  }


  tela(cont) {

    console.log(cont)

    if (cont === false) {
      console.log(cont)
      return <Adicionar
        mudaValor={this.mudaValor}
        inputNome={this.state.inputNome}
        mudaNome={this.mudaNome}
        inputEmail={this.state.inputEmail}
        mudaEmail={this.mudaEmail}
        createUser={this.createUser}
      />
    } else if (cont === true) {
      console.log(cont)
      return <Usuarios
        mudaValor={this.mudaValor}
        listaUsuarios={this.state.listaUsuarios}
        deleteUser={this.deleteUser}


      />
    }
  }

  mudaValor = () => {
    this.setState({ cont: !this.state.cont })
    console.log(this.state.cont)
  }

  mudaNome = (e) => {
    this.setState({ inputNome: e.target.value })
  }

  mudaEmail = (e) => {
    this.setState({ inputEmail: e.target.value })
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "joao-lucas-joy"
          }
        }
      )
      .then((resp) => {
        this.setState({ listaUsuarios: resp.data });
      })
      .catch((erro) => {
        alert("Erro ao abrir nome dos usuários")
      });
  };

  createUser = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "joao-lucas-joy"
          }
        }
      )
      .then((resp) => {
        this.setState({ inputNome: '' })
        this.setState({ inputEmail: '' })
        alert("Usuário adicionado")
        this.getAllUsers()
      })
      .catch((erro) => {
        alert("Erro ao adicionar")
      });
  };

  deleteUser = (id) => {
    console.log(id)
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "joao-lucas-joy"
          },
          data: {
            source: id
          }
        }
      )


      .then((resp) => {
        alert("Usuário removido")
        this.getAllUsers()
      })
      .catch((erro) => {
        alert("Erro ao remover")
      });
  }



  render() {



    return (
      <div>

        {this.tela(this.state.cont)}





      </div>
    );
  }
}

export default App;