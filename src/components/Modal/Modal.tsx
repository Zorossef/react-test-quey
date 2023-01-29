import React, { useEffect } from "react";

import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  Button,
  CircularProgress,
} from "@chakra-ui/react";
interface PropsModal {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  children: any;
  size?: string;
  buttonText?: string;
  hasActions?: boolean;
  btnAction?: () => any;
  isLoading?: boolean;
}
function ModalApp({
  isOpen,
  onOpen,
  onClose,
  children,
  size,
  buttonText,
  hasActions,
  btnAction,
  isLoading,
}: PropsModal) {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  useEffect(() => {
    if (isOpen) {
      setOverlay(<OverlayOne />);
    }
  }, [isOpen]);
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="inside"
        size={size}
      >
        {overlay}
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          {hasActions && (
            <ModalFooter>
              <Button
                minWidth={"120px"}
                colorScheme="blue"
                mr={3}
                onClick={btnAction}
              >
                {isLoading ? (
                  <CircularProgress isIndeterminate size={"20px"} />
                ) : (
                  buttonText
                )}
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalApp;
