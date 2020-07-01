# TypeScript Node Starter

This project can be used as a starting point for your next node project.

### Project Wiki:

https://github.com/kcsuraj/node-typescript-starter/wiki

### Features

- Express
- Prettier
- TsLint
- Husky
- Docker

### Pre-requisites

The software has been tested with

- nodejs v10

## Installing

- Clone the repository

```
git clone  https://github.com/kcsuraj/typecript-node-starter.git <project_name>
```

- Install dependencies

```
cd <project_name>
npm install
```

## Development

| Npm Script   | Description                                                            |
| ------------ | ---------------------------------------------------------------------- |
| `start`      | Run app in development mode and with auto reload onf file changes      |
| `build`      | Build files for production mode                                        |
| `build-ts`   | Compile all source `.ts` files to `.js` files in the `dist` folder     |
| `watch-ts`   | Build by watching `ts` file s                                          |
| `tslint`     | Run TSLint on project                                                  |
| `tslint:fix` | Run TSLint on project and automatically fix errors using `tslint.json` |
| `prettier`   | Format files using `.prettierrc.json``                                 |

## Development with docker

```bash
docker-compose up
```
