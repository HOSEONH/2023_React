import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBell, faAddressBook, faPenToSquare, faNewspaper, faHeart } from '@fortawesome/free-regular-svg-icons'

export default function IconComp() {
  return (
    <div className='icon-box'>
      <FontAwesomeIcon icon={faAddressBook} className='icon-style'/>
      <FontAwesomeIcon icon={faPenToSquare} className='icon-style'/>
      <FontAwesomeIcon icon={faNewspaper} className='icon-style'/>
      <FontAwesomeIcon icon={faBell} className='icon-style'/>
      <FontAwesomeIcon icon={faHeart} className='icon-style'/>
    </div>
  )
}
