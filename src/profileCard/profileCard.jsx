import React, { useState } from 'react';
import Modal from 'react-modal';

import './profileCard.css';
import profile from './profile.jpg';

const ProfileCard = () => {
  const [isFollowersVisible, setIsFollowersVisible] = useState(false);

  const handleFollowersClick = () => {
    setIsFollowersVisible(!isFollowersVisible);
  };

  const followersList = [
    "Sai Srikanth",
    "Adithi",
    "Kavya",
    "Ramanuja"
  ];

  return (
    <div className='center-container'>
      <div className="profile-card">
        <img src={profile} alt="Profile" className="profile-photo" />
        <h3 className="profile-name">Kadali Nirmala</h3>
        <div className="profile-stats">
          <p className="followers">
            Followers:
            <a href="#" onClick={handleFollowersClick}>4</a>
          </p>
          <p className="following">
            Followers:
            <a href="#">9</a>
          </p>
        </div>
          <div className="profile-summary">
            <p>"I am a software developer and I enjoy building web applications. I am passionate about solving complex problems and learning new technologies."</p>
          </div>
        <Modal isOpen={isFollowersVisible} onRequestClose={handleFollowersClick}>
          <h2>Followers</h2>
          <ul>
            {followersList.map((follower, index) => (
              <li key={index}>{follower}</li>
            ))}
          </ul>
          <button onClick={handleFollowersClick} style={{borderRadius: '10px', backgroundColor: 'red', color:'white', border: 'none', fontSize: '20px'}}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileCard;
