import react from "react"
import reactDom from "react-dom"
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img style = {{"marginLeft": -10}} src={faker.image.avatar()} alt="avatar" />
        </a>
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post!</div>
      </div>
    </div>
  )
}

reactDom.render(<App />, document.querySelector("#root"))
