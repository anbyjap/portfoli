interface props {
  imageName: string;
  alt: string;
}

const ImageComponent = (props: props) => {
  const imgUrl = require(`../images/${props.imageName}`);
  return <img src={imgUrl} alt={props.alt} />;
};

export default ImageComponent;
