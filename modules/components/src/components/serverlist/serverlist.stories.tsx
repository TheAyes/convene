import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Serverlist, type IServerlist } from "./serverlist.root";

const meta: Meta<IServerlist> = {
	component: Serverlist
};

type Story = StoryObj<IServerlist>;

export default meta;

export const Primary: Story = {
	args: {} as IServerlist,
	render: (props: IServerlist) => <Serverlist {...props} />
};
