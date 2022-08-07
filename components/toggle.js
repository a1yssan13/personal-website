import styles from './toggle.module.css'
import React from 'react'
// eslint-disable-next-line react/prop-types
const Toggle = ({handler}) => {
    return  (
        <>
        <div className={styles.switch}>
            <input type="checkbox" onChange={handler} className={styles.switch__input} id="Switch"/>
            <label className={styles.switch__label} htmlFor="Switch">
                <span className={styles.switch__indicator}></span>
                <span className={styles.switch__decoration}></span>
            </label>
        </div>
        </>
    )
}

export default Toggle