import * as React from "react"

const cardStyles = {
  width: "100%",
}

const Card = ({ children, title }) => {
  return <div className="card bg-base-200 rounded-box shadow-lg" style={cardStyles}>
    <div className="card-body" style={{height: '100%'}}>
      <h2 className="card-title">{title || title}</h2>
      {children}
    </div>
  </div>
}

export default Card;
