import React, { createContext, useEffect, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext({});



export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

// goto delete

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

  const deleteFeedback = async(id) => {
    if (window.confirm("Arey you sure you want to delete?")) {
      // make it sync and await
      // await fetch delete
      // add header & stuff
      
      const response = await fetch(`/feedback/${id}`, { method: 'DELETE' });
      const data = response.json()

      // setFeedback(data)
  
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
     [data, ...feedback]
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
