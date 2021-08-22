import react from "react"
import reactDom from "react-dom"
import faker from "faker"
import CommontDetail from "./CommentDetail"
 
const App = () => {
  return (
    <div className="ui container comments">
      <CommontDetail
        author="Sam"
        date="Today 7:10PM"
        text="Nice post bro"
        image = {faker.image.avatar()} 
      />
      <CommontDetail
        author="John"
        date="Today 7:34PM"
        text="Very helpful"
        image={faker.image.avatar()}
      />
      <CommontDetail
        author="Somin"
        date="Today 8:10PM"
        text="Nice!thanks"
        image={faker.image.avatar()}
      />
    </div>
  )
}

reactDom.render(<App />, document.querySelector("#root"))
