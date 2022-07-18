import React, { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

const FeedbackForm = () => {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)


// adding rating select
// add state of rating   10 [v]
  // crate RatingSelect.jsx and import[v]
  // put right under the input[v]
  // goto ratingselect.jsx [v]
  // make state of select[v]
  // add jsx
  // ul class rating
  // li input type radio id num1 name rating value 1 onChange{handleChange}
  // checked={selected ===1 }
  // label tag htmlFor="num1"
  // make 10 of them 
  const handleChange = (event) => {

    if (text === "") {
      setBtnDisabled(true)
      setMessage("")
    } else if (text !== "" && text.trim.length <= 10) {
      setMessage("Text must be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setBtnDisabled(false)
      setMessage("")
    }

    const newText = event.target.value
    setText(newText)
    console.log(text)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect />
        <div className="input-group">
          <input type="text" placeholder='Write a review' onChange={handleChange} value={text} />
          <Button type='submit' isDisabled={btnDisabled} >Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm