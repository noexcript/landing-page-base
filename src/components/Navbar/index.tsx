
import css from './index.module.css'

type NavBarProps = {
    children: React.ReactNode,
    className?: string
}
export const NavBar = ({ children, className }: NavBarProps) => {
   
    return (
        <nav className={`${css.navbar} ${className ?? ''}`}>
            {children}
        </nav >
    )
} 