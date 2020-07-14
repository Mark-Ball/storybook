# Storybook

## 1. Install storybook in the project

```npx -p @storybook/cli sb init```

## 2. Start storybook

The files and run script have been added by the above step.

```npm run storybook```

## 3. Create stories

Stories are the main part feature of storybook. Each story represents a state of a React component. 

Each story must import React and the component it represents.

It must have a default export which is an object used to display information in the storybook interface.
```javascript
export default {
  title: 'Custom Button',
  component: Button
}
```

Then named export/s are used for the component itself.
```javascript
export const Basic = () => <Button />
```

## 4. Adding knobs

Knobs are an addon which allows you to select which props the component receives in the storybook interface.

- install the knobs addon ```npm add @storybook/addon-knobs --save-dev```
- include the addon within ```.storybook/main.js```:   
  ```javascript
  addons: [
    '@storybook/addon-knobs/register'
  ]
  ```
- add knobs to the stories file
  ```javascript
  import { withKnobs, text } from '@storybook/addon-knobs'

  export default {
    title: 'Custom Button',
    component: Button,
    decorators: [withKnobs]
  }
  ```

We can now use knobs like text, boolean, number etc (docs: https://www.npmjs.com/package/@storybook/addon-knobs) to define our knobs.

## 5. Using knobs to add props

We can define a function to return a props object
```javascript
const myProps = () => ({
  name: text('Name', 'Create')
})
```

In our named export we can then call the function and spread the returned value to act as props.
```javascript
export const Basic = () => <Button {...myProps()} />
```

## 6. Using actions

https://www.npmjs.com/package/@storybook/addon-actions