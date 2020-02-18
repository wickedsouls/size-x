import React, {useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FileLoader from "../FileLoader/FileLoader";
import {connect} from 'react-redux';
import {ConnectedProps} from 'react-redux';
import style from './index.module.scss';
import {ipcRenderer} from "electron";
import * as actions from "../../store/files/files.actions";

const App = (props: PropsFromRedux) => {
   useEffect(() => {
      ipcRenderer.on('upload:success', () => {
         props.onUploadSuccess()
      })
      // eslint-disable-next-line
   }, []);
   return (
      <div className={style.app}>
         <Header/>
         <FileLoader/>
         <Footer/>
         {props.files.count &&
         <div className={style.counter}>
           Files resized: ${props.files.count}
         </div>
         }
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

export default connector(App);
