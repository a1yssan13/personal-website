import React from 'react';
import { theme } from '../../styles/stitches.config.js'
import PropTypes from 'prop-types'

const DARKEST = theme.colors.darkest
const DARKER = theme.colors.darker
const MEDIUM = theme.colors.medium
const BACKGROUND = theme.colors.background
const DARKACCENT = theme.colors.darkaccent

const BoatMobile = () => {
    return (
        <svg
        width="100%" preserveAspectRatio="xMidYMin slice" 
          xmlns="http://www.w3.org/2000/svg"
          xmlnsVectornator="http://vectornator.io"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          clipRule="evenodd"
          viewBox="0 0 1000 600"
        >
          <defs>
            <path
              id="Fill"
              d="M3.348 545.754l2.304-304.13L7.482 0l943.402 7.145L946.75 552.9 3.348 545.754z"
            ></path>
            <path
              id="Fill_2"
              d="M6.212 261.928s57.002 4.682 92.078-9.597c35.076-14.278 29.355-24.567 45.18-24.473 15.825.094-1.417 15.849 10.268 37.283 11.686 21.434 14.642 14.735 26.931 36.853 12.288 22.118 20.971 42.199 41.728 39.056 20.757-3.144 36.734-28.913 63.627-65.947 26.893-37.033 11.042-43.28 39.352-67.199 28.309-23.92 47.765-5.994 73.885-28.478 26.12-22.484 7.696-79.791 29.478-77.728 21.781 2.063 12.957 16.364 33.423 32.558 20.467 16.194 22.921 22.583 48.442 32.217 25.521 9.635 35.391 13.122 53.642 6.322 18.252-6.801 2.251-41.844 19.364-33.524 17.114 8.32 23.022 54.32 49.09 66.802 26.068 12.483 70.026 43.875 87.327 27.398 17.301-16.477 9.57-51.899 23.306-68.698 13.737-16.799 19.465-49.764 42.62-44.317 23.156 5.447-.967 33.629 26.853 41.924 27.82 8.294 50.975-11.925 84.427-8.746 33.453 3.179 49.383 21.461 49.383 21.461l1.761-170.563L477.025 2.42 10.317.33 6.212 261.928z"
            ></path>
            <path
              id="Fill_3"
              d="M5.341 246.742s41.55 12.809 66.415 8.358c24.865-4.45 19.072-14.181 40.622-31.345 21.55-17.165 31.592-46.013 45.579-37.311 13.987 8.701-16.401 66.635 10.369 72.116 27.345 5.599 12.002-15.281 31.071-11.044 19.069 4.238 5.471 36.613 46.477 20.497 39.418-15.493-1.437-42.849 26.572-65.967 28.008-23.119 48.309-1.408 84.188-19.009 35.88-17.602 30.158-36.746 59.33-51.397 29.172-14.65 31.885-30.593 57.358-7.206 25.472 23.387 23.173 74.806 44.533 100.754 21.361 25.949 36.099 25.515 40.908 3.039 4.809-22.476-21.607-65.38-21.672-92.941-.064-27.56 36.568-28.528 55.8-17.587 19.231 10.942 12.94 39.818 42.542 44.05 29.601 4.232 45.775-26.775 83.219-42.873 37.444-16.097 40.736-23.908 66.557-21.517 25.82 2.39 10.978 44.498 29.368 46.833 18.39 2.334 19.986-30.078 44.192-37.494 24.206-7.417 31.33-.44 52.631 7.829 21.3 8.269 36.288 53.541 36.288 53.541l2.917-160.963-299.069-3.392L7.633.949 5.341 246.742z"
            ></path>
            <path
              id="Fill_4"
              d="M6.802 199.291s42.652 33.2 75.205 19.25c32.554-13.949 24.946-46.862 68.693-59.45 43.746-12.588 64.402 28.728 108.143 10.47 43.74-18.259 49.839-41.127 64.556-59.482 20.877-26.035 33.298-26.26 73.836-34.657 40.539-8.397 45.411 26.241 90.231 28.513 44.819 2.272 43.284-24.797 89.047-19.425 45.762 5.371 19.469 52.811 71.106 47.984 51.638-4.827 61.777-55.612 114.235-69.378 52.458-13.766 79.063 5.376 117.875 14.49s69.24 134.299 69.24 134.299l2.613-207.54-692.853-1.881L7.792.78l-.99 198.511z"
            ></path>
          </defs>
          <g vectornatorLayerName="Layer 1">
            <use fill={DARKACCENT} xlinkHref="#Fill"></use>
            <mask
              id="StrokeMask"
              width="947.536"
              height="552.899"
              x="3.348"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path d="M3.348 0H950.8839999999999V552.899H3.348z"></path>
              <use fill="#fff" fillRule="evenodd" xlinkHref="#Fill"></use>
            </mask>
            <use
              fill="none"
              stroke={DARKEST}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="9.107"
              mask="url(#StrokeMask)"
              xlinkHref="#Fill"
            ></use>
            <use fill={DARKER} xlinkHref="#Fill_2"></use>
            <mask
              id="StrokeMask_2"
              width="942.165"
              height="341.046"
              x="6.212"
              y="0.33"
              maskUnits="userSpaceOnUse"
            >
              <path d="M6.212 0.33H948.377V341.376H6.212z"></path>
              <use fill="#fff" fillRule="evenodd" xlinkHref="#Fill_2"></use>
            </mask>
            <use
              fill="none"
              stroke={DARKEST}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="9.107"
              mask="url(#StrokeMask_2)"
              xlinkHref="#Fill_2"
            ></use>
            <use fill={MEDIUM} xlinkHref="#Fill_3"></use>
            <mask
              id="StrokeMask_3"
              width="945.263"
              height="271.528"
              x="5.341"
              y="0.949"
              maskUnits="userSpaceOnUse"
            >
              <path d="M5.341 0.949H950.604V272.47700000000003H5.341z"></path>
              <use fill="#fff" fillRule="evenodd" xlinkHref="#Fill_3"></use>
            </mask>
            <use
              fill="none"
              stroke={DARKEST}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="9.107"
              mask="url(#StrokeMask_3)"
              xlinkHref="#Fill_3"
            ></use>
            <use fill={BACKGROUND} xlinkHref="#Fill_4"></use>
            <mask
              id="StrokeMask_4"
              width="944.779"
              height="221.184"
              x="6.802"
              y="0.78"
              maskUnits="userSpaceOnUse"
            >
              <path d="M6.802 0.78H951.581V221.964H6.802z"></path>
              <use fill="#fff" fillRule="evenodd" xlinkHref="#Fill_4"></use>
            </mask>
            <use
              fill="none"
              stroke={DARKEST}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeWidth="9.107"
              mask="url(#StrokeMask_4)"
              xlinkHref="#Fill_4"
            ></use>
            <g>
              <path
                fill={BACKGROUND}
                stroke={DARKEST}
                strokeLinecap="butt"
                strokeWidth="4.553"
                d="M701.175 427.684s29.368 21.05 46.592 20.735c6.82-.125 106.141-18.028 106.141-18.028l-8.493-57.069s-95.867 14.968-107.857 19.347c-14.399 5.26-36.383 35.015-36.383 35.015z"
              ></path>
              <path
                fill={DARKACCENT}
                stroke={DARKEST}
                strokeLinecap="butt"
                strokeWidth="4.553"
                d="M725.594 431.761l-2.946-16.047s6.763-10.303 19.965-14.911c13.202-4.608 33.187-7.058 33.187-7.058l7.111 40.562s-21.106 4.448-34.986 4.79c-13.879.342-22.331-7.336-22.331-7.336z"
              ></path>
              <path
                fill={DARKACCENT}
                stroke={DARKEST}
                strokeLinecap="butt"
                strokeWidth="4.055"
                d="M791.955 432.948l-7.62-41.589 33.495-5.322 7.184 40.792-33.059 6.119z"
              ></path>
              <path
                fill="none"
                stroke={DARKER}
                strokeWidth="4.055"
                d="M889.991 421.536s-19.775-10.983-20.4-24.257c-.626-13.274 9.428-26.429 9.428-26.429M917.125 426.625s-22.575-13.796-23.518-29.988c-.943-16.192 10.221-42.248 10.221-42.248M869.115 416.501s-5.42-7.269-7.35-14.474c-1.93-7.205 1.881-19.17 1.881-19.17M720.179 392.136s5.945-7.73 18.44-10.213c12.495-2.484 22.614-3.231 22.614-3.231M724.978 456.655s10.374 6.428 24.714 7.077c14.34.649 32.647-4.481 32.647-4.481"
              ></path>
            </g>
          </g>
        </svg>
      )
}

BoatMobile.propTypes = {
    toggle: PropTypes.func, 
}

export default BoatMobile 