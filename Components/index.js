import Container from '@mui/material/Container';
import Head from './head';
import About from './about'
import Footer from './Footer'

const Index = () => {
    return (
        <>
            <Head></Head>
            <Container sx={{minHeight: 'calc(100vh - 218.5px)'}}>
                <About></About>
            </Container>
            <Footer></Footer>
        </>
    )
}
    
export default Index