interface Country {
  countryCode: string;
  name: string;
}
interface CountryResponse {
  data: Country[];
}

interface Border {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[] | null;
}
interface CountryDetails {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: Border[] | null;
}

interface CountryFlagData {
  name: string;
  flag: string;
  iso2: string;
  iso3: string;
}

type PopulationObj = {
  year: number;
  value: number;
};

interface CountryPopulation {
  country: string;
  code: string;
  iso3: string;
  populationCounts: PopulationObj[];
}

interface CountryAllInfo extends CountryDetails {
  populationData: CountryPopulation;
  flagData: CountryFlagData;
}

export type {
  Country,
  Border,
  CountryDetails,
  CountryFlagData,
  CountryPopulation,
  PopulationObj,
  CountryAllInfo,
  CountryResponse,
};
