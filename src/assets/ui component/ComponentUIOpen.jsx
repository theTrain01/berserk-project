/** @format */

import './ComponentUi.scss'

export const ComponentUiOpen = ({onClickButton}) => {
    return (
        <svg
            width='32px'
            height='32px'
            iewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            stroke='#000000'
            className='open_burger_menu'
            onClick={onClickButton}
            >
            <g d='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
                <path
                d='M4 18L20 18'
                stroke='#00C2FF'
                stroke-width='2.5'
                stroke-linecap='round'
                ></path>
                <path
                d='M4 12L20 12'
                stroke='#00C2FF'
                stroke-width='2.5'
                stroke-linecap='round'
                ></path>
                <path
                d='M4 6L20 6'
                stroke='#00C2FF'
                stroke-width='2.5'
                stroke-linecap='round'
                ></path>
            </g>
        </svg>
    );
};

export const ComponentUiClose = ({onClickButton}) => {
    return (
        <svg
            width='32px'
            height='32px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='close_burger_menu'
            onClick={onClickButton}
            >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
                {" "}
                <g id='Menu / Close_MD'>
                <path
                    id='Vector'
                    d='M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18'
                    stroke='#00C2FF'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                ></path>{" "}
                </g>{" "}
            </g>
        </svg>
    );
};
