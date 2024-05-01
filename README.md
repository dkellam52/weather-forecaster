
# 🌤️ Dominique's Weather Forecaster

## Overview
Welcome to the repository for my weather application built with Gatsby and React! This app leverages the OpenWeatherMap API to provide real-time weather updates and forecasts. It's designed to be fast, responsive, and user-friendly, providing accurate weather information for locations worldwide.

## 🌈 Features
- **Current Weather** ☀️: Displays the current weather conditions including temperature, humidity, and wind speed.
- **5-Day Forecast** 📅: Offers a detailed 5-day weather forecast, showing changes over time.
- **Unit Conversion** 🌡️: Allows users to toggle between Celsius and Fahrenheit.
- **Geolocation** 📍: Fetches weather data based on the user's current location.

## 🛠️ Technologies Used
- Gatsby
- React
- OpenWeatherMap API
- Node.js
- CSS for styling

## 🚀 Installation

To get this project up and running on your local machine, follow these steps:

1. **Clone the repository:**
- git clone https://github.com/yourusername/weather-app.git
- cd weather-app

2. **Install dependencies:**
- npm install


3. **Install Gatsby OpenWeatherMap Plugin:**
- Ensure you have the `gatsby-openweathermap` plugin in your `gatsby-config.js`.
- If not, install it via npm:
  ```
  npm install gatsby-openweathermap
  ```
- Configure the plugin in `gatsby-config.js`:
  ```javascript
  {
    resolve: 'gatsby-openweathermap',
    options: {
      appid: 'YOUR_OPENWEATHERMAP_API_KEY', // Replace with your API key
      q: 'Your_Default_City', // Default city to show weather
      units: 'metric' // or 'imperial' for Fahrenheit
    },
  }
  ```

4. **Set up the environment variables:**
- Rename `.env.example` to `.env`
- Add your OpenWeatherMap API key to `GATSBY_OPENWEATHERMAP_KEY`

5. **Run the development server:**
- gatsby develop

This starts the server on http://localhost:8000.

## 📊 Usage
After launching the app, you can search for any city to view its current weather and upcoming weather forecast. Use the metric toggle to switch between Celsius and Fahrenheit.

## 🗺️ Future Enhancements
- **Interactive Weather Maps**: One of the major enhancements I'm planning is the integration of interactive weather maps. These maps will allow users to visually track weather patterns and conditions across different regions. By implementing interactive maps, users will be able to engage more deeply with the weather data, understanding not just the "what" but also the "where" of weather events.


## 🤝 Contributing
Contributions to this project are welcome! Here's how you can contribute:
- **Fork the repository**: Make a copy of this project to your GitHub account.
- **Create a branch**: Create a new branch in your forked repository.
- **Make your changes**: Enhance features, fix bugs, or add new functionalities.
- **Submit a pull request**: Push your changes to your fork and open a pull request in this repository.




