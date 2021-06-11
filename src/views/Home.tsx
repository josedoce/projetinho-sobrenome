import {connect} from 'react-redux'
import { acao } from '../store/actions';
import {
    Button,
    Card,
    Container
} from 'react-bootstrap';
import {Nav} from '../components/Nav';
import styled from 'styled-components';
interface SeilaDispatch {
    nomeCompleto: ()=> void;
    nomeSobrenome: ()=> void;
}
interface Seila extends SeilaDispatch{
    nome: string;
    nomeMeio: string;
    sobrenome: string;
    acao: string;
}
const Titulo = styled.h1`
color: #28a745;
`;
const NovoCard = styled(Card)`
    padding: 10px;
    margin: 5px 0;
    strong{
        color: #28a745;
    }
`;

function Home({nome,nomeMeio,sobrenome,acao,nomeCompleto,nomeSobrenome}:Seila){
    return(
        <Container>
            <Nav/>
            <Titulo>Home</Titulo>
            <NovoCard>
                <h4>Foco do projeto:</h4>
                <p>✔Aprender a usar o <strong>redux</strong></p>
                <p>✔Aprender incorporar <strong>redux</strong> com <strong>redux saga</strong></p>
                <p>✔Aprender a usar tudo isso no reactjs :)</p>
                <p>✔E tambem da um gás no visual com o <strong>bootstrap</strong> e <strong>styled-components</strong></p>
                <Button 
                    variant="outline-success" 
                    role="a" 
                    href="https://github.com/josedoce">
                    meu github😁
                </Button>
            </NovoCard>
            <NovoCard>
                <p>O <strong>redux</strong> e <strong>redux-saga</strong> estarão agindo aqui, teste:</p>
                <h3>Nome: {nome} {nomeMeio} {sobrenome}</h3>
                <p>Ação:<strong> {acao}</strong></p>
                <div>
                    <Button
                    variant="outline-success"
                    onClick={()=>nomeCompleto()}
                    >Nome completo</Button>
                    
                    <Button
                    style={{margin: '10px'}}
                    variant="outline-success"
                    onClick={nomeSobrenome}
                    >Nome e sobrenome</Button>
                </div>
            </NovoCard>
        </Container>
    )
}

const stateProps = (state:Seila) => {
    return state;
}

const dispatchProps: SeilaDispatch = {
    nomeCompleto: ()=> ({
        type: acao.COMPLETO,
    }),
    nomeSobrenome: ()=>({
        type: acao.NOME_SOBRENOME,
    })
}
export default connect(
    stateProps,
    dispatchProps
)(Home);