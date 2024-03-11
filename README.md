# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/VladimirM89/nodejs2024Q1-service
```

## Installing NPM modules

```
npm install
```

## Enter to developing branch

```
git checkout develop
```

## Rename .env.example

```
Rename file .env.example to .env
```

## Running application

To run server enter:

```
npm start
```

Server will start on 4000 (port from .env file).

## Documentation

To open documentation

```
http://localhost:4000/docs
```

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```
