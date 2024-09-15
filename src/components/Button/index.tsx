import { Link } from "react-router-dom"
import { arrow_right } from "../../lib/img"
import css from './index.module.css'
import { useOpen } from "../../hook/useOpen"


type ButtonLinkProps = {
    url: string,
    label: string
}

export const ButtonLink = ({ url, label }: ButtonLinkProps) => {
    const { setIsOpen } = useOpen()
    return (
        <Link to={`/${url}`} className={css.button_link} onClick={() => setIsOpen(false)}>
            <img src={arrow_right} alt="arrow-right" />
            <span>{label}</span>
        </Link>
    )
}