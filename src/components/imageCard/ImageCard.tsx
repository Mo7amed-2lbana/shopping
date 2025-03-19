interface IProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

const ImageCard = ({ alt, className, imageUrl }: IProps) => {
  return (
    <div>
      <img src={imageUrl} alt={alt} className={className} />
    </div>
  );
};

export default ImageCard;
