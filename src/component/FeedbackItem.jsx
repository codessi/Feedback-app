import React from "react";
import { useContext } from "react";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  // add editFeedback
  // onClick editFeeback() passing an object
  //

  const { deleteFeedback, editFeeback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={()=>editFeeback({item})}>
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="text-display ">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
