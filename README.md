### Information about testing inside this program! ###

Content:

- Using test interactivity with
    * fireEvent
- jest-dom assertions:
    * toBeDisabled()
    * toBeEnabled()
    * toBeChecked()
- getByRole option { name: }
- Jest describe to group tests
- Unit testing functions

### `npm test`

React Testing Library helps with:

      * Rendering components into virtual DOM
      * searching virtual DOM for elements
      * Interacting with virtual DOM
      * Simulating user events

Needs a test runner like Jest

      * Finds tests and runs them, make assertions

npm test runs npm script that runs Jest in watch mode. Jest is a JavaScript testing framework created by Facebook.
It is used to test JavaScript code for correctness. It is a complete and ready to set up JavaScript testing solution.
It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!

Testing library recommends finding elements by accessibility handles.

    https://testing-library.com/docs/queries/about/

Which query should I use?
getByRole -> 90% of the time, for most use cases, interactive elements
getByLabelText
getByPlaceholderText
getByText -> for non-interactive elements
getByAltText
getByTitle
getByDisplayValue
getByTestId

Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions

When to unit test vs integration test?
Unit test: test a single function or component
Integration test: test multiple components together

For more complicated functions, unit tests help with covering all possible edge cases.

Issue with functional tests: high-level makes them resistant to change. If you change the implementation, you have to
change the test.
And it is difficult ti diagnose the problem when the test fails.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### ESLint ###

React comes out with a default ESLint configuration. It is a tool for identifying and reporting on patterns found in
ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. ESLint is built into Create
React App.
It is just a matter how to configure it.

1. Install ESLint and the plugin for testing library in Jest, inside /src folder:
   https://github.com/testing-library/eslint-plugin-testing-library
   ESLint:
   ```npm install --save-dev eslint```
   or
   ```yarn add --dev eslint```

2. Install the correct version of each package, which are listed by the command:
   ```npm info "eslint-config-airbnb@latest" peerDependencies```

3. If using npm 5+, Windows users can run this in one command:

   ```npm install --save-dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#```
   (npm install --save-dev eslint-config-airbnb eslint@^8.2.0 eslint-plugin-jsx-a11y@^6.5.1 eslint-plugin-import@^2.25.3
   eslint-plugin-react@^7.28.0 eslint-plugin-react-hooks@^4.3.0)

4. If there are high vulnerabilities, run to check:
   ```npm audit fix```
   and afterwards:
   ```npm audit fix --force```

5. Now we can initialize linting:
   ```npx eslint --init```
   and answer the questions:
   √ How would you like to use ESLint? · style
   √ What type of modules does your project use? · esm
   √ Which framework does your project use? · react
   √ Does your project use TypeScript? · No / Yes
   √ Where does your code run? · browser
   √ How would you like to define a style for your project? · guide
   √ Which style guide do you want to follow? · airbnb
   √ What format do you want your config file to be in? · JavaScript
   Checking peerDependencies of eslint-config-airbnb@latest . yes

If there are any errors try to fix with ```npm audit fix```

6. Fix error: ESLint couldn't find the plugin "eslint-plugin-testing-library", or
   ESLint: Specify a path to the 'eslint' package
   Click the ESLint settings ... button in the bottom right corner (CTR+ALT+S)
   or inside IntelliJ: File -> Settings -> Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint
    - Manual ESLint configuration
    - ESLint package: node_modules/eslint

### Some helpful configuration ###

Inside IntelliJ (CTRL+ALT+S): File -> Settings -> Languages & Frameworks -> JavaScript -> Code Quality Tools -> Tools ->
Actions on Save
activate checkbox: Reformat code
activate checkbox: Optimizing imports
activate checkbox: run ESLint --fix on save

Inside IntelliJ (CTRL+ALT+S): File -> Settings -> Editor -> Code Style -> JavaScript ->

### TypeScript, JavaScript ###

* Tab size: 2
* Indent: 2
* Continuation indent: 2
  Tab spaces: Within:
* check 'Object literal braces'
* check 'ES6 import/export braces'

### HTML ###

Tab Others: Spaces

* check 'In empty Tags'
