import { Link } from 'react-router-dom'
import { Address } from '../Address'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { NavBar } from '../Navbar'
import css from './index.module.css'
import { useOpen } from '../../hook/useOpen'


const Footer = () => {
    const { setIsOpen } = useOpen()
    return (
        <footer className='wrapper dark'>
            <Container>
                <div className='wrapper-children wrapper-footer'>
                    <NavBar className={css.navbar_footer}>
                        <Link to='/project' onClick={() => setIsOpen(false)} >Projects</Link>
                        <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
                        <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
                    </NavBar>

                    <Address className={css.address_footer} />
                    <Logo />
                </div>
            </Container>
        </footer>
    )

}


export default Footer

