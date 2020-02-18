import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import style from "./index.module.scss";
import Icon from "../Icon/Icon";

const IconButton = props => {
  const {size, icon, info, color} = props;
  const button = useRef(null);

  return (
    <div
      className={`${style.button} ${props.className} ${style[size]} ${style[color]}`}
      ref={button}
      onClick={props.onClick}>
      <Icon icon={icon} className={style.icon} color={color} size={size}/>
      {info && <div className={style.info}>{info}</div>}
    </div>
  );
};

IconButton.defaultProps={
  color:'grey',
  size:'md'
};

IconButton.propTypes = {
  onClick:PropTypes.func.isRequired,
  icon:PropTypes.string.isRequired,
  className:PropTypes.string,
  info:PropTypes.string,
  color:PropTypes.oneOf(['primary','secondary','dark','light','grey']),
  size:PropTypes.oneOf(['sm', 'md','lg']).isRequired
};

export default IconButton;