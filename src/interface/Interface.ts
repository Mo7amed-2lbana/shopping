export interface IProductCardProps {
  id: string ;
  imageUrl: string;
  alt: string;
  cardTitle: string;
  cardDescription: string;
  cardPrice: string;
  cardColor: string[];
  cardCategory: {
    name: string;
    imageUrl: string;
  };
}
