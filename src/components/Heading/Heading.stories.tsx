import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";
import { HeadingProps } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Lorem ipsum.",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};
export const Small: StoryObj<HeadingProps> = {
  args: {
    size: "sm",
  },
};
export const Large: StoryObj<HeadingProps> = {
  args: {
    size: "lg",
  },
};
export const Custom: StoryObj<HeadingProps> = {
  args: {
    children: <h1>Heading with H1 tag</h1>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};