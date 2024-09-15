import { ProjectProps } from "../../types/project"
import css from './index.module.css'

export const Project = ({ image, title, content }: ProjectProps) => {
    return (
        <div className={css.project}>
            <img src={image} alt={title} />
            <div className={css.project_content}>
                <h1>{title}</h1>
                <span>{content}</span>
            </div>
        </div>
    )
}