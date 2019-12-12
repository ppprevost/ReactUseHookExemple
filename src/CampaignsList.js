import React from 'react'
import StatusBadge from './common/StatusBadge'
import { useCampaignData } from "./App";

const CampaignsList = ({ campaigns }) => {
  return (<table className="table table-hover">
    <thead className="thead-light">
      <tr>
        <th>#</th>
        <th colSpan="2">Campaign</th>
        <th>Quantity</th>
        <th>Audience</th>
        <th>Note?</th>
      </tr>
    </thead>
    <tbody>
      {
        campaigns.map(
          campaign => (
            <CampaignRow
              key={campaign.id}
              campaign={campaign}
            />
          )
        )
      }
    </tbody>
  </table>)
}

const CampaignRow = ({ campaign}) => {
  const { id, name, image, status, quantity, initialQuantity, audience, note } = campaign
  const [{activeCampaign}, dispatch] = useCampaignData()
  const active = id === (activeCampaign && activeCampaign.id)
  return (<tr onClick={()=>dispatch({type:'CHANGE_CAMPAIGN', campaign}) } style={active ? {backgroundColor:'#bee5eb'}:{}}>
    <td>#{id}</td>
    <td style={{ width: 100 }}>
      <img
        src={image}
        style={{ maxHeight: 50, ...(status === 'closed' ? { filter: "grayscale(100%)"} : {}) }}
        alt={name}
      />
    </td>
    <td>
      <StatusBadge className="mr-2">{status}</StatusBadge>
      {name}
    </td>
    <td>
      {quantity}
      {" "}
      /
      {" "}
      {initialQuantity}
    </td>
    <td>
      {audience}
    </td>
    <td>
      {note ? "📝" : undefined}
    </td>
  </tr>)
}




export default CampaignsList
