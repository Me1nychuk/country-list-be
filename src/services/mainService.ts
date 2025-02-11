import axios from "axios";
import type {
  CountryAllInfo,
  CountryDetails,
  CountryFlagData,
  CountryPopulation,
  CountryResponse,
} from "../types";

const getAllCountries = async (): Promise<CountryResponse> => {
  try {
    const response = await axios.get<CountryResponse>(
      `${process.env.DATE_NAGER_AVAILABLE_COUNTRIES_URL}`
    );
    return response.data;
  } catch (error: any) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

const getCountryInfo = async (countryCode: string): Promise<CountryAllInfo> => {
  try {
    const basicInfo = await axios.get<CountryDetails>(
      `${process.env.DATE_NAGER_COUNTRY_INFO_URL}/${countryCode}`
    );
    if (!basicInfo.data) {
      throw new Error("Basic country info not found");
    }

    const populationInfo = await axios.post<CountryPopulation>(
      `${process.env.COUNTRIES_NOW_POPULATION_URL}`,
      {
        country: basicInfo.data.commonName,
      }
    );
    if (!populationInfo.data) {
      throw new Error("Population data not found");
    }

    const flagInfo = await axios.post<CountryFlagData>(
      `${process.env.COUNTRIES_NOW_FLAG_URL}`,
      { iso2: basicInfo.data.countryCode }
    );
    if (!flagInfo.data) {
      throw new Error("Flag data not found");
    }

    return {
      ...basicInfo.data,
      populationData: populationInfo.data,
      flagData: flagInfo.data,
    };
  } catch (error: any) {
    console.error("Error fetching country info:", error);
    throw error;
  }
};

export default { getAllCountries, getCountryInfo };
