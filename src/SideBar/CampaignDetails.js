import React, {useState, useEffect} from 'react'
import StatusBadge from '../common/StatusBadge'

const CampaignDetails = ({ campaign: { id, name, image, status, quantity, initialQuantity, audience, note } }) => {
  const [noted, setNoted] =useState(note)
  const clearData=()=> {
    setNoted('')
  }

  const handleChange=(e)=>{
    setNoted(e.target.value)
  }

  useEffect(()=>{
    setNoted(note)
  },[note])

  return(<div className="text-center d-flex flex-column align-items-center py-5 px-4">
    <img
      src={image}
      alt={name}
      className="d-block"
      style={{
        width: "60%"
      }}
    />
    <h2 className="mt-3">{name}</h2>
    <ul className="text-left">
      <li>Status: <StatusBadge>{status}</StatusBadge></li>
      <li>
        {quantity}
        {" "}
        /
        {" "}
        {initialQuantity}
        {" "}
        left
      </li>
      <li>
        Audience: {audience}
      </li>
    </ul>

    <h4>Note</h4>
    <textarea className="form-control" value={noted} onChange={handleChange} />
    <div className="mt-2 w-100 text-right">
      <button onClick={clearData} className="btn btn-sm btn-secondary">
        Clear
      </button>
    </div>
  </div>)
}

export default CampaignDetails
