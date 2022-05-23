
import React from 'react'
import RecentTags from './RecentTags'
import ProfileInfo from './ProfileInfo'

function SideBarLeft() {
  return <>
    <div id="left-aside-wrapper">
      <aside id="left-aside">
        <ProfileInfo></ProfileInfo>
        <RecentTags></RecentTags>
      </aside>
    </div>
  </>
}

export default SideBarLeft
