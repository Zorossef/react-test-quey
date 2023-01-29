import { apiClient } from "@/api";
import ModalApp from "@/components/Modal";
import { ProductsType } from "@/app-types";
import { useQuery } from "@tanstack/react-query";
import { Box, CircularProgress, Text } from "@chakra-ui/react";
import Img from "../Img";
interface PropsViewModal {
  onClose: () => void;
  isOpen: boolean;
  id: number | any;
}

const ViewProduct = ({ onClose, isOpen, id }: PropsViewModal) => {
  const getProduct = async () => {
    const response = await apiClient.get<ProductsType>(`/products/${id}`);
    return response.data;
  };
  const { data, isLoading } = useQuery<ProductsType, Error>({
    queryKey: ["get-product"],
    queryFn: getProduct,
    refetchOnWindowFocus: false,
  });
  console.log("data", data);
  return (
    <ModalApp onClose={onClose} isOpen={isOpen} size={"3xl"}>
      <Box display={"flex"} flex={"1"}>
        {isLoading ? (
          <CircularProgress isIndeterminate />
        ) : (
          <Box display={"flex"}>
            <Box boxSize="sm" display={"flex"} height={"100%"}>
              <Img
                src={data?.thumbnail}
                alt={data?.title}
                borderRaduis={"5px"}
              />
            </Box>
            <Box>
              <Text fontSize="2xl">{data?.title}</Text>
              <Text fontSize="2xl">{data?.title}</Text>
              <Text fontSize="2xl">{data?.title}</Text>
              <Text fontSize="2xl">{data?.title}</Text>
            </Box>
          </Box>
        )}
      </Box>
    </ModalApp>
  );
};

export default ViewProduct;
