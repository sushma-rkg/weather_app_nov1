# Weather App

A simple weather website. Type a city name and see the current weather for that city.

## How it works

1. Type a city name in the search box.
2. Click **Search** (or press **Enter**).
3. The page shows the weather for that city:
   - the city name and country
   - the local date and time there
   - the temperature in Celsius (°C)
   - a short description, like "Sunny", with a small weather picture
   - what it feels like (°C)
   - the humidity
   - the wind speed (km/h) and direction

## Where the weather comes from

All weather information comes from [weatherapi.com](https://www.weatherapi.com/).

## Where it is hosted

- The website is hosted on **Vercel**.
- A small piece of code on Vercel asks weatherapi.com for the weather. The page talks to that code, never to weatherapi.com directly.
- Weatherapi.com needs a secret password called an **API key**. The key is stored on Vercel as an **environment variable** (a private setting) called `WEATHER_API_KEY`.
- The key is never written in any file in this project.

## What happens when something goes wrong

The page shows a short, friendly message instead of an error:

- If the city is empty or can't be found:
  "We couldn't find that city. Please check the spelling and try again."
- If anything else goes wrong (for example the key is missing or wrong, or the weather service is down):
  "The weather service is unavailable right now. Please try again later."

## Live link

[add live link here]

## Credits

Weather data by [weatherapi.com](https://www.weatherapi.com/).
