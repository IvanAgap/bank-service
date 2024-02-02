# Bank Service

## Installation

For install dependencies and run project you need use node version 18.12 or higher.

```sh
# Navigate to the project directory:
cd bank-service

# Install dependencies:
yarn
```

### Starting the Development server

To start the development server, run the command:

```sh
yarn start
```

After this command, app should open in the development mode&
Use http://localhost:3000 to view it.

### Creating a build

If you need create a build for this app, you should use command:

```sh
yarn build
```

After this command the app builds to the build folder.


After this command you tests will run.

### Linting and Type Checking

The project utilizes ESLint and TypeScript for enforcing best practices and static type checking. You can use the following commands:

Run Linter
To run the linter and check your code style, execute:

```sh
yarn lint
```

This command will analyze your code for adherence to established standards and display warnings if corrections are needed.

### Automatically Fix Code Style

If you want to automatically fix some code style issues, use:

```sh
yarn lint:fix
```

This command will automatically correct detected style issues where possible.
