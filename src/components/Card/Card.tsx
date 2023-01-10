import {
  AddToCart,
  Category,
  Container,
  Details,
  ImageContent,
  Img,
  Price,
  Title,
} from "./style";
interface CardProps {
  thumbnail?: string;
  title: string;
  price: number;
  category: string;
}
const Card = ({ thumbnail, title, price, category }: CardProps) => {
  return (
    <Container>
      <ImageContent>
        <Img src={thumbnail} alt={title} />
        <AddToCart>add to cart</AddToCart>
      </ImageContent>
      <Details>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Price>$ {price.toFixed(2)}</Price>
      </Details>
    </Container>
  );
};

export default Card;
