import React, {useContext} from 'react'
import PlaceHolder from './PlaceHolder'
import CampaignDetails from "./CampaignDetails";
import { CampaignContext, useCampaignData } from "../App";

const SideBar = () => (
  <div
    className=""
    style={{
      width: 350,
      height: "100vh",
      borderLeft: "solid 5px #e9ebef"
    }}
  >
    <SideBarContent
    />
  </div>
)

const SideBarContent = () => {
  const [{activeCampaign}] = useCampaignData()
  return (<>
      {!activeCampaign && <PlaceHolder />}
      {activeCampaign && <CampaignDetails campaign={activeCampaign} />}
  </>
  )
  // use CampaignDetails component here to show selected campaign details
}


export default SideBar
