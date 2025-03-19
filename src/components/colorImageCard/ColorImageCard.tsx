interface IProps {
  color: string;
}

const ColorImageCard = ({ color }: IProps) => {
  return <span className={`w-7 h-7 rounded-full bg-[${color}] cursor-pointer`} />;
};

export default ColorImageCard;
