import type { Meta, StoryObj } from "storybook-framework-qwik";
import { InputField, type IInputField } from "./input-field.root";

const meta: Meta<IInputField> = {
	component: InputField
};

type Story = StoryObj<IInputField>;

export default meta;

export const Primary: Story = {
	args: {} as IInputField,
	render: (props: IInputField) => <InputField {...props} />
};
