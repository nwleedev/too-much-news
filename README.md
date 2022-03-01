# News Aggregator

The Next.js project with TypeScript, which renders news data of several categories.

## Description

To retrieve news data, [News API](https://newsapi.org/) is being used. For development accounts, this external api limits request quotes to 100 per day. 

Serverless api is also deployed to store data. There are 4 types of data which are business, science, general, and technology.

Browser requests serverless api and retrieve data latest stored. 

## Features

- Fetch news data
- Get the detail infomation of news by clicking each thumbnail image.
  - Clicking images, corresponding news data is stored local storage.
  - When the url is changed to "/news", the client get the infomation from local storage.
