import type { Meta, StoryObj } from "storybook-framework-qwik";
import { type IUserStatus, UserStatus } from "./user-status.root";

const meta: Meta<IUserStatus> = {
	component: UserStatus
};

type Story = StoryObj<IUserStatus>;

export default meta;

export const Primary: Story = {
	args: {
		size: "small"
	} as IUserStatus,
	render: (props: IUserStatus) => <UserStatus {...props} />
};
