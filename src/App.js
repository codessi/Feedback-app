import React from "react";
import Header from "./component/Header";
// import FeedbackItem from "./component/FeedbackItem"

import FeedbackList from "./component/FeedbackList";
import FeedbackStats from "./component/FeedbackStats";
import FeedbackForm from "./component/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./component/AboutIconLink";
import Post from "./component/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {

// go to context[x]
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm
                    />
                    <FeedbackStats  />
                    <FeedbackList
                    />
                  </>
                }
              ></Route>

              <Route path="/about" element={<AboutPage />} />
              <Route path="/post/*" element={<Post />} />
            </Routes>

            <AboutIconLink />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
};

export default App;
