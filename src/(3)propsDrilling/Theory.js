// props drilling:
// props drilling is a term used in React to describe the process of passing props from a parent component down to nested child components through multiple levels of the component tree.
// This occurs when components in the middle of the hierarchy do not use the props themselves but are required to pass them along to their descendants.

// Example:
// Hierarchy of Components:
// App.js
// ChildA.js
// ChildB.js
// ChildC.js
// pass data from App.js to ChildC by props we need to pass data through ChildA and ChildB.

// Problem with props drilling:
// As your application grows and more components are added to the hierarchy, prop drilling can lead to a complex web of props being passed down.
// This makes it difficult to understand the flow of data and can lead to maintenance challenges.

// Solution of props drilling:
// Use state management libraries like Redux and React in-build Context API to manage and share data at a global level.
// These libraries provide a centralized store where components can access data without the need of props drilling.

// Finished.
