import React, {useState} from "react"
import Header from "./component/Header"
// import FeedbackItem from "./component/FeedbackItem"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./component/FeedbackList"
import FeedbackStats from "./component/FeedbackStats" 
import FeedbackForm from "./component/FeedbackForm"


const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Arey you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => { return item.id !== id }))
    }
  }
  return (
    <>  
      <Header /> 
      <div className="container">
        <FeedbackStats feedback ={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        <FeedbackForm />
        
      </div>
    </>

  )
}

export default App