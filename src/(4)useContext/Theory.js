// useContext():
// The useContext hook is a built-in hook in React that provides a way to access the context values that are defined higher up in the component tree without needing to pass props down through multiple levels of components.
// It is particularly useful for sharing data that can be considered global within a specific part of your application without manually passing the data through intermediate components.

// What is context API:
// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
// Context is designed to share data that can be considered global for a tree of React components.
// Using context, we can avoid passing props through intermediate elements.
// To create context, you must Import createContext and initialize it.

// How to Use the Context API:
// There are three step to create context API.
// 1.createContext: Use the createContext function to create a new context. This function returns an object with a Provider and a Consumer component.
// 2.we will use the Context Provider to wrap the child components in the Context Provider and supply the state value.
// 3.we will use the Consumer component to consume the data in the components that need access to the context data.

// Problem With Context API:
// One of the main limitations of using context API is that it can be hard to scale and maintain for a large-scale app.
// You have to be careful about how you create and use contexts, as they can cause unnecessary re-rendering and prop drilling if not done properly.
// You also have to manage the dependencies and updates of multiple contexts, which can lead to code duplication and inconsistency.
// Moreover, context API does not provide any dev tools or middleware to help you debug, test or optimize your state management.

// Solution of Context API:
// Solution is Redux.

// Finished.

// Finished.