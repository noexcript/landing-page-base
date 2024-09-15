import { Address } from '../Address'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { NavBar } from '../Nabar'


const Footer = () => {

    return (
        <footer className='wrapper'>
            <Container>
                <div className='wrapper-children wrapper-footer'>
                    <NavBar />
                    <Address />
                    <Logo />
                </div>
            </Container>
        </footer>
    )

}


export default Footer

