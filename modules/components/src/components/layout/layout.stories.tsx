import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Layout, type ILayout } from "./layout.root";

const meta: Meta<ILayout> = {
	component: Layout
};

type Story = StoryObj<ILayout>;

export default meta;

export const Primary: Story = {
	args: {} as ILayout,
	render: (props: ILayout) => <Layout {...props} />
};
