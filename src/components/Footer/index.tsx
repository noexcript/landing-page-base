import { Link } from 'react-router-dom'
import { Address } from '../Address'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { NavBar } from '../Navbar'
import css from './index.module.css'


const Footer = () => {

    return (
        <footer className='wrapper dark'>
            <Container>
                <div className='wrapper-children wrapper-footer'>
                    <NavBar className={css.navbar_footer}>
                        <Link to='/'>Projects</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Contact</Link>
                    </NavBar>

                    <Address  className={css.address_footer}/>
                    <Logo />
                </div>
            </Container>
        </footer>
    )

}


export default Footer

