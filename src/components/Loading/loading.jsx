import React from "react";
import { css } from "@emotion/react";

import ClipLoader from "react-spinners/ClipLoader";
function Loading() {
  const override = css`
    display: block;
    margin: 30% auto;
    transform: translate(-50%, -50%);
    border-color: #fc4226;
  `;
  return (
    <div>
      <ClipLoader css={override} />
    </div>
  );
}

export default Loading;
