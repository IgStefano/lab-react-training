import { useState } from 'react';

function ClickablePicture(props) {
  const [img, setImg] = useState(props.img);

  function outImg() {
    if (img === props.img) {
      setImg(props.imgClicked);
    } else {
      setImg(props.img);
    }
  }
  return <img onClick={outImg} src={img} alt="picture" />;
}

export default ClickablePicture;
