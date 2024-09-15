import { bar } from "../../lib/img"
import css from './index.module.css'

export const Menu = () => {
    return (
        <>
            <button className={css.humburger}>
                <img src={bar} alt="bar-menu" />
            </button>
        </>
    )
}