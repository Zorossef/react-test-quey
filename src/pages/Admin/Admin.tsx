import ModalApp from "@/components/Modal";
import TableApp from "@/components/TableApp";
import { colsProps } from "@/components/TableApp/entities";
import {
  Box,
  Button,
  CircularProgress,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { apiClient } from "../../api";
import { DataProduct } from "../../app-types";
import FormProduct from "./components/FormProduct";

const Admin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getAllProducts = async () => {
    const response = await apiClient.get<DataProduct>("/products");
    return response.data;
  };
  const { data, isLoading } = useQuery<DataProduct, Error>({
    queryKey: ["products-query"],
    queryFn: getAllProducts,
    refetchOnWindowFocus: false,
  });

  // openModal
  const onOpen = () => {
    return setIsOpen(true);
  };
  const onClose = () => {
    return setIsOpen(false);
  };

  // const loadingLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("data", data?.products);
  const cols: colsProps = [
    { name: "image", key: "thumbnail" },
    { name: "brand", key: "brand" },
    { name: "category", key: "category" },
    // { name: "description", key: "description" },
    { name: "discountPercentage", key: "discountPercentage" },
    { name: "price", key: "price" },
    { name: "rating", key: "rating" },
    { name: "stock", key: "stock" },
    { name: "title", key: "title" },
    { name: "actions", key: "actions" },
  ];

  return (
    <Box
      display={"flex"}
      // flexDirection={"column"}
      flex={"1"}
      // justifyContent={"flex-start"}
      mt={"90px"}
      alignItems={"flex-start"}
    >
      <Flex flexDirection={"column"} flex={"1"}>
        <Box display={"flex"} mx={"10px"} flex={"1"}>
          <Text
            display={"flex"}
            flex={"1"}
            alignSelf={"end"}
            color={"#064A6D"}
            fontSize="3xl"
            fontWeight={"600"}
          >
            Product Management
          </Text>
          <Box>
            <Button
              colorScheme="telegram"
              variant="outline"
              onClick={() => onOpen()}
            >
              <Icon mr={"8px"} as={AiOutlinePlus} />
              <Text>Create Product</Text>
            </Button>
          </Box>
        </Box>
        <Box
          // mt={"20px"}
          display={"flex"}
          flex={"1"}
          alignSelf={"center"}
        >
          {isLoading ? (
            <Box display={"flex"}>
              <CircularProgress isIndeterminate />
            </Box>
          ) : (
            <TableApp
              size={"md"}
              cols={cols}
              data={data?.products}
              maxHeight={"600px"}
            />
          )}
        </Box>
      </Flex>

      <ModalApp
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        size={"3xl"}
        hasActions={true}
        buttonText="Save"
      >
        <FormProduct />
      </ModalApp>
    </Box>
  );
};

export default Admin;
