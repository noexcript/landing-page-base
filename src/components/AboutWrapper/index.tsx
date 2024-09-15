import css from './index.module.css'

export type AboutWrapperProps = {
    children: React.ReactNode
}


export const AboutWrapper = ({ children }: AboutWrapperProps) => {
    return (
        <section className={css.about_wrapper}>
            {children}
        </section>
    )
}