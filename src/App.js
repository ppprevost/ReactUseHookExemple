import React, {useContext, useReducer} from 'react'
import 'bootstrap/scss/bootstrap.scss'
import CampaignsList from './CampaignsList'
import SideBar from './SideBar'
import product1Image from './images/product1.jpg'
import product2Image from './images/product2.jpg'
import product3Image from './images/product3.jpg'
import product4Image from './images/product4.jpg'


const campaigns = [
  {
    id: 1,
    name: "Arbuck coffee",
    status: "open",
    image: product1Image,
    quantity: 19,
    initialQuantity: 20,
    audience: 729,
    note: ""
  },
  {
    id: 2,
    name: "LifeSters Memory Box",
    status: "open",
    image: product2Image,
    quantity: 3,
    initialQuantity: 4,
    audience: 234,
    note: "Only 3 left!"
  },
  {
    id: 3,
    name: "LifeSters SnapCam III",
    status: "draft",
    image: product3Image,
    quantity: 3,
    initialQuantity: 3,
    audience: 872,
    note: ""
  },
  {
    id: 4,
    name: "Pink! Watch - Summer Edition II",
    status: "closed",
    image: product4Image,
    quantity: 0,
    initialQuantity: 5,
    audience: 5,
    note: "Sold out in 3 days!"
  }
]

const reducer = (state, action)=> {
  switch (action.type) {
    case 'CHANGE_CAMPAIGN':
      return {...state, activeCampaign: action.campaign}
  }


}

const initialContext = {
  activeCampaign:null,
}

export const CampaignContext = React.createContext(initialContext);

export const useCampaignData = ()=>useContext(CampaignContext)

const App = () => {
  const contextValue = useReducer(reducer, initialContext)
  return (
    <CampaignContext.Provider value={contextValue}>
      <div className="d-flex">
        <div className="flex-grow-1">
          <div className="m-5">
            <h1 className="mb-3">Campaigns</h1>
            <CampaignsList campaigns={campaigns} />
          </div>
        </div>
        <SideBar />
      </div>
    </CampaignContext.Provider>
   )
}

export default App
