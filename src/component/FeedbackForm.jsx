import React, { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState("")
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState("")

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