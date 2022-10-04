import { useHistory } from "react-router-dom"
import { StyledPageError } from "./style"


export const PageError = () => {
    const history = useHistory()

    return(
        <StyledPageError>
            <h1>Error404</h1>
            <h2>Desculpe houve algum Erro.</h2>
            <h3> CLIQUE EM VOLTAR :D</h3>
            <button onClick={() => history.push('/')}>VOLTAR</button>
        </StyledPageError>
    )
}