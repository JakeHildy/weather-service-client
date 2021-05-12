### Date

May 12, 2021

### Location of deployed application

https://thinkific-weather-service.netlify.app/
Access code: thinkific

### Time spent

Server-side: 2 hours
Client-side: 4 hours

### Assumptionsmade

This application will be used by a front-end application that will be able to store authentication tokens for future use.
That a simple access code is sufficient for authorization. No username password combination required.
Only a handful of users will be using the service at any one time and the service will not exceed the 60 call / minute free tier.
I split the git repos into client and server side to make deployment simpler.

### Shortcuts/Compromises made

If this was used by many people, I would cache the results for cities in a json file on the server side. Then if a request is made for a city that has already been requested recently the json file data could be sent instead of making another call to the openweathermap api. This would reduce traffic and potential api costs.

### Stretch goals attempted

Built a simple UI for the service using React.

Added Authentication for the service. I implemented this as an Access Phrase you need to input before the UI will let you enter a city. (Note: The access phrase is "thinkific"). When the correct access phrase is supplied, the server then responds with a jwt token that is required on future weather requests. The jwt token is stored in session storage on the browser, so that on page refresh users do not need to re-enter the phrase.

Deployed the front-end with Netlify. Located at https://thinkific-weather-service.netlify.app/
Deployed the back-end with Heroku. Located at https://fierce-shore-90927.herokuapp.com/

Proxied a real weather API (openweathermap.org) and the server forwards all of the weather data to the front-end so that any sort of implementation would be possible. I could have filtered out only certain fields on the backend before sending out, but decided to do this on the front-end instead.

### Instructions to run assignment locally

In order to run locally a .env file will need to be added to both the front and back end. I didn't include this in the git repo since .env files normally hold sensitive data such as API keys and it is bad practice to include in git repos.

If you wish to run locally here are the contents of the .env files:

Front-end .env:
REACT_APP_BACKEND_URL=https://fierce-shore-90927.herokuapp.com/api/v1/

Back-end .env:
PORT=5000
WEATHER_API_KEY=508d39d650eb426f51858f59491875f7
ACCESS_CODE=thinkific
JWT_KEY=48cb8bb988470e422c4176724ffec768453cc1be1c4754fdd931ea4ae3427d2c

### Other information about your submission that you feel it's important that we know if applicable.

I chose to use React for the front-end and Express with Node.js for the backend since I'm the most familiar with these frameworks.

React is easy to setup and implement UI's very quickly, however it is quite a large package.

Node.js + Express are great for setting up API routes quickly and easily. Javascript is an interpreted language so it would be slightly slower than using a compiled language such as Java but in most cases the differences would be negligible.

### Your feedback on this technical challenge

This was a great technical challenge and I really enjoyed it! Looking forward to meeting the team at Thinkific and discussing the solution!
