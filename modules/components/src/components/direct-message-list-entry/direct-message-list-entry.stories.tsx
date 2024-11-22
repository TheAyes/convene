import type { Meta, StoryObj } from "storybook-framework-qwik";
import { DirectMessageListEntry, type IDirectMessageListEntry } from "./direct-message-list-entry.root";

const meta: Meta<IDirectMessageListEntry> = {
	component: DirectMessageListEntry
};

type Story = StoryObj<IDirectMessageListEntry>;

export default meta;

export const Primary: Story = {
	args: {} as IDirectMessageListEntry,
	render: (props: IDirectMessageListEntry) => <DirectMessageListEntry {...props} />
};
