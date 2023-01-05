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
    getByRole               -> 90% of the time, for most use cases, interactive elements
    getByLabelText
    getByPlaceholderText
    getByText               -> for non-interactive elements
    getByAltText
    getByTitle
    getByDisplayValue
    getByTestId

Roles documentation: https://www.w3.org/TR/wai-aria/#role_definitions

When to unit test vs integration test?
    Unit test: test a single function or component
    Integration test: test multiple components together

For more complicated functions, unit tests help with covering all possible edge cases.

Issue with functional tests: high-level makes them resistant to change. If you change the implementation, you have to change the test.
And it is difficult ti diagnose the problem when the test fails.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
