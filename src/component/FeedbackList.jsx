import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import {motion, AnimatePresence} from "framer-motion"

const FeedbackList = ({ feedback, handleDelete }) => {
  // adding animation fad effect for delete
  // import motion, AnimatePresence from framer-motion[x]
  // wrap with AnimatePresence tag[x]
  // wrap motion.div FeedbackItem[x]
  // add key for the map[x]
  // pass on motion div  inital {opacity: 0}
  // animate {opactiy: 1}
// exit {opacity: 0}

  if (!feedback || feedback.length === 0) {
    return <p>no feed back yet</p>;
  }
  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => {
        return (
          <motion.div key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity:0 }}
          >
            <FeedbackItem key={item.id}
            item={item} handleDelete={handleDelete} />
          </motion.div>
        
        );
      })}
    </AnimatePresence>
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {
  //       return (
  //         <FeedbackItem
  //           key={item.id} item={item} handleDelete={handleDelete} />
  //       );
  //     })}
  //   </div>
  // );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
