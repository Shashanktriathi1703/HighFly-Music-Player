# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
"# HighFly-Music-Player" 

# HighFly-Music-Player
# Music Player using ReactJS and Spotify API

This project is a music player application built using ReactJS and the Spotify API. It allows users to browse albums and artists, play music, create playlists, and control playback.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js installed on your machine
- Spotify Developer Account (to obtain API credentials)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

 ```
   git clone https://github.com/your-username/music-player.git
   ```
   

2. Navigate to the project directory:

  ``` 
   cd music-player
   ```

3. Install the dependencies:

  ``` 
   npm install
   ```

4. Create a `.env` file in the root directory and add your Spotify API credentials:

  ```
   REACT_APP_CLIENT_ID=your-client-id
   REACT_APP_CLIENT_SECRET=your-client-secret
   ``` 

5. Start the development server:

  ```
   npm start
   ``` 

6. Open your browser and visit `http://localhost:3000` to access the music player application.

## Features

- Browse albums and artists
- Play music tracks
- Control playback (play, pause, next, previous)
- Create and manage playlists
- View album and artist details

## Technologies Used

- ReactJS: JavaScript library for building user interfaces
- Spotify API: Provides access to Spotify's music catalog and user data
- Axios: Promise-based HTTP client for making API requests
- React Router: Declarative routing for React applications

## Folder Structure

The project structure is as follows:

```
highfly-music-player/
  README.md
  .env
  package.json
  public/
    index.html
    favicon.ico
    logo192.png
    logo512.png
  src/
    App.js
    index.js
    components/
      audioPlayer/
      queue/
      sidebar/
      songCard/
      widgets/
      ...
    screens/
      auth/
      favourite/
      feed/
      home/
      library/
      player/
      trending/
      ...
    shared/
      globalstyle.css
    spotifyAPI.js
    App.js
    ...
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a pull request or open an issue.
1. Fork the repository on GitHub. 
2. Create a new branch with a descriptive name:
```
git checkout -b feature/my-feature
```
3. Make your desired changes.
4. Commit your changes with a meaningful commit message:
```
git commit -m "Add feature or fix"
```
5. Push your branch to your forked repository:
```
git push origin feature/my-feature
```
6. Open a pull request, describing your changes in detail, on the original repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

