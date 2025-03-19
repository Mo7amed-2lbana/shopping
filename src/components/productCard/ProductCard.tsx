import CardButton from "../ui/cardButton/CardButton";
import CardPrice from "../cardPrice/CardPrice";
import CardText from "../cardText/CardText";
import ColorImageCard from "../colorImageCard/ColorImageCard";
import ImageCard from "../imageCard/ImageCard";
import { IProductCardProps } from "../../interface/Interface";

interface IProps {
  product: IProductCardProps;
}

const ProductCard = ({ product }: IProps) => {
  const {
    imageUrl,
    cardTitle,
    cardDescription,
    cardCategory,
    cardColor,
    cardPrice,
    id,
    alt,
  } = product;

  const renderCardColor = () =>
    cardColor.map((color) => <ColorImageCard key={id} color={color} />);
  return (
    <div className="   boredr border-gray-300 shadow-lg p-4 rounded-md flex flex-col">
      <ImageCard className="rounded-md my-2" alt={alt} imageUrl={imageUrl} />
      <CardText cardTitle={cardTitle} cardDescription={cardDescription} />
      <div className="color flex items-center space-x-2">
        {renderCardColor()}
      </div>
      <div className="flex items-center justify-between my-2 ">
        <CardPrice price={cardPrice} />
        <ImageCard
          imageUrl={cardCategory.imageUrl}
          alt={cardCategory.name}
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>

      <div className="flex justify-between items-center space-x-2 mt-4">
        <CardButton className="bg-indigo-700" width="w-full">
          Edit
        </CardButton>
        <CardButton width="w-full" className="bg-red-700">
          Delete
        </CardButton>
        {/* <CardButton className="bg-slate-900">Loading</CardButton>
        <CardButton className="bg-green-500">Success</CardButton>
        <CardButton className="bg-gray-200">Cancel</CardButton> */}
      </div>
    </div>
  );
};

export default ProductCard;
