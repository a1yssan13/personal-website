import React from "react"
import { theme } from '../../styles/stitches.config.js'
import style from './stairs.module.css'
import PropTypes from 'prop-types'

const DARKEST = theme.colors.darkest
const DARKER = theme.colors.darker
const MEDIUM = theme.colors.medium
const BACKGROUND = theme.colors.background
const DARKACCENT = theme.colors.darkaccent

const Stairs = ({ toggle }) => {
  return (
    <svg
      width="180" preserveAspectRatio="xMidYMin slice"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsVectornator="http://vectornator.io"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
      viewBox="0 0 554 950"
    >
      <defs>
        <path id="a" d="M1.029 5.116h545.769v943.43H1.028V5.116z"></path>
        <path
          id="c"
          d="M378.311 717.012l-205.656 6.618c-3.853.124-7.382 3.322-7.883 7.144l-7.459 56.868c-.501 3.822 2.215 7.05 6.066 7.21 0 0 16.715 6.37 69.328 8.555 52.612 2.186 141.123.186 141.123.186 3.851.16 7.134-2.83 7.332-6.68l3.766-73.155c.198-3.85-2.764-6.87-6.617-6.746z"
        ></path>
        <path
          id="e"
          d="M371.455 714.269l-199.339 7.048c-.965.027-5.778-1.689-5.196-2.459 0 0 13.129-10.782 20.153-20.059 7.025-9.277 7.945-17.048 7.945-17.048.583-.769 1.832-1.307 2.791-1.202 0 0 89.029 13.779 132.888 18.593 43.859 4.815 42.548.664 42.548.664.959.106 2.2.821 2.772 1.598l2.853 11.141c.572.777-6.451 1.697-7.415 1.724z"
        ></path>
        <path
          id="g"
          d="M374.454 685.771l-2.104-41.232a3.358 3.358 0 00-3.43-3.269s-88.278 4.513-129.761 5.45c-41.483.937-36.172-1.701-36.172-1.701-1.847.042-3.425 1.571-3.524 3.416l-1.391 25.84c-.099 1.845 1.31 3.491 3.148 3.676 0 0 88.754 13.357 131.029 17.622 42.276 4.264 35.258 2.419 36.495 2.59 4.488.619 5.757-10.545 5.71-12.392z"
        ></path>
        <path
          id="i"
          d="M287.883 642.415c32.922-1.495 82.108-5.249 82.108-5.249.731-.011 1.067-.554.751-1.213l-5.043-10.502c-.316-.659-1.163-1.238-1.892-1.292l-138.033-10.324c-.729-.054-1.698.358-2.164.921l-20.067 20.68c-.466.563 2.289 6.788 3.02 6.767 0 0 10.154 1.358 31.306 1.75 21.153.392 17.091-.043 50.014-1.538z"
        ></path>
        <path
          id="k"
          d="M309.493 616.076l52.484 4.117c2.33.183 4.513-1.541 4.876-3.85 0 0 5.071-11.474 7.289-25.596 2.217-14.121 1.582-30.89 1.582-30.89.363-2.309-1.233-4.041-3.564-3.868 0 0-49.465 6.074-85.463 8.735-35.998 2.662-58.529 1.909-58.529 1.909-2.331.173-4.127 2.205-4.011 4.539l1.688 34.133c.115 2.334 2.097 4.375 4.427 4.557l79.221 6.214z"
        ></path>
        <path
          id="m"
          d="M225.726 563.625c1.853-.393 29.397 1.145 59.865-1.111 41.872-3.101 89.878-10.168 89.878-10.168.02-.002.021-.61.002-1.359l-.282-11.086a1.377 1.377 0 00-1.391-1.339s-46.721 2.572-78.776 2.984c-32.055.413-49.443-1.335-49.443-1.335-.749.01-1.482.167-1.638.352l-9.639 8.36s-9.39 14.875-8.576 14.702z"
        ></path>
        <path
          id="o"
          d="M373.051 492.403s-39.967 2.776-72.912 1.616c-32.944-1.161-58.866-6.259-58.866-6.259-2.424-.086-4.098 1.79-3.741 4.188l6.141 41.182c.358 2.398 2.613 4.322 5.038 4.296l19.87 1.081 27.219.46 74.702-2.837c2.424-.026 4.505-2.009 4.647-4.43l2.033-34.759a4.269 4.269 0 00-4.131-4.538z"
        ></path>
        <path
          id="q"
          d="M380.169 432.368l-.002 37.547a3.087 3.087 0 01-3.13 3.095l-118.533-1.346c-1.728-.02-3.205-1.435-3.298-3.162l-1.371-25.5a3.247 3.247 0 012.951-3.388L377.05 429.5c1.723-.145 3.119 1.139 3.119 2.868z"
        ></path>
        <path
          id="s"
          d="M273.255 385.942l-.262 31.574a3.533 3.533 0 003.557 3.572l99.906-.443a3.572 3.572 0 003.558-3.603l-.246-30.463a3.388 3.388 0 00-3.611-3.388l-56.797 3.155c-1.978.11-5.18.042-7.151-.153l-35.354-3.486c-1.972-.194-3.584 1.254-3.6 3.235z"
        ></path>
        <path
          id="u"
          d="M379.013 356.774s-40.941 2.594-65.28 2.151c-24.338-.444-32.074-3.925-32.074-3.925-1.261-.023-2.193.977-2.081 2.233l1.881 21.15c.112 1.256 1.221 2.367 2.477 2.481l32.332 2.921c1.256.113 3.295.137 4.554.052l56.382-3.793c1.258-.085 2.359-1.173 2.458-2.43l1.456-18.522a2.123 2.123 0 00-2.105-2.318z"
        ></path>
        <path
          id="w"
          d="M278.38 351.44s14.783 3.704 34.234 4.498c19.452.794 43.572-1.322 43.572-1.322a1.973 1.973 0 002.055-1.903l.564-15.539a2.014 2.014 0 00-1.911-2.08l-46.853-4.327-38.529.209c-1.096-.053-1.701.747-1.352 1.786l5.605 16.714c.349 1.04 1.52 1.919 2.615 1.964z"
        ></path>
        <path
          id="y"
          d="M330.772 330.21s-5.364-.224-20.592-1.113c-15.227-.888-39.444-.089-39.444-.089-1.124-.066-2.359-.973-2.757-2.027l-5.698-15.081c-.398-1.054-.277-4.127.848-4.077l68.454-2.752c1.125.05.708 8.979.792 10.102l1.155 15.474c.084 1.123-1.634-.371-2.758-.437z"
        ></path>
        <path
          id="A"
          d="M306.467 304.57l-41.798.027c-1.133-.033-3.386-.123-3.829-1.167l-8.371-21.082c-.443-1.044.115-1.834 1.247-1.764l50.944 3.13c1.131.07 2.129 1.042 2.227 2.172l1.454 16.698c.099 1.13-.741 2.019-1.874 1.986z"
        ></path>
        <path
          id="C"
          d="M239.851 7.594c.63-1.181-.23 218.355-.23 218.355l22.089 4.829 9.703 26.932 51.361 3.984-.083 6.483 58.541-15.598-.824-246.161S239.221 8.776 239.851 7.594z"
        ></path>
        <path
          id="E"
          d="M378.196 426.047l.831-2.606c.23-.722-.198-1.3-.956-1.289l-106.637 1.453c-.758.01-1.831.429-2.396.935l-12.84 11.5c-.565.506-.41.868.346.809l119.866-9.387c.756-.059 1.556-.693 1.786-1.415z"
        ></path>
        <path
          id="G"
          d="M251.8 475.405l-9.149 8.286c-.637.577-.457 1.073.401 1.108 0 0 26.132 4.984 59.17 6.352 33.038 1.368 72.982-.878 72.982-.878.858.036 1.712-.613 1.908-1.45l2.665-11.389c.195-.836-.342-1.523-1.201-1.533l-124.069-1.521c-.858-.01-2.07.449-2.707 1.025z"
        ></path>
      </defs>
      <g vectornatorLayerName="Layer 1">
        <use fill={BACKGROUND} xlinkHref="#a"></use>
        <mask
          id="b"
          width="545.769"
          height="943.429"
          x="1.029"
          y="5.116"
          maskUnits="userSpaceOnUse"
        >
          <path d="M1.029 5.116h545.769v943.43H1.028z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#a"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="9.107"
          mask="url(#b)"
          xlinkHref="#a"
        ></use>
        <path
          fill={DARKACCENT} className={style.bottom}
          stroke={DARKEST}
          strokeWidth="3.5"
          d="M96.33 946.584l330.272-1.746c3.855-.02 6.241-3.073 5.329-6.819 0 0-13.876-22.671-19.071-44.005-1.993-8.182-.468-11.046-.593-17.782-.2-10.827-1.115-23.547-1.115-23.547-.913-3.746-4.763-6.489-8.601-6.127l-201.234 24.816-89.982 2.639c-3.838.362-7.589 3.714-8.377 7.488 0 0 1.911 14.637-1.134 29.209-3.045 14.571-11.046 29.078-11.046 29.078-.789 3.773 1.697 6.816 5.552 6.796z"
        ></path>
        <path
          fill={MEDIUM} className={style.top}
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="3.5"
          d="M114.174 866.702l91.137-4.954 197.155-21.686c1.882-.173 2.58-5.971 1.244-7.308l-19.886-19.891c-1.337-1.337-3.951-2.487-5.839-2.569 0 0-97.182 1.673-151.512-.685-54.331-2.359-65.809-8.749-65.809-8.749-1.888-.082-4.359 1.062-5.517 2.556 0 0-6.34 17.134-17.279 31.233-10.94 14.1-26.479 25.165-26.479 25.165-1.159 1.494.903 7.062 2.785 6.888z"
        ></path>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#c"></use>
        <mask
          id="d"
          width="227.684"
          height="87.421"
          x="157.254"
          y="717.009"
          maskUnits="userSpaceOnUse"
        >
          <path d="M157.254 717.009h227.684v87.42H157.254z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#c"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#d)"
          xlinkHref="#c"
        ></use>
        <use fill={MEDIUM} className={style.top} xlinkHref="#e"></use>
        <mask
          id="f"
          width="212.032"
          height="40.781"
          x="166.871"
          y="680.536"
          maskUnits="userSpaceOnUse"
        >
          <path d="M166.871 680.536h212.032v40.781H166.871z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#e"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#f)"
          xlinkHref="#e"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#g"></use>
        <mask
          id="h"
          width="176.388"
          height="57.147"
          x="198.067"
          y="641.27"
          maskUnits="userSpaceOnUse"
        >
          <path d="M198.067 641.27h176.388v57.147H198.067z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#g"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#h)"
          xlinkHref="#g"
        ></use>
        <use fill={MEDIUM} className={style.top} xlinkHref="#i"></use>
        <mask
          id="j"
          width="167.37"
          height="30.259"
          x="203.49"
          y="613.831"
          maskUnits="userSpaceOnUse"
        >
          <path d="M203.49 613.831h167.37v30.259H203.49z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#i"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#j)"
          xlinkHref="#i"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#k"></use>
        <mask
          id="l"
          width="151.657"
          height="64.23"
          x="224.152"
          y="555.977"
          maskUnits="userSpaceOnUse"
        >
          <path d="M224.152 555.977h151.657v64.23H224.152z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#k"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#l)"
          xlinkHref="#k"
        ></use>
        <use fill={MEDIUM} className={style.top} xlinkHref="#m"></use>
        <mask
          id="n"
          width="149.809"
          height="25.215"
          x="225.676"
          y="538.562"
          maskUnits="userSpaceOnUse"
        >
          <path d="M225.676 538.562h149.809v25.215H225.676z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#m"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#n)"
          xlinkHref="#m"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#o"></use>
        <mask
          id="p"
          width="139.706"
          height="51.21"
          x="237.484"
          y="487.757"
          maskUnits="userSpaceOnUse"
        >
          <path d="M237.484 487.757H377.19v51.21H237.484z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#o"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#p)"
          xlinkHref="#o"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#q"></use>
        <mask
          id="r"
          width="126.338"
          height="43.521"
          x="253.831"
          y="429.489"
          maskUnits="userSpaceOnUse"
        >
          <path d="M253.831 429.489h126.338v43.521H253.831z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#q"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#r)"
          xlinkHref="#q"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#s"></use>
        <mask
          id="t"
          width="107.022"
          height="38.398"
          x="272.992"
          y="382.69"
          maskUnits="userSpaceOnUse"
        >
          <path d="M272.992 382.69h107.022v38.398H272.992z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#s"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#t)"
          xlinkHref="#s"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#u"></use>
        <mask
          id="v"
          width="101.557"
          height="28.889"
          x="279.569"
          y="354.999"
          maskUnits="userSpaceOnUse"
        >
          <path d="M279.569 354.999h101.557v28.889H279.569z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#u"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#v)"
          xlinkHref="#u"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#w"></use>
        <mask
          id="x"
          width="88.746"
          height="25.349"
          x="270.061"
          y="330.767"
          maskUnits="userSpaceOnUse"
        >
          <path d="M270.061 330.767h88.746v25.35H270.06z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#w"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#x)"
          xlinkHref="#w"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#y"></use>
        <mask
          id="z"
          width="71.46"
          height="25.993"
          x="262.074"
          y="305.071"
          maskUnits="userSpaceOnUse"
        >
          <path d="M262.074 305.071h71.46v25.993h-71.46z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#y"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#z)"
          xlinkHref="#y"
        ></use>
        <use fill={DARKACCENT} className={style.bottom} xlinkHref="#A"></use>
        <mask
          id="B"
          width="56.032"
          height="24.017"
          x="252.317"
          y="280.579"
          maskUnits="userSpaceOnUse"
        >
          <path d="M252.317 280.579h56.032v24.017h-56.032z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#A"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#B)"
          xlinkHref="#A"
        ></use>
        <use fill={DARKER} xlinkHref="#C"></use>
        <mask
          id="D"
          width="141.612"
          height="261.76"
          x="239.621"
          y="6.418"
          maskUnits="userSpaceOnUse"
        >
          <path d="M239.621 6.418h141.612v261.76H239.621z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#C"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#D)"
          xlinkHref="#C"
        ></use>
        <path
          fill="none"
          stroke={DARKEST}
          strokeWidth="3.5"
          d="M56.11 110.232l84.451 37.949.562 79.59-83.315-37.842-1.699-79.697z"
        ></path>
        <path
          fill={DARKER}
          stroke={DARKEST}
          strokeWidth="3.5"
          d="M56.11 124.82l68.034 30.556.453 64.087-67.12-30.471-1.368-64.172z"
        ></path>
        <use fill={MEDIUM} className={style.top} xlinkHref="#E"></use>
        <mask
          id="F"
          width="123.231"
          height="14.704"
          x="255.858"
          y="422.152"
          maskUnits="userSpaceOnUse"
        >
          <path d="M255.858 422.152h123.231v14.704H255.858z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#E"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#F)"
          xlinkHref="#E"
        ></use>
        <use fill={MEDIUM} className={style.top} xlinkHref="#G"></use>
        <mask
          id="H"
          width="137.547"
          height="17.213"
          x="242.27"
          y="474.38"
          maskUnits="userSpaceOnUse"
        >
          <path d="M242.27 474.38h137.547v17.213H242.27z"></path>
          <use fill="#fff" fillRule="evenodd" xlinkHref="#G"></use>
        </mask>
        <use
          fill="none"
          stroke={DARKEST}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="7"
          mask="url(#H)"
          xlinkHref="#G"
        ></use>
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

Stairs.propTypes = {
  toggle: PropTypes.func,
}

export default Stairs