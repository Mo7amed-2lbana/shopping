import { ReactNode } from "react";
import { handelDescriptionLength } from "../../utels";

interface IProps {
  cardTitle: ReactNode;
  cardDescription: string;
}

const CardText = ({ cardDescription, cardTitle }: IProps) => {
  return (
    <div>
      <div className="card-text">
        <h2 className="my-2 font-[500] uppercase">{cardTitle}</h2>
        <p className="text-sm mb-2">
          {handelDescriptionLength(cardDescription,130)}
        </p>
      </div>
    </div>
  );
};

export default CardText;
