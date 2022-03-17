import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://drive.google.com/uc?export=view&id=16nZUZCIfL71vcEMALlm5IE8ZQNUN2Ui4",
  },
  {
    original:
      "https://drive.google.com/uc?export=view&id=1etiSX7KHQD-F29pZiKQSvcjhFytuO_4-",
    },
    {
      original:
        "https://drive.google.com/uc?export=view&id=105Cqb53Mu_VSSk3kR7pRRskxUBWDLZZc",
  },
];

class HEMGallery extends React.Component {
  render() {
    return <ImageGallery items={images} showBullets={true} />;
  }
}

export default HEMGallery;
