import React, { useState, useEffect } from 'react'
import './index.scss';

const LeftNav = () => {
  const [isMenuExpand, setIsMenuExpand] = useState(true)
  const [menuArr, setMenuArr] = useState([])

  // equals to didmount
  useEffect(() => {
    setMenuArr(getMockUpMenuArr())
  }, [])

  const menuTabClick = (menu) => {

  }

  return (
    <div className={`LeftNav ${isMenuExpand ? '' : 'collapseNavMenu'}`}>
      <span className=''>Navigation</span>
      <div className="MenuTabList">
        {menuArr.map((menu) => {
          return (
            <MenuTab onClick={menuTabClick} menu={menu} expanded={isMenuExpand}></MenuTab>
          )
        })}
      </div>

      <MenuExpandIcon onClick={() => { setIsMenuExpand(!isMenuExpand) }} isMenuExpand={isMenuExpand}></MenuExpandIcon>
    </div>
  );
}

export default LeftNav;

// menu tab
const MenuTab = ({ menu, expanded, onClick }) => {
  const menuClickHandler = () => {
    onClick && onClick(menu)
  }
  return (
    <div className="MenuTab" onClick={menuClickHandler} title={menu['label']}>
      {expanded ? (
        <>
          <i className={menu['icon']} ></i>
          <span className="menuLabel">{menu['label']}</span>
        </>
      ) : (
          <i className={`${menu['icon']} iconBig`} ></i>
        )}

    </div>
  )
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

  const iconClickHandler = () => {
    props.onClick && props.onClick()
  }

  return (
    <div onClick={iconClickHandler} onMouseOver={hoverSwitchIcon} onMouseOut={unhoverSwitchIcon} className={`leftNavSwitchIcon ${isTouchSwitchIcon ? 'bigIcon' : ''}`}>
      {props.isMenuExpand ? (
        <i class="fa fa-chevron-left"></i>
      ) : (
          <i class="fa fa-chevron-right"></i>
        )}
    </div>
  )
}

// mock up menu list
const getMockUpMenuArr = () => {
  return [
    {
      label: 'Page 1',
      path: 'page_1',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 2',
      path: 'page_2',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 3',
      path: 'page_3',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 1',
      path: 'page_1',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 2',
      path: 'page_2',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 3',
      path: 'page_3',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 1',
      path: 'page_1',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 2',
      path: 'page_2',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 3',
      path: 'page_3',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 1',
      path: 'page_1',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 2',
      path: 'page_2',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 3',
      path: 'page_3',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 1',
      path: 'page_1',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 2',
      path: 'page_2',
      icon: 'fa fa-car'
    },
    {
      label: 'Page 3',
      path: 'page_3',
      icon: 'fa fa-car'
    },
  ]
}