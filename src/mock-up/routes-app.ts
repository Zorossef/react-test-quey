import { AiFillAppstore, AiOutlineUser } from "react-icons/ai";
import Admin from "../pages/Admin";
import Products from "../pages/Products";

export const routes = [
  {
    exact: true,
    path: "/",
    element: Products,
    title: "Products",
    icon: AiFillAppstore,
  },
  {
    path: "/admin",
    element: Admin,
    title: "Admin",
    icon: AiOutlineUser,
  },
  {
    path: "/delete",
    element: Admin,
    title: "Delete",
    icon: AiOutlineUser,
  },
];
