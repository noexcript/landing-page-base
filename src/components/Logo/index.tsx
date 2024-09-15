import { Link } from "react-router-dom"
import { logo } from "../../lib/img"
import css from './index.module.css'

export const Logo = () => {
    return (
        <Link to='/' className={css.logo} >
            <img src={logo} alt="Logotipo" />
        </Link>

    )
}