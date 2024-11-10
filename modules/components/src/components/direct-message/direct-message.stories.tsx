import type { Meta, StoryObj } from "storybook-framework-qwik";
import { DirectMessage, type IDirectMessage } from "./direct-message.root";

const meta: Meta<IDirectMessage> = {
	component: DirectMessage
};

type Story = StoryObj<IDirectMessage>;

export default meta;

export const Primary: Story = {
	args: {} as IDirectMessage,
	render: (props: IDirectMessage) => <DirectMessage {...props} />
};
