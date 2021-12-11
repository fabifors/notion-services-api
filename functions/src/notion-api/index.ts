import routes from "./routes";

const express = require("express");

const app = express();
/**
 * Programatically create all routes
 */
Object.keys(routes).forEach((key) => {
  const route = routes[key];
  switch (route.type) {
    case "get": {
      app.get(route.path, route.callback);
      break;
    }
    case "post": {
      app.post(route.path, route.callback);
      break;
    }
    default: {
      throw Error(`Type: ${route.type} is not a valid route type`);
    }
  }
});

export default app;
