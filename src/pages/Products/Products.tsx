import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "../../api";
import { ListCards } from "../../app-style";
import { DataProduct, ProductsType } from "../../app-types";
import Card from "../../components/Card";
import Loader from "../../ui/Loader";

const Products = () => {
  const getAllProducts = async () => {
    const response = await apiClient.get<DataProduct>("/products");
    return response.data;
  };
  const { data, isLoading } = useQuery<DataProduct, Error>(
    ["products-query"],
    getAllProducts
  );
  console.log("data", data?.products);
  return (
    <Box
      display={"flex"}
      marginTop={"80px"}
      flex={1}
      marginX={"auto"}
      overflow={"auto"}
      marginLeft="35px"
    >
      {isLoading && <Loader value={50} size="50px" />}

      <ListCards>
        {data?.products.map((product: ProductsType) => {
          return <Card {...product} />;
        })}
      </ListCards>
    </Box>
  );
};

export default Products;
