import React, { useState } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const Spinner = ({ isVisible }) => {
  let [color, setColor] = useState("#f9c64e");

  const override = css`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: red;
    height: 500px;
  `;

  return (
    <div>
      <BeatLoader css={override} size={30} color={color} />
    </div>
  );
};

export default Spinner;
