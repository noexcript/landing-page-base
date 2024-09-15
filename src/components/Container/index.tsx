import { ContainerProps } from "../../types/container";
import styles from './index.module.css'


export const Container = ({ children }: ContainerProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}