import { Link } from "react-router-dom"
import css from './index.module.css'

export const Address = () => {
    return (
        <div className={`${css.address} ${css.address_footer}`}>
            <Link to="mailto:noexcript@gmail.com">noexcript@gmail.com</Link>
            <Link to="tel:+244937613303">+244 937613303</Link>
        </div>
    )
}