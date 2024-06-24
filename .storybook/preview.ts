import { type Preview, type ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/globals.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'system',
      values: [
        {
          name: 'system',
          value: 'hsl(var(--background))',
        },
        {
          name: 'light',
          value: 'hsl(0 0% 100%)',
        },
        {
          name: 'dark',
          value: 'hsl(222.2 84% 4.9%)',
        },
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ]
} satisfies Preview;

export default preview;
