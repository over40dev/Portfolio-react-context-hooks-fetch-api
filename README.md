# Education - React Example - Basics

## React Hooks, Context, Fetch API (Mock Backend with JSON Server)
 
### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Getting Started with JSON Server for Mock Backend

JSON Server is a full mock REST API with zero coding. You can even use your own custom data.

Install Globally or Locally ( `npm install json-server` )

GitHub: [JSON Server](https://github.com/typicode/json-server)

Add Script to **package.json** file such as:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "server": "json-server --watch db.json --port 5000"
  },
```

Your mock data is stored in a file 'db.json' in your main folder. When you first execute 'npm run server', if 'db.json' does not exist it is created for you. The great thing is, you can modify this file to include your own data in your own format so you can easily make it fit your app (rather than making your app fit your data).

Note: It's important to know that this is a 'JSON' file and therefore must adhere to 'JSON' format rules including double quotes ( "" ) around all keys and string values as well as no trailing commas (like you can have in modern JS)

'db.json' file created for you:

```json
{
  "tasks": [
    {
      "id": 1,
      "title": "json-server",
      "author": "typicode"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

Modify file for our purposes:

```json
{
  "tasks": [
    {
      "id": 1,
      "name": "Task1",
      "date": "Aug 1, 2021",
      "time": "",
      "reminder": true
    },
    {
      "id": 2,
      "name": "Task2",
      "date": "Aug 2, 2021",
      "time": "",
      "reminder": true
    },
    {
      "id": 3,
      "name": "Task3",
      "date": "Aug 3, 2021",
      "time": "",
      "reminder": false
    }
  ]
}
```

Run the 'server' using the 'script' we added to 'package.json'

`npm run server`

The tasks are now available at the port we included in the 'script' command in 'package.json'

`http://localhost:5000/tasks`

Using the browser to hit this url returns the **tasks** we setup in 'db.json'

```default
[
  {
    "id": 1,
    "name": "Task1",
    "date": "Aug 1, 2021",
    "time": "",
    "reminder": true
  },
  {
    "id": 2,
    "name": "Task2",
    "date": "Aug 2, 2021",
    "time": "",
    "reminder": true
  },
  {
    "id": 3,
    "name": "Task3",
    "date": "Aug 3, 2021",
    "time": "",
    "reminder": false
  }
]
```


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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

