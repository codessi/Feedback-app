import React, { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ feedback, addFeedBack }) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  // what are we doing with rating...
  // on send button it will create an object
  // rating and text

  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim.length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage("");
    }

    const newText = event.target.value;
    setText(newText);
    console.log(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: feedback(feedback.length-1).id+1,
      rating: rating,
      text: text,
    };
    addFeedBack(newItem)
 
  };

  // realtime validation is not wokring
  //

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(selected) => setRating(selected)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
