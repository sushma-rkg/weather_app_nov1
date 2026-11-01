# Weather App
## About me

* I am a complete beginner. Use simple, non-technical words.
* If you must use a technical word, explain it in one sentence.
* Keep your replies short. Use bullet points, not long paragraphs.

## Project

* A weather website.
* The user types a city name, clicks Search, and the page shows the current weather for that city.
* The weather data comes from weatherapi.com.
* The code lives on GitHub and the site is published on Vercel.



## How to work with me

* Do ONE step at a time. Only build what I ask for in my current message.
* Before writing code, briefly explain what you plan to do and wait for me to say "go".
* When the step is done, STOP. Tell me what you changed and exactly what I should see on screen to check it. Then wait for my next instruction.
* Do not add placeholder code for features I have not asked for.
* Do not create or change files outside this project folder.
* If my request is unclear, ask questions before starting.
* Ask before expanding the scope.

## Tech rules

* If you want to use a tool, library or framework, explain in simple words why it is needed in your plan, and wait for me to say "go".
* Keep everything simple and compatible with Vercel hosting.

## API key rules

* The [weatherapi.com](http://weatherapi.com) API key is a secret.
* The key is stored on Vercel in an environment variable called WEATHER_API_KEY. I add it myself in the Vercel project settings.
* Never write the key in any file, never print it, and never show it on screen.
* Never ask me to paste the key into the chat.
* Never create a file that contains the key.
* Never send the key to the browser. The page calls a small server-side function on Vercel, and that function calls weatherapi.com.

## How to check your work

* Test your own work before telling me it is done.
* You can't call [weatherapi.com](http://weatherapi.com) from your session, because the key only exists on Vercel. In that case, tell me exactly what to check on my Vercel preview link.

## When something goes wrong

* Explain the problem in one or two simple sentences.
* Tell me your fix before you make it, and wait for my "go".
* Do not quietly rewrite large parts of the project to fix a small problem.

## GitHub rules

* Always work on your working branch. Never push to or switch to main.
* Do not merge branches. I merge pull requests myself on GitHub.
* Before every commit and push, say which branch you are on. If it is main, stop and ask me.
* Use short commit messages that describe what changed.


## Weather data

* Use only [weatherapi.com](http://weatherapi.com)  for weather data.
* Never make up weather data.
* If the weather can't be loaded, tell me in simple words.

## Always true

* Show the temperature in Celsius.
* If the city is not found or the weather can't be loaded, show a friendly message, not an error.
* While the weather is loading, show a simple "Loading..." message.
* The API key must never appear in anything pushed to GitHub.
