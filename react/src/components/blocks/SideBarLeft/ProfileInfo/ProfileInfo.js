import React from 'react'

function ProfileInfo() {
  return (
    <>
      <div id="profile-card">
        <div id="background"></div>
        <div id="profile-info">
          <img src="https://avatars.githubusercontent.com/u/1652629?v=4" alt="Profile picture" />
          <strong id="profile-name">Venkat</strong>
          <small>Application Manager</small>
        </div>
        <div id="profile-links">
          <a href="#">
            <span>Who's viewed your profile</span>
            <span className="profile-number">102</span>
          </a>
          <a href="#">
            <span>Connections</span>
            <span className="profile-number">452</span>
          </a>
        </div>
        <span>Grow your network</span>
        <a href="#">
          <span>Access exclusive tools & insights</span>
          <span id="profile-premium">
            <span id="profile-square">■</span> Try Premium Free for 1 Month
          </span>
        </a>
      </div>
    </>
  )
}

export default ProfileInfo
