import React from 'react';
import sprites from '../../../assets/images/sprite-sheet.svg';
import PropTypes from 'prop-types';
import style from './index.module.scss';
const Icon = props => {
  const {icon, onClick,disableOutsideClick, color, size} = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
         style={props.style}
         onClick={onClick}
         data-outsideclick={disableOutsideClick ? 'disabled':''}
         className={`${props.className} ${style.icon} ${style[size]} ${style[color]}`}>
      <use xlinkHref={sprites+'#'+icon}
           data-outsideclick={disableOutsideClick ? 'disabled':''}
      />
    </svg>
  )
};

Icon.defaultProps={
  size:'md',
  color:'dark'
};

Icon.propTypes = {
  icon:PropTypes.string.isRequired,
  style:PropTypes.object,
  className:PropTypes.string,
  onClick:PropTypes.func,
  color:PropTypes.oneOf(['primary', 'secondary','dark', 'light', 'grey']),
  size:PropTypes.oneOf(['sm','md','lg']),
  disableOutsideClick:PropTypes.bool
};


export default Icon;