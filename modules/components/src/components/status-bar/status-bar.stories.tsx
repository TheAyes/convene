import type { Meta, StoryObj } from "storybook-framework-qwik";
import { type IStatusBar, StatusBar } from ".";

const meta: Meta<IStatusBar> = {
	component: StatusBar
};

type Story = StoryObj<IStatusBar>;

export default meta;

export const Primary: Story = {
	args: {
		size: "small"
	} as IStatusBar,
	render: (props: IStatusBar) => <StatusBar {...props} />
};
