import { Link } from "react-router-dom"
import css from './index.module.css'

export const Address = ({ className }: { className?: string }) => {
    return (
        <div className={`${css.address} ${className ?? ''}`}>
            <Link to="mailto:noexcript@gmail.com">noexcript@gmail.com</Link>
            <Link to="tel:+244937613303">+244 937613303</Link>
        </div>
    )
}