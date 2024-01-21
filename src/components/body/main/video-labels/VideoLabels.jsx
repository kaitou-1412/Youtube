import React from "react";
import useLabel from "../../../../hooks/useLabel";
import Label from "./video-label/Label";
import { MAX_LABELS } from "../../../../utils/constants";

const VideoLabels = () => {
  const labels = useLabel();
  return (
    <div>
      {labels.length > 0 &&
        labels
          .slice(0, MAX_LABELS)
          .map((label, index) => <Label key={index} name={label} />)}
    </div>
  );
};

export default VideoLabels;
