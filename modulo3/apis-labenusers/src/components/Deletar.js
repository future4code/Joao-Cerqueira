import React from "react";
import styled from "styled-components";


const Container2 = styled.div`
display: flex;
width: 175px;
justify-content: space-between;
padding: 15px;
`;



export class Deletar extends React.Component {

    render() {

        const id = this.props.id
        return  <Container2 key={this.props.id}>
            {this.props.name} 
         <button onClick={() => this.props.deleteUser(id)}>X</button>
         </Container2> 


    }
}
export default Deletar; 