import { connect } from 'react-redux'
import {Nav} from '../components/Nav';
import {
    Card,
    Container
} from 'react-bootstrap';

import styled from 'styled-components';

const Titulo = styled.h1`
color: #28a745;
`;
const NovoCard = styled(Card)`
    padding: 10px;
    strong{
        color: #28a745;
    }
`;


function Admin({nome, nomeMeio, sobrenome}:any){
    return (
        <Container>
            <Nav/>
            <Titulo>Administração</Titulo>
            <NovoCard>
            <p>O <strong>redux</strong> e <strong>redux-saga</strong> estarão agindo aqui de forma global, teste:</p>
                <h2>Nome: {nome} {nomeMeio} {sobrenome}</h2>
            </NovoCard>
        </Container>
    )
}

export default connect(state=> state)(Admin);