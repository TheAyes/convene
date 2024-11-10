import type { Meta, StoryObj } from "storybook-framework-qwik";
import { MessageIndicator, type IMessageIndicator } from "./message-indicator.root";

const meta: Meta<IMessageIndicator> = {
	component: MessageIndicator
};

type Story = StoryObj<IMessageIndicator>;

export default meta;

export const Primary: Story = {
	args: {} as IMessageIndicator,
	render: (props: IMessageIndicator) => <MessageIndicator {...props} />
};
