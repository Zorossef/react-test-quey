import { Box, Skeleton, Stack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { apiClient } from "../../api";
import { ListCards } from "../../app-style";
import { DataProduct, ProductsType } from "../../app-types";
import Card from "../../components/Card";
// import Loader from "../../ui/Loader";

const Products = () => {
  const getAllProducts = async () => {
    const response = await apiClient.get<DataProduct>("/products");
    return response.data;
  };
  const { data, isLoading } = useQuery<DataProduct, Error>({
    queryKey: ["products-query"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });
  const loadingLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      <ListCards>
        {isLoading &&
          loadingLength.map((l) => {
            return (
              <Stack>
                <Skeleton height="400px" width="282px" />
                <Skeleton height="30px" width="282px" />
                <Skeleton height="30px" width="282px" />
                <Skeleton height="30px" width="282px" />
              </Stack>
            );
          })}
        {data?.products.map((product: ProductsType) => {
          return <Card {...product} />;
        })}
      </ListCards>
    </Box>
  );
};

export default Products;
