# TypeScript Node Starter

This project can be used as a starting point for your next node project.

## Features

- Express
- Prettier
- TsLint
- Husky

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
yarn
```

## Development

| Npm Script    | Description                                                            |
| ------------- | ---------------------------------------------------------------------- |
| `dev`         | Start app in development mode                                          |
| `build`       | Run build tasks                                                        |
| `serve`       | Runs node on `dist/server.js`                                          |
| `watch-node`  | Runs nodemon to restart server when crash                              |
| `build-ts`    | Compile all source `.ts` files to `.js` files in the `dist` folder     |
| `watch-ts`    | Build by watching `ts` file s                                          |
| `tslint`      | Run TSLint on project                                                  |
| `tslint:fix`  | Run TSLint on project and automatically fix errors using `tslint.json` |
| `prettier`    | Format files using `.prettierrc.json``                                 |
| `serve-debug` | Run the app with the --inspect flag                                    |

## Reference links

- [Microsoft TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter)
