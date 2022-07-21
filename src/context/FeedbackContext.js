import React, { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext({});



export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  // add proxy---
  // pkg  above dependancy proxy add url [x]
  // go to addFeedback [x]
  // turn the function to async await [x]
  // response assign fetch passing /feeback, object [x]
  // include method headers [x]
  // body  wrap  newFeedback with JSON.stringify [x]
  //  ** .json()  
  // delete uuid since json-server gives uid  [x]
  // data assign response.json()  []
  // setFeedback pass data and ...feedback  []
  //

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

  const addFeedBack = async(newItem) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    const data = await response.json() 

    setFeedback(
      return [data, ...feeback];
    );

    
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
