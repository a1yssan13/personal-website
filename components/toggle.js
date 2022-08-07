import { css, styled } from '../styles/stitches.config.js'
import styles from './toggle.module.css'
const Toggle = ({handler}) => {
    return  (
        <>
        <div className={styles.switch}>
            <input type="checkbox" onChange={handler} className={styles.switch__input} id="Switch"/>
            <label className={styles.switch__label} for="Switch">
                <span className={styles.switch__indicator}></span>
                <span className={styles.switch__decoration}></span>
            </label>
        </div>
        </>
    )
}

export default Toggle