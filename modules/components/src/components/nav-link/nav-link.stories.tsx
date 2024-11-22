import type { Meta, StoryObj } from "storybook-framework-qwik";
import { NavLink, type INavLink } from "./nav-link.root";

const meta: Meta<INavLink> = {
	component: NavLink
};

type Story = StoryObj<INavLink>;

export default meta;

export const Primary: Story = {
	args: {} as INavLink,
	render: (props: INavLink) => <NavLink {...props} />
};
