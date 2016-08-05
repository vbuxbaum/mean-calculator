# MEAN Calculator
This repo is a calculator that uses a MEAN stack (MongoDB, Express, AngularJS, and NodeJS).

## Setup

#### Node
[**NodeJS**](http://nodejs.org/download/).

#### Mongo
[**MongoDB**](http://www.mongodb.org/downloads)

## Configure
Install all listed dependencies by navigating to the repository and running the command 

```npm install``` 

This will install [**Express**](http://expressjs.com/4x/api.html) along with the other packages in the package.json file. 

<Enter>
<Enter>
<Enter>

#### Connecting to a Database
Replace the link below with the url for your hosted DB or keep this url for the default local MongoDB
```javascript
// config/db.js
module.exports = {
	url : 'mongodb://localhost:27017/test'
}
```

#### Run our server
To run this server, in the root of the project directory run 

```node server.js```
