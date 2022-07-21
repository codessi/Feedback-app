// @ts-ignore
import React, { useState, useEffect, useContext } from "react";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";



const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true); 
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [selected, setSelected] = useState(10);

  //bring updateFeedback
  //call it on Submit
  // if feedbackEdit.edit === true call the updateFeedback() pass feedbackEdit.item.id and newFeedback
  //else  just add
  // click and test
  //change console to map the all the feedback and each item's id is same as it padd it then 

  const { addFeedBack, feedbackEdit } = useContext(FeedbackContext)

  // bring in RatingSelect

  useEffect(() => {
    if (feedbackEdit.edit === true) {

      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setSelected(feedbackEdit.item.rating)
      setRating(feedbackEdit.item.rating)
   }
  }, [feedbackEdit])
  // @ts-ignore

   
  const handleChange = (event) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage("");
    } else if (text !== "" && text.trim().length <= 10) {
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
    // new item is getting from states and add id to it.  pacage as newItem
    //  pass to addFeedBack
    const newItem = {
      id: uuidv4(), 
      rating: rating,
      text: text,
    };
    addFeedBack(newItem);
    setRating(10);
    setText("");
    setSelected(10);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect
          select={(selected) => setRating(selected)}
          selected={selected}
          setSelected={setSelected}
        />
        {/* I want to set selected to 10 */}
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
