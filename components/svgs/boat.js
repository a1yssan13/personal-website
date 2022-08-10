import React from 'react';
import { theme } from '../../styles/stitches.config.js'
import boatStyle from './boat.module.css'
import PropTypes from 'prop-types'

const DARKEST = theme.colors.darkest
const DARKER = theme.colors.darker
const MEDIUM = theme.colors.medium
const BACKGROUND = theme.colors.background
const DARKACCENT = theme.colors.darkaccent

const Boat = ({toggle}) => {
    return (
        <svg width="250" preserveAspectRatio="xMidYMin slice" strokeMiterlimit="10" style={{fillRule:"nonzero",clipRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}} viewBox="0 0 554 950" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
                <path d="M3.1 3.6H549V947H3.1V3.6Z" id="b"/>
                <path d="M287 4.3s-4.3 57 10.3 92c14.5 35 24.8 29.2 24.8 45s-15.9-1.3-37.2 10.6c-21.4 11.8-14.6 14.7-36.7 27.2-22 12.4-42 21.3-38.7 42 3.3 20.7 29.2 36.5 66.4 63.1 37.3 26.6 43.4 10.7 67.5 38.9 24.2 28 6.4 47.7 29 73.6 22.7 26 80 7.1 78 29-1.9 21.7-16.3 13-32.3 33.6-16 20.6-22.4 23-31.8 48.7-9.5 25.6-12.9 35.5-6 53.7 7 18.2 41.9 1.9 33.7 19-8.2 17.2-54.1 23.5-66.4 49.7-12.3 26.1-43.4 70.3-26.8 87.5 16.7 17.2 52 9.2 69 22.8 16.8 13.6 49.8 19 44.6 42.3-5.3 23.2-33.7-.7-41.8 27.1-8 28 12.3 51 9.4 84.4-2.9 33.5-21 49.5-21 49.5l170.5.5-1.5-471.3-1.4-466.8-261.6-2Z" id="d"/>
                <path d="M302.2 3.3s-12.5 41.7-7.9 66.5c4.6 24.8 14.3 19 31.7 40.4 17.3 21.4 46.2 31.2 37.6 45.3-8.6 14-66.7-16-72 10.9-5.4 27.4 15.4 11.9 11.3 31-4.1 19-36.6 5.7-20.2 46.6 15.8 39.3 42.9-1.7 66.2 26 23.3 28 1.8 48.4 19.6 84.1 17.9 35.8 37 30 51.9 59 14.8 29 30.8 31.6 7.6 57.3-23.2 25.6-74.6 23.7-100.4 45.3-25.8 21.5-25.2 36.3-2.7 40.9 22.5 4.6 65.2-22.1 92.7-22.4 27.6-.2 28.8 36.4 18 55.7C425 609.2 396 603 392 632.8c-4 29.6 27.1 45.5 43.5 82.9 16.4 37.3 24.2 40.5 22 66.3-2.1 25.9-44.4 11.4-46.6 29.8-2.2 18.4 30.3 19.7 37.9 43.9 7.6 24.1.6 31.3-7.5 52.7-8 21.3-53.2 36.7-53.2 36.7l161 1.7 1-299.1-2-644-245.8-.4Z" id="f"/>
                <path d="M349.6 4.4s-32.9 43-18.7 75.4c14.2 32.4 47 24.6 60 68.2 13 43.7-28.2 64.6-9.6 108.2 18.6 43.6 41.5 49.6 60 64.1 26.1 20.7 26.4 33.1 35.1 73.6 8.7 40.5-25.8 45.6-27.8 90.5-2 44.8 25.1 43 20.1 88.9-5 45.8-52.6 19.8-47.4 71.4 5.2 51.6 56 61.4 70.2 113.7 14.2 52.4-4.8 79.1-13.6 118-8.8 38.9-133.8 70.3-133.8 70.3l207.6 1-3.4-692.8-.2-251-198.5.5Z" id="h"/>
            </defs>
            <g clipPath="url(#a)">
                <use fill={DARKACCENT} xlinkHref="#b"/> 
                <mask height="943.4" id="c" maskUnits="userSpaceOnUse" width="545.8" x="3.1" y="3.6">
                <path d="M3.1 3.6h545.8V947H3.1z"/>
                <use fill="#fff" fillRule="evenodd" xlinkHref="#b"/>
                </mask>
                <use fill="none" mask="url(#c)" stroke={DARKEST} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="9.1" xlinkHref="#b"/>
                <use fill={DARKER} xlinkHref="#d"/>
                <mask height="940.2" id="e" maskUnits="userSpaceOnUse" width="342.4" x="209.1" y="4.3">
                <path d="M209.1 4.3h342.4v940.2H209.1z"/>
                <use fill="#fff" fillRule="evenodd" xlinkHref="#d"/>
                </mask>
                <use fill="none" mask="url(#e)" stroke={DARKEST} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="9.1" xlinkHref="#d"/>
                <use fill={MEDIUM} xlinkHref="#f"/>
                <mask height="943.4" id="g" maskUnits="userSpaceOnUse" width="272" x="278.1" y="3.3">
                <path d="M278.1 3.3h272v943.4h-272z"/>
                <use fill="#fff" fillRule="evenodd" xlinkHref="#f"/>
                </mask>
                <use fill="none" mask="url(#g)" stroke={DARKEST} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="9.1" xlinkHref="#f"/>
                <use fill={BACKGROUND} xlinkHref="#h"/>
                <mask height="943.8" id="i" maskUnits="userSpaceOnUse" width="224.3" x="327.4" y="3.9">
                <path d="M327.4 3.9h224.3v943.8H327.4z"/>
                <use fill="#fff" fillRule="evenodd" xlinkHref="#h"/>
                </mask>
                <use fill="none" mask="url(#i)" stroke={DARKEST} strokeLinecap="butt" strokeLinejoin="miter" strokeWidth="9.1" xlinkHref="#h"/>
                <g className={boatStyle.boat}>
                    <path d="M126.5 700.5s-20.8 29.5-20.4 46.8c.2 6.8 18.8 106 18.8 106l57-9s-15.6-95.7-20.1-107.7c-5.4-14.3-35.3-36-35.3-36Z" fill={BACKGROUND} stroke={DARKEST} strokeLinecap="butt" strokeWidth="4.6"/>
                    <path d="m122.6 725 16-3.1s10.4 6.7 15 19.9c4.8 13.1 7.4 33 7.4 33l-40.5 7.5s-4.6-21-5-35c-.5-13.8 7.1-22.3 7.1-22.3Z" fill={DARKACCENT} stroke={DARKEST} strokeLinecap="butt" strokeWidth="4.6"/>
                    <path className={boatStyle.move} d="m122 791.3 41.4-7.9 5.6 33.5-40.7 7.4-6.4-33Z" fill={DARKACCENT} stroke={DARKEST} strokeLinecap="butt" strokeWidth="4.1"/>
                    <path className={boatStyle.lines} d="M134 889.3s11-19.9 24.2-20.6a47.5 47.5 0 0 1 26.5 9.2M129.2 916.5s13.6-22.7 29.8-23.8c16.2-1 42.3 10 42.3 10M139 868.4s7.2-5.5 14.4-7.5 19.2 1.7 19.2 1.7M162.2 719.3s7.8 5.8 10.3 18.3a208 208 0 0 1 3.4 22.6M97.7 724.5s-6.3 10.5-6.9 24.8c-.5 14.4 4.7 32.6 4.7 32.6" fill="none" stroke={DARKER} strokeidth="4.1"/>
                </g>
                <g onClick={toggle}>
                    <path
                    fill={MEDIUM} className={'switcher'}
                    d="M526.538 70.171h-31.981c-5.284 0-9.567-4.284-9.567-9.568V26.697c0-5.284 4.283-9.568 9.567-9.568h31.981c5.284 0 9.568 4.284 9.568 9.568v33.906c0 5.284-4.284 9.568-9.568 9.568z"
                    ></path>
                    <path
                    className={'switcher'}
                    fill="none"
                    stroke={DARKEST}
                    strokeWidth="5.61"
                    d="M497.92 42.792l18.637-.108 6.41-.037-5.546-9.3 5.479 9.272-4.679 10.263"
                    ></path> 
                </g>
                    
            </g>
        </svg>
    )
}

Boat.propTypes = {
    toggle: PropTypes.func, 
}

export default Boat 