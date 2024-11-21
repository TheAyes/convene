import type { Meta, StoryObj } from "storybook-framework-qwik";
import { LoginForm, type TLoginForm } from "./login-form.root";

const meta: Meta<TLoginForm> = {
	component: LoginForm
};

type Story = StoryObj<TLoginForm>;

export default meta;

export const Primary: Story = {
	args: {} as TLoginForm,
	render: (props: TLoginForm) => <LoginForm />
};
