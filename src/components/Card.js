import * as React from "react"

const cardStyles = {
  width: "100%",
}

const Card = (props) => {
  return <div {...props} className={ `card bg-base-200 rounded-box shadow-lg ${props.className}` }>
    <div className="card-body" style={{height: '100%'}}>
      <h2 className="card-title">{props.title}</h2>
      {props.children}
    </div>
  </div>
}

export default Card;
