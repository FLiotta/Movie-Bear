## Movie Bear

Movie app made in React and Redux using The Movie Database's API

![alt text](https://i.imgur.com/98Yzww1.png)

### Configuration 🔧

Create a config.js file in the ```/src``` directory with your Movie Database's API key and the API URL

```js
module.exports = {
  API: {
    URL: 'https://api.themoviedb.org/3',
    API_KEY: 'YOUR_API_KEY'
  }
}
```

### Commands 💾

Install: To install all the dependencies on package.json

```yarn install```

Build: It runs webpack to build all the needed bundles for our app to work.

```yarn run build```

Developer server: Runs webpack-dev-server on localhost:8080

```yarn run dev-server```

Start: It starts our app with the express server, it needs to be builded using the build command before.

```yarn start```


### Demo

https://movie-bear.herokuapp.com/