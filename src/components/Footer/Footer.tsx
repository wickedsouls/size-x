import React from 'react';
import style from './index.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../store/files/files.actions';
import {ConnectedProps} from 'react-redux';

const options = [.05, .1, .15, .2, .3, .4, .5, .6, .7, .8];

const Footer = (props: PropsFromRedux): JSX.Element => {
   const renderOptions = () => {
      return options.map(option => (
         <div
            className={style.option}
            onClick={()=>props.onSizeSelect(option)}
            key={option}
         >
            {option * 100}%
         </div>
      ))
   };

   return (
      <div className={style.footer}>
         <div className={style.quality} onClick={props.showSizeSelection}>
            Quality: {props.files.size * 100}%
         </div>
         {props.files.sizeSelect &&
         <React.Fragment>
           <div className={style.backdrop} onClick={props.showSizeSelection}/>
           <div className={style.options}>
              {renderOptions()}
           </div>
         </React.Fragment>
         }
         <div className={style.author}>
            Powered by Wickedsouls
         </div>
      </div>
   );
};


const mapStateToProps = (state: GlobalState) => {
   return {
      files: state.files
   }
};

const connector = connect(mapStateToProps, actions);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Footer);