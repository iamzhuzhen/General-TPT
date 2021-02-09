import React, { useState, useEffect } from 'react'
import './index.scss';

const LeftNav = () => {
  const [isMenuExpand, setIsMenuExpand] = useState(true)
  
  return (
    <div className={`LeftNav ${isMenuExpand? '' :'collapseMenu'}`}>
      left Nav
      {isMenuExpand?'on':'off'}
      <MenuExpandIcon onClick={()=>{setIsMenuExpand(!isMenuExpand)}} isMenuExpand={isMenuExpand}></MenuExpandIcon>
    </div>
  );
}

// menu expand or collapse icon
const MenuExpandIcon = (props) => {
  const [isTouchSwitchIcon, setIsTouchSwitchIcon] = useState(false)

  const hoverSwitchIcon = () => {
    setIsTouchSwitchIcon(true)
  }

  const unhoverSwitchIcon = () => {
    setIsTouchSwitchIcon(false)
  }

  const iconClickHandler = () =>{
    props.onClick && props.onClick()
  }

  return (
    <div onClick={iconClickHandler} onMouseOver={hoverSwitchIcon} onMouseOut={unhoverSwitchIcon} className={`leftNavSwitchIcon ${isTouchSwitchIcon ? 'bigIcon' : ''}`}>
      {props.isMenuExpand?'-':'+'}
    </div>
  )
}

export default LeftNav;
