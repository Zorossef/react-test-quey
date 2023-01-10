import { Flex, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface PropNav {
  title: string;
  path: string;
  icon?: FC;
  isActive?: boolean;
}

const NavItems = ({ title, path, icon, isActive }: PropNav) => {
  const navigate = useNavigate();
  const goToPage = () => {
    return navigate(path);
  };
  return (
    <Flex
      onClick={goToPage}
      display={"flex"}
      alignSelf={"flex-start"}
      padding={"15px"}
      marginTop={"30px"}
      alignItems={"center"}
      cursor="pointer"
      // justifyContent="center"
      width="100%"
      bg={`${isActive && "cyan.200"}`}
      color={`${isActive && "white"}`}
      _hover={{
        bg: "cyan.200",
        color: "white",
      }}
    >
      <Icon
        mr="4"
        _groupHover={{
          color: "white",
        }}
        as={icon}
      />
      <Text>{title}</Text>
    </Flex>
  );
};

export default NavItems;
