import React from "react";

function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"}`}>
      {/* Printing whatever inside the component tag */}
      {props.children}
    </div>
  );
}

export default MessageBox;
