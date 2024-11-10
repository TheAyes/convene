import type { Meta, StoryObj } from "storybook-framework-qwik";
import { StatusIndicator, type IStatusIndicator } from "./status-indicator.root";

const meta: Meta<IStatusIndicator> = {
	component: StatusIndicator
};

type Story = StoryObj<IStatusIndicator>;

export default meta;

export const Primary: Story = {
	args: {} as IStatusIndicator,
	render: (props: IStatusIndicator) => <StatusIndicator {...props} />
};
