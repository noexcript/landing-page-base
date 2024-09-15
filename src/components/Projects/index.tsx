

import { Project } from '../Project'
import css from './index.module.css'
import { DataProject } from '../../utils/data-project'



export const Projects = ({ count }: { count?: number }) => {
    return (
        <div className={css.projects}>
            {
                Array.from({ length: count ?? 3 }, (_, index: number) => (
                    <Project key={index} {...DataProject} />
                ))
            }
        </div>
    )
}