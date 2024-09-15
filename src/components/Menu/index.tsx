
import { bar } from "../../lib/img"
import { NavbarWrapper } from "../NavbarWrapper"
import css from './index.module.css'
import { useOpen } from "../../hook/useOpen"

export const Menu = () => {
    const { setIsOpen } = useOpen()
    return (
        <>
            <button className={css.humburger} onClick={() => setIsOpen(true)}>
                <img src={bar} alt="bar-menu" />
            </button>
            <NavbarWrapper />
        </>
    )
}