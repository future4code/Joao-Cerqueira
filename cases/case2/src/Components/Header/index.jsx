import logoTdmdb from '../../Assets/logo.svg';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();


    const clickHome = () => {
        goToHome(navigate);
    };

    return (
      <Container>  
        <header>
            <img src={logoTdmdb} alt="Tmdb logo"  
                  onClick={() => {
                    clickHome();
                }}/>
        </header>
      </Container>  
    )
}