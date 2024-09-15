import { SkillProps } from "../../types/skill"
import css from './index.module.css'

export const Skill = ({ icon, label }: SkillProps) => {
    return (
        <div className={css.skill}>
            <img src={icon} alt={label} />
            <span>{label}</span>
        </div>
    )
}