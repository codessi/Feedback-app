import React, { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({});
// fetch the data & put in to feedback
// emty out state
// useEffect 
// add function, []
// add console.log(123)
// fetch async function feedback  

//await fetch("endpoint") add ?_sort=id&_order=desc assign to response
// response.json assign to data
// console.log data
// run the feedback in useEffect
// setState
// add is loading for true
// and setLoading to false end of useEffect
// add isLoading to value to display spinner


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const updateFeedback = (id, updItem) => {
    setFeedback(
    feedback.map(item => item.id === id ? {...item, ...updItem}: item) )
  }

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = (id) => {
    if (window.confirm("Arey you sure you want to delete?")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  };

  const addFeedBack = (newItem) => {
    newItem.id = uuidv4()
    setFeedback((previous) => {
      return [newItem, ...previous];
    });
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedBack,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
