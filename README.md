## Setup

`yarn`
`yarn start`
`yarn test`

## About Enzyme

FORMULA expect(expected value - the thing that needs to be verified).matcher statement(value that we expect to see);
matcher statement designates how we want to inspect the subject (ex: toBe)
three general functions to create instances of component and writing expectations around them
1. static renderer - the function to pass component to. It will render the component, take generated HTML and return object that just contains HTML
The key is that it is NOT possible to interact with generated HTML.
2. shallow renderer - takes the instance of component, renders JUST the given component and none of its children
3. Full DOM renderer- takes the instance of component, renders the component and all of it's children. Returns the object that can be used to interact with the component


Async middlewares architecture and schema
 https://drive.google.com/file/d/1S5EzQkffCJ9pGHr6rhkgFj7Pw6G3TR2p/view?usp=sharing