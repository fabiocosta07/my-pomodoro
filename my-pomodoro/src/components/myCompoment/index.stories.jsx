// YourComponent.stories.js|jsx

import { MyComponent } from './index';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/MyComponent',
  component: MyComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <MyComponent {...args} />;

export const FirstStory = {
  args: {
    //👇 The args you need here will depend on your component
  },
};