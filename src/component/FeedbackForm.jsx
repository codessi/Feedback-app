// @ts-ignore
import React, { useState, useEffect, useContext } from "react";
// @ts-ignore
// @ts-ignore
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const [selected, setSelected] = useState(null);




  const { addFeedBack, feedbackEdit, setFeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // when feedbackEdit is changing
  // effect will check the .edit is true
  // and button will be alive
  // update the text input to be text from the state
  // selected will be alos updateds
  // then when it's submited

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setSelected(feedbackEdit.item.rating);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);


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
    // when submiited
    // it will check the text is long enough
    // and checks edit is true
    //  then it will call updateFeeback
    // what happen is it will map all the feed back, but if the id is same as the edit id it will comebine current item and upateitem
    // since id is same it will leave along but other stuff if different it will replace
    // problem is here
    // after then it will add new one bu not update m.... 
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        setText("");
        setSelected(null);
        setFeedbackEdit({
          item: {},
          edit: false,
        })
        
        return
      }

      // const newItem = {
      //   id: uuidv4(),
      //   rating: rating,
      //   text: text,
      // };
      addFeedBack(newFeedback);
      setRating(10);
      setText("");
      setSelected(null);
    }
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
