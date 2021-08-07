# InstaResume

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

An Instant Resume Builder Web Application Built With React And Firebase.

## View The Live Site [Here](https://instaresume.jackjona.live)

### Software & Sources

- Images From Unsplash
- Firebase
- React
- Gatsby

### To Do

Add more resume templates for users.

#### To Develop Locally:

1. Create a Firebase Project With **Realtime Database** Enabled.
2. Create a ``.env`` file with your Firebase project credentials. Below is ab example of how your ``.env`` file could look like ("FIREBASE_MEASUREMENTID" is not needed unless you want to enable analytics):

```
FIREBASE_APIKEY=""
FIREBASE_AUTHDOMAIN=""
FIREBASE_DATABASEURL=""
FIREBASE_PROJECTID=""
FIREBASE_MEASUREMENTID=""
FIREBASE_STORAGEBUCKET=""
FIREBASE_MESSAGINGSENDERID=""
FIREBASE_APPID=""
```

3. Then

```
npm install
npm run start
```