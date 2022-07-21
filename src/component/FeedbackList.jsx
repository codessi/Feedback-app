import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";

import { motion, AnimatePresence } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";

const FeedbackList = () => {

  //bring in isloading [v]
  // add condtion of if isloading is not true and feedback is not true... [v]
//  return isLoading? h3 loading   else  rest stuff [v]
  
  // slow the nextwork at  slow 3g on devtool [v]
  // create spinner.jsx inside of shared [x]
  // goto... spinner [x]
  // import spinner as component [x]
  // insert for if loading insert Spinner component []
  // 
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>no feed back yet</p>;
  } 
  
  return  isLoading ? (<Spinner />) : 
     (<div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>)

};

export default FeedbackList;
