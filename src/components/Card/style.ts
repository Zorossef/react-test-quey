import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 282px;
  /* margin-bottom: 10px; */
`;

export const ImageContent = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;
export const Img = styled.img`
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: 400px;
  object-fit: cover;

  &:hover {
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
`;
export const AddToCart = styled.div`
  position: absolute;
  height: 46px;
  width: 100%;
  background-color: #000000;
  color: #fff;
  font-size: 23;
  font-weight: 500;
  bottom: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 15px;
`;
export const Category = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #656565;
`;
export const Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
`;

export const Price = styled.div`
  font-size: 29px;
  font-weight: 400;
  color: #656565;
`;
