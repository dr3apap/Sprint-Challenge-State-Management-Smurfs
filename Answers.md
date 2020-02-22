1. What problem does the context API help solve?
   It solved the propblem of deep nested components that will be difficult to recieve or consume props.. It helps each component manage states and allow the easy passage of props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is the store as the Name imply... and the reducers is the items or products at the store. Imagine an icecream store, the store is the store holding the icecream and the store keeper. The icecream is the reducer and the storekeeper is the action. The store keeper connect the reducer and the store together via a buy action and the reducer update the items in the store after each action it doesn't neccessary mean buying something states. Sales, return, expire, promotion and so on.

The store is known as the single source of truth because only the store can change the state of the application. It's the only thing that control or hold the data that need to be changed and thereby putting the state of the application in what is call rendering which is the purpose of react. "it;s either success or error it's either loading or not loading and it;s either login or log out" The state can only be in one it can never be in two different states. It can hold different states but can only be in one at a time. Making the application very predictable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is the state of the whole components all together and component states is just the state of that component. An application might consist of two to three to many components and each may have independent states even if does share a props with another component like a parent it can only render or do what it is aware of it doesn't know what is going on with the others or the whole app. It only knows about himself lol.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux thunk take care of the side effect of a function, most react function are pure and when we make an async call which we can't with redux since redux it's already operating on that same principle. Thunk allow us to use functions to make async call the function don't have to be pure it allow easy passage of the function when it sees a function been returned and let it go through but execute the an action dispatch.

MY favorite state management is Context, it's easy and straightforward not much boiler plate codes, easy to set up and powerful though the side effects of rendering all the components that relied on each other props or sates is there but it;s the easiest state management. I do like redux too redux is more of a all around programming concepts it can also allow students to get familiar with different concepts thereby making us a better programmer because of the steps that is involved..... dispatching an action to update data, updating data via logics, managing the data and so on I like it.
