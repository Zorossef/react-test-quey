import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./mock-up/routes-app";
interface TypeRoute {
  exact?: boolean;
  title: string;
  path: string;
  element: FC;
}

const RoutingApp = () => {
  return (
    <Routes>
      {routes.map((route: TypeRoute) => {
        const Element = route.element;
        return <Route path={route.path} element={<Element />} />;
      })}
    </Routes>
  );
};

export default RoutingApp;
