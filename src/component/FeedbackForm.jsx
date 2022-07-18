import React, { useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

const FeedbackForm = () => {
  const [text, setText] = useState("")

  const handleChange = (event) => {
    const newText = event.target.value
    setText(newText)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
  
        <div className="input-group">
          <input type="text" placeholder='Write a review' onChange={handleChange} value={text} />
          <Button type='submit' isDisabled={true} >Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm