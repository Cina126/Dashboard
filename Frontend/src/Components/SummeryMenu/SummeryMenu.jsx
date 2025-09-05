import React, { useContext } from 'react'
import './SummeryMenu.css';
import Icons from './../../Components/Icons/Icons';
import { Context } from './../../Context/ContextProvider';

export default function SummeryMenu() {

  const contextUser = useContext(Context)

  function openHiddenMenuLogic() {
    if (contextUser.isOpenHiddenMenu) {
      contextUser.setIsOpenHiddenMenu(false)
    } else {
      contextUser.setIsOpenHiddenMenu(true)
    }
  }

  return (
    <div className='SummeryMenu'>
      <span className='SummeryMenu__Title'>Horizon  <span className='SummeryMenu__Title__Inner-Text'>Free</span></span>
      <span onClick={openHiddenMenuLogic} className='SummeryMenu__Icon'>
        {contextUser.isOpenHiddenMenu ? <Icons iconName={"Clear"}></Icons> : <Icons iconName={"Menu"}></Icons>}
      </span>
    </div>
  )
}
