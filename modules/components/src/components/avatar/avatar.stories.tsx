import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Avatar, type IAvatar } from ".";

const meta: Meta<IAvatar> = {
	component: Avatar
};

type Story = StoryObj<IAvatar>;

export default meta;

export const Primary: Story = {
	args: {
		size: "small"
	} as IAvatar,
	render: (props: IAvatar) => <Avatar {...props} />
};
