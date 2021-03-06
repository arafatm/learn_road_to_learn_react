# The Road to Learn React

## Introduction to React 

### Hi, my name is React

### Requirements

626d2af `npm install react` # install react

2dbfdab `npm init -y` # initialize all defaults in package.json

0d04276 `mkdir throwaway readme.md`

### Installation

### Zero-Configuration Setup

`npm install -g create-react-app` # react bootstrapper [:ship: e427457](https://github.com/arafatm/learn_road_to_learn_react/commit/e427457) 

`create-react-app hackernews` # Bootstrap a react app [:ship: 98c70ab](https://github.com/arafatm/learn_road_to_learn_react/commit/98c70ab) 

`npm start` # runs the app in http://localhost:3000

`npm test`

`npm run build` # builds app for production

### Introduction to JSX

`class App extends Component` in
[src/App.js](https://github.com/arafatm/learn_road_to_learn_react/blob/98c70abb8e6b60d2132989fb2e7c0f14bfef38c0/hackernews/src/App.js#L5)
instantiates a React ES6 class component

`render()` returns an element

`var helloWorld` [:ship: 0f301de](https://github.com/arafatm/learn_road_to_learn_react/commit/0f301de)

Exercise: render a more complex object [:ship: c535c78](https://github.com/arafatm/learn_road_to_learn_react/commit/c535c78)

- [ ] Read [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)

### ES6 const and let

In ES6, use `let` and `const` instead of `var` 
- `const` cannot be reassigned or redeclared
- `let` can be modified

helloWorld with `const` [:ship: 8e03f99](https://github.com/arafatm/learn_road_to_learn_react/commit/8e03f99)

### React DOM

`ReactDom.render` in [src/index.js](https://github.com/arafatm/learn_road_to_learn_react/blob/master/hackernews/src/index.js#L7)
replaces a DOM node in your HTML with JSX.

The `getElementById('root')` finds the DOM element in [public/index.html](https://github.com/arafatm/learn_road_to_learn_react/blob/master/hackernews/public/index.html#L29)

### Hot Module Replacement

**HMR** is a way to immediately render code change without refreshing the entire page, which is the default.

```javascript
if (module.hot) {module.hot.accept();}
```

Hot Module Replacement in action [:ship: 33e9f0b](https://github.com/arafatm/learn_road_to_learn_react/commit/33e9f0b)

- [ ] Watch [Live React: Hot Reloading with Time Travel](https://www.youtube.com/watch?v=xsSnOQynTHs)

### Complex Java Script in JSX

xxx
### ES6 Arrow Functions 
### ES6 Classes 

## Basics in React

### Local Component State 
### ES6 Object Initializer 
### Unidirectional Data Flow
### Bindings
### Event Handler
### Interactions with Formsand Events 
### ES6 Destructuring 
### Controlled Components
### Split Up Components 
### Composable Components
### Reusable Components
### Component Declarations 
### Styling Components

## Getting Real with APIs 

### Lifecycle Methods 
### Fetching Data
### ES6 Spread Operators 
### Conditional Rendering 
### Client-or Server-side Search
### Paginated Fetch
### Client Cache 
### Error Handling 
### Axios instead of Fetch 

## Code Organization and Testing 

### ES6 Modules: Importand Export 
### Code Organization with ES6 Modules 
### Snapshot Tests with Jest 
### Unit Tests with Enzyme 
### Component Interface with Prop Types 
### Debugging with React Developer Tools 

## Advanced React Components 

### Ref a DOM Element 
### Loading 
### Higher-Order Components 
### Advanced Sorting 

## State Management in React 

### Lifting State 
### Revisited: set State() 
### Tamingthe State 

## Final Steps to Production 

### Eject 
### Deploy your App 

## Outline 
