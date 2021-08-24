import React from "react"
import CommontDetail from "./CommentDetail.jsx"
import faker from "faker"
import ApprovalCard from "./ApprovalCard.jsx"

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
        <CommontDetail
            author="Sam"
            date="Today 7:10PM"
            text="Nice post bro"
            image={faker.image.avatar()}
            />
            </ApprovalCard>
      <ApprovalCard>
      <CommontDetail
        author="John"
        date="Today 7:34PM"
        text="Very helpful"
        image={faker.image.avatar()}
        />
        </ApprovalCard>
    <ApprovalCard>
      <CommontDetail
        author="Somin"
        date="Today 8:10PM"
        text="Nice!thanks"
        image={faker.image.avatar()}
      />
        </ApprovalCard>
    </div>
  )
}

export default App
