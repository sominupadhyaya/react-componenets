import react from "react"
import CommontDetail from "./CommentDetail.jsx"
import faker from "faker"
import ApprovalCard from "./ApprovalCard.jsx"

const App = () => {
  return (
    <div className="ui container comments">
      <h1>Comment Section</h1>
      <CommontDetail
        author="Sam"
        date="Today 7:10PM"
        text="Nice post bro"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommontDetail
        author="John"
        date="Today 7:34PM"
        text="Very helpful"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommontDetail
        author="Somin"
        date="Today 8:10PM"
        text="Nice!thanks"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommontDetail
        author="Sam"
        date="Today 7:10PM"
        text="Nice post bro"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommontDetail
        author="John"
        date="Today 7:50PM"
        text="Very good!"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
      <CommontDetail
        author="Somin"
        date="Today 8:10PM"
        text="Nice!thanks"
        image={faker.image.avatar()}
      />
      <ApprovalCard />
    </div>
  )
}

export default App
