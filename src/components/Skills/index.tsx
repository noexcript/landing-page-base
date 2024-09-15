import css from './index.module.css'
import { DataSkills } from '../../utils/data-skill'
import { SkillProps } from '../../types/skill'
import { Skill } from '../Skill'

export const Skills = () => {
    return (
        <div className={css.skills}>
            {
                DataSkills.map((item: SkillProps, index: number) => (
                    <Skill key={index}  {...item} />
                ))
            }
        </div>
    )
}