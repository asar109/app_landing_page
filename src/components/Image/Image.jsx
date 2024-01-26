import React from "react";
import { Img } from "react-image";
import RVS from "react-visibility-sensor";
import "./Image.css";

const Image = ({ src, alt }) => {
  return (
    <RVS>
      <Img
        alt={alt}
        src={src}
        loader={
          <div>
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      />
    </RVS>
  );
};

export default Image;
