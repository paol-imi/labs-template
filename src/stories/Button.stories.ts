import type { Meta, StoryObj } from '@storybook/react';
import { fn, expect, userEvent, within, waitFor } from '@storybook/test';
import { Button } from '../components/ui/button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  parameters: {
    controls: { exclude: ['asChild'] }
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "default",
    size: "default",
    role: "menuitem",
    children: "done",
  },
  parameters: {
    controls: { exclude: ['onClick'] }
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Click the save button", async () => {
      const saveButton = canvas.getByRole('menuitem', { name: /done/i });
      await userEvent.click(saveButton);
      // Remove focus from button
      await saveButton.blur();

      await waitFor(() => expect(args.onClick).toHaveBeenCalled());
    })
  }
};
