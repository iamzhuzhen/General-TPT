import React, { useState, useEffect } from 'react'
import './index.scss';

import { connect } from 'react-redux' // 引入connect

const Loading = (props) => {

  let {isLoading,dispatch} = props;

  useEffect(() => {
    console.log(props)
  }, [])

  const clickHandler = (e) => {
    e.stopPropagation();
    dispatch({type:'ENDLOADING'})
  }

  if(isLoading){
    return (
      <div className="ProjectLoadingMask" onClick={clickHandler} >
        <i className="fa fa-spinner fa-spin projectLoadingIcon" ></i>
      </div>
    )
  } else {
    return (
      <></>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.projectReducer.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);