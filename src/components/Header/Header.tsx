import React from 'react';
import style from './index.module.scss';
import Icon from "../ui/Icon/Icon";
import {ipcRenderer} from 'electron';

const Header = () => {
   return (
      <div className={style.header}>
         <h1 className={style.heading}>SizeX - <span>image resize made eazy</span></h1>
         <Icon
            icon='times'
            className={style.icon}
            size='sm'
            onClick={()=>ipcRenderer.send('app:close')}
         />
      </div>
   );
};

export default Header;