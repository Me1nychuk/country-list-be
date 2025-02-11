import express from "express";
import {
  getAllAvailableCountries,
  getCountryInfo,
} from "../controllers/mainController";

const mainRouter = express.Router();

mainRouter.get("/", getAllAvailableCountries);
mainRouter.get("/:id", getCountryInfo);

export default mainRouter;
