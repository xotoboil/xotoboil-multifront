export default {
  title: 'Components/Button ',
  args: {
    text: 'Valider',
  },
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

const Template = args => `<UIButton type="${args.type}">${args.text}</UIButton>`;

export const Primary = Template.bind({}) as any;
export const Secondary = Template.bind({}) as any;
Secondary.args = {
  text: 'Media',
  type: 'secondary',
};
