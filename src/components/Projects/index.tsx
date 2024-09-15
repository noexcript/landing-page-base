

import { Project } from '../Project'
import css from './index.module.css'
import { DataProject } from '../../utils/data-project'



export const Projects = () => {
    return (
        <div className={css.projects}>
            {
                Array.from({ length: 3 }, (_, index: number) => (
                    <Project key={index} {...DataProject} />
                ))
            }
        </div>
    )
}