# A simple API that provides a GET and POST request endpoint that shortens a URL and returns the result to the client.

## Directory structure

```bash
src
 ┣ controllers
 ┃ ┣ decode.js
 ┃ ┗ encode.js
 ┣ middlewares
 ┃ ┗ payloadValidator.js
 ┣ repositories
 ┃ ┗ url.js
 ┣ routes
 ┃ ┗ routes.url.js
 ┣ services
 ┃ ┗ urlShortener.js
 ┣ app.js
 ┗ server.js
```

## Install the app dependencies

`npm install`

## To run the app

`npm run dev`

## to `POST` in postman use

`http://localhost:6000/url` with the request body
`{
    "url":"https://stackoverflow.com"
}`

## to `GET` the original url

`http://localhost:6000/{shortUrl}`

# Effeciency achieved

## I made the retry mechanism more robust in the following ways:

- Exponential backoff: Instead of using a fixed interval between retries,I used an exponential backoff strategy where the interval between retries increases exponentially with each retry. This is a more efficient and scalable way to handle retrying requests when network issues occur.

- Random jitter: To prevent a large number of clients from retrying at the same time, I added a random jitter to the retry interval. This would add a random delay to each retry interval, which would help to spread out the retry requests over time.

# Improvements

- the retry interval is increased exponentially with each retry using the formula retryInterval _= 2. Additionally, a random jitter is added to the retry interval using the formula retryInterval += Math.floor(Math.random() _ initialInterval). This adds a random delay to each retry interval, which helps to spread out the retry requests over time.

- By using an exponential backoff strategy and adding random jitter to the retry interval, we can make the retry mechanism more efficient and scalable, while also reducing the likelihood of multiple clients retrying at the same time.

- we add a small amount of jitter to the retry interval by generating a random number between 0 and the initial interval (i.e., the minimum amount of jitter) and adding it to the exponential backoff interval. This helps to spread out the retry requests and avoid congestion.

# Further improvments that can be done

it's worth noting that there are always additional ways to improve the performance, reliability, and scalability of a system.

## Some other possible improvements that come to mind include:

- Load testing and benchmarking to identify performance bottlenecks and areas for optimization.
  Using a content delivery network (CDN) to improve the speed and availability of the shortened URLs.

- Implementing a more sophisticated retry strategy that takes into account the response times and error rates of previous requests.

- Using a more sophisticated persistence mechanism, such as a distributed cache or database, to ensure that the shortened URLs are reliably stored and retrieved.

- Implementing additional security measures, such as rate limiting and authentication, to prevent abuse and protect against attacks.
  Using containerization or serverless computing to improve the scalability and efficiency of the application.
