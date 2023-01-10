import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { routes } from "../../mock-up/routes-app";
import Logo from "../../ui/Logo";
import NavItems from "../NavItems";

const AppSideBar = () => {
  const location = useLocation();

  const newArrRoutes = routes.map((rt) => {
    if (rt.path === location.pathname) {
      return {
        ...rt,
        isActive: true,
      };
    }
    return rt;
  });

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      borderWidth="1px"
      borderRightColor={"#656565.100"}
      boxShadow="lg"
      w={"240px"}
      flexDirection={"column"}
      paddingTop="45px"
      paddingBottom="25px"
      bg="white"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
      </Flex>
      {newArrRoutes.map((route) => {
        return <NavItems {...route} />;
      })}
    </Box>
  );
};

export default AppSideBar;
