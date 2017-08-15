# NgComponentLibrary

This project contains a component library as well as sample usage of those components

## Packaging the component library

To package the component library, run `npm run package`. This will create or update the dist folder of your project with your component
library bundled according to Angular Package Format.

### How does it work?

It uses a library called [ng-packagr](https://www.npmjs.com/package/ng-packagr), which depends on two files, `ng-package.json` and `public_api.ts`, both of which live in the root of the project.

*ng-package.json*

This file points to the ng-packagr schema within the ng-packagr library (this is default), and an "entry file" named `public_api.ts`, which
is named according to a convention of Angular libraries. (See below)

```
{
  "$schema": "./node_modules/ng-packagr/lib/ng-package.schema.json",
  "lib": {
    "entryFile": "public_api.ts"
  }
}
```

*public_api.ts*

This file exports the modules you would like to expose within your library. Components that these modules depend on are exported automatically
as part of the packaging process.

```
export * from './src/app/modules/input/input.module';
export * from './src/app/modules/form/form.module';
...
```

Once packaged, the dist folder's contents are packed with `npm pack`, to be pushed to npm or installed by a local app in development `npm install ../some-path/dist/dist-0.0.0.tgz`.

## Creating components

You can use the CLI to create modules and components for your component library. For example, if you wanted a button component:

### Creating a button module

From the root of the project:

`ng g m modules/button`

### Creating a button component

From the root of the project:

`ng g c modules/button`

### Registering the module with `public_api.ts`

`export * from './src/app/modules/button/button.module';`

### Exporting the component from the module

```
exports: [
  ButtonComponent
]
```

## Why all the fuss?

You can still use the CLI to develop your component library, run it in a sample application, and test it according to the CLI's conventions.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
