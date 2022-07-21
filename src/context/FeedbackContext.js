import React, { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({});
// fetch the data & put in to feedback
// emty out state [x]
// useEffect  [v]
// add function, [v]
// add console.log(123) [v]
// fetch async function feedback   [v]

//await fetch("endpoint") add ?_sort=id&_order=desc assign to response []
// response.json assign to data [v]
// console.log data [v]
// run the feedback in useEffect [v]
// setState [v]
// add is loading for true [v]
// and setLoading to false end of useEffect [v]
// add isLoading to value to display spinner [v]


export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    fetchFeedback()
  }, [])

  const fetchFeedback = async() => {
    const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    const data = await response.json()
    setFeedback(data)
    setLoading(false)
  }

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
