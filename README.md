# CLI

cd bookstore

which npx

npx create-react-app --version

npx create-react-app client-app --template typescript

cd client-app

npm start

# react-router

```
npm install react-router-dom @types/react-router-dom
```

This will install the React Router package and its corresponding TypeScript types.

## about trouble-shooting

```
sudo rm -rf node_modules
sudo rm -f package-lock.json

npm cache clean --force

npm install

npm install react-router-dom@latest

npm install --save @types/react-router-dom
```

# Sass

```
npm install sass@latest
```

## trouble shooting

### problem

after install sass and change .css to .scss,

npm start show error:

to import sass files you first need to install node-sass

### my solution

edit package.json

```json
"react-scripts": "^5.0.1",
```

```
npm update react-scripts
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# ref

- [How To Make API calls in React Applications — TypeScript Version](https://medium.com/bb-tutorials-and-thoughts/how-to-make-api-calls-in-react-applications-typescript-version-1800fc756966)
- [Example Project on how to make API calls in React Application written in typescript](https://github.com/bbachi/react-api-calls-example)
- [Shopping Cart](https://github.com/irvingvjuarez/yard-sale)
- [Build a Shopping Cart using React and TypeScript](https://irvingvjuarez.medium.com/build-a-shopping-cart-using-react-and-typescript-58d57170b4eb)
