import React from "react"
import faker from "faker"

const CommontDetail = (props) => {
  console.log(props);
  return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            style={{ marginLeft: "-10px" }}
            src={faker.image.avatar()}
            alt="avatar"
          />
        </a>
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
  )
}

export default CommontDetail