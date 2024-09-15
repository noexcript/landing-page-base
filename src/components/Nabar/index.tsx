import { Link } from "react-router-dom"
import css from './index.module.css'
export const NavBar = () => {
    return (
        <nav className={`${css.navbar} ${css.navbar_address}`}>

            <Link to='/'>Projects</Link>

            <Link to='/'>About</Link>

            <Link to='/'>Contact</Link>


        </nav >
    )
} 