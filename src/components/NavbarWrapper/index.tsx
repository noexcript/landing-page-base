import { Link } from 'react-router-dom'
import { times } from '../../lib/img'
import { Address } from '../Address'
import { Container } from '../Container'
import { NavBar } from '../Navbar'
import { Networks } from '../Networks'
import css from './index.module.css'
import { useOpen } from '../../hook/useOpen'



export const NavbarWrapper = () => {

    const { isOpen, setIsOpen } = useOpen()


    return (
        <div className={`${css.wrapper_navbar} ${isOpen ? `${css.wrapper_navbar_openned}` : ''}`}>
            <Container>
                <div className={css.navbar_content}>
                    <div className={css.navbar_btn_close}>
                        <button onClick={() => setIsOpen(false)}>
                            <img src={times} alt="time-close" />
                        </button>
                    </div>
                    <div className={css.nav_bottom_content}>
                        <div className={css.nav_link_wrapper}>
                            <span>MENU</span>
                            <NavBar className={css.navbar_header}>
                                <Link to='/' onClick={() => setIsOpen(false)}>Home</Link>
                                <Link to='/project' onClick={() => setIsOpen(false)}>Projects</Link>
                                <Link to='/about' onClick={() => setIsOpen(false)}>About</Link>
                                <Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link>
                            </NavBar>
                        </div>
                        <div className={css.address_and_network}>
                            <Address className={css.address_header} />
                            <Networks />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

