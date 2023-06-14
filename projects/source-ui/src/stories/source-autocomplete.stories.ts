import type { Meta, StoryObj } from '@storybook/angular';
import { SourceAutocompleteComponent } from '../lib/source-autocomplete/source-autocomplete.component';

const meta: Meta<SourceAutocompleteComponent> = {
  title: 'Autocomplete',
  component: SourceAutocompleteComponent,
  tags: ['autodocs'],
  render: (args: SourceAutocompleteComponent) => ({
    props: {
      // @ts-ignore
      placeholder: 'Enter a value',
      ...args,
    },
  }),
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<SourceAutocompleteComponent>;

export const Default: Story = {
  args: {
    data: ['Apple', 'Banana', 'Cherry', 'Date'],
  },
};

export const Custom: Story = {
  args: {
    data: [
      {
        id: 1,
        name: 'Albania',
      },
      {
        id: 2,
        name: 'Belgium',
      },
      {
        id: 3,
        name: 'Denmark',
      },
      {
        id: 4,
        name: 'Montenegro',
      },
      {
        id: 5,
        name: 'Turkey',
      },
      {
        id: 6,
        name: 'Ukraine',
      },
      {
        id: 7,
        name: 'Macedonia',
      },
      {
        id: 8,
        name: 'Slovenia',
      },
      {
        id: 9,
        name: 'Georgia',
      },
      {
        id: 10,
        name: 'India',
      },
      {
        id: 12,
        name: 'Switzerland',
      }
    ],
    placeholder: 'Select a color',
  },
};

export const Empty: Story = {
  args: {
    data: [],
    placeholder: 'No items available',
  },
};
