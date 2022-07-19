import React, { useState } from "react";
import Header from "./component/Header";
// import FeedbackItem from "./component/FeedbackItem"
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./component/AboutIconLink";
import Post from "./component/Post";

const App = () => {
 // nev link
  // 
  
  const [feedback, setFeedback] = useState(FeedbackData);

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
    setFeedback((previous) => {
      return [newItem, ...previous];
    });
  };
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm feedback={feedback} addFeedBack={addFeedBack} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path= "/post/*" element={<Post />} /> 
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </>
  );
};

export default App;
