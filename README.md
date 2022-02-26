# PantryApp
Pantry App using ionic react with Redux

# Install Ionic React

$ npm install -g @ionic/cli
$ ionic start myApp tabs --type react

$ ionic serve

For further documentation, please refer here : https://ionicframework.com/docs/react

# State management using React Redux

The UI contains 8 main sections:-

- An input box to let user type in the text of a new ingredient name
- An input box to let user type in the text of a new ingredient quantity
- A list of all ingredients
- An action to delete current ingredient objects
- An input box to let user type/update in the text of a new recipe by composing from all available ingredients
- A list of all recipes
- A list of all cooking histories
- An action to delete current recipe objects

3 main aspects of this app:-

- The actual list of current ingredients plus quantity
- The actual list of current recipes
- The cooking toggling option

For each ingredients, we need to store:-

- Ingredient’s name
- Quantity

For each recipes, we need to store:-

- Recipe’s name
- Ingredients
- Quantity
- Method

For cooking history section, we need to get:-

- Recipe’s name

First, we need an array of ingredient objects to have this field:-

- Text: Ingredient's name

Second, we need an array of recipe objects to have these fields:-

- recipes'
- Selected recipe that contains object of
      1) id
      2) Text : title
      3) text: name
      4) qty
      5) ingredients array
      6) text: method

Then, any extra data that needed to describe what’s happening into action.payload to update what needs to be updated into the store. After that, we create a list of actions that can happen by defining as below:-

{ type: ‘This will see what need to be updated’, payload: ‘What’s happening into payload’}

Next, we need to write Reducers to act as a function that take the current state and return a new result. Root reducer is needed to handle all actions. This reducer accepts 2 arguments; initial state and action.

In the reducer, we need to check whether the current action type matches the specific value based on state and action argument, then we need to return an object of all copies of original object, after that it can update new actions into the initial value. Each action needs to be split up into different reducer functions based on different actions. This is called a "Slice reducer".

Finally, we create a Redux store to bring all data together (state, action and reducers). This store holds the current state, allow access and update to the current state. Every redux store only has one root reducer. However, we have multiple separate reducer functions in place. These seperate slice of reducer functions then can be combined into one because Redux store only needs one root reducer function. We can combine these reducer functions using "combineReducers" function from Redux to Redux store. We use store.dispatch method to dispatch all actions on this app.

Further information about Redux can be found here: https://redux.js.org/tutorials/index
