
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Menu } from '../Menu'


const Header = () => {

    return (
        <header className='wrapper dark'>
            <Container>
                <div className='wrapper-children wrapper-header'>
                    <Logo />
                    <Menu />
                </div>
            </Container>
        </header>
    )

}


export default Header