import styled from "@emotion/styled";
import { Container } from "@mui/material";
import Icon from "./Icon";

const Card = styled.div`
    background-color: #f9fbfd;
    border-radius: 10px;
    padding: 30px;
    color: rgba(0, 0, 0, 0.75);
    font-family: 'Roboto';
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Icons = styled.div`
    padding-top: 30px;
    columns: 100px;
    width: 100%;
    column-gap: 20px;
    @media (max-width: 520px) {
        column-gap: 20px;
    }
    @media (min-width: 520px) and (max-width: 857px){
        column-gap: 50px;
    }

    @media (min-width: 857px) and (max-width: 976px){
        column-gap: 80px;
    }
`

const About = () => {
    return (
        <Container sx={{ paddingTop: '50px', paddingBottom: '50px'}}>
            <Card>
                <h2>Gustavo Ignacio Muñoz Muñoz</h2>
                <h3 style={{marginTop: '10px'}}>Desarrollador Back-end</h3>
                <p style={{marginTop: '10px'}}>Soy estudiante de penultimo año Ingeniería Civil Informática de la Universidad del Bio-Bio.</p>
                <p>Las area que mas domino es la programacion en PHP usando como framework Laravel, en el cual a desarrollado aplicaciones personales de
                    manera autodidacta o para empresas como freelancer, incluye integraciones de transbank, APIs, generacion de documentos(Excel y PDF),
                    reportes, envios de correo, etc.</p>
                <p>Ademas domino el uso de HTML, CSS3, Boostrap, Javascript, jquery y de menor manera NextJs para el frontend.
                </p>
               
            </Card>
            <Card style={{marginTop: '30px'}}>
                <h2>Tecnologias utilizadas</h2>
                <Icons>
                    <Icon src='/icon/php.png'></Icon>
                    <Icon src='/icon/css3.png'></Icon>
                    <Icon src='/icon/html5.png'></Icon>
                    <Icon src='/icon/jquery.png'></Icon>
                    <Icon src='/icon/js.png'></Icon>
                    <Icon src='/icon/mysql.png'></Icon>
                    <Icon src='/icon/bootstrap.png'></Icon>
                </Icons>
            </Card>
        </Container>
    )
}

export default About