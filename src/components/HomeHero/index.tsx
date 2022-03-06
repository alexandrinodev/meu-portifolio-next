import { CodeItem, Container, InfosContainer, TextContainer } from './styles';
import Foto from '../../assets/eu.png';

function HomeHero() {
  return (
    <Container>
      <img src={Foto} alt="Minha Foto" />
      <div>
        <TextContainer>
          <h1>olá</h1>
          <h2>Me Chamo Alex</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos </span>
            {'\u007B'}
            <div>
              Nome: <span className="blue">Alex</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Alexandrino</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo </span>
            {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-End</span>
            </div>
            <div>
              Empresa: <span className="blue">Alexandrino</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
