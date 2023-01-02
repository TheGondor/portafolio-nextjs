import styled from "@emotion/styled"
import Icon from "./Icon"

const Container = styled.div`
    position: static;
    width: 100%;
    height: 150px;
    background-color: lightblue;
    color: rgb(0,0,0, 0.75);
    bottom: 0;  
`

const Flex = styled.div`
    display: flex;
    padding: 20px;
    width: 100%;
    justify-content: space-between;
`

const Card = styled.div`
    width: 200px;
    padding : 10px;
    font-family: roboto;
`

const Icons = styled.div`
    padding-top: 20px;
    columns: 3;
    width: 100%;
    column-gap: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Flex>
                <Card style={{flex: 'left'}}>
                    <h4>Web Construida En:</h4>
                    <Icons>
                        <Icon width='50px' height='40px' src='/icon/css3.png'></Icon>
                        <Icon width='50px' height='40px' src='/icon/html5.png'></Icon>
                        <Icon width='50px' height='40px' src='/icon/nextjs-icon.png'></Icon>
                    </Icons>
                </Card>
                <Card style={{flex: 'right'}}>
                    <h4>Redes Sociales:</h4>
                    <Icons>
                        <div>
                        <a target="_blank" href="https://www.linkedin.com/in/gustavo-mu%C3%B1oz-mu%C3%B1oz-31390821a/">
                            <Icon style={{cursor: 'pointer'}} width='50px' height='40px' src='/icon/linkedin.png'></Icon>
                        </a>
                        </div>
                        <div>
                        <a target="_blank" href="https://github.com/TheGondor">
                            <Icon style={{cursor: 'pointer'}} width='50px' height='40px' src='/icon/github_icon.png'></Icon>
                        </a>
                        </div>
                    </Icons>
                </Card>
            </Flex>
        </Container>
    )
}

export default  Footer