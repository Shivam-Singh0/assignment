import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function Message({ children, variant, dismissible }) {
  const [show, setShow] = useState(true);
  if (show) {
    return <Alert variant={variant} onClose={() => setShow(false)} dismissible={dismissible}><p className="alert-p">{children}</p></Alert>;

  }
}

export default Message;
