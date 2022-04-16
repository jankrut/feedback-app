import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../contexts/FeedbackContext";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <buton
        className="close"
        onClick={() => {
          deleteFeedback(item.id);
        }}
      >
        <FaTimes color="purple" />
      </buton>
      <buton
        className="edit"
        onClick={() => {
          editFeedback(item);
        }}
      >
        <FaEdit color="purple" />
      </buton>
      <div className="text-display">{item.text} </div>
    </Card>
  );
}

FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
