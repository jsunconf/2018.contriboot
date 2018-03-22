# Contriboot

Manage Contributions and Interests. Based on Firebase.

The code is copied from last year's contriboot  https://github.com/jsunconf/contriboot
but with upgraded libs and a few code improvements due to version changes.

## First time Set-up

### Create an OAuth token for github

for the authorization via github for contriboot

### Create firebase app

with github - authentification

and these rules:

```
{
  "rules": {
    ".read": true,
    "contributions": {
      "$contribution": {
        ".write": "auth != null",
        "title": {".validate": "newData.isString()"},
        "description": {".validate": "newData.isString()"},
        "user": {
          "id": {".validate": "newData.isString()"},
          "username": {".validate": "newData.isString()"},
          "displayName": {".validate": "newData.isString()"},
          "profileImageURL": {".validate": "newData.isString()"},
          "$other": {".validate": false}
        },
        "$other": {".validate": false}
      }
    },
    "interests": {
      "$interest": {
        ".write": "auth != null",
        "title": {".validate": "newData.isString()"},
        "description": {".validate": "newData.isString()"},
        "user": {
          "id": {".validate": "newData.isString()"},
          "username": {".validate": "newData.isString()"},
          "displayName": {".validate": "newData.isString()"},
          "profileImageURL": {".validate": "newData.isString()"},
          "$other": {".validate": false}
        },
        "$other": {".validate": false}
      }
    },
    "votes": {
      "$entry": {
        ".read": true,
        ".write": true,
        ".validate": "newData.isNumber() && (newData.val() === 1 || (newData.val() - data.val()) === 1) && (root.child('contributions/' + $entry).exists() || root.child('interests/' + $entry).exists())"
      }
    }
  }
}
```
Copy API keys and URls to `config.jsx`

## Development

### Installation

Make sure you have the following commands installed:

```sh
brew install node
```

After cloning the repository, install all dependencies:

```sh
npm install
```

### Develop

Run the following command to start the server on localhost:

```sh
npm start
```
and point your browser to `http://localhost:8080`

### Deploy

To build the application, run the following command:

```sh
npm run build
```

and copy the generated `build/static/main.js` source to https://github.com/jsunconf/2017.jsunconf.eu/blob/master/content/scripts/contriboot.js
