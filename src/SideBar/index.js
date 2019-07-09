import React from 'react'
import PlaceHolder from './PlaceHolder'

const SideBar = () => (
  <div
    className=""
    style={{
      width: 350,
      height: "100vh",
      borderLeft: "solid 5px #e9ebef"
    }}
  >
    <SideBarContent />
  </div>
)

const SideBarContent = () => (
  <PlaceHolder />
  // use CampaignDetails component here to show selected campaign details
)

export default SideBar
