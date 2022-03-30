import { Router } from "express";
import { CategoryController } from "./controllers/CategoryController";
import { VideoController } from "./controllers/VideoController";

const routes = Router();

/*
   [X] C - CREATE
   [X] R - READ
   [X] U - UPDATE
   [X] D - DELETE
*/ 
routes.post("/categories", new CategoryController().create);
routes.get("/categories", new CategoryController().list);
routes.put("/categories/:id", new CategoryController().update);
routes.delete("/categories/:id", new CategoryController().delete);

routes.post("/videos", new VideoController().create);
routes.get("/videos", new VideoController().list);

export {routes};