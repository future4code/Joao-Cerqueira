import React from "react";
import styled from "styled-components";
import Deletar from "./Deletar";

const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export class Usuarios extends React.Component {


    render() {


        const usuarios = this.props.listaUsuarios.map((usuario) => {
            return <Deletar
                name={usuario.name}
                id={usuario.id}
                deleteUser={this.props.deleteUser}
            />

        });

        return (
            <div>
                <button onClick={this.props.mudaValor}>Inserir Novo Usuario</button>
                <Container1>

                    <h2>Usuários Cadastrados:</h2>
                    {usuarios}

                </Container1>

            </div>
        );
    }
}
export default Usuarios;