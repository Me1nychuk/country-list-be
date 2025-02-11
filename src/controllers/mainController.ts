import mainService from "../services/mainService";
import type { Request, Response, NextFunction } from "express";

export const getAllAvailableCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await mainService.getAllCountries();
    if (!response) {
      res.status(404).json({ message: "Data not found" });
    }
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getCountryInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const countryId = req.params.id;

    if (!countryId) {
      res.status(400).json({ message: "Id is required" });
    }
    const response = await mainService.getCountryInfo(countryId.toUpperCase());

    if (!response) {
      res.status(404).json({ message: "Data not found" });
    }
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
