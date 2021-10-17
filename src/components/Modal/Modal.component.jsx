import React from "react";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";

import ModalVideo from "react-modal-video";
function Modal() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="" style={{ marginTop: 70 }}>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />

        <button className="btn-primary" onClick={() => setOpen(true)}>
          VIEW DEMO
        </button>
      </React.Fragment>
    </div>
  );
}

export default Modal;
