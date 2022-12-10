#UseRef

useRef returns an object with a single property called current.

Initialy myRef.current will be null.

Hooks must only be called at the top-level of your component

You cant call useRef in a loop, condition or inside a map call

By default React does not let a component acces the dom nodes of another component, even for its own children.

If a component wants to expose their dom nodes have to opt in to that behaviour using the fowardRef Api

forwardRef is most commonly used in low-level components like buttons or inputs to forward their refs to their DOM nodes.

High level components like forms, lists or page sections usually won't expose their DOM nodes to avoid accidental dependencies on the DOM extructure

If you want to scroll into view in a list based
on state you will need to use flushSync to manage
state updates synchronously

Because of the default behaviour of state in react, it queues and updates asynchrounously. So if we want to focus in a given
element of the state, we want this action to be synchronous.
