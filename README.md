# 🌤️ React Native Weather App

A React Native Weather Application built using **TypeScript** and the
**MVVM (Model–View–ViewModel)** architecture.

This project was created as a technical exercise and is provided as a
zipped project folder.

---

## Features

### Search Screen
- Search weather by city name
- Fetches real-time weather data
- Displays:
  - City name
  - Current temperature
  - Weather description

### Details Screen
- Displays:
  - Humidity
  - Wind speed
  - Minimum temperature
  - Maximum temperature

### Others
- Loading indicator
- Error handling (city not found, network errors)
- TypeScript
- Persist last searched city using AsyncStorage

---

## Architecture (MVVM)

The app follows the **MVVM** pattern for clear separation of concerns.

src/
├── api/
│ ├── apiError.ts
│ ├── axiosInstance.ts
│ └── weather.ts
│
├── model/
│ └── Weather.ts
│
├── navigation/
│ └── AppNavigator.tsx
│
├── storage/
│ └── city.ts
│
├── utils/
│ ├── network.ts
│ └── weather.ts
│
├── view/
│ ├── SearchScreen.tsx
│ ├── SearchScreen.styles.ts
│ ├── DetailsScreen.tsx
│ └── DetailsScreen.styles.ts
│
├── viewmodel/
│ └── useWeather.ts



---

## MVVM Responsibilities

### Model
- Defines domain models and TypeScript interfaces
- Represents the structure of weather data
- Located in: `model/`

### View
- Contains UI components and screens
- Responsible only for rendering data
- No business or networking logic
- Uses `StyleSheet` for styling
- Located in: `view/`

### ViewModel
- Acts as the bridge between View and Model
- Handles:
  - API calls and data fetching
  - Loading and error states
  - Data transformation and formatting
- Exposes state and actions consumed by the views
- Located in: `viewmodel/`

### Supporting Layers

#### API
- Handles all external API communication
- Centralizes Axios configuration and error handling
- Keeps networking logic separate from UI
- Located in: `api/`

#### Navigation
- Manages application navigation and screen flow
- Configures React Navigation stacks and routes
- Isolated from UI and business logic
- Located in: `navigation/`

#### Storage
- Manages local persistence using AsyncStorage
- Stores and retrieves the last searched city
- Located in: `storage/`

#### Utils
- Contains shared, stateless helper functions
- Includes network checks and weather-related utilities
- Reused across the application
- Located in: `utils/`

---

## 🔌 API

- OpenWeatherMap – Current Weather API
- Weather fetched by city name

An API key is required.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (>= 16)
- npm or yarn
- React Native development environment
- Android Studio or Xcode

---

### Installation

1. Extract the zipped project
2. Navigate to the project directory:


3. Install dependencies:
npm install
or
yarn install


---

### API Key Setup

The OpenWeatherMap API key is stored in `config.js` at the project root.

This file is included in the zipped submission **only for evaluation purposes**.
In a real-world application, the API key would be excluded from version control
and managed securely (e.g., environment variables).

---

### Run the App

**iOS**
npx react-native run-ios


**Android**
npx react-native run-android

---

## Error Handling

- Invalid city name
- Network connectivity issues
- API failures

User-friendly messages are displayed in the UI.

---

## Persistence

- The last searched city and weather is saved using AsyncStorage
- Restored automatically when the app restarts

---

## Assumptions

- Temperature units are metric (°C)
- Internet connection is required
- App prioritizes clean architecture and readability


---

## Notes

This project is submitted as a zipped folder for evaluation purposes.

