import React from "react";
import PropTypes from "prop-types";
import "./msghistory.style.css";

export const MsgHistory = ({ msg }) => {
  if (!msg.length) return null;
    console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="msg-history mt-2">
      <div className="send-msg font-weight-bold text-secondary">
        <div className="sender">{row.massageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="msg text-secondary my-2">{row.massage}</div>
    </div>
  ));
};

MsgHistory.propTypes = {
  msg: PropTypes.array.isRequired, // array of objects
};
