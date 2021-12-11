import { Route, Routes } from "./types/routes";

const ROOT: Route = {
  type: "get",
  path: "/",
  callback: (_, res) => {
    res.send({ status: "OK", message: "API version 0.0.1" });
  },
};

const routes: Routes = {
  ROOT,
};

export default routes;