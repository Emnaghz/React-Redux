# What is Redux?

Redux is a state management library that serves as a centralized store that helps you manage "global" state that is needed across many parts of your application.

## Redux Terminology
There's some important Redux terms that you'll need to be familiar with:

### Actions
An action is like an event that describes something that happened in the application. Actions have two fields: 
- The `type` field should be a string that gives this action a descriptive name
- An action object can have other fields with additional information about what happened called `payload`.

### Reducers
They are pure functions that take the previous state and an action (decides how to update the state if necessary), and return the new state.
Reducers must always follow some specific rules:
- They should only calculate the new state value based on the state and action arguments
- They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
- They must not do any asynchronous logic, calculate random values, or cause other "side effects"


### Store
The Redux store is a single source of truth for the state of your application. It holds the entire state tree of your application.	

### Dispatch
Dispatching an action is the process of sending an action to the Redux store. 

**You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.**

### Selectors
Selectors are functions that know how to extract specific pieces of information from a store state value. 

## Redux Core Concepts and Principles
- Global app state is kept in a single store
- The store state is read-only to the rest of the app (The only way to change the state is to dispatch an action)
- Reducer functions are used to update the state in response to actions

## Redux Application Data Flow ("one-way data flow")
- State describes the condition of the app at a point in time, and UI renders based on that state
- When something happens in the app:
    - The UI dispatches an action
    - The store runs the reducers, and the state is updated based on what occurred
    - The store notifies the UI that the state has changed
- The UI re-renders based on the new state

### Cammands to run this project
`git clone `
`npm install`
`npm run dev`