import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
 // Import your CSS file for styling

export default function Like() {
  const [state, setState] = useState("Unliked");

  const toggle = () => {
    setState((prevState) => (prevState === "Unliked" ? "Liked" : "Unliked"));
  };

  return (
    <div className='row'>
        <div className='col'><FontAwesomeIcon onClick={toggle} className={state === "Unliked" ? 'unlikeButton' : 'likeButton'} icon={faHeart} /> </div>
       
    </div>
  );
}
