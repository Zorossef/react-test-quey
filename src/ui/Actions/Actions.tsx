import DeleteProduct from "@/pages/Admin/components/DeleteProduct";
import ViewProduct from "@/pages/Admin/components/ViewProduct";
import { Icon, Button, Box } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
interface ActionsProps {
  id?: number;
}
const Actions = ({ id }: ActionsProps) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const [displayViewModal, setDisplayViewModal] = useState<boolean>(false);

  const onClose = () => {
    setIsOpenDeleteModal(false);
    setDisplayViewModal(false);
  };

  const onOpen = (mode: string) => {
    if (mode === "view") {
      setDisplayViewModal(true);
    }
    if (mode === "delete") {
      setIsOpenDeleteModal(true);
    }
  };

  return (
    <>
      <Box>
        <Button>
          <Icon as={AiOutlineEdit} />
        </Button>
        <Button onClick={() => onOpen("delete")}>
          <Icon as={AiOutlineDelete} />
        </Button>
        <Button onClick={() => onOpen("view")}>
          <Icon as={AiOutlineEye} />
        </Button>
      </Box>

      <DeleteProduct onClose={onClose} isOpen={isOpenDeleteModal} id={id} />
      <ViewProduct onClose={onClose} isOpen={displayViewModal} id={id} />
    </>
  );
};
// transform: rotate(90deg);
export default Actions;
