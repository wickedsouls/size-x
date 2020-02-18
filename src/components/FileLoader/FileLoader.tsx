import React from 'react';
import style from './index.module.scss';
import logo from '../../assets/images/logo.svg';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as actions from '../../store/files/files.actions';
import {ConnectedProps} from 'react-redux';


type FileLoaderProps = PropFromRedux & {

}

const FileLoader = (props:FileLoaderProps) => {

   return (
      <Dropzone
         onDragLeave={props.onDragLeave}
         onDragEnter={props.onDragEnter}
         onDrop={props.onDrop}>
         {({getRootProps, getInputProps}) => (
            <div {...getRootProps()} className={`${style.file_loader} ${props.files.focus ? style.active :''}`}>
               <input {...getInputProps()} />
               <img src={logo} alt="logo" className={style.logo}/>
               <div className={style.desc}>Drop files here to resize!</div>
            </div>
         )}
      </Dropzone>
   );
};

const mapStateToProps = (state:GlobalState) => {
  return {
    files:state.files
  }
};

const connector = connect(mapStateToProps,actions);

type PropFromRedux = ConnectedProps<typeof connector>

export default connector(FileLoader);