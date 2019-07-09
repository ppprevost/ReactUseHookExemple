import React from 'react'

const StatusBadge = ({ children, className }) => {
  const badgeBsStyle = {
    open: "success",
    draft: "warning",
    closed: "secondary"
  }[children] || "secondary"
  return (
    <small
      className={`badge badge-${badgeBsStyle} text-uppercase ${className || ""}`}
      style={{ fontSize: "0.6em" }}
    >
      { children }
    </small>
  )
}

export default StatusBadge
