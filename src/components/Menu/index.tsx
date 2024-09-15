
import { bar } from "../../lib/img"
import { NavbarWrapper } from "../NavbarWrapper"
import css from './index.module.css'
import { useOpen } from "../../hook/useOpen"
import { useEffect } from "react"

export const Menu = () => {
    const { setIsOpen, isOpen } = useOpen()

    useEffect(() => {
        if(isOpen){
            document.body.style.overflow='hidden'
            console.log('open')
        }else{
             document.body.style.overflow='auto'
             console.log('close')
        }
    }, [isOpen])
    return (
        <>
            <button className={css.humburger} onClick={() => setIsOpen(true)}>
                <img src={bar} alt="bar-menu" />
            </button>
            <NavbarWrapper />
        </>
    )
}