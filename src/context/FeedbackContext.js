import React, { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext({});



export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    fetchFeedback()
  }, [])

  const fetchFeedback = async() => {
    const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
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
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
