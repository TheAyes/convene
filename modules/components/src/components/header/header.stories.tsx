import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Header } from "./header.root";

const meta: Meta<unknown> = {
	component: Header
};

type Story = StoryObj<unknown>;

export default meta;

export const Primary: Story = {
	args: {},
	render: (props: any) => <Header {...props} />
};
