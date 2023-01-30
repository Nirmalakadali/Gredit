import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShop,faQuestion,faTrophy,faFileAlt } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'
function Navbar() {
  return (
   <>
   <nav className="navbar">
    <h2 className='Greddit_logo'>Grediit</h2>
    <ol className='Nav_bar_list'>
    <li className='Nav_list'> <FontAwesomeIcon icon={faShop} size="xs" color="black" />About</li>
    <li className='Nav_list'> <FontAwesomeIcon icon={faQuestion} size="xs" color="black" />Help Center</li>
    <li className='Nav_list'> <FontAwesomeIcon icon={faTrophy} size="xs" color="black" />Achievements</li>

   </ol>
   <button className="guideline"><FontAwesomeIcon icon={faFileAlt} size="lg" color="black" className='terms' />  Guideline</button>
   </nav>
   </>
  );
}

export default Navbar;
