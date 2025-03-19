
interface IProps {
  price: string;
}

const CardPrice = ({ price }: IProps) => {
  return <span className="uppercase font-[500]">{price}</span>;
};

export default CardPrice;
