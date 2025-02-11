# Country List Backend

This project is the backend server for managing information about countries. It uses TypeScript, Express, and other technologies to create an API that provides country-related data, including population and flag information.

## Technologies

- TypeScript
- Express
- Axios
- dotenv (for managing environment variables)
- tsx (for running TypeScript code in development mode)

## Folder Structure

- **`controllers/`**: Contains the logic for handling requests.
- **`helpers/`**: Holds helper functions for the project.
- **`routes/`**: Defines API routes.
- **`services/`**: Contains the business logic for interacting with external services.
- **`types/`**: Type definitions for the project.
- **`index.ts`**: The main entry point where the server is initialized.

## Installation

1. Clone the repository
   git clone https://github.com/Me1nychuk/country-list-be
2. Navigate to the project directory
   cd country-list-be
3. Install dependencies
   npm install

## Scripts

1. start: Starts the server after compiling TypeScript code into the dist directory.

   bash
   npm start

2. build: Compiles TypeScript code into JavaScript using tsc.

   bash
   npm run build

3. dev: Starts the server in development mode using tsx to run TypeScript code directly.

   bash
   npm run dev

## API Description

1. Get All Countries
   Method: GET
   Route: /countries
   Description: Retrieves a list of all countries.

2. Get Country Information
   Method: GET
   Route: /countries/:id
   Description: Retrieves detailed information about a country by its code.

## Configuration

In the .env file, specify the following environment variables
DATE_NAGER_AVAILABLE_COUNTRIES_URL=your_url_here
DATE_NAGER_COUNTRY_INFO_URL=your_url_here
COUNTRIES_NOW_POPULATION_URL=your_url_here
COUNTRIES_NOW_FLAG_URL=your_url_here

## Folders and Their Contents

    controllers/
        Contains controllers that handle incoming requests.

    helpers/
        Holds helper functions to simplify data processing or other project tasks.

    routes/
        Contains the API routes responsible for handling specific requests.

    services/
        Contains the business logic for handling data and interacting with external services.

    types/
        Defines TypeScript types for the project, including interfaces for data passed via the API.
