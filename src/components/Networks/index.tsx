import { instagram, twitter } from '../../lib/img'
import css from './index.module.css'

export const Networks = () => {
    return (
        <div className={css.networks}>
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
        </div>
    )
}