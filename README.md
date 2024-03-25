# Home Library Service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone https://github.com/VladimirM89/nodejs2024Q1-service.git
```

Change directory:

```
cd nodejs2024Q1-service
```

## Installing NPM modules

```
npm install
```

## Enter to developing branch

```
git checkout docker_database
```

## Rename .env.example

```
Rename file .env.example to .env
```

## Docker container

To run docker container:

```
docker-compose up
```

Server will start on 4000 (port from .env file).

To stop docker container:

```
docker-compose stop             or press Ctrl+C
```

To show running docker containers:

```
docker ps
```

To show images info (size):

```
docker images
```

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

## Scan vulnerabilities

To scan vulnerabilities (docker scout):

```
npm run scan
```

## Documentation

To open documentation

```
http://localhost:4000/docs
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```
