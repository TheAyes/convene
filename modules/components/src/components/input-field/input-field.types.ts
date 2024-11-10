import { InputHTMLAttributes } from "@builder.io/qwik";

export interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
	[key: string]: any;
}
