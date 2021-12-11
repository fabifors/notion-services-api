import { Request, Response } from "express";

type RoutePath = string;

type RouteCallback = (req: Request, res: Response) => void;

type Route = {
  type: string;
  path: RoutePath;
  callback: RouteCallback;
};

type Routes = {
  [key: string]: Route;
};

export {
  Route,
  Routes
}