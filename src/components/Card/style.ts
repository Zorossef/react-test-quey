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
  border-radius: 5px;
`;
export const Img = styled.img`
  transition: 0.5s all ease-in-out;
  width: 100%;
  height: 400px;
  object-fit: cover;
  cursor: pointer;
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
  margin-top: 10px;
  gap: 10px;
`;
export const Category = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #656565;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

export const Price = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #656565;
`;
