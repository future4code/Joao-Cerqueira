import React from "react";
import styled from "styled-components";

const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`

export class Adicionar extends React.Component {

    render() {

        return (
            <div>
                <button onClick={this.props.mudaValor}>Lista de Usuarios</button>
                <Container3>
                    <Input>
                        <p>Nome:</p>
                        <input placeholder="Nome"
                            value={this.props.inputNome}
                            onChange={this.props.mudaNome} />
                    </Input>
                    <Input>
                        <p>Email:</p>
                        <input placeholder="Email"
                            value={this.props.inputEmail}
                            onChange={this.props.mudaEmail} />
                    </Input>
                    <Input>
                        <button onClick={this.props.createUser}>Inserir</button>
                    </Input>




                </Container3>

            </div>
        );
    }
}

export default Adicionar;