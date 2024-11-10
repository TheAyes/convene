import type { Meta, StoryObj } from "storybook-framework-qwik";
import { DirectMessageList, type IDirectMessageList } from "./direct-message-list.root";

const meta: Meta<IDirectMessageList> = {
	component: DirectMessageList
};

type Story = StoryObj<IDirectMessageList>;

export default meta;

export const Primary: Story = {
	args: {} as IDirectMessageList,
	render: (props: IDirectMessageList) => <DirectMessageList {...props} />
};
