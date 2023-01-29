import { apiClient } from "@/api";
import ModalApp from "@/components/Modal";
import { Box, Text, Icon } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AiOutlineExclamationCircle } from "react-icons/ai";

interface DeleteProps {
  onClose: () => void;
  isOpen: boolean;
  id?: number | any;
}

const DeleteProduct = ({ onClose, isOpen, id }: DeleteProps) => {
  const deletePost = useMutation(async (id) => {
    const response = await apiClient.delete<string>(`/products/${id}`);
    return response.data;
  });
  const { mutate, isLoading } = deletePost;
  const { refetch } = useQuery(["products-query"]);
  return (
    <ModalApp
      onClose={onClose}
      isLoading={isLoading}
      hasActions={true}
      isOpen={isOpen}
      buttonText="Delete"
      size={"md"}
      btnAction={() => {
        mutate(id, {
          onSuccess: () => {
            refetch();
            onClose();
          },
        });
      }}
    >
      <Box>
        <Text mt={"30px"} fontSize="2xl">
          Are you sure do want to delete this Product
          <Icon
            position={"relative"}
            top={"5px"}
            ml={2}
            as={AiOutlineExclamationCircle}
          />
        </Text>
      </Box>
    </ModalApp>
  );
};

export default DeleteProduct;
