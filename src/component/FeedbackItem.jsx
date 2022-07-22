import React from "react";
import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {



  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        {/* when edit is clicked
        we will call the function edit feedback */}
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="text-display ">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
